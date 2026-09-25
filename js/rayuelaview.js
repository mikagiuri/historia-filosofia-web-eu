"use strict";
/* ===== «Rayuela filosófica» (HF 2.º) ===== depende de: rayuela_hf.js (RAYUELA_HF), store.js;
   usa ILUSTRES y THEORY si existen (enlaces de los finales).
   Un viaje por una red de metro de ideas: cada estación plantea una pregunta con tres respuestas
   y cada respuesta lleva a otra estación. Hay estaciones-vida (episodios de los filósofos) y de
   contradicción (en rojo: te enseñan las respuestas tuyas que chocan). Al final llegas a una terminal
   (la corriente con la que coinciden tus intuiciones). El plano lo dibuja esta vista en SVG a partir
   de los datos; por defecto solo muestra los números de las estaciones que aún no has visitado.
   Todo se guarda en este navegador (clave aula-rayuela-hf). Diseño: docs/13_diseno_narrativa_marco_HF.md */

const RAY_KEY = "aula-rayuela-hf";
/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const RAY_TXT = {
  intro: "Geltoki bakoitzak galdera bat egiten dizu hiru erantzunekin, eta erantzun bakoitzak beste geltoki batera eramaten zaitu. Bidean filosofoen bizitzako pasarteak aurkituko dituzu, baita zure erantzunen arteko kontraesanak ere. Azkenean, azken geltoki batera iritsiko zara: zure ideiekin bat datorren korrontea. Nahi adina aldiz bidaia dezakezu.",
  iniciar: "Hasi bidaia", otroViaje: "Bidaia berria", miPlano: "Nire planoa", abandonar: "← Utzi bidaia", volver: "← Itzuli",
  viajes: "Egindako bidaiak:", finales: "Aurkitutako amaierak:", estaciones: "Bisitatutako geltokiak:",
  nombres: "Erakutsi geltoki guztien izenak",
  pregunta: "Geltokia", vida: "Filosofo baten bizitza", contradiccion: "Kontraesana", final: "Azken geltokia",
  chocan: "Talka egiten duten zure erantzunak:",
  coinciden: "Lotutako filosofoak", estudia: "Ikasi teorian", abierto: "Zabalik geratzen zaizu",
  paraPau: "USErako (2. ariketa: hausnarketa filosofikoa)", tuTexto: "Idatzi hemen zure hausnarketa (200-300 hitz). Nabigatzaile honetan bakarrik gordetzen da.",
  guardado: "Nabigatzaile honetan gordeta.", palabras: "hitz",
  recorrido: "Zure ibilbidea", nuevo: "Amaiera berria!", todos: "Sareko amaiera guztiak aurkitu dituzu!", transbordo: "Transbordoa",
  plano: "Sarearen planoa", leyenda: "Legenda",
  ultimos: "Zure azken bidaiak", ninguno: "Oraindik ez duzu bidaiarik egin.", caidas: "Erori zaren kontraesanak",
  borrar: "Ezabatu txingokako nire aurrerapena", seguro: "Ziur? Joko honetako zure bidaiak eta hausnarketak ezabatuko dira.",
  mapaAria: "Txingoka filosofikoaren sarearen planoa", sinDescubrir: "Aurkitu gabe"
};
const ray = { ruta: [], elec: [], fin: null, modo: "portada" };

function rayBox(){ return document.getElementById("rayuelabox"); }
function rayEsc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function rayData(){ const d = store.get(RAY_KEY, {}); return d && typeof d === "object" ? d : {}; }
function raySave(d){ store.set(RAY_KEY, d); }
function rayLinea(id){ return (RAYUELA_HF.lineas.find(l => l.id === id) || { color: "#888" }).color; }
const RAY_HOY = new Date().toISOString().slice(0, 10);
function rayRedAbierta(n){ const r = (RAYUELA_HF.redes || []).find(x => x.n === (n || 1)); return !r || !r.abre || r.abre <= RAY_HOY; }
function rayOpciones(s){ return s.opciones.filter(o => !o.red || rayRedAbierta(o.red)); }
function rayEstaciones(){ return Object.entries(RAYUELA_HF.estaciones).filter(([, s]) => rayRedAbierta(s.red)); }
function rayTerminales(){ const dest = new Set(); rayEstaciones().forEach(([, s]) => rayOpciones(s).forEach(o => dest.add(o.to))); return Object.entries(RAYUELA_HF.terminales).filter(([k]) => dest.has("F" + k)); }
function rayXY(to){ return /^F[A-Z]$/.test(to) ? RAYUELA_HF.terminales[to.slice(1)].xy : RAYUELA_HF.estaciones[to].xy; }
function rayVisitadas(){ const s = new Set(); (rayData().viajes || []).forEach(v => (v.ruta || []).forEach(n => s.add(n))); ray.ruta.forEach(n => s.add(n)); return s; }
function rayFinales(){ const s = new Set(); (rayData().viajes || []).forEach(v => { if (v.t) s.add(v.t); }); return s; }
function rayTramos(){ const s = new Set(); (rayData().viajes || []).forEach(v => { const r = (v.ruta || []).concat(v.t ? ["F" + v.t] : []); for (let i = 1; i < r.length; i++) s.add(r[i - 1] + ">" + r[i]); }); return s; }

/* ---------- plano SVG (rutas octilíneas, estilo metro) ---------- */
function rayPath(a, b, U){
  const [x1, y1] = a.map(v => v * U), [x2, y2] = b.map(v => v * U);
  const dx = x2 - x1, dy = y2 - y1, m = Math.min(Math.abs(dx), Math.abs(dy));
  const mx = x1 + Math.sign(dx) * m, my = y1 + Math.sign(dy) * m;
  return "M" + x1.toFixed(1) + " " + y1.toFixed(1) + " L" + mx.toFixed(1) + " " + my.toFixed(1) + " L" + x2.toFixed(1) + " " + y2.toFixed(1);
}
function rayMapa(){
  const R = RAYUELA_HF, U = 56, P = 34, EST = rayEstaciones(), TER = rayTerminales();
  const maxX = Math.max(...EST.map(([, s]) => s.xy[0]).concat(TER.map(([, t]) => t.xy[0]))) + 0.8, maxY = Math.max(...EST.map(([, s]) => s.xy[1])) + 0.8;
  const W = maxX * U + 2 * P, H = maxY * U + P;
  const vis = rayVisitadas(), fins = rayFinales(), hist = rayTramos(), nombres = !!rayData().nombres;
  const actual = ray.fin ? "F" + ray.fin : ray.ruta[ray.ruta.length - 1];
  const now = new Set(); const rr = ray.ruta.concat(ray.fin ? ["F" + ray.fin] : []); for (let i = 1; i < rr.length; i++) now.add(rr[i - 1] + ">" + rr[i]);
  let edges = "", seen = new Set();
  for (const [n, s] of EST) for (const o of rayOpciones(s)){
    const k = n + ">" + o.to; if (seen.has(k)) continue; seen.add(k);
    const cls = (now.has(k) ? "ray-e now" : hist.has(k) ? "ray-e hist" : "ray-e") + (o.red ? " tr" : "");
    edges += '<path class="' + cls + '" d="' + rayPath(s.xy, rayXY(o.to), U) + '" stroke="' + rayLinea(s.linea) + '"/>';
  }
  let nodes = "";
  for (const [n, s] of EST){
    const [x, y] = s.xy.map(v => v * U), c = rayLinea(s.linea), v = vis.has(n), izq = s.xy[0] > maxX - 2.4;
    const cls = "ray-st" + (v ? " vis" : "") + (n === actual ? " cur" : "") + (s.tipo === "contradiccion" ? " contra" : "") + (s.tipo === "vida" ? " vida" : "");
    const label = (v || nombres) ? '<text class="ray-lbl" x="' + (x + (izq ? -24 : 24)) + '" y="' + (y + 4) + '" text-anchor="' + (izq ? "end" : "start") + '">' + rayEsc(s.titulo.replace(/^[^:]*:\s*/, "")) + '</text>' : "";
    nodes += '<g class="' + cls + '">' + (n === actual ? '<circle class="ray-halo" cx="' + x + '" cy="' + y + '" r="24" stroke="' + c + '"/>' : "") +
      '<circle cx="' + x + '" cy="' + y + '" r="16" stroke="' + c + '" fill="' + (v ? c : "var(--surface)") + '"/>' +
      '<text class="ray-num" x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle">' + n + '</text>' + label + '</g>';
  }
  for (const [k, t] of TER){
    const [x, y] = t.xy.map(v => v * U), got = fins.has(k), cur = actual === "F" + k;
    nodes += '<g class="ray-term' + (got ? " vis" : "") + (cur ? " cur" : "") + '"><rect x="' + (x - 17) + '" y="' + (y - 17) + '" width="34" height="34" rx="8"/>' +
      '<text class="ray-num" x="' + x + '" y="' + (y + 5) + '" text-anchor="middle">' + k + '</text></g>';
  }
  return '<svg class="ray-map" viewBox="' + (-P) + ' ' + (-P / 2) + ' ' + W + ' ' + H + '" role="img" aria-label="' + rayEsc(RAY_TXT.mapaAria) + '">' + edges + nodes + '</svg>';
}
function rayLeyenda(){
  return '<div class="ray-legend"><b>' + RAY_TXT.leyenda + '</b>' + RAYUELA_HF.lineas.map(l => '<span><i style="background:' + l.color + '"></i>' + rayEsc(l.nombre) + '</span>').join("") + '</div>';
}

/* ---------- pantallas ---------- */
function rayLayout(main){
  const box = rayBox(); if (!box) return;
  box.innerHTML = '<div class="ray-wrap"><div class="ray-main">' + main + '</div><aside class="ray-side" aria-label="' + rayEsc(RAY_TXT.plano) + '">' + rayMapa() + rayLeyenda() + '</aside></div>';
}
function rayStats(){
  const d = rayData();
  return '<p class="ray-stats">' + RAY_TXT.viajes + ' <b>' + (d.viajes || []).length + '</b> · ' + RAY_TXT.finales + ' <b>' + rayFinales().size + ' / ' + rayTerminales().length + '</b> · ' +
    RAY_TXT.estaciones + ' <b>' + [...rayVisitadas()].filter(n => RAYUELA_HF.estaciones[n]).length + ' / ' + rayEstaciones().length + '</b></p>';
}
function renderRayPortada(){
  ray.modo = "portada"; ray.ruta = []; ray.elec = []; ray.fin = null;
  const d = rayData();
  rayLayout('<p class="ray-intro">' + RAY_TXT.intro + '</p>' + rayStats() +
    '<div class="ray-actions"><button class="ray-btn" id="raygo">' + RAY_TXT.iniciar + '</button><button class="pbtn" id="rayplano">' + RAY_TXT.miPlano + '</button></div>' +
    '<label class="ray-check"><input type="checkbox" id="raynames"' + (d.nombres ? " checked" : "") + '> ' + RAY_TXT.nombres + '</label>');
  rayBox().querySelector("#raygo").addEventListener("click", rayIniciar);
  rayBox().querySelector("#rayplano").addEventListener("click", renderRayPlano);
  rayBox().querySelector("#raynames").addEventListener("change", e => { const d2 = rayData(); d2.nombres = e.target.checked; raySave(d2); renderRayPortada(); });
}
function rayIniciar(){ ray.modo = "viaje"; ray.ruta = [RAYUELA_HF.inicio]; ray.elec = []; ray.fin = null; renderRayEstacion(); }

function renderRayEstacion(){
  const n = ray.ruta[ray.ruta.length - 1], s = RAYUELA_HF.estaciones[n];
  const ops = rayOpciones(s);
  const kick = s.tipo === "vida" ? RAY_TXT.vida : s.tipo === "contradiccion" ? RAY_TXT.contradiccion : RAY_TXT.pregunta;
  let choque = "";
  if (s.tipo === "contradiccion"){
    const hits = ray.elec.filter(e => e.marca && (s.choque || []).includes(e.marca)).slice(-3);
    if (hits.length) choque = '<div class="ray-choque"><b>' + RAY_TXT.chocan + '</b><ul>' + hits.map(e => '<li><span class="ray-badge sm">' + rayEsc(e.n) + '</span> «' + rayEsc(e.t) + '»</li>').join("") + '</ul></div>';
  }
  rayLayout('<button class="linkbtn ray-back" id="rayquit">' + RAY_TXT.abandonar + '</button>' +
    '<article class="ray-card ' + s.tipo + '" style="--lc:' + rayLinea(s.linea) + '">' +
      '<div class="ray-kick"><span class="ray-badge">' + rayEsc(n) + '</span>' + kick + '</div>' +
      '<h2>' + rayEsc(s.titulo) + '</h2><p class="ray-text">' + rayEsc(s.texto) + '</p>' + choque +
      '<p class="ray-q">' + rayEsc(s.pregunta) + '</p>' +
      '<div class="ray-opts">' + ops.map((o, i) => '<button class="ray-opt' + (o.red ? ' tr' : '') + '" data-i="' + i + '"><span class="ray-n">' + (o.red ? '⇄' : (i + 1)) + '</span><span>' + (o.red ? '<small class="ray-tr">' + RAY_TXT.transbordo + ' · ' + rayEsc(((RAYUELA_HF.redes || []).find(r => r.n === o.red) || {}).nombre || '') + '</small>' : '') + rayEsc(o.t) + '</span></button>').join("") + '</div>' +
    '</article>');
  rayBox().querySelector("#rayquit").addEventListener("click", renderRayPortada);
  rayBox().querySelectorAll("[data-i]").forEach(b => b.addEventListener("click", () => {
    const o = ops[+b.dataset.i];
    ray.elec.push({ n: n, t: o.t, marca: o.marca || null });
    if (/^F[A-Z]$/.test(o.to)){ ray.fin = o.to.slice(1); rayTerminar(); }
    else { ray.ruta.push(o.to); renderRayEstacion(); }
    const v = document.getElementById("rayuela"); if (v && v.getBoundingClientRect().top < 0) v.scrollIntoView({ block: "start" });
  }));
}

function rayTerminar(){
  const d = rayData(), antes = rayFinales();
  d.viajes = (d.viajes || []).concat([{ f: new Date().toISOString().slice(0, 10), ruta: ray.ruta.slice(), t: ray.fin }]).slice(-60);
  raySave(d);
  renderRayFinal(!antes.has(ray.fin));
}
function rayLinks(autores, temas){
  const I = typeof ILUSTRES !== "undefined" ? ILUSTRES : {}, TH = typeof THEORY !== "undefined" ? THEORY : {};
  const a = (autores || []).filter(x => I[x.id]).map(x => '<a href="#ilustres/' + x.id + '">' + rayEsc(I[x.id].name) + '</a>');
  const t = (temas || []).filter(k => TH[k]).map(k => '<a href="#teoria/' + k + '">' + rayEsc(TH[k].title) + '</a>');
  return (a.length ? '<p class="ray-links"><b>' + RAY_TXT.coinciden + ':</b> ' + a.join(" · ") + '</p>' : "") +
         (t.length ? '<p class="ray-links"><b>' + RAY_TXT.estudia + ':</b> ' + t.join(" · ") + '</p>' : "");
}
function renderRayFinal(esNuevo){
  const k = ray.fin, t = RAYUELA_HF.terminales[k], d = rayData(), refl = (d.refl || {})[k] || "";
  const total = Object.keys(RAYUELA_HF.terminales).length, got = rayFinales().size;
  rayLayout('<article class="ray-card final">' +
      '<div class="ray-kick"><span class="ray-badge term">' + k + '</span>' + RAY_TXT.final + (esNuevo ? ' <span class="ray-new">' + RAY_TXT.nuevo + '</span>' : "") + '</div>' +
      '<h2>' + rayEsc(t.titulo) + '</h2><p class="ray-text">' + rayEsc(t.texto) + '</p>' + rayLinks(t.autores, t.temas) +
      '<div class="ray-box"><b>' + RAY_TXT.abierto + '</b><p>' + rayEsc(t.abierto) + '</p></div>' +
      '<div class="ray-box pau"><b>' + RAY_TXT.paraPau + '</b><p>' + rayEsc(t.reflexion) + '</p>' +
        '<textarea id="rayrefl" rows="6" placeholder="' + rayEsc(RAY_TXT.tuTexto) + '">' + rayEsc(refl) + '</textarea><small id="raywc"></small></div>' +
      '<div class="ray-box"><b>' + RAY_TXT.recorrido + '</b><ol class="ray-ruta">' + ray.elec.map(e => '<li><span class="ray-badge sm">' + rayEsc(e.n) + '</span> ' + rayEsc(RAYUELA_HF.estaciones[e.n].titulo) + ' — «' + rayEsc(e.t) + '»</li>').join("") + '</ol></div>' +
      '<p class="ray-stats">' + (got === total ? RAY_TXT.todos : RAY_TXT.finales + ' <b>' + got + ' / ' + total + '</b>') + '</p>' +
      '<div class="ray-actions"><button class="ray-btn" id="raygo">' + RAY_TXT.otroViaje + '</button><button class="pbtn" id="rayplano">' + RAY_TXT.miPlano + '</button></div>' +
    '</article>');
  const ta = rayBox().querySelector("#rayrefl"), wc = rayBox().querySelector("#raywc");
  const count = () => { const w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; wc.textContent = w + " " + RAY_TXT.palabras; };
  count();
  ta.addEventListener("input", () => { const d2 = rayData(); d2.refl = d2.refl || {}; d2.refl[k] = ta.value; raySave(d2); count(); });
  rayBox().querySelector("#raygo").addEventListener("click", rayIniciar);
  rayBox().querySelector("#rayplano").addEventListener("click", renderRayPlano);
}

function renderRayPlano(){
  ray.modo = "plano"; ray.ruta = []; ray.elec = []; ray.fin = null;
  const d = rayData(), fins = rayFinales(), viajes = (d.viajes || []).slice().reverse();
  const caidas = {}; (d.viajes || []).forEach(v => (v.ruta || []).forEach(n => { const s = RAYUELA_HF.estaciones[n]; if (s && s.tipo === "contradiccion") caidas[n] = (caidas[n] || 0) + 1; }));
  const term = rayTerminales().map(([k, t]) => '<div class="ray-tcard' + (fins.has(k) ? " got" : "") + '"><span class="ray-badge term">' + k + '</span>' +
    (fins.has(k) ? rayEsc(t.titulo) : '<i>' + RAY_TXT.sinDescubrir + '</i>') + '</div>').join("");
  rayLayout('<button class="linkbtn ray-back" id="rayback">' + RAY_TXT.volver + '</button><h2 class="ray-h">' + RAY_TXT.miPlano + '</h2>' + rayStats() +
    '<div class="ray-tgrid">' + term + '</div>' +
    (Object.keys(caidas).length ? '<div class="ray-box"><b>' + RAY_TXT.caidas + '</b><ul>' + Object.entries(caidas).map(([n, c]) => '<li><span class="ray-badge sm contra">' + n + '</span> ' + rayEsc(RAYUELA_HF.estaciones[n].titulo.replace(/^[^:]*:\s*/, "")) + ' × ' + c + '</li>').join("") + '</ul></div>' : "") +
    '<div class="ray-box"><b>' + RAY_TXT.ultimos + '</b>' + (viajes.length ? '<ol class="ray-viajes">' + viajes.slice(0, 12).map(v => '<li><span class="ray-date">' + rayEsc(v.f) + '</span> ' + (v.ruta || []).map(n => '<span class="ray-badge sm">' + rayEsc(n) + '</span>').join("") + ' → <span class="ray-badge sm term">' + rayEsc(v.t) + '</span> ' + rayEsc((RAYUELA_HF.terminales[v.t] || {}).titulo || "") + '</li>').join("") + '</ol>' : '<p>' + RAY_TXT.ninguno + '</p>') + '</div>' +
    '<div class="ray-actions"><button class="ray-btn" id="raygo">' + RAY_TXT.iniciar + '</button><button class="linkbtn" id="rayreset">' + RAY_TXT.borrar + '</button></div>');
  rayBox().querySelector("#rayback").addEventListener("click", renderRayPortada);
  rayBox().querySelector("#raygo").addEventListener("click", rayIniciar);
  rayBox().querySelector("#rayreset").addEventListener("click", () => { if (confirm(RAY_TXT.seguro)){ raySave({ nombres: rayData().nombres }); renderRayPlano(); } });
}

if (rayBox() && typeof RAYUELA_HF !== "undefined") renderRayPortada();
