"use strict";
/* ===== Rincón de lógica · «Lógica moderna»: Formalizar y Reglas de inferencia (12-10-2026) =====
   Petición del profesor: el Rincón tenía lógica proposicional (tablas de verdad, puertas) pero sin pestaña de lógica
   moderna. Las pestañas de arriba pasan a ser «Lógica clásica» (silogismos, cuadrado, conjuntos) y «Lógica moderna»
   (tablas de verdad, formalizar, reglas de inferencia, cuantificadores, puertas lógicas); ver logRender en logicaview.js.
   · Cuantificadores: A, E, I, O en lógica de predicados, un «mundo pequeño» para evaluarlas (sujeto vacío incluido) y
     un ejercicio de elegir la fórmula de cada frase.
   · Formalizar: frases en castellano que el alumno pasa a fórmula con el teclado de conectivas; se corrige por
     EQUIVALENCIA (misma tabla de verdad), así que vale cualquier forma correcta, y si no lo es se enseña la fila en
     que difieren. Cada frase trae su pista y su caso trampa («solo si», «a menos que», «o… o…», «ni… ni…»).
   · Reglas de inferencia: las reglas válidas y las falacias formales que se les parecen, con su forma, un ejemplo y
     un botón para comprobarlas en la tabla de verdad; y un ejercicio «¿regla o trampa?» con argumentos en castellano.
   Usa las funciones de logicaview.js (logParse, logVars, logFilas, logEval, logStr, logEsc, logTeclado, LOG).
   Textos en LOGM_TXT y en los datos de abajo: cadenas enteras, que traduce el diccionario de interfaz (ui/<lang>.json). */
const LOGM_TXT = {
  tabClasica: "Logika klasikoa", tabModerna: "Logika modernoa", tabFormalizar: "Formalizatu", tabInferencia: "Inferentzia-arauak",
  introFormalizar: "Formalizatzea esaldi bat sinboloetara itzultzea da: esaldi soil bakoitza letra bat da (p, q, r…), eta haiek lotzen dituzten hitzak («ez», «eta», «edo», «…bada, orduan») konektiboak dira. Idatzi formula teklatuarekin eta sakatu «Egiaztatu»: edozein formula baliokidek balio du, haren egia-taula soluzioarenarekin konparatzen baita.",
  introInferencia: "Inferentzia-arau bat inoiz huts egiten ez duen arrazoitzeko modu bat da: premisak egiazkoak badira, ondorioa ere egiazkoa da. Forma batzuek haien antz handia dute, baina ez dira baliozkoak: falazia formalak dira. Hemen dituzu biak, bakoitzaren adibide batekin, eta ariketa bat bereizten ikasteko.",
  guiaTitF: "Nola itzultzen den hitz bakoitza",
  guiaF: "<ul><li><b>¬</b> (ez): «ez», «ez da egia», «faltsua da».</li><li><b>∧</b> (eta): «eta», «baina», «nahiz eta», «hala ere», «gainera». Logikan denek gauza bera diote: bi gauzak egia direla.</li><li><b>∨</b> (edo): «edo». Logikan inklusiboa da (bata, bestea edo biak); esaldiak biak aldi berean baztertzen baditu («edo… edo…, baina ez biak»), hori gehitu egin behar da.</li><li><b>→</b> (…bada, orduan): «p bada, q», «q, p bada», «p denean, q», «p den bakoitzean, q», «nahikoa da p q-rako» (p baldintza <i>nahikoa</i> da).</li><li><b>Kasu tranpa</b>: «p, q bada bakarrik» eta «p-rako q beharrezkoa da» honela idazten dira: <b>p → q</b>; q baldintza <i>beharrezkoa</i> da, ez nahikoa.</li><li><b>↔</b> (baldin eta soilik baldin): «p baldin eta soilik baldin q», «p, q denean eta soilik orduan».</li><li><b>Beste tranpa batzuk</b>: «ez p ez q» ¬p ∧ ¬q da; «p, q ez bada behintzat» ¬q → p da (edo, gauza bera dena, p ∨ q).</li><li><b>«Beraz» ez da konektiboa</b>: «pentsatzen dut, beraz banaiz» esaldiak ez du baieztatzen «pentsatzen badut, banaiz», baizik eta premisa batetik ondorio bat <i>ateratzen</i> du. Hori argudio bat da: «Inferentzia-arauak» atalean ikasten da.</li></ul>",
  diccionario: "Hiztegia:", tuFormula: "Zure formula", comprobar: "Egiaztatu", solucion: "Ikusi soluzioa", pista: "Pista",
  bien: "Zuzena! Zure formula soluzioaren baliokidea da: {s}", mal: "Ez da baliokidea. Adibidez, {fila} denean, zure formulak {a} ematen du eta esaldiak {b} dio.",
  verdadero: "egiazkoa", falso: "faltsua", vacia: "Idatzi formula bat.", sol: "Soluzioa: {s}", ejercicio: "{n}. esaldia / {m}",
  validas: "Arau baliozkoak", falacias: "Falazia formalak (ez dira baliozkoak)", forma: "Forma", ejemplo: "Adibidea", porQue: "Zergatik huts egiten duen",
  verTabla: "Egiaztatu egia-taulan", ejTit: "Araua ala tranpa?", ejAyuda: "Irakurri argudio bakoitza eta aukeratu zer forma duen. Ez dago notarik: garrantzitsuena zergatia ulertzea da.",
  acierto: "Ondo! {r} da.", fallo: "No: es {r}.", formaArg: "Bere forma: {f}"
};
const logmT = (k, v) => String(LOGM_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

/* ---------- Formalizar ---------- */
const LOGM_FZ = [
  { f: "Euria ari badu, lurra bustitzen da.", d: [["p", "euria ari du"], ["q", "lurra bustitzen da"]], s: "p → q", pista: "«p bada, q»: «bada»-ren aurretik doana aurrekaria da." },
  { f: "Euria ari du eta ez daramat aterkirik.", d: [["p", "euria ari du"], ["q", "aterkia daramat"]], s: "p ∧ ¬q", pista: "Letra esaldi baiezkoa da; «ez» ¬ sinboloaz idazten da." },
  { f: "Euria ari badu eta aterkirik ez badaramat, busti egiten naiz.", d: [["p", "euria ari du"], ["q", "aterkia daramat"], ["r", "busti egiten naiz"]], s: "(p ∧ ¬q) → r", pista: "Lehenik aurrekari osoa, parentesi artean; gero gezia." },
  { f: "Ez dut ikasten, ezta lan egiten ere.", d: [["p", "ikasten dut"], ["q", "lan egiten dut"]], s: "¬p ∧ ¬q", pista: "«Ez… ezta… ere»-k bi gauzak ukatzen ditu aldi berean." },
  { f: "Euririk egiten ez badu bakarrik joango naiz txangora.", d: [["p", "txangora joaten naiz"], ["q", "euria ari du"]], s: "p → ¬q", pista: "Kasu tranpa: «…bada bakarrik» egiturak baldintza beharrezkoa sartzen du, eta hori geziaren atzean doa." },
  { f: "Botoa emateko beharrezkoa da adin nagusikoa izatea.", d: [["p", "botoa ematen duzu"], ["q", "adin nagusikoa zara"]], s: "p → q", pista: "Botoa ematen baduzu, adin nagusikoa zarelako da; baina adin nagusikoa izatea ez da nahikoa botoa emateko." },
  { f: "Nahikoa da botoia sakatzea argia piz dadin.", d: [["p", "botoia sakatzen duzu"], ["q", "argia pizten da"]], s: "p → q", pista: "«Nahikoa da p» esateak p baldintza nahikoa dela adierazten du: geziaren aurretik doa." },
  { f: "Irtengo gara, euririk egiten ez badu behintzat.", d: [["p", "irteten gara"], ["q", "euria ari du"]], s: "¬q → p", pista: "Kasu tranpa: «p, q ez bada behintzat» esateak «q ez bada, p» esan nahi du." },
  { f: "Deituko dizut baldin eta soilik baldin berandu iristen bazara.", d: [["p", "deitzen dizut"], ["q", "berandu iristen zara"]], s: "p ↔ q", pista: "«Baldin eta soilik baldin» egiturak bi baldintzazko lotzen ditu: p → q eta q → p." },
  { f: "Edo ikasten duzu edo lan egiten duzu, baina ez biak.", d: [["p", "ikasten duzu"], ["q", "lan egiten duzu"]], s: "(p ∨ q) ∧ ¬(p ∧ q)", pista: "Kasu tranpa: logikako «edo» inklusiboa da; hemen gehitu egin behar da biak ez direla gertatzen." },
  { f: "Ez da egia, euria ari badu, partida bertan behera geratzen denik.", d: [["p", "euria ari du"], ["q", "partida bertan behera geratzen da"]], s: "¬(p → q)", pista: "«Ez da egia» egiturak baldintzazko osoa ukatzen du: parentesiaren aurretik doa." },
  { f: "Epikuro: «Gu gaudenean, heriotza ez dago; eta heriotza dagoenean, gu jada ez gaude».", d: [["p", "gu gaude"], ["q", "heriotza dago"]], s: "(p → ¬q) ∧ (q → ¬p)", pista: "Bi baldintzazko dira, «eta»-k lotuak. (Menekeori gutuna, 125.)" }
];
function logmEquiv(a, b){
  const vars = logVars([a, b]);
  return logFilas(vars).find(v => logEval(a, v) !== logEval(b, v)) || null;
}
function logmFzRes(i){
  const z = LOGM_FZ[i], st = LOG.fz[i] || {};
  if (st.sol) return '<p class="lg-nota">' + logmT("sol", { s: logEsc(z.s) }) + "</p>";
  if (!st.hecho) return "";
  if (!String(st.f || "").trim()) return '<p class="lg-error">' + logmT("vacia") + "</p>";
  try {
    const a = logParse(st.f), b = logParse(z.s), dif = logmEquiv(a, b);
    if (!dif) return '<p class="lg-veredicto lg-tautologia">' + logmT("bien", { s: logEsc(z.s) }) + "</p>";
    const fila = Object.keys(dif).map(x => x + " = " + (dif[x] ? "V" : "F")).join(", ");
    return '<p class="lg-veredicto lg-contradiccion">' + logmT("mal", { fila, a: logmT(logEval(a, dif) ? "egiazkoa" : "faltsua"), b: logmT(logEval(b, dif) ? "egiazkoa" : "faltsua") }) +
      '</p><p class="lg-nota"><b>' + logmT("pista") + ":</b> " + logEsc(z.pista) + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
function logRenderFormalizar(){
  const N = LOGM_FZ.length;
  return '<details class="lg-guia"><summary>' + logmT("guiaTitF") + "</summary>" + logmT("guiaF") + "</details>" +
    LOGM_FZ.map((z, i) => {
      const st = LOG.fz[i] || {};
      return '<div class="lg-panel lg-fz" id="lg-fz-' + i + '"><p class="lg-nota">' + logmT("ejercicio", { n: i + 1, m: N }) + '</p><p class="lg-fz-frase">' + logEsc(z.f) + "</p>" +
        '<p class="lg-nota">' + logmT("diccionario") + " " + z.d.map(([l, t]) => "<b>" + l + "</b> = " + logEsc(t)).join(" · ") + "</p>" +
        '<label class="lg-label" for="lg-fzi-' + i + '">' + logmT("tuFormula") + '</label><div class="lg-fila"><input id="lg-fzi-' + i + '" class="lg-input" data-fz="' + i + '" value="' + logEsc(st.f || "") + '" autocomplete="off" spellcheck="false">' +
        '<button type="button" class="btn" data-fzok="' + i + '">' + logmT("comprobar") + '</button></div>' + logTeclado("lg-fzi-" + i) +
        '<p><button type="button" class="btn ghost" data-fzsol="' + i + '">' + logmT("solucion") + '</button></p><div id="lg-fzr-' + i + '">' + logmFzRes(i) + "</div></div>";
    }).join("");
}

/* ---------- Reglas de inferencia ---------- */
const LOGM_REGLAS = [
  { k: "mp", n: "Modus ponens", p: "p → q; p", c: "q", ej: "Euria ari badu, lurra bustitzen da. Euria ari du. Beraz, lurra bustitzen da." },
  { k: "mt", n: "Modus tollens", p: "p → q; ¬q", c: "¬p", ej: "Euria ari badu, lurra bustitzen da. Lurra ez dago bustita. Beraz, ez du euririk egiten." },
  { k: "sh", n: "Silogismo hipotetikoa", p: "p → q; q → r", c: "p → r", ej: "Ikasten badut, gainditu egiten dut; gainditzen badut, bidaiara noa. Beraz, ikasten badut, bidaiara noa." },
  { k: "sd", n: "Silogismo disjuntiboa", p: "p ∨ q; ¬p", c: "q", ej: "Edo etxean dago edo eskolan dago. Ez dago etxean. Beraz, eskolan dago." },
  { k: "dc", n: "Dilema eraikitzailea", p: "p → r; q → r; p ∨ q", c: "r", ej: "Trenez joaten bazara, berandu iritsiko zara; autobusez joaten bazara, baita ere. Trenez edo autobusez joango zara. Beraz, berandu iritsiko zara." }
];
const LOGM_FALACIAS = [
  { k: "ac", n: "Atzekaria baieztatzea", p: "p → q; q", c: "p", ej: "Euria ari badu, lurra bustitzen da. Lurra bustita dago. Beraz, euria egin du.", por: "Lurra beste arrazoi batengatik egon daiteke bustita: norbaitek ureztatu du. Baldintza nahikoa ez da posible den bakarra." },
  { k: "na", n: "Aurrekaria ukatzea", p: "p → q; ¬p", c: "¬q", ej: "Ikasten baduzu, gainditu egiten duzu. Ez duzu ikasi. Beraz, ez duzu gaindituko.", por: "Arauak ez du esaten zer gertatzen den ikasten ez baduzu: agian beste arrazoi batengatik gaindituko duzu." },
  { k: "ad", n: "Disjuntu bat baieztatzea", p: "p ∨ q; p", c: "¬q", ej: "Edo zinemara goaz edo afaltzera goaz. Zinemara goaz. Beraz, ez goaz afaltzera.", por: "Logikako «edo» inklusiboa da: bi gauzak egin daitezke. Esaldiak biak aldi berean baztertuko balitu bakarrik izango litzateke baliozkoa." }
];
const LOGM_EJ = [
  { t: "Sokrates gizakia bada, hilkorra da. Sokrates gizakia da. Beraz, Sokrates hilkorra da.", r: "mp" },
  { t: "Sua badago, oxigenoa dago. Ilargian ez dago oxigenorik. Beraz, Ilargian ez dago surik.", r: "mt" },
  { t: "Gobernu batek herritarren eskubideak urratzen baditu, herriak eskubidea du erresistentzia egiteko. Herriak erresistentzia egiten du. Beraz, gobernuak haien eskubideak urratu ditu.", r: "ac" },
  { t: "Edo errudun nagusi-zerbitzaria da edo sukaldaria. Nagusi-zerbitzariak alibia du eta ez da errudun. Beraz, sukaldaria da.", r: "sd" },
  { t: "Ahalegintzen bazara, hobetu egiten duzu; hobetzen baduzu, gainditu egiten duzu. Beraz, ahalegintzen bazara, gainditu egiten duzu.", r: "sh" },
  { t: "Euria ari badu, partida bertan behera geratzen da. Ez du euririk egiten. Beraz, partida ez da bertan behera geratzen.", r: "na" },
  { t: "Zalantza egiten badut, pentsatzen dut. Zalantza egiten dut. Beraz, pentsatzen dut.", r: "mp" },
  { t: "Anak Filosofia edo Historia ikasten du. Filosofia ikasten du. Beraz, ez du Historia ikasten.", r: "ad" },
  { t: "Arima materiala balitz, gorputza bezala deskonposatuko litzateke. Arima ez da deskonposatzen. Beraz, arima ez da materiala.", r: "mt" },
  { t: "Teoria ona bada, bere iragarpenak betetzen dira. Bere iragarpenak betetzen dira. Beraz, teoria ona da.", r: "ac" }
];
function logmTodas(){ return LOGM_REGLAS.concat(LOGM_FALACIAS); }
function logmForma(x){ return x.p.split(";").map(s => s.trim()).join(" · ") + " ⊢ " + x.c; }
function logmCarta(x, fal){
  return '<div class="lg-regla' + (fal ? " lg-falaz" : "") + '"><h3>' + logEsc(x.n) + '</h3><p class="lg-forma"><b>' + logmT("forma") + ":</b> " + logEsc(logmForma(x)) + "</p>" +
    '<p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p>" + (fal ? '<p><b>' + logmT("porQue") + ":</b> " + logEsc(x.por) + "</p>" : "") +
    '<p><button type="button" class="btn ghost" data-infp="' + logEsc(x.p) + '" data-infc="' + logEsc(x.c) + '">' + logmT("verTabla") + " →</button></p></div>";
}
function logRenderInferencia(){
  const T = logmTodas();
  return '<div class="lg-panel"><h2>' + logmT("validas") + '</h2><div class="lg-reglas">' + LOGM_REGLAS.map(x => logmCarta(x, false)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("ejTit") + '</h2><p class="lg-nota">' + logmT("ejAyuda") + "</p>" +
    LOGM_EJ.map((e, i) => {
      const r = LOG.inf[i], bien = T.find(x => x.k === e.r);
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.t) + '</p><div class="lg-teclas">' + T.map(x => '<button type="button" class="chip' + (r === x.k ? (x.k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + '" data-infej="' + i + '" data-infr="' + x.k + '"' + (r ? " disabled" : "") + ">" + logEsc(x.n) + "</button>").join("") + "</div>" +
        (r ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "acierto" : "fallo", { r: logEsc(bien.n) }) + " " + logmT("formaArg", { f: logEsc(logmForma(bien)) }) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
}

/* ---------- Cuantificadores (lógica de predicados) ---------- */
/* Las cuatro proposiciones de Aristóteles en lógica de predicados, un «mundo pequeño» donde se evalúan (con el caso
   del sujeto vacío: el compromiso existencial del tema 4) y un ejercicio de elegir la fórmula de cada frase. */
const LOGM_CQ_TXT = {
  tabCuantificadores: "Kuantifikatzaileak",
  introCuantificadores: "Egia-taulen logikak ezin du aztertu «Gizaki guztiak hilkorrak dira; Sokrates gizakia da; beraz, Sokrates hilkorra da», ez baitu ikusten esaldi bakoitzaren barruan zer dagoen. Fregek (1879) predikatuak gehitu zituen (Hx = «x gizakia da») eta kuantifikatzaileak: ∀x, «x ororentzat», eta ∃x, «badago gutxienez x bat». Haiekin idazten dira Aristotelesen lau proposizioak eta beste gauza asko.",
  cqCuatro: "Aristotelesen lau proposizioak", cqProp: "Proposizioa", cqFormula: "Formula", cqLee: "Honela irakurtzen da",
  cqTrampa: "Kasu tranpa: «S oro P da» ez da ∀x (Sx ∧ Px), horrek esango bailuke dena dela S eta P aldi berean; eta «S batzuk P dira» ez da ∃x (Sx → Px), hori egiazkoa baita S ez den zerbait dagoen bezain laster.",
  cqNeg: "Kuantifikatzaile bat ukatzea: ¬∀x Px eta ∃x ¬Px baliokideak dira («ez guztiak» = «batzuk ez»), eta ¬∃x Px eta ∀x ¬Px ere bai («bat ere ez» = «guztiak ez»). Horregatik dira kontraesankorrak A eta O, baita E eta I ere.",
  cqMundo: "Mundu txiki bat", cqMundoAyuda: "Bost banako (a, b, c, d, e). Markatu zein diren S eta zein P, eta begiratu zer proposizio ateratzen diren egiazko.",
  cqInd: "Banakoa", cqVacio: "Probatu S hutsik uzten: orduan «S oro P da» eta «Ezein S ez da P» egiazkoak dira aldi berean, eta «S batzuk P dira» faltsua. Logika modernoan, proposizio unibertsalak ez du onartzen S-ak badirenik: 4. gaiko existentzia-konpromisoa da.",
  cqTesti: "Erakusten du: {x}", cqContra: "Huts egiten du hemen: {x}", cqNadie: "ez dago bat ere", cqSinS: "egiazkoa, ez dagoelako S-rik",
  cqPresets: "Adibide-munduak:", cqP1: "S guztiak P dira", cqP2: "Ezein S ez da P", cqP3: "Batzuk bai eta beste batzuk ez", cqP4: "Ez dago S-rik",
  cqEjTit: "Zein formula da?", cqEjAyuda: "Aukeratu esaldiak dioena bera dioen formula. Letra larria predikatua da, eta letra xehea, banako zehatz bat.",
  cqBien: "Zuzena!", cqMal: "No.", cqEjemplo: "Adibide ebatzia: Sokratesen silogismoa",
  cqEjemploTxt: "Gizaki guztiak hilkorrak dira: ∀x (Hx → Mx). Sokrates gizakia da: Hs. Beraz, Sokrates hilkorra da: Ms. Lehen premisatik Hs → Ms ondorioztatzen da (x ororentzat balio duenak Sokratesentzat ere balio du: «instantziazio unibertsala»), eta Hs → Ms eta Hs premisetatik Ms ondorioztatzen da, modus ponens bidez."
};
const LOGM_CQ4 = [
  ["A", "S oro P da", "∀x (Sx → Px)", "x ororentzat, x S bada, orduan x P da"],
  ["E", "Ezein S ez da P", "∀x (Sx → ¬Px)", "x ororentzat, x S bada, orduan x ez da P (edo bestela: ¬∃x (Sx ∧ Px))"],
  ["I", "S batzuk P dira", "∃x (Sx ∧ Px)", "badago gutxienez x bat, S eta P dena"],
  ["O", "S batzuk ez dira P", "∃x (Sx ∧ ¬Px)", "badago gutxienez x bat, S dena eta P ez dena"]
];
const LOGM_CQ_IND = ["a", "b", "c", "d", "e"];
const LOGM_CQ_PRE = {
  p1: [[1, 1], [1, 1], [0, 1], [0, 0], [1, 1]], p2: [[1, 0], [1, 0], [0, 1], [0, 1], [0, 0]],
  p3: [[1, 1], [1, 0], [0, 1], [1, 1], [0, 0]], p4: [[0, 1], [0, 0], [0, 1], [0, 0], [0, 1]]
};
const LOGM_CQ_EJ = [
  { f: "Filosofo guztiak jakin-nahiak dira.", d: "F = filosofoa, C = jakin-nahia", o: ["∀x (Fx → Cx)", "∀x (Fx ∧ Cx)", "∃x (Fx ∧ Cx)", "∀x (Cx → Fx)"], r: 0, por: "Baiezko unibertsala (A). ∧ ikurrarekin esango luke mundu guztia dela filosofoa eta jakin-nahia; gezia alderantziz jarrita, jakin-nahi oro filosofoa dela." },
  { f: "Sofistaren batek kobratu egiten zuen irakasteagatik.", d: "S = sofista, C = irakasteagatik kobratzen zuen", o: ["∃x (Sx → Cx)", "∃x (Sx ∧ Cx)", "∀x (Sx → Cx)"], r: 1, por: "Baiezko partikularra (I): badago norbait sofista dena eta kobratzen zuena. Geziarekin nahikoa litzateke sofista ez den zerbait egotea." },
  { f: "Ezein jainko ez da hilkorra.", d: "D = jainkoa, M = hilkorra", o: ["¬∀x (Dx → Mx)", "∀x (¬Dx → Mx)", "∀x (Dx → ¬Mx)"], r: 2, por: "Ezezko unibertsala (E). ¬∃x (Dx ∧ Mx) ere balio du: «ez dago jainko eta hilkor den ezer»." },
  { f: "Ez ziren greziar guztiak filosofoak.", d: "G = greziarra, F = filosofoa", o: ["∀x (Gx → ¬Fx)", "¬∀x (Gx → Fx)", "¬∃x (Gx ∧ Fx)"], r: 1, por: "Kasu tranpa: «ez guztiak» ez da «bat ere ez». ∃x (Gx ∧ ¬Fx) formularen baliokidea da: greziarren bat ez zen filosofoa (O)." },
  { f: "Hiritarrek bakarrik ematen zuten botoa batzarrean.", d: "V = batzarrean botoa ematen zuen, C = hiritarra", o: ["∀x (Cx → Vx)", "∀x (Vx → Cx)", "∃x (Vx ∧ Cx)"], r: 1, por: "Kasu tranpa: «C-ak bakarrik» baldintza beharrezkoa geziaren atzean jartzen du: botoa ematen zuen oro hiritarra zen (ez hiritar orok ematen zuen botoa)." },
  { f: "Bada beste ezerk eragin ez duen zerbait.", d: "C = beste zerbaitek eragina", o: ["¬∃x Cx", "∀x ¬Cx", "∃x ¬Cx"], r: 2, por: "Badago gutxienez eragin gabeko x bat: Aristotelesen lehen mugitzailearen edo Tomas Akinokoaren lehen kausaren ideia da." },
  { f: "Sokrates hilkorra da.", d: "M = hilkorra, s = Sokrates", o: ["∃x Mx", "Ms", "∀x Mx"], r: 1, por: "Banako zehatz bat letra xehe batez idazten da (konstante bat): ez da kuantifikatzailerik behar." },
  { f: "Pentsatzen duen oro existitzen da.", d: "P = pentsatzen du, E = existitzen da", o: ["∀x (Px → Ex)", "∀x (Ex → Px)", "∃x (Px ∧ Ex)"], r: 0, por: "Baiezko unibertsala (A). «Ni existitzen naiz» ateratzeko, «nik pentsatzen dut» (Pi) premisa eta instantziazio unibertsala ere beharko lirateke, Sokratesekin bezala." }
];
function logmCqEval(m){
  const ix = i => LOGM_CQ_IND[i], S = m.map(r => !!r[0]), P = m.map(r => !!r[1]), all = [0, 1, 2, 3, 4];
  const res = {
    A: { v: all.every(i => !S[i] || P[i]), malos: all.filter(i => S[i] && !P[i]) },
    E: { v: all.every(i => !S[i] || !P[i]), malos: all.filter(i => S[i] && P[i]) },
    I: { v: all.some(i => S[i] && P[i]), buenos: all.filter(i => S[i] && P[i]) },
    O: { v: all.some(i => S[i] && !P[i]), buenos: all.filter(i => S[i] && !P[i]) }
  };
  Object.values(res).forEach(r => { r.txt = r.malos ? (r.malos.length ? logmT("cqContra", { x: r.malos.map(ix).join(", ") }) : (S.some(Boolean) ? "" : logmT("cqSinS"))) : (r.buenos.length ? logmT("cqTesti", { x: r.buenos.map(ix).join(", ") }) : logmT("cqNadie")); });
  return res;
}
function logmCqMundo(){
  const m = LOG.cq.m, res = logmCqEval(m);
  return '<div class="tablewrap"><table class="lg-tabla lg-cq-mundo"><thead><tr><th>' + logmT("cqInd") + "</th>" + LOGM_CQ_IND.map(x => "<th>" + x + "</th>").join("") + "</tr></thead><tbody>" +
    ["S", "P"].map((k, j) => "<tr><th>" + k + "</th>" + m.map((r, i) => '<td><button type="button" class="chip lg-cq-cel' + (r[j] ? " on" : "") + '" data-cqi="' + i + '" data-cqj="' + j + '" aria-pressed="' + !!r[j] + '">' + (r[j] ? "✓" : "·") + "</button></td>").join("") + "</tr>").join("") +
    '</tbody></table></div><div class="tablewrap"><table class="lg-tabla"><tbody>' +
    LOGM_CQ4.map(([t, , f]) => '<tr><th>' + t + "</th><td>" + logEsc(f) + "</td>" + logVF(res[t].v) + '<td class="lg-cq-x">' + logEsc(res[t].txt) + "</td></tr>").join("") + "</tbody></table></div>";
}
function logRenderCuantificadores(){
  const ej = LOG.cq.ej;
  return '<div class="lg-panel"><h2>' + logmT("cqCuatro") + '</h2><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("cqProp") + "</th><th>" + logmT("cqFormula") + "</th><th>" + logmT("cqLee") + "</th></tr></thead><tbody>" +
    LOGM_CQ4.map(([t, p, f, l]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + '</td><td class="lg-forma">' + logEsc(f) + "</td><td>" + logEsc(l) + "</td></tr>").join("") + "</tbody></table></div>" +
    '<p class="lg-nota">' + logmT("cqTrampa") + '</p><p class="lg-nota">' + logmT("cqNeg") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqMundo") + '</h2><p class="lg-nota">' + logmT("cqMundoAyuda") + '</p><p class="lg-nota">' + logmT("cqPresets") + " " +
    [["p1", "cqP1"], ["p2", "cqP2"], ["p3", "cqP3"], ["p4", "cqP4"]].map(([k, l]) => '<button type="button" class="chip" data-cqpre="' + k + '">' + logmT(l) + "</button>").join(" ") + "</p>" +
    '<div id="lg-cq">' + logmCqMundo() + '</div><p class="lg-nota">' + logmT("cqVacio") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqEjTit") + '</h2><p class="lg-nota">' + logmT("cqEjAyuda") + "</p>" +
    LOGM_CQ_EJ.map((e, i) => {
      const r = ej[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.f) + ' <span class="lg-nota">(' + logEsc(e.d) + ')</span></p><div class="lg-teclas">' +
        e.o.map((o, k) => '<button type="button" class="chip lg-forma' + (r != null && r === k ? (k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + (r != null && k === e.r && r !== k ? " lg-chip-ok" : "") + '" data-cqej="' + i + '" data-cqo="' + k + '"' + (r != null ? " disabled" : "") + ">" + logEsc(o) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "cqBien" : "cqMal") + " " + logEsc(e.por) + "</p>" : "") + "</div>";
    }).join("") + '<details class="lg-guia"><summary>' + logmT("cqEjemplo") + "</summary><p>" + logmT("cqEjemploTxt") + "</p></details></div>";
}

Object.assign(LOGM_TXT, LOGM_CQ_TXT);

/* ---------- eventos (delegados en la caja del Rincón; logicaview.js maneja los demás) ---------- */
(function(){
  const box = document.getElementById("logicabox"); if (!box) return;
  LOG.fz = LOG.fz || {}; LOG.inf = LOG.inf || {}; LOG.cq = LOG.cq || { m: LOGM_CQ_PRE.p3.map(r => r.slice()), ej: {} };
  Object.assign(LOG_TXT, LOGM_TXT);   // las pestañas nuevas usan logT() de logicaview.js
  logRender();
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.fzok != null){ const i = +b.dataset.fzok; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { hecho: true, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.fzsol != null){ const i = +b.dataset.fzsol; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { sol: true }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.infp != null){ LOG.prem = b.dataset.infp; LOG.concl = b.dataset.infc; LOG.tab = "tablas"; logRender(); const a = document.getElementById("lg-arg"); if (a) a.scrollIntoView({ block: "center" }); }
    else if (b.dataset.cqi != null){ const r = LOG.cq.m[+b.dataset.cqi]; r[+b.dataset.cqj] = r[+b.dataset.cqj] ? 0 : 1; const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.cqpre){ LOG.cq.m = LOGM_CQ_PRE[b.dataset.cqpre].map(r => r.slice()); const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.cqej != null){ LOG.cq.ej[+b.dataset.cqej] = +b.dataset.cqo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
    else if (b.dataset.infej != null){ LOG.inf[+b.dataset.infej] = b.dataset.infr; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
  });
  box.addEventListener("input", ev => { const t = ev.target; if (t.dataset && t.dataset.fz != null){ const i = +t.dataset.fz; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { f: t.value, hecho: false, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = ""; } });
  box.addEventListener("keydown", ev => { const t = ev.target; if (ev.key === "Enter" && t.dataset && t.dataset.fz != null){ ev.preventDefault(); const ok = box.querySelector('[data-fzok="' + t.dataset.fz + '"]'); if (ok) ok.click(); } });
})();
