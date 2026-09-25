"use strict";
/* ===== «Rayuela filosófica» (HF 2.º) ===== depende de: rayuela_hf.js (RAYUELA_HF), store.js;
   usa ILUSTRES y THEORY si existen (enlaces de los finales).
   Un viaje por una red de metro de ideas: cada estación plantea una pregunta con tres respuestas
   y cada respuesta lleva a otra estación. Hay estaciones-vida (episodios de los filósofos) y de
   contradicción (en rojo: te enseñan las respuestas tuyas que chocan). Al final llegas a una terminal
   (la corriente con la que coinciden tus intuiciones). El jugador NO ve la red completa (decisión del
   profesor, 25-09): el plano solo dibuja el recorrido de cada viaje, estación a estación; la portada
   enseña el último viaje y «Mi plano» deja elegir cuál ver. El plano completo está solo en las tarjetas del profesor.
   Todo se guarda en este navegador (clave aula-rayuela-hf). Diseño: docs/13_diseno_narrativa_marco_HF.md */

const RAY_KEY = "aula-rayuela-hf";
/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const RAY_TXT = {
  intro: "Geltoki bakoitzak galdera bat egiten dizu hiru erantzunekin, eta erantzun bakoitzak beste geltoki batera eramaten zaitu. Bidean filosofoen bizitzako pasarteak aurkituko dituzu, baita zure erantzunen arteko kontraesanak ere. Azkenean, azken geltoki batera iritsiko zara: zure ideiekin bat datorren korrontea. Nahi adina aldiz bidaia dezakezu.",
  iniciar: "Hasi bidaia", otroViaje: "Bidaia berria", miPlano: "Nire planoa", abandonar: "← Utzi bidaia", volver: "← Itzuli",
  viajes: "Egindako bidaiak:", finales: "Aurkitutako amaierak:", estaciones: "Bisitatutako geltokiak:",
  pregunta: "Geltokia", vida: "Filosofo baten bizitza", contradiccion: "Kontraesana", final: "Azken geltokia",
  chocan: "Talka egiten duten zure erantzunak:",
  coinciden: "Lotutako filosofoak", estudia: "Ikasi teorian", abierto: "Zabalik geratzen zaizu",
  paraPau: "USErako (2. ariketa: hausnarketa filosofikoa)", tuTexto: "Idatzi hemen zure hausnarketa (200-300 hitz). Nabigatzaile honetan bakarrik gordetzen da.",
  guardado: "Nabigatzaile honetan gordeta.", palabras: "hitz",
  recorrido: "Zure ibilbidea", nuevo: "Amaiera berria!", todos: "Sareko amaiera guztiak aurkitu dituzu!", transbordo: "Transbordoa",
  plano: "Zure ibilbidea planoan", leyenda: "Legenda", sinViajes: "Hemen marraztuko da zure ibilbidea, geltokiz geltoki. Sarearen gainerakoa aurkitzeko dago.", verViaje: "Ikusi planoan",
  ultimos: "Zure azken bidaiak", ninguno: "Oraindik ez duzu bidaiarik egin.", caidas: "Erori zaren kontraesanak",
  borrar: "Ezabatu txingokako nire aurrerapena", seguro: "Ziur? Joko honetako zure bidaiak eta hausnarketak ezabatuko dira.",
  mapaAria: "Txingoka filosofikoan egin duzun ibilbidearen planoa", sinDescubrir: "Aurkitu gabe"
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
function rayVisitadas(){ const s = new Set(); (rayData().viajes || []).forEach(v => (v.ruta || []).forEach(n => s.add(n))); ray.ruta.forEach(n => s.add(n)); return s; }
function rayFinales(){ const s = new Set(); (rayData().viajes || []).forEach(v => { if (v.t) s.add(v.t); }); return s; }

/* ---------- plano del recorrido ---------- */
/* Esquema del recorrido (no de la red): las estaciones del viaje se dibujan de arriba abajo, en orden,
   como una línea de metro; cada línea de color tiene su carril, así que al cambiar de línea el trazado
   se desvía en diagonal. No usa las coordenadas de la red: el jugador no puede deducir el plano completo. */
function rayMapa(via){
  const R = RAYUELA_HF, DY = 62, DX = 58, X0 = 34, Y0 = 34;
  const ruta = (via && via.ruta) || [], fin = via && via.fin, nodos = ruta.concat(fin ? ["F" + fin] : []);
  if (!nodos.length) return '<p class="ray-empty">' + RAY_TXT.sinViajes + '</p>';
  const carril = {}; let nC = 0;
  const pos = nodos.map((n, i) => {
    const s = R.estaciones[n], lin = s ? (s.tipo === "contradiccion" ? "l-contradiccion" : s.linea) : "fin";
    if (!(lin in carril)) carril[lin] = (nC++) % 4;
    return [X0 + carril[lin] * DX, Y0 + i * DY];
  });
  const actual = nodos.length - 1, maxX = Math.max(...pos.map(p => p[0]));
  const seg = (a, b) => { const [x1, y1] = a, [x2, y2] = b, d = Math.abs(x2 - x1), ym = y2 - Math.min(d, y2 - y1);
    return "M" + x1 + " " + y1 + " L" + x1 + " " + ym + " L" + x2 + " " + y2; };
  let edges = "", nodes = "";
  for (let i = 1; i < nodos.length; i++){
    const s = R.estaciones[nodos[i - 1]], o = (s.opciones || []).find(x => x.to === nodos[i]) || {};
    edges += '<path class="ray-e now' + (o.red ? " tr" : "") + '" d="' + seg(pos[i - 1], pos[i]) + '" stroke="' + (s.tipo === "contradiccion" ? "#d23a2b" : rayLinea(s.linea)) + '"/>';
  }
  nodos.forEach((n, i) => {
    const [x, y] = pos[i], lx = maxX + 30;
    if (/^F/.test(n)){
      const k = n.slice(1), t = R.terminales[k];
      nodes += '<g class="ray-term vis cur"><rect x="' + (x - 17) + '" y="' + (y - 17) + '" width="34" height="34" rx="8"/>' +
        '<text class="ray-num" x="' + x + '" y="' + (y + 5) + '" text-anchor="middle">' + k + '</text>' +
        '<text class="ray-lbl fin" x="' + lx + '" y="' + (y + 5) + '">' + rayEsc(t.titulo) + '</text></g>';
      return;
    }
    const s = R.estaciones[n], c = s.tipo === "contradiccion" ? "#d23a2b" : rayLinea(s.linea);
    nodes += '<g class="ray-st vis' + (i === actual ? " cur" : "") + '">' + (i === actual ? '<circle class="ray-halo" cx="' + x + '" cy="' + y + '" r="24" stroke="' + c + '"/>' : "") +
      '<circle cx="' + x + '" cy="' + y + '" r="16" stroke="' + c + '" fill="' + c + '"/>' +
      '<text class="ray-num" x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle">' + rayEsc(n) + '</text>' +
      '<text class="ray-lbl" x="' + lx + '" y="' + (y + 5) + '">' + rayEsc(s.titulo.replace(/^[^:]*:\s*/, "")) + '</text></g>';
  });
  const W = maxX + 30 + 300, H = Y0 + (nodos.length - 1) * DY + 34;
  return '<svg class="ray-map ruta" viewBox="0 0 ' + W + ' ' + H + '" style="max-width:' + W + 'px" role="img" aria-label="' + rayEsc(RAY_TXT.mapaAria) + '">' + edges + nodes + '</svg>';
}
function rayLeyenda(via){
  const usadas = new Set(((via && via.ruta) || []).map(n => RAYUELA_HF.estaciones[n] && RAYUELA_HF.estaciones[n].linea));
  const ls = RAYUELA_HF.lineas.filter(l => usadas.has(l.id));
  return ls.length ? '<div class="ray-legend"><b>' + RAY_TXT.leyenda + '</b>' + ls.map(l => '<span><i style="background:' + l.color + '"></i>' + rayEsc(l.nombre) + '</span>').join("") + '</div>' : "";
}

/* ---------- pantallas ---------- */
function rayLayout(main, via){
  const box = rayBox(); if (!box) return;
  const v = via || { ruta: ray.ruta, fin: ray.fin };
  box.innerHTML = '<div class="ray-wrap"><div class="ray-main">' + main + '</div><aside class="ray-side" aria-label="' + rayEsc(RAY_TXT.plano) + '"><p class="ray-side-t">' + RAY_TXT.plano + '</p>' + rayMapa(v) + rayLeyenda(v) + '</aside></div>';
}
function rayStats(){
  const d = rayData();
  return '<p class="ray-stats">' + RAY_TXT.viajes + ' <b>' + (d.viajes || []).length + '</b> · ' + RAY_TXT.finales + ' <b>' + rayFinales().size + ' / ' + rayTerminales().length + '</b> · ' +
    RAY_TXT.estaciones + ' <b>' + [...rayVisitadas()].filter(n => RAYUELA_HF.estaciones[n]).length + ' / ' + rayEstaciones().length + '</b></p>';
}
function renderRayPortada(){
  ray.modo = "portada"; ray.ruta = []; ray.elec = []; ray.fin = null;
  rayLayout('<p class="ray-intro">' + RAY_TXT.intro + '</p>' + rayStats() +
    '<div class="ray-actions"><button class="ray-btn" id="raygo">' + RAY_TXT.iniciar + '</button><button class="pbtn" id="rayplano">' + RAY_TXT.miPlano + '</button></div>', (() => { const vs = rayData().viajes || []; const u = vs[vs.length - 1]; return u ? { ruta: u.ruta, fin: u.t } : null; })());
  rayBox().querySelector("#raygo").addEventListener("click", rayIniciar);
  rayBox().querySelector("#rayplano").addEventListener("click", renderRayPlano);
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

function renderRayPlano(sel){
  ray.modo = "plano"; ray.ruta = []; ray.elec = []; ray.fin = null;
  const d = rayData(), fins = rayFinales(), viajes = (d.viajes || []).slice().reverse();
  sel = Math.max(0, Math.min(+sel || 0, viajes.length - 1));
  const via = viajes.length ? { ruta: viajes[sel].ruta, fin: viajes[sel].t } : null;
  const caidas = {}; (d.viajes || []).forEach(v => (v.ruta || []).forEach(n => { const s = RAYUELA_HF.estaciones[n]; if (s && s.tipo === "contradiccion") caidas[n] = (caidas[n] || 0) + 1; }));
  const term = rayTerminales().map(([k, t]) => '<div class="ray-tcard' + (fins.has(k) ? " got" : "") + '"><span class="ray-badge term">' + k + '</span>' +
    (fins.has(k) ? rayEsc(t.titulo) : '<i>' + RAY_TXT.sinDescubrir + '</i>') + '</div>').join("");
  rayLayout('<button class="linkbtn ray-back" id="rayback">' + RAY_TXT.volver + '</button><h2 class="ray-h">' + RAY_TXT.miPlano + '</h2>' + rayStats() +
    '<div class="ray-tgrid">' + term + '</div>' +
    (Object.keys(caidas).length ? '<div class="ray-box"><b>' + RAY_TXT.caidas + '</b><ul>' + Object.entries(caidas).map(([n, c]) => '<li><span class="ray-badge sm contra">' + n + '</span> ' + rayEsc(RAYUELA_HF.estaciones[n].titulo.replace(/^[^:]*:\s*/, "")) + ' × ' + c + '</li>').join("") + '</ul></div>' : "") +
    '<div class="ray-box"><b>' + RAY_TXT.ultimos + '</b>' + (viajes.length ? '<ol class="ray-viajes">' + viajes.slice(0, 12).map((v, i) => '<li><button class="ray-vbtn' + (i === sel ? ' sel' : '') + '" data-v="' + i + '" title="' + RAY_TXT.verViaje + '"><span class="ray-date">' + rayEsc(v.f) + '</span> ' + (v.ruta || []).map(n => '<span class="ray-badge sm">' + rayEsc(n) + '</span>').join("") + ' → <span class="ray-badge sm term">' + rayEsc(v.t) + '</span> ' + rayEsc((RAYUELA_HF.terminales[v.t] || {}).titulo || "") + '</button></li>').join("") + '</ol>' : '<p>' + RAY_TXT.ninguno + '</p>') + '</div>' +
    '<div class="ray-actions"><button class="ray-btn" id="raygo">' + RAY_TXT.iniciar + '</button><button class="linkbtn" id="rayreset">' + RAY_TXT.borrar + '</button></div>', via);
  rayBox().querySelector("#rayback").addEventListener("click", renderRayPortada);
  rayBox().querySelector("#raygo").addEventListener("click", rayIniciar);
  rayBox().querySelectorAll("[data-v]").forEach(b => b.addEventListener("click", () => renderRayPlano(+b.dataset.v)));
  rayBox().querySelector("#rayreset").addEventListener("click", () => { if (confirm(RAY_TXT.seguro)){ raySave({}); renderRayPlano(); } });
}

if (rayBox() && typeof RAYUELA_HF !== "undefined") renderRayPortada();
