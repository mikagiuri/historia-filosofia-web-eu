"use strict";
/* ===== Eudaimonía ===== juego de la ética de Aristóteles ===== depende de: juego_aristoteles.js, store.js =====
   Motor (funciones ariE*, sin DOM: también lo usa tools/sim_eudaimonia.js) + vista (render*). */

const ARI_KEYS = ["sal","hac","car","rep","ene","phr"];
let ariRng = Math.random;   // la simulación lo sustituye por un generador con semilla

/* ================= MOTOR ================= */
function ariEtapas(){ return JUEGO_ARIS.meta.etapas; }
function ariTotalRondas(){ return ariEtapas().reduce((s,e) => s + e.rondas, 0); }
function ariEtapaDe(round){ let n = 0; for(const e of ariEtapas()){ n += e.rondas; if(round < n) return e; } return ariEtapas()[ariEtapas().length-1]; }
function ariClamp(v){ return Math.max(0, Math.min(12, v)); }

function ariENew(charId){
  const c = JUEGO_ARIS.chars.find(x => x.id === charId);
  const st = {}; ARI_KEYS.forEach(k => st[k] = c[k]);
  return { char:c, st, ini:Object.assign({}, st), flags:new Set(), used:new Set(), round:0, cur:null, log:[], over:null };
}

function ariEtapaOk(d, et){ const e = d.etapa; return Array.isArray(e) ? e.includes(et) : e === et; }
function ariCondOk(S, d){ return !d.cond || Object.keys(d.cond).every(k => S.st[k] >= d.cond[k]); }
function ariOrientOk(S, d){ return !d.orient || d.orient.includes(S.char.orient); }

// siguiente dilema (o null si la vida ha terminado)
function ariENext(S){
  if(S.over) return null;
  if(S.round < ariTotalRondas() && !S.pasoHecho?.[S.round]){ (S.pasoHecho = S.pasoHecho || {})[S.round] = true; S.ultimoPaso = ariEPaso(S); if(S.over) return null; } else S.ultimoPaso = null;
  const D = JUEGO_ARIS.dilemmas, libre = d => !S.used.has(d.id);
  const urg = D.find(d => d.urgente && d.req && S.flags.has(d.req) && libre(d));
  if(!urg && S.round >= ariTotalRondas()) return null;
  const et = ariEtapaDe(S.round).id;
  let d = urg || D.find(d => !d.urgente && d.req && S.flags.has(d.req) && libre(d) && ariEtapaOk(d, et));
  if(!d){
    const pool = D.filter(d => !d.req && libre(d) && ariEtapaOk(d, et) && ariOrientOk(S, d) && ariCondOk(S, d));
    const peso = pool.flatMap(d => d.orient ? [d, d] : [d]);   // los dilemas de tu orientación salen el doble
    const alt = D.filter(d => !d.req && libre(d) && ariOrientOk(S, d) && ariCondOk(S, d));
    const src = peso.length ? peso : alt;
    if(!src.length) return null;
    d = src[Math.floor(ariRng() * src.length)];
  }
  S.used.add(d.id); S.cur = d; return d;
}
// al cambiar de etapa: rentas y desgaste de la vida corriente
function ariEPaso(S){
  if(S.over || S.round === 0) return null;
  const e = ariEtapaDe(S.round), antes = ariEtapaDe(S.round - 1);
  if(e === antes || !e.paso) return null;
  const real = ariEApply(S, e.paso); ariEChequeo(S);
  S.log.push({ paso:true, etapa:e.label, t:e.paso.t, real });
  return { t:e.paso.t, real };
}

function ariBlocked(S, o){ return (S.char.bloquea || []).some(t => (o.tags || []).includes(t)); }

// efecto real de un conjunto de cambios para este personaje (rasgos: mods por tag + multiplicadores)
function ariEEff(S, base, tags){
  const d = {}; ARI_KEYS.forEach(k => { if(base[k]) d[k] = base[k]; });
  (tags || []).forEach(t => { const m = (S.char.mods || {})[t]; if(m) ARI_KEYS.forEach(k => { if(m[k]) d[k] = (d[k] || 0) + m[k]; }); });
  const mu = S.char.mult || {};
  ARI_KEYS.forEach(k => {
    if(!d[k] || !mu[k]) return;
    const f = d[k] > 0 ? mu[k].up : mu[k].down; if(!f) return;
    const v = Math.abs(d[k]) * f; d[k] = Math.sign(d[k]) * (f >= 1 ? Math.round(v) : Math.floor(v));
  });
  return d;
}
// aplica y devuelve el cambio efectivo (tras recortar a 0-12)
function ariEApply(S, d){
  const real = {};
  ARI_KEYS.forEach(k => { if(!d[k]) return; const v = ariClamp(S.st[k] + d[k]); if(v !== S.st[k]) real[k] = v - S.st[k]; S.st[k] = v; });
  return real;
}
function ariEMuere(S, tipo, texto){ S.over = { tipo, texto }; }
function ariEChequeo(S){
  if(S.over) return;
  if(S.st.sal <= 0) ariEMuere(S, "muerte", "Tu salud no aguanta más.");
  else if(S.st.hac <= 0 && !S.char.noRuina) ariEMuere(S, "ruina", "Te has quedado sin nada: la ruina te aparta de la vida de la ciudad.");
}
function ariPExito(S, o){ return Math.min(0.85 + (S.char.riesgo || 0), (o.pBase == null ? 0.3 : o.pBase) + S.st.phr * 0.06 + (S.char.riesgo || 0)); }

// resuelve la opción i del dilema actual: devuelve la lista de sucesos para mostrarlos
function ariEResolve(S, i){
  const d = S.cur, o = d.opts[i], ev = [], ronda = { n:S.round + 1, etapa:ariEtapaDe(S.round).label, d, o, cambios:[] };
  if(S.st.sal < S.ini.sal) S.st.sal++;   // el cuerpo se recupera poco a poco, sin pasar de su estado inicial
  const push = (tipo, extra, delta) => { const real = ariEApply(S, delta || {}); const e = Object.assign({ tipo, real }, extra); ev.push(e); ronda.cambios.push(e); return e; };
  push("decision", {}, ariEEff(S, o, o.tags));
  if(o.set) S.flags.add(o.set);
  if(o.risk){
    const p = ariPExito(S, o), ok = ariRng() < p, sub = (ok ? o.win : o.lose) || (ok ? { car:1 } : { car:-1, sal:-1 });
    if(sub.set) S.flags.add(sub.set);
    push("dado", { ok, r:sub.r, prudente:S.st.phr >= 7 }, ariEEff(S, sub));
  }
  if(o.muerte && !S.over){
    const pm = o.muerte >= 1 ? 1 : o.muerte * (1 - 0.04 * S.st.phr);
    if(ariRng() < pm){ ariEMuere(S, "muerte", o.muerteT || "Mueres."); push("muerte", { t:o.muerteT }); }
  }
  ariEChequeo(S);
  if(!S.over && ariRng() < JUEGO_ARIS.chanceProb){
    const c = JUEGO_ARIS.chance[Math.floor(ariRng() * JUEGO_ARIS.chance.length)];
    push("azar", { card:c }, ariEEff(S, c));
    ariEChequeo(S);
  }
  if(!S.over) ariEPeligro(S, push);
  ariEChequeo(S);
  S.log.push(ronda); S.round++;
  return ev;
}

function ariEPeligro(S, push){
  const P = JUEGO_ARIS.peligro, ene = S.st.ene;
  if(ene < P.umbral) return;
  const p = Math.min(P.max, P.porPunto * (ene - P.umbral + 1));
  if(ariRng() >= p) return;
  const r = ariRng();
  if(S.st.rep >= 7 && r < (S.char.ostracismo || 0.35)){ push("peligro", { t:P.ostracismo.t, d:P.ostracismo.d, img:P.ostracismo.img }, P.ostracismo); return; }
  const tipo = r < 0.72 ? "juicio" : "atentado", E = P[tipo];
  const s = ariRng() + 0.04 * S.st.phr + (tipo === "juicio" ? 0.03 * S.st.rep - 0.04 * ene : 0);
  const sal = E.salidas.find(x => s >= x.min);
  const e = push("peligro", { t:(tipo === "juicio" ? E.t + ": " + sal.t : sal.t), d:sal.d, img:sal.img || E.img, em:E.em, muerte:!!sal.muerte }, sal.muerte ? {} : sal);
  if(sal.muerte) ariEMuere(S, "muerte", sal.d);
  return e;
}

// balance final
function ariEFinal(S){
  const st = S.st, parts = { car:2 * st.car, phr:st.phr, sal:Math.min(st.sal, 8), hac:Math.min(st.hac, 8), rep:Math.min(st.rep, 6) };
  const eud = Object.values(parts).reduce((a,b) => a + b, 0), F = JUEGO_ARIS.finales;
  let band;
  if(S.over) band = S.over.tipo === "muerte" ? (st.car >= 7 ? F.muerte_noble : F.muerte) : (st.car >= 7 ? F.ruina_noble : F.ruina);
  else if(st.car <= 3 && st.hac + st.rep >= 12) band = F.prospero;
  else {
    band = JUEGO_ARIS.bands.find(b => eud >= b.min);
    if((st.sal <= 2 || st.hac <= 2) && band.min > 28) band = JUEGO_ARIS.bands.find(b => b.min === 28);   // sin bienes no hay vida plena
  }
  return { eud, parts, band };
}

/* ================= VISTA ================= */
const ARI = { S:null, answered:false };
function ariBox(){ return document.getElementById("aribox"); }
function ariEsc(s){ return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function ariImg(id){ return JUEGO_ARIS.meta.imgBase + id + ".jpg"; }
// retrato del personaje; sin ilustración, un medallón con su inicial
function ariRetrato(c, cls, alt){
  return c.sinImg ? '<span class="' + cls + ' ari-noimg" role="img" aria-label="' + ariEsc(c.name) + '">' + ariEsc(c.name.charAt(0)) + '</span>'
    : '<img class="' + cls + '" loading="lazy" src="' + ariImg("char-" + c.id) + '" alt="' + (alt ? ariEsc(c.name) : "") + '">';
}
function ariStat(k){ return JUEGO_ARIS.stats.find(s => s.k === k); }
function ariNivel(k, v){ return ariStat(k).niveles.find(n => v <= n[0])[1]; }
function ariAlerta(k, v){ return (k === "sal" || k === "hac") ? v <= 2 : k === "ene" ? v >= 6 : false; }

function renderAriStart(){
  const box = ariBox(); if(!box) return;
  const cards = JUEGO_ARIS.chars.map(c =>
    '<button class="ari-char" data-char="' + c.id + '">' +
      '<div class="ari-portrait">' + ariRetrato(c, "ari-portrait-img", true) + '<span class="ari-orient">' + c.orient + '</span></div>' +
      '<div class="ari-char-b"><div class="ari-char-h"><b>' + c.name + '</b></div>' +
        '<p class="ari-perfil">' + ariEsc(c.perfil) + '</p>' +
        '<div class="ari-trait"><span class="ari-vir">' + ariEsc(c.virtud) + '</span> ' + ariEsc(c.virtudT) + '</div>' +
        '<div class="ari-trait"><span class="ari-deb">' + ariEsc(c.debilidad) + '</span> ' + ariEsc(c.debilidadT) + '</div>' +
        '<div class="ari-frase">«' + c.frase + '»</div></div>' +
    '</button>').join("");
  const et = ariEtapas().map(e => e.label.toLowerCase()), etTxt = et.slice(0, -1).join(", ") + " y " + et[et.length-1] + ": " + ariTotalRondas() + " decisiones en total";
  box.innerHTML = '<div class="ari-wrap">' +
    '<details class="ari-intro" open><summary>Cómo se juega</summary>' +
      '<ul>' +
        '<li>Elige un personaje y vive su vida en tres etapas, ' + etTxt + '.</li>' +
        '<li>No verás números: solo cómo andan tu <b>salud</b> 🏋️, tu <b>hacienda</b> 💰, tu <b>carácter</b> 🧠, tu <b>reputación</b> 🏛️, tus <b>enemigos</b> ⚔️ y tu <b>prudencia</b> 🧭. Los números se revelan al final.</li>' +
        '<li>Si tu salud o tu hacienda se agotan, la partida termina.</li>' +
        '<li>Si acumulas enemigos, cada ronda pueden llevarte a juicio, desterrarte, encarcelarte o matarte. Da igual que sea por ambición desmedida o por no dejarte corromper.</li>' +
        '<li>La prudencia no te libra del peligro, pero te ayuda a salir mejor de los juicios y de las decisiones arriesgadas 🎲.</li>' +
      '</ul>' +
      '<p class="ari-intro-h">¿Qué tiene que ver con Aristóteles?</p>' +
      '<ul>' +
        '<li>La <i>eudaimonía</i> es una vida entera lograda, no un buen momento: por eso se juzga al final. «Una golondrina no hace verano».</li>' +
        '<li>Es ante todo actividad del alma de acuerdo con la virtud: en el balance, el carácter cuenta el doble.</li>' +
        '<li>Pero necesita bienes externos (salud, recursos, amigos, buena fama). Quien acaba en la desgracia, como Príamo, no es llamado feliz.</li>' +
        '<li>La virtud es un término medio «relativo a nosotros»: a Alcibíades no le cuesta lo mismo que a Sócrates. Por eso cada personaje tiene sus propios rasgos.</li>' +
        '<li>La <i>phrónesis</i> es saber qué conviene hacer en cada caso concreto.</li>' +
      '</ul></details>' +
    '<div class="ari-col-h">Elige tu personaje</div>' +
    '<div class="ari-chars">' + cards + '</div>' +
    '<p class="ia-note">IAz sortutako ilustrazioak</p></div>';
  box.querySelectorAll("[data-char]").forEach(b => b.addEventListener("click", () => ariStart(b.dataset.char)));
}

function ariStart(id){ ARI.S = ariENew(id); ariRenderDilemma(); }

function ariHud(){
  const S = ARI.S, et = ariEtapaDe(S.round);
  const pills = JUEGO_ARIS.stats.map(s => '<span class="ari-pill' + (ariAlerta(s.k, S.st[s.k]) ? " warn" : "") + '" title="' + s.label + '">' + s.em + ' ' + s.label + ': <b>' + ariNivel(s.k, S.st[s.k]) + '</b></span>').join("");
  return '<div class="ari-hud">' +
    '<span class="ari-who">' + ariRetrato(S.char, "ari-mini") + ' ' + S.char.name + '</span>' +
    '<span class="ari-stat">' + et.label + ' · decisión <b>' + (S.round + 1) + '</b>/' + Math.max(ariTotalRondas(), S.round + 1) + '</span></div>' +
    '<div class="ari-pills">' + pills + '</div>';
}

// pistas cualitativas (sin números) para cada opción
function ariHints(o){
  const S = ARI.S, eff = ariEEff(S, o, o.tags), h = [];
  if(o.muerte) h.push("☠️ te juegas la vida");
  if(o.risk) h.push("🎲 incierto");
  if((eff.ene || 0) >= 2 || (o.lose && (o.lose.ene || 0) >= 3)) h.push("⚔️ te ganarás enemigos");
  if((eff.hac || 0) <= -3) h.push("💰 costoso");
  if((eff.sal || 0) <= -2) h.push("🏋️ duro para el cuerpo");
  return h.length ? '<span class="ari-hints">' + h.map(x => '<span>' + x + '</span>').join("") + '</span>' : "";
}

function ariRenderDilemma(){
  const S = ARI.S, d = ariENext(S);
  if(!d){ ariResult(); return; }
  ARI.answered = false;
  const opts = d.opts.map((o,i) => {
    const bl = ariBlocked(S, o);
    return '<button class="ari-opt" data-i="' + i + '"' + (bl ? " disabled" : "") + '><span class="k">' + "ABCD"[i] + '</span><span class="ari-ot">' + ariEsc(o.t) +
      (bl ? ' <span class="ari-blk">Tu desmesura no te lo permite.</span>' : ariHints(o)) + '</span></button>';
  }).join("");
  ariBox().innerHTML = '<div class="ari-wrap">' + ariHud() +
    (S.ultimoPaso ? '<p class="ari-hist">⏳ ' + ariEsc(S.ultimoPaso.t) + '</p>' + ariArrows(S.ultimoPaso.real) : '') +
    '<div class="ari-card"><div class="ari-virtue">' + ariEsc(d.virtue) + '</div>' +
      '<p class="ari-sit">' + ariEsc(d.sit) + '</p>' +
      '<div class="ari-opts">' + opts + '</div>' +
      '<div class="ari-res" id="ariRes"></div>' +
      '<div class="ari-foot"><button class="ari-next" id="ariNext" hidden></button></div>' +
    '</div></div>';
  ariBox().querySelectorAll(".ari-opt").forEach(b => b.addEventListener("click", () => ariChoose(+b.dataset.i)));
  document.getElementById("ariNext").addEventListener("click", ariRenderDilemma);
}

// flechas sin números: ↑ / ↑↑ (el color dice si es bueno o malo)
function ariArrows(real){
  const p = ARI_KEYS.filter(k => real[k]).map(k => {
    const v = real[k], bueno = k === "ene" ? v < 0 : v > 0, s = ariStat(k);
    return '<span class="' + (bueno ? "up" : "down") + '">' + s.em + ' ' + s.label + ' ' + (v > 0 ? "↑" : "↓").repeat(Math.abs(v) >= 3 ? 2 : 1) + '</span>';
  });
  return p.length ? '<div class="ari-arrows">' + p.join("") + '</div>' : "";
}
function ariCard(cls, img, ph, tag, title, text, real){
  return '<div class="ari-chance-card ' + cls + '">' +
    (img ? '<img class="ari-chance-img" src="' + ariImg(img) + '" alt="">' : '<div class="ari-chance-ph">' + ph + '</div>') +
    '<div class="ari-chance-t"><span class="ari-chance-tag">' + tag + '</span><b>' + ariEsc(title) + '</b><p>' + ariEsc(text) + '</p>' + ariArrows(real) + '</div></div>';
}

function ariChoose(i){
  if(ARI.answered) return; ARI.answered = true;
  const S = ARI.S, d = S.cur, o = d.opts[i];
  const btns = [...document.querySelectorAll(".ari-opt")];
  btns.forEach((b,j) => { b.disabled = true; if(j !== i) b.classList.add("dim"); });
  btns[i].classList.add("chosen");
  const ev = ariEResolve(S, i);
  let html = '';
  ev.forEach(e => {
    if(e.tipo === "decision") html += (o.r ? '<p class="ari-line">' + ariEsc(o.r) + '</p>' : '') + ariArrows(e.real);
    else if(e.tipo === "dado") html += '<div class="ari-dado ' + (e.ok ? "win" : "lose") + '">🎲 <b>' + (e.ok ? "Sale bien" : "Sale mal") + '.</b> ' + ariEsc(e.r || "") + (e.prudente ? ' <span class="ari-hint">(tu prudencia te ha dado ventaja)</span>' : '') + ariArrows(e.real) + '</div>';
    else if(e.tipo === "muerte") html += ariCard("bad", null, "☠️", "Muerte", "Has muerto", e.t, {});
    else if(e.tipo === "azar") html += ariCard(e.card.bad ? "bad" : "good", e.card.img, e.card.bad ? "🃏" : "🎴", "🎲 Carta de azar", e.card.t, e.card.d, e.real);
    else if(e.tipo === "peligro") html += ariCard("bad", e.img, e.em || "⚔️", "⚔️ Tus enemigos actúan", e.t, e.d, e.real);
  });
  if(d.hist) html += '<p class="ari-hist">📜 ' + ariEsc(d.hist) + '</p>';
  if(S.over && S.over.tipo === "muerte" && !ev.some(e => e.tipo === "muerte" || (e.tipo === "peligro" && e.muerte))) html += ariCard("bad", null, "☠️", "Muerte", "Has muerto", S.over.texto, {});
  if(S.over && S.over.tipo === "ruina") html += ariCard("bad", "azar-ruina", "🪨", "Ruina", "Te has arruinado", S.over.texto, {});
  const res = document.getElementById("ariRes"); res.innerHTML = html; res.classList.add("show");
  const hud = document.querySelector("#aribox .ari-pills"); if(hud){ const tmp = document.createElement("div"); tmp.innerHTML = ariHud(); hud.replaceWith(tmp.querySelector(".ari-pills")); }
  const nx = document.getElementById("ariNext");
  const fin = S.over || !ariHayMas(S);
  nx.textContent = S.over ? "Ver el final ✝" : fin ? "Ver el balance de tu vida" : "Hurrengoa →";
  nx.hidden = false;
}
function ariHayMas(S){ return S.round < ariTotalRondas() || JUEGO_ARIS.dilemmas.some(d => d.urgente && d.req && S.flags.has(d.req) && !S.used.has(d.id)); }

/* ---------- balance final: aquí se revelan los números ---------- */
function ariFmt(d){ return ARI_KEYS.filter(k => d[k]).map(k => '<span class="' + ((k === "ene" ? d[k] < 0 : d[k] > 0) ? "up" : "down") + '">' + (d[k] > 0 ? "+" : "") + d[k] + ariStat(k).em + '</span>').join(" ") || "—"; }
function ariResult(){
  const S = ARI.S, F = ariEFinal(S), c = S.char;
  const key = "aula-eudaimonia-best"; let best = {}; try{ best = store.get(key, {}) || {}; }catch(e){}
  const prev = best[c.id] || 0, record = !S.over && F.eud > prev;
  if(record){ best[c.id] = F.eud; try{ store.set(key, best); }catch(e){} }
  const q = JUEGO_ARIS.reflect[Math.floor(Math.random() * JUEGO_ARIS.reflect.length)];
  const filas = JUEGO_ARIS.stats.map(s => '<tr><td>' + s.em + ' ' + s.label + '</td><td>' + S.ini[s.k] + '</td><td><b>' + S.st[s.k] + '</b></td><td>' + ariNivel(s.k, S.st[s.k]) + '</td></tr>').join("");
  const P = F.parts;
  const formula = '2 × carácter (' + P.car + ') + prudencia (' + P.phr + ') + salud (' + P.sal + ') + hacienda (' + P.hac + ') + reputación (' + P.rep + ') = <b>' + F.eud + '</b>';
  const log = S.log.map(r => {
    if(r.paso) return '<li class="paso"><b>' + ariEsc(r.etapa) + '.</b> ' + ariEsc(r.t) + ' <span class="ari-log-c">' + ariFmt(r.real) + '</span></li>';
    const cambios = r.cambios.map(e => {
      const lbl = e.tipo === "decision" ? "decisión" : e.tipo === "dado" ? "🎲 " + (e.ok ? "sale bien" : "sale mal") : e.tipo === "azar" ? "azar: " + e.card.t : e.tipo === "peligro" ? "⚔️ " + e.t : "☠️ muerte";
      return '<span class="ari-log-c">' + ariEsc(lbl) + ' ' + ariFmt(e.real) + '</span>';
    }).join("");
    return '<li><div class="ari-log-h"><b>' + r.n + '. ' + ariEsc(r.etapa) + ' · ' + ariEsc(r.d.virtue) + '</b></div><div class="ari-log-s">' + ariEsc(r.d.sit) + '</div><div class="ari-log-o">→ ' + ariEsc(r.o.t) + '</div><div class="ari-log-cs">' + cambios + '</div></li>';
  }).join("");
  ariBox().innerHTML = '<div class="ari-wrap"><div class="ari-result' + (S.over ? " dead" : "") + '">' +
    '' + ariRetrato(c, "ari-result-img") + '' +
    '<div class="ari-badge">' + F.band.emoji + '</div>' +
    '<div class="ari-rank">' + F.band.label + '</div>' +
    (F.band.texto ? '<p class="ari-band-t">' + ariEsc(F.band.texto) + '</p>' : '') +
    (S.over ? '<p class="ari-stats2">' + c.name + ' · ' + ariEsc(S.over.texto) + ' (decisión ' + S.round + ')</p>' : '') +
    '<div class="ari-final">' + F.eud + ' <span>eudaimonía</span></div>' +
    '<p class="ari-formula">' + formula + '</p>' +
    '<p class="ari-stats2">' + (record ? '¡Tu mejor vida con ' + c.name + '! 🎉' : (prev ? 'Mejor vida con ' + c.name + ': ' + Math.max(prev, S.over ? 0 : F.eud) : '')) + '</p>' +
    '<table class="ari-reveal"><thead><tr><th></th><th>Al empezar</th><th>Al final</th><th></th></tr></thead><tbody>' + filas + '</tbody></table>' +
    '<div class="ari-destino"><b>Lo que le pasó de verdad a ' + c.name + ':</b> ' + ariEsc(c.destino) + '</div>' +
    '<details class="ari-log"><summary>Tu vida, decisión a decisión (con los números)</summary><ol>' + log + '</ol></details>' +
    '<blockquote class="ari-reflect">Para pensar: ' + ariEsc(q) + '</blockquote>' +
    '<div class="ari-actions"><button class="btn2 primary" id="ariAgain">Otra vida</button>' +
      '<button class="btn2" id="ariHome">Cambiar de personaje</button></div>' +
  '</div></div>';
  document.getElementById("ariAgain").addEventListener("click", () => ariStart(c.id));
  document.getElementById("ariHome").addEventListener("click", renderAriStart);
}

/* ---------- init ---------- */
function initAri(){ if(typeof JUEGO_ARIS === "undefined") return; renderAriStart(); }
if(typeof document !== "undefined" && document.addEventListener){
  document.addEventListener("DOMContentLoaded", initAri);
  (function(){ const nav = document.getElementById("tabs"); if(nav) nav.addEventListener("click", e => { const b = e.target.closest("button"); if(b && b.dataset.view === "eudaimonia") renderAriStart(); }); })();
}
