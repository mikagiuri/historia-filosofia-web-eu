"use strict";
/* ===== Vista Genealogías ===== depende de: genealogias.js (GENEALOGIAS), ilustres.js (ILUSTRES; opcional loadIlustre)
   (29-09) Plano de «metro» diacrónico: cada tradición es una línea horizontal de color y sus
   estaciones son pensadores, colocados en el orden en que nacieron (sin escala de años: lo que
   importa es la sucesión). Un pensador en varias líneas es un transbordo (cápsula vertical). Las
   oposiciones clave, en rojo discontinuo. Botones para mostrar u ocultar líneas y oposiciones;
   al ocultar líneas, el plano se recoloca y se compacta. */
const GEN_T = { lineas: "Lerroak", todas: "Guztiak", ninguna: "Bat ere ez", op: "Aurkakotasunak",
  none: "Ez dago lerrorik aktibo: sakatu bat ikusteko.", hint: "Irristatu historian barrena ibiltzeko →" };
const GEN_EPOCAS = [["ant", "Antzinakoa"], ["med", "Erdi Arokoa"], ["ren", "Errenazimentua"], ["mod", "Modernoa"], ["ilu", "Ilustrazioa"], ["con", "Garaikidea"]];
/* (30-09) al entrar, solo dos líneas activas (con todas a la vez el plano abruma); «Todas» sigue a un clic */
const GEN_DEFECTO = ["idea", "dual"];
function genDefecto(){ return new Set(typeof GENEALOGIAS === "undefined" ? [] : GENEALOGIAS.lineas.filter(l => !GEN_DEFECTO.includes(l.id)).map(l => "l:" + l.id)); }
let genHidden = genDefecto();

function genEsc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function genPerson(id){ return typeof ILUSTRES !== "undefined" && ILUSTRES[id] ? ILUSTRES[id] : null; }

function genLegend(){
  const G = GENEALOGIAS;
  return '<div class="gen-legend" role="group" aria-label="' + GEN_T.lineas + '"><span class="flabel">' + GEN_T.lineas + '</span>' +
    G.lineas.map(l => '<button type="button" class="gen-leg" data-gfil="l:' + l.id + '" aria-pressed="' + !genHidden.has("l:" + l.id) + '" title="' + genEsc(l.desc) + '">' +
      '<i style="background:' + l.color + '"></i><span>' + genEsc(l.name) + '</span></button>').join("") +
    '<button type="button" class="gen-leg gen-leg-all" data-gfil="l:all">' + GEN_T.todas + '</button>' +
    '<button type="button" class="gen-leg gen-leg-all" data-gfil="l:none">' + GEN_T.ninguna + '</button>' +
    '<button type="button" class="gen-leg gen-leg-op" data-gfil="op" aria-pressed="' + !genHidden.has("op") + '">' +
      '<svg viewBox="0 0 28 10" aria-hidden="true"><path d="M1,5 L27,5"/></svg><span>' + GEN_T.op + '</span></button></div>';
}

function genSvg(){
  const G = GENEALOGIAS;
  const lines = G.lineas.filter(l => !genHidden.has("l:" + l.id))
    .map(l => Object.assign({}, l, { ilustre: l.ilustre.filter(genPerson).sort((a, b) => genPerson(a).born - genPerson(b).born) }))
    .filter(l => l.ilustre.length);
  if (!lines.length) return '<p class="lead gen-none">' + GEN_T.none + '</p>';
  // estaciones: todos los pensadores visibles, en orden de nacimiento
  const ids = [...new Set(lines.flatMap(l => l.ilustre))].sort((a, b) => genPerson(a).born - genPerson(b).born);
  const rank = new Map(ids.map((id, i) => [id, i]));
  const DX = 60, DY = 76, X0 = 300, Y0 = 118, padR = 120, LBL = 14;
  const W = X0 + (ids.length - 1) * DX + padR, H = Y0 + (lines.length - 1) * DY + 40;
  const xOf = id => X0 + rank.get(id) * DX;
  const laneOf = new Map();                       // id → carriles en los que aparece
  lines.forEach((l, li) => l.ilustre.forEach(id => { if (!laneOf.has(id)) laneOf.set(id, []); laneOf.get(id).push(li); }));
  const yOf = li => Y0 + li * DY;

  let s = '<svg class="gen-svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Genealogiak">';
  // franja de épocas (según la época de cada pensador en Ilustres)
  let i0 = 0;
  while (i0 < ids.length){
    const b = genPerson(ids[i0]).block; let i1 = i0;
    while (i1 + 1 < ids.length && genPerson(ids[i1 + 1]).block === b) i1++;
    const xa = X0 + i0 * DX - DX / 2, xb = X0 + i1 * DX + DX / 2, ep = GEN_EPOCAS.find(e => e[0] === b);
    s += '<rect class="gen-era" data-b="' + b + '" x="' + xa + '" y="6" width="' + (xb - xa - 2) + '" height="20" rx="6"/>';
    if (xb - xa > 60 && ep) s += '<text class="gen-era-lbl" x="' + (xa + 8) + '" y="20">' + ep[1] + '</text>';
    s += '<rect class="gen-era-band" data-b="' + b + '" x="' + xa + '" y="30" width="' + (xb - xa - 2) + '" height="' + (H - 34) + '"/>';
    i0 = i1 + 1;
  }
  // líneas (tramo horizontal de la primera a la última estación) y su nombre al principio
  lines.forEach((l, li) => {
    const y = yOf(li), xa = xOf(l.ilustre[0]), xb = xOf(l.ilustre[l.ilustre.length - 1]);
    // nombre en la columna fija de la izquierda y guía punteada hasta la primera estación
    s += '<g class="gen-line" data-line="' + l.id + '">' +
      '<path class="gen-guide" d="M' + (X0 - 40) + ',' + y + ' L' + (xa - 14) + ',' + y + '" stroke="' + l.color + '"/>' +
      '<path class="gen-track" d="M' + (xa - 14) + ',' + y + ' L' + (xb + 14) + ',' + y + '" stroke="' + l.color + '"/>' +
      '<text class="gen-line-lbl" x="' + LBL + '" y="' + (y + 4) + '" fill="' + l.color + '">' + genEsc(l.name) + '</text></g>';
  });
  // transbordos: cápsula vertical que une las apariciones de un mismo pensador
  laneOf.forEach((ls, id) => {
    if (ls.length < 2) return;
    const x = xOf(id), ya = yOf(Math.min(...ls)), yb = yOf(Math.max(...ls));
    s += '<rect class="gen-xfer" x="' + (x - 5) + '" y="' + (ya - 5) + '" width="10" height="' + (yb - ya + 10) + '" rx="5"/>';
  });
  // oposiciones: arco rojo discontinuo entre la primera aparición de cada uno
  if (!genHidden.has("op")) (G.op || []).forEach(({ ilustre: [a, b] }) => {
    if (!laneOf.has(a) || !laneOf.has(b)) return;
    const xa = xOf(a), ya = yOf(laneOf.get(a)[0]), xb = xOf(b), yb = yOf(laneOf.get(b)[0]);
    const lift = 34 + Math.min(60, Math.abs(xb - xa) / 6), top = Math.min(ya, yb) - lift;
    s += '<path class="gen-op" data-a="' + a + '" data-b="' + b + '" d="M' + xa + ',' + ya + ' C' + xa + ',' + top + ' ' + xb + ',' + top + ' ' + xb + ',' + yb + '"/>';
  });
  // estaciones y nombres (el nombre, una sola vez, en el carril más alto)
  lines.forEach((l, li) => l.ilustre.forEach(id => {
    const x = xOf(id), y = yOf(li), first = laneOf.get(id)[0] === li;
    s += '<g class="gen-st" data-ilu="' + id + '" data-line="' + l.id + '" tabindex="0" role="link" aria-label="' + genEsc(genPerson(id).name) + '">' +
      '<circle cx="' + x + '" cy="' + y + '" r="6" stroke="' + l.color + '"/>' +
      (first ? '<text class="gen-st-lbl" transform="translate(' + (x + 4) + ',' + (y - 11) + ') rotate(-38)">' + genEsc(genShort(genPerson(id).name, id)) + '</text>' : '') + '</g>';
  }));
  return s + '</svg>';
}
/* nombre corto para la estación: sin «de …»/«-koa» largos si pasa de 18 caracteres */
const GEN_CORTO = { ockham: "Ockham", lamettrie: "La Mettrie", ortega: "Ortega y Gasset" };   // donde la regla falla
function genShort(n, id){
  if (GEN_CORTO[id]) return GEN_CORTO[id];
  if (n.length <= 18) return n;
  const w = n.split(/\s+/);
  if (/\s(de|del|d'|von|van|della)\s/i.test(n) || /[kg]oa$/i.test(n)) return w[0];
  return w[w.length - 1];
}

function drawGenea(){
  const box = document.getElementById("geneabox"); if (!box || typeof GENEALOGIAS === "undefined") return;
  const keep = box.querySelector(".gen-scroll"), sl = keep ? keep.scrollLeft : 0;
  box.innerHTML = genLegend() + '<p class="gen-hint">' + GEN_T.hint + '</p><div class="gen-scroll">' + genSvg() + '</div>';
  const sc = box.querySelector(".gen-scroll"); if (sc) sc.scrollLeft = sl;
}
/* enlace profundo #genealogias/<línea>: solo esa línea visible */
function loadGenea(k){
  if (typeof GENEALOGIAS === "undefined") return;
  genHidden = new Set();
  if (k && GENEALOGIAS.lineas.some(l => l.id === k)) GENEALOGIAS.lineas.forEach(l => { if (l.id !== k) genHidden.add("l:" + l.id); });
  else genHidden = genDefecto();
  drawGenea();
}

document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("#geneabox [data-gfil]");
  if (b){
    const k = b.dataset.gfil;
    if (k === "l:all") GENEALOGIAS.lineas.forEach(l => genHidden.delete("l:" + l.id));
    else if (k === "l:none") GENEALOGIAS.lineas.forEach(l => genHidden.add("l:" + l.id));
    else genHidden.has(k) ? genHidden.delete(k) : genHidden.add(k);
    drawGenea();
    const again = document.querySelector('#geneabox [data-gfil="' + k + '"]'); if (again) again.focus();
    return;
  }
  const st = e.target.closest && e.target.closest("#geneabox .gen-st[data-ilu]");
  if (st && typeof loadIlustre === "function"){ (window.show || show)("ilustres"); loadIlustre(st.dataset.ilu); }
});
document.addEventListener("keydown", e => {
  const st = e.target.closest && e.target.closest("#geneabox .gen-st[data-ilu]");
  if (st && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); st.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
});
/* resaltar una línea (y sus oposiciones) al pasar por ella; el resto se apaga */
document.addEventListener("mouseover", e => {
  const svg = e.target.closest && e.target.closest("#geneabox .gen-svg"); if (!svg) return;
  const g = e.target.closest("[data-line]"), id = g ? g.dataset.line : null;
  svg.classList.toggle("gen-focus", !!id);
  svg.querySelectorAll("[data-line]").forEach(x => x.classList.toggle("on", x.dataset.line === id));
  const on = new Set([...svg.querySelectorAll('.gen-st.on')].map(x => x.dataset.ilu));
  svg.querySelectorAll(".gen-op").forEach(p => p.classList.toggle("on", on.has(p.dataset.a) || on.has(p.dataset.b)));
});
document.addEventListener("mouseout", e => {
  const svg = e.target.closest && e.target.closest("#geneabox .gen-svg");
  if (svg && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest("#geneabox .gen-svg"))) svg.classList.remove("gen-focus");
});

function initGenea(){ if (document.getElementById("geneabox") && !document.querySelector("#geneabox .gen-legend")) drawGenea(); }
document.addEventListener("DOMContentLoaded", initGenea);
(function(){ const nav = document.getElementById("tabs"); if (nav) nav.addEventListener("click", e => {
  const b = e.target.closest("button"); if (b && b.dataset.view === "genealogias") initGenea();
}); })();
