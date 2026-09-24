"use strict";
/* ===== Cronogramas ===== depende de: data cronogramas.js (CRONOGRAMAS) =====
   Renderiza cada cronograma del libro (LTFH, euskera) como línea de tiempo SVG:
   carriles con rango de años (vidas/periodos) sobre un eje temporal, o secuencia de épocas. */

let cronoBlock = null;      // A / B / C / "otros"
let cronoId = null;
/* Título descriptivo: usa el override de cronogramas_titulos.js si existe, si no el del dato. */
function cronoTitle(c){ return (typeof CRONO_TITULOS !== "undefined" && CRONO_TITULOS[c.id]) || c.title; }

function cronoOf(code){ const ch = (code || "").trim().charAt(0).toUpperCase(); return "ABC".includes(ch) ? ch : "·"; }
/* (24-09) el eje cronológico del curso (eje_cronologico.js, solo HF) va primero y es la portada de la sección */
const EJE_ID = "eje";
function hasEje(){ return typeof EJE_CRONOLOGICO !== "undefined"; }
function cronoBlocksPresent(){ return (hasEje() ? [EJE_ID] : []).concat([...new Set(CRONOGRAMAS.map(c => cronoOf(c.code)))]); }
function cronoList(block){ return CRONOGRAMAS.filter(c => cronoOf(c.code) === block); }

const CRONO_BLOCK_NAME = { A: "A blokea · Antzinakoa eta Erdi Arokoa", B: "B blokea · Modernoa", C: "C blokea · Garaikidea", "·": "Otros" };
function cronoBlockName(b){ return b === EJE_ID ? "★ " + EJE_CRONOLOGICO.txt.filtro : CRONO_BLOCK_NAME[b]; }

/* ---------- año → texto (a.C. = antes de Cristo) ---------- */
function cronoYear(y){ if (y == null) return ""; return y < 0 ? (-y) + " a.C." : "" + y; }
function cronoRange(s, e){ if (s == null || e == null) return "";
  if (s < 0 && e < 0) return (-s) + "–" + (-e) + " a.C.";
  if (s < 0 && e >= 0) return (-s) + " a.C.–" + e;
  return s + "–" + e; }
function niceStep(span){ const steps = [10, 20, 25, 50, 100, 200, 250, 500, 1000];
  for (const s of steps) if (span / s <= 9) return s; return 1000; }

/* ---------- filtros ---------- */
function renderCronoFilter(){
  const box = document.getElementById("cronofilter"); if (!box) return;
  const present = cronoBlocksPresent();
  if (!present.includes(cronoBlock)) cronoBlock = present[0];
  box.innerHTML = '<span class="flabel">Blokea</span>' + present.map(b =>
    '<button class="cbtn' + (b === EJE_ID ? ' cbtn-eje' : '') + '" data-cblock="' + b + '" aria-pressed="' + (b === cronoBlock) + '">' +
    escapeCrono(cronoBlockName(b)) + '</button>').join("");
  box.querySelectorAll("[data-cblock]").forEach(b => b.addEventListener("click", () => {
    cronoBlock = b.dataset.cblock; cronoId = null; renderCronoFilter(); renderCronoChips(); drawCrono();
  }));
}

function renderCronoChips(){
  const box = document.getElementById("cronochips"); if (!box) return;
  if (cronoBlock === EJE_ID){ box.innerHTML = ""; box.hidden = true; return; }
  box.hidden = false;
  const list = cronoList(cronoBlock);
  if (!list.some(c => c.id === cronoId)) cronoId = list.length ? list[0].id : null;
  box.innerHTML = list.map(c =>
    '<button class="chip" data-crono="' + c.id + '" aria-pressed="' + (c.id === cronoId) + '">' + cronoTitle(c) + '</button>').join("");
  box.querySelectorAll("[data-crono]").forEach(b => b.addEventListener("click", () => { cronoId = b.dataset.crono; renderCronoChips(); drawCrono(); }));
}

/* ---------- dibujo ---------- */
function drawCrono(){
  const box = document.getElementById("cronobox"); if (!box) return;
  if (cronoBlock === EJE_ID){ box.innerHTML = ejeCard(EJE_CRONOLOGICO); return; }
  const c = CRONOGRAMAS.find(x => x.id === cronoId);
  if (!c){ box.innerHTML = '<p class="lead">Elige un cronograma.</p>'; return; }
  const span = (c.type === "timeline" && c.start != null && c.end != null) ? (cronoYear(c.start) + " – " + cronoYear(c.end)) : "";
  box.innerHTML = '<div class="crono-card"><div class="crono-h"><h2 class="crono-title">' + cronoTitle(c) + '</h2>' +
    (span ? '<span class="crono-span">' + span + '</span>' : '') + '</div>' +
    (c.type === "timeline" ? cronoSvg(c) : cronoEpochs(c)) + '</div>';
}

function cronoSvg(c){
  let axes = (c.axes || []).filter(a => a.name);
  let start = c.start, end = c.end;
  // encuadrar por si la escala no cubre todos los carriles
  axes.forEach(a => { if (a.start != null) start = Math.min(start, a.start); if (a.end != null) end = Math.max(end, a.end); });
  if (start == null || end == null || end <= start){ return '<p class="lead">—</p>'; }
  // orden cronológico (por año de inicio, luego de fin): la línea se lee de arriba a abajo en el tiempo
  const key = v => (v == null ? 1e9 : v);
  axes = axes.slice().sort((a, b) => key(a.start) - key(b.start) || key(a.end) - key(b.end));

  const W = 960, gutter = 186, padR = 26, padTop = 40, rowH = 30, barH = 18;
  const H = padTop + axes.length * rowH + 16;
  const x0 = gutter, x1 = W - padR;
  const xOf = y => x0 + (y - start) / (end - start) * (x1 - x0);

  let svg = '<svg class="crono-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + cronoTitle(c).replace(/"/g, "") + '">';
  // bandas alternas por periodo + rejilla + años (orientación temporal)
  const step = niceStep(end - start);
  const first = Math.ceil(start / step) * step;
  let band = 0;
  for (let y = first; y <= end; y += step){
    const x = xOf(y), xPrev = Math.max(x0, xOf(y - step));
    if (band % 2 === 0 && x - xPrev > 0)
      svg += '<rect class="band" x="' + xPrev.toFixed(1) + '" y="' + (padTop - 8) + '" width="' + (x - xPrev).toFixed(1) + '" height="' + (H - padTop) + '"/>';
    band++;
    svg += '<line class="grid" x1="' + x.toFixed(1) + '" y1="' + (padTop - 8) + '" x2="' + x.toFixed(1) + '" y2="' + (H - 8) + '"/>';
    svg += '<text class="tick-lbl" x="' + x.toFixed(1) + '" y="' + (padTop - 12) + '" text-anchor="middle">' + cronoYear(y) + '</text>';
  }
  // línea del año 0 si el rango la cruza
  if (start < 0 && end > 0){ const xz = xOf(0); svg += '<line class="zero" x1="' + xz.toFixed(1) + '" y1="' + (padTop - 8) + '" x2="' + xz.toFixed(1) + '" y2="' + (H - 8) + '"/>'; }

  const colors = ["var(--accent)", "var(--accent-2)", "var(--fil)", "var(--hf)", "var(--ipc)"];
  axes.forEach((a, i) => {
    const y = padTop + i * rowH;
    svg += '<rect class="lane-bg" x="0" y="' + (y + (rowH - barH) / 2 - 2) + '" width="' + W + '" height="' + (barH + 4) + '" rx="4" opacity="' + (i % 2 ? ".5" : ".22") + '"/>';
    const nm = a.name.length > 26 ? a.name.slice(0, 25) + "…" : a.name;
    svg += '<text class="lane-lbl" x="8" y="' + (y + rowH / 2 + 4) + '">' + escapeCrono(nm) + '</text>';
    if (a.start != null && a.end != null && a.end >= a.start){
      const bx = xOf(a.start), bw = Math.max(4, xOf(a.end) - xOf(a.start));
      svg += '<rect class="bar" x="' + bx.toFixed(1) + '" y="' + (y + (rowH - barH) / 2) + '" width="' + bw.toFixed(1) + '" height="' + barH + '" rx="6" fill="' + colors[i % colors.length] + '"/>';
      // años SIEMPRE visibles: a la derecha de la barra, o a la izquierda si no cabe (nunca recortados)
      const lbl = cronoYear(a.start) + '–' + cronoYear(a.end), lblW = lbl.length * 6;
      const yr = y + rowH / 2 + 4, rx = xOf(a.end) + 6;
      if (rx + lblW <= W - 2)
        svg += '<text class="bar-yr" x="' + rx.toFixed(1) + '" y="' + yr + '" text-anchor="start">' + lbl + '</text>';
      else
        svg += '<text class="bar-yr" x="' + (bx - 6).toFixed(1) + '" y="' + yr + '" text-anchor="end">' + lbl + '</text>';
    } else if (a.start != null){
      svg += '<circle cx="' + xOf(a.start).toFixed(1) + '" cy="' + (y + rowH / 2) + '" r="5" fill="' + colors[i % colors.length] + '"/>';
      svg += '<text class="bar-yr" x="' + (xOf(a.start) + 9).toFixed(1) + '" y="' + (y + rowH / 2 + 4) + '" text-anchor="start">' + cronoYear(a.start) + '</text>';
    }
  });
  svg += '</svg>';
  return svg;
}

function cronoEpochs(c){
  return '<div class="crono-epochs">' + (c.stages || []).map(s =>
    '<div class="epoch"><div class="ep-label">' + escapeCrono(s.label) + '</div><div class="ep-text">' + escapeCrono(s.text) + '</div></div>').join("") + '</div>';
}

/* ---------- Eje cronológico del curso (24-09) ----------
   Datos: eje_cronologico.js (generado por tools/build_eje_cronologico.py, el mismo de la lámina
   en Word). Periodos como barras en flecha sobre un eje lineal de años, acontecimientos en
   etiquetas verdes bajo el eje y, debajo, una ficha por periodo (siglos, acontecimiento y
   representantes). El ancho de las etiquetas se mide con la fuente de la página, así que
   vale también para la versión en euskera. */
const EJE = { W: 1100, AX0: -700, AX1: 2100, X0: 40, X1: 1060, LBL: 13, LEAD: 15, BAR_Y: 42, BAR_H: 20, TIP: 10, GAP: 3,
  AXIS_Y: 88, YEAR_Y: 110, PILL_Y0: 122, PILL_H: 32, PILL_DY: 38 };
EJE.H = EJE.PILL_Y0 + EJE.PILL_DY + EJE.PILL_H + 6;
function ejeX(y){ return EJE.X0 + (y - EJE.AX0) * (EJE.X1 - EJE.X0) / (EJE.AX1 - EJE.AX0); }

let ejeCtx = null;
function ejeTextW(s, px, bold){
  if (ejeCtx === null){ try { ejeCtx = document.createElement("canvas").getContext("2d") || false; } catch (e){ ejeCtx = false; } }
  if (!ejeCtx) return String(s).length * px * (bold ? .62 : .56);
  ejeCtx.font = (bold ? "700 " : "400 ") + px + "px " + (getComputedStyle(document.body).fontFamily || "sans-serif");
  return ejeCtx.measureText(String(s)).width * 1.04;
}
/* Rótulo de periodo en dos líneas: corta por el último espacio («Filosofía del / Renacimiento»). */
function ejeLines(name){ const i = name.lastIndexOf(" "); return i > 0 ? [name.slice(0, i), name.slice(i + 1)] : [name]; }

function ejeBar(i, p, n){
  const first = i === 0, last = i === n - 1, t = EJE.TIP, top = EJE.BAR_Y, bot = top + EJE.BAR_H, mid = top + EJE.BAR_H / 2;
  const xa = first ? ejeX(p.start) : ejeX(p.start) - t / 2 + EJE.GAP;
  const xb = last ? ejeX(p.end) : ejeX(p.end) - t / 2;
  const pts = [[xa, top], [xb, top], [xb + (last ? t + 6 : t), mid], [xb, bot], [xa, bot]];
  if (!first) pts.push([xa + t, mid]);
  return pts.map(q => q[0].toFixed(1) + "," + q[1].toFixed(1)).join(" ");
}
/* Centra cada rótulo sobre su barra y separa los que se pisan (los tres últimos periodos son cortos). */
function ejeLabelX(periods){
  const boxes = periods.map(p => {
    const w = Math.max.apply(null, ejeLines(p.name).map(l => ejeTextW(l, EJE.LBL, true)));
    const c = (ejeX(p.start) + ejeX(p.end)) / 2; return [c - w / 2, c + w / 2];
  });
  for (let k = 0; k < 200; k++){
    let moved = false;
    for (let i = 0; i < boxes.length - 1; i++){
      const a = boxes[i], b = boxes[i + 1], o = a[1] + 10 - b[0];
      if (o > .5){ a[0] -= o / 2; a[1] -= o / 2; b[0] += o / 2; b[1] += o / 2; moved = true; }
    }
    const last = boxes[boxes.length - 1], r = last[1] - (EJE.W - 6);
    if (r > 0){ last[0] -= r; last[1] -= r; moved = true; }
    if (boxes[0][0] < 6){ const d = 6 - boxes[0][0]; boxes[0][0] += d; boxes[0][1] += d; moved = true; }
    if (!moved) break;
  }
  return boxes.map(b => (b[0] + b[1]) / 2);
}
function ejePill(e){
  const x = ejeX(e.year), w = Math.max(ejeTextW(e.name, 12, true), ejeTextW(e.date, 11, false)) + 20;
  let left = e.lado > 0 ? x - 12 : e.lado < 0 ? x + 12 - w : x - w / 2;
  left = Math.max(6, Math.min(left, EJE.W - 6 - w));
  return { x: x, left: left, w: w, top: EJE.PILL_Y0 + (e.fila || 0) * EJE.PILL_DY };
}

function ejeSvg(E){
  const P = E.periods, esc = escapeCrono, f = v => v.toFixed(1);
  const label = escapeCrono(E.title + ": " + P.map(p => p.name).join(", ")).replace(/"/g, "");
  let s = '<svg class="eje-svg" viewBox="0 0 ' + EJE.W + ' ' + EJE.H + '" role="img" aria-label="' + label + '">';
  const lx = ejeLabelX(P);
  P.forEach((p, i) => {
    const ls = ejeLines(p.name);
    s += '<g class="eje-c" style="--pbar:' + p.bar + ';--pl:' + p.ink + '"><polygon points="' + ejeBar(i, p, P.length) + '" fill="' + p.bar + '"/>' +
      '<text class="lbl" x="' + f(lx[i]) + '" y="' + (EJE.BAR_Y - 10 - (ls.length - 1) * EJE.LEAD) + '" text-anchor="middle">' +
      ls.map((l, k) => '<tspan x="' + f(lx[i]) + '"' + (k ? ' dy="' + EJE.LEAD + '"' : '') + '>' + esc(l) + '</tspan>').join("") + '</text></g>';
  });
  const pills = E.events.map(ejePill);
  // líneas de los acontecimientos: de la barra al eje y de debajo de los años a la etiqueta
  pills.forEach(q => {
    s += '<line class="lead" x1="' + f(q.x) + '" y1="' + (EJE.BAR_Y + EJE.BAR_H + 2) + '" x2="' + f(q.x) + '" y2="' + EJE.AXIS_Y + '"/>' +
      '<line class="lead" x1="' + f(q.x) + '" y1="' + (EJE.YEAR_Y + 6) + '" x2="' + f(q.x) + '" y2="' + q.top + '"/>';
  });
  // eje con flechas y marcas cada 100 años (sin las que caen pegadas a un rombo)
  const ay = EJE.AXIS_Y;
  s += '<line class="axis" x1="14" y1="' + ay + '" x2="' + (EJE.W - 14) + '" y2="' + ay + '"/>' +
    '<polyline class="axis" points="26,' + (ay - 7) + ' 14,' + ay + ' 26,' + (ay + 7) + '"/>' +
    '<polyline class="axis" points="' + (EJE.W - 26) + ',' + (ay - 7) + ' ' + (EJE.W - 14) + ',' + ay + ' ' + (EJE.W - 26) + ',' + (ay + 7) + '"/>';
  for (let y = EJE.AX0 + 100; y < EJE.AX1; y += 100){
    const x = ejeX(y);
    if (pills.some(q => Math.abs(q.x - x) < 8)) continue;
    const big = y % 500 === 0, d = big ? 7 : 4;
    s += '<line class="tick' + (big ? ' big' : '') + '" x1="' + f(x) + '" y1="' + (ay - d) + '" x2="' + f(x) + '" y2="' + (ay + d) + '"/>';
  }
  pills.forEach(q => { s += '<rect class="dia" x="' + f(q.x - 5) + '" y="' + (ay - 5) + '" width="10" height="10" transform="rotate(45 ' + f(q.x) + ' ' + ay + ')"/>'; });
  (E.ticks || []).forEach(t => { s += '<text class="yr" x="' + f(ejeX(t.year)) + '" y="' + EJE.YEAR_Y + '" text-anchor="middle">' + esc(t.label) + '</text>'; });
  // etiquetas de los acontecimientos
  E.events.forEach((e, i) => {
    const q = pills[i];
    s += '<rect class="pill" x="' + f(q.left) + '" y="' + q.top + '" width="' + f(q.w) + '" height="' + EJE.PILL_H + '" rx="5"/>' +
      '<text class="pill-n" x="' + f(q.left + 10) + '" y="' + (q.top + 14) + '">' + esc(e.name) + '</text>' +
      '<text class="pill-d" x="' + f(q.left + 10) + '" y="' + (q.top + 27) + '">' + esc(e.date) + '</text>';
  });
  // leyenda en la segunda fila, a la izquierda
  const ly = EJE.PILL_Y0 + EJE.PILL_DY + 10;
  s += '<rect class="pill" x="' + EJE.X0 + '" y="' + ly + '" width="18" height="12" rx="3"/>' +
    '<text class="leg" x="' + (EJE.X0 + 26) + '" y="' + (ly + 10) + '">' + esc(E.txt.leyenda) + '</text>';
  return s + '</svg>';
}

function ejeAutor(a){
  return '<span class="eje-nom">' + escapeCrono(a.nombre) + '</span>' +
    (a.fechas ? ' <span class="eje-dt">(' + escapeCrono(a.fechas.replace(/ – /g, "–")) + ')</span>' : '') +
    (a.nota ? '<span class="eje-nt">: ' + escapeCrono(a.nota) + '</span>' : '');
}
/* Representantes con los mismos niveles que la lámina: epígrafe y viñetas; las entradas sueltas
   de una columna con epígrafes van al nivel de los epígrafes (Arendt, Rawls…). */
function ejeReps(p){
  const grouped = p.reps.some(r => r.epigrafe);
  return p.reps.map(r => {
    const head = r.epigrafe ? '<p class="eje-grp">' + escapeCrono(r.epigrafe) + '</p>' : '';
    if (!r.epigrafe && grouped) return r.autores.map(a => '<p class="eje-grp eje-top">' + ejeAutor(a) + '</p>').join("");
    return head + '<ul class="eje-list">' + r.autores.map(a => '<li>' + ejeAutor(a) + '</li>').join("") + '</ul>';
  }).join("");
}
function ejeGrid(E){
  const T = E.txt;
  return '<div class="eje-grid">' + E.periods.map((p, i) => {
    const ev = E.events[i] || {};
    return '<div class="eje-col eje-c" style="--pbar:' + p.bar + ';--pl:' + p.ink + '">' +
      '<h3 class="eje-per">' + escapeCrono(p.name) + '</h3>' +
      '<p class="eje-k">' + escapeCrono(T.siglos) + '</p><p class="eje-siglos">' + escapeCrono(p.siglos) + '</p>' +
      '<p class="eje-k">' + escapeCrono(T.evento) + '</p><p class="eje-evt"><span class="eje-pill">' + escapeCrono(ev.name) +
      '</span> <span class="eje-dt">' + escapeCrono(ev.date) + '</span></p>' +
      '<p class="eje-k">' + escapeCrono(T.reps) + '</p>' + ejeReps(p) + '</div>';
  }).join("") + '</div>';
}
function ejeCard(E){
  return '<div class="crono-card eje-card"><div class="crono-h"><h2 class="crono-title">' + escapeCrono(E.title) + '</h2>' +
    '<span class="crono-span eje-sub">' + escapeCrono(E.sub) + '</span></div>' +
    '<div class="eje-scroll">' + ejeSvg(E) + '</div>' + ejeGrid(E) + '</div>';
}

/* Enlace profundo: #cronogramas/eje o #cronogramas/<id de cronograma> (Classroom, QR). */
function loadCrono(k){
  if (typeof CRONOGRAMAS === "undefined") return;
  if (k === EJE_ID && hasEje()) cronoBlock = EJE_ID;
  else { const c = CRONOGRAMAS.find(x => x.id === k); if (!c) return; cronoBlock = cronoOf(c.code); cronoId = k; }
  renderCronoFilter(); renderCronoChips(); drawCrono();
}

function escapeCrono(s){ return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

/* ---------- init ---------- */
function initCrono(){ if (typeof CRONOGRAMAS === "undefined") return; renderCronoFilter(); renderCronoChips(); drawCrono(); }
document.addEventListener("DOMContentLoaded", initCrono);
(function(){ const nav = document.getElementById("tabs"); if (nav) nav.addEventListener("click", e => {
  const b = e.target.closest("button"); if (b && b.dataset.view === "cronogramas") initCrono();
}); })();
