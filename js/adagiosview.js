"use strict";
/* ===== «Adagios» (09-10, Bachillerato) — vista sobre adagios.js (ADAGIOS) =====
   Repertorio de lemas clásicos al modo de los cuadernos de lugares comunes del Renacimiento. Cada ficha: la versión
   española y, solo al pulsar el botón λ de su línea (como en el glosario), el lema latino y, si lo hay, el original
   griego con su transliteración; luego qué quiere decir, cuándo usarlo, el caso trampa si lo hay, de dónde viene y los temas.
   Los nombres de pensadores con ficha en Ilustres (en esta web) abren su biografía: el primero de cada ficha.
   Filtro por ámbito y modo «Ponte a prueba» (solo el lema en español; el resto se descubre al pulsar). Arriba solo las fichas:
   la historia (Erasmo, florilegios, Montaigne) y el cuaderno de lugares comunes van al final, plegados.
   Enlace profundo: #adagios/<id>. Los temas se enlazan solo si existen en la web (THEORY filtrado). */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const ADG_TXT = {
  ambito: "Esparrua", todos: "Guztiak",
  saber: "Jakintza", realidad: "Errealitatea", etica: "Etika eta bizitza", politica: "Politika", humano: "Gizakia",
  modo: "Modua", leer: "Irakurri", prueba: "Jarri zeure burua proban",
  pruebaAyuda: "Saiatu azaltzen zer esan nahi duen, nondik datorren eta noiz erabiliko zenukeen; gero sakatu «Erakutsi».",
  descubrir: "Erakutsi", ocultar: "Ezkutatu",
  originalBtn: "Ikusi jatorrizkoa latinez", originalBtnGr: "Ikusi jatorrizkoa latinez eta grezieraz, eta nola irakurtzen den grekoa",
  latin: "Latinez:", griego: "Grezieraz:",
  origen: "Nondik dator:", erasmo: "Erasmo, Adagia {n}",
  sentido: "Zer esan nahi du:", uso: "Erabili:", trampa: "Kasu tranpa", temas: "Gaietan:",
  verBio: "Ikusi {n}(r)en biografia",
  cuenta: "{n} adagio", cuenta1: "Adagio 1",
  hTit: "Nondik dator hau: Errenazimentuko hizkuntza komuna",
  h1: "Errenazimentuan, ikasketak zituenak ehunka goiburu, adagio eta klasikoen esaera zekizkien buruz. Ez ziren apaingarri hutsak: hizkuntza partekatu gisa funtzionatzen zuten. Nahikoa zen «Festina lente» edo «Nosce te ipsum» esatea ideia oso bat ekartzeko, bere historia eta ñabardurekin, eta irakurle jantziak berehala ezagutzen zuen.",
  h2t: "Erasmoren Adagia",
  h2: "Bildumarik eraginkorrena Erasmo Rotterdamgoarena izan zen. 1500ean hasi zen 818 esaera greko eta latindarren antologia batekin, eta bizitza osoan zehar handitu zuen: 1536ko edizioak 4.151 ditu. Adagio bakoitzak bere jatorriari, zentzuari eta erabilerari buruzko iruzkin bat du, eta iruzkin batzuk benetako saiakerak dira, hala nola «Dulce bellum inexpertis», gerraren aurkakoa, edo «Sileni Alcibiadis», itxurei buruzkoa.",
  h3t: "Florilegioak eta toki komunak",
  h3: "Erasmorekin batera, florilegioak («loreen hautaketa») zebiltzan, pasarte hautatuen antologiak, hala nola Domenico Nani Mirabelliren Polyanthea (1503) edo Ottaviano Mirandularen Illustrium poetarum flores. Eta eskolan ikasle bakoitzak bere toki komunen koadernoa (loci communes) zeraman: irakurtzean aurkitzen zituen esaldiak kopiatzen zituen eta gaika antolatzen zituen (adiskidetasuna, fortuna, heriotza, justizia…), idazteko edo hitz egiteko argudioak eskura izateko. Erasmok, De copia lanean, eta Juan Luis Vivesek azaldu zuten nola egin.",
  h3b: "Kontuz nahasketa ohiko batekin: Melanchthonen Loci communes (1521) izen berekoak dira, baina gaika antolatutako teologia protestantearen eskuliburu bat dira, ez aipamen-bilduma bat.",
  h4t: "Montaigneren habeak",
  h4: "Montaignek bere liburutegiko sabaiko habeetan berrogeita hamar esaera baino gehiago margoarazi zituen, grezieraz eta latinez, asko Bibliatik, Sexto Enpirikotik eta Estobeoren antologiatik, bere Saiakerak idazten zituen bitartean begi-bistan izateko. Oraindik ere bere dorrean gordetzen dira, Perigorden, Frantziaren hego-mendebaldean.",
  h4b: "Berak ere bere goiburua egin zuen. 1576an domina bat enkargatu zuen, oreka-egoerako balantza batekin eta eszeptikoen hitz greko batekin, ἐπέχω (epékho, «abstenitzen naiz», hau da, iritzia eteten dut). Saiakeretan (II, 12) galdera gisa itzultzen du: «Que sçay-je?», «zer dakit nik?».",
  pieDivisa: "Montaigneren goiburua: «Que sçay-je?» oreka-egoerako balantza baten gainean",
  pieMedalla: "Montaigneren domina, Gatteaux familiarena (XIX. mendea; Frantziako Liburutegi Nazionala)",
  cTit: "Egin zure toki komunen koadernoa",
  c0: "Toki komunen koadernoa gaika antolatutako esaldien fitxategi bat da, idaztean eskura izateko. Honela egiten da:",
  c1t: "Prestatu.",
  c1: "Koaderno edo dokumentu bat bost atalekin, esparru bakoitzeko bat: Jakintza, Errealitatea, Etika eta bizitza, Politika eta Gizakia. Utzi gutxienez bi orrialde atal bakoitzeko.",
  c2t: "Kopiatu adagio bakoitza beti bost lerro berekin:",
  c2a: "goiburua latinez edo grezieraz;", c2b: "itzulpena;", c2c: "nondik datorren: egilea eta lana;",
  c2d: "zer esan nahi duen, zeure esaldi batean (ez kopiatu webekoa);",
  c2e: "zeure esaldi bat, ikasturteko gai bati buruz erabiltzen duzuna.",
  cEjT: "Adibidea:",
  cEj: "Homo homini lupus · «Gizakia otsoa da gizakiarentzat» · Plauto, Asinaria; Hobbesek De cive lanean berreskuratzen du · Babesten gaituzten legerik gabe, besteak mehatxu bat dira · «Hobbesentzat, naturazko egoeran homo homini lupus; horregatik onartzen dute gizabanakoek bakea bermatuko duen subirano bat».",
  c3t: "Eraman egunean.",
  c3: "Bi adagio astean: klasean atera dena eta zuk aukeratutako beste bat, atal honetatik edo zure irakurgaietatik. Hiruhilekoaren amaieran hogeita bost inguru izango dituzu.",
  c4t: "Errepasatu.",
  c4: "Astean behin, «Jarri zeure burua proban» moduarekin edo zure koadernoan itzulpena estaliz: esan ozen zer esan nahi duen eta zein gaitan erabiliko zenukeen. Markatu puntu batekin huts egiten dituzunak eta itzuli haietara hurrengo astean.",
  c5t: "Erabili idaztean.",
  c5: "Iruzkin edo disertazio batean, adagio batek hasieran funtzionatzen du, arazoa aurkezteko, edo amaieran, tesia ixteko. Ez jarri testu bakoitzeko bat edo bi baino gehiago eta azaldu beti: «Plautok idatzi zuen bezala, eta Hobbesek errepikatuko zuen bezala, homo homini lupus: …». Zergatik datorren harira azaltzen ez badakizu, ez jarri."
};
const adgT = (k, v) => String(ADG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

const ADG_AMB = ["saber", "realidad", "etica", "politica", "gizaki"];
/* pensadores con ficha en Ilustres: nombre tal como aparece en los textos → id (solo se enlaza si la ficha existe en esta web) */
const ADG_ILU = [
  ["Agustin Hiponakoa", "agustin"], ["Anselmo Canterburykoa", "anselmo"], ["Tomas Akinokoa", "tomas"], ["Francis Bacon", "francis_bacon"],
  ["Erasmo Rotterdamgoa", "erasmo"], ["Erasmo", "erasmo"], ["Sokrates", "socrates"], ["Platon", "platon"], ["Aristoteles", "aristoteles"],
  ["Heraklito", "heraclito"], ["Parmenides", "parmenides"], ["Protagoras", "protagoras"], ["Epikuro", "epicuro"], ["Seneka", "seneca"],
  ["Tertuliano", "tertuliano"], ["Ockham", "ockham"], ["Makiavelo", "maquiavelo"], ["Hobbes", "hobbes"], ["Spinoza", "spinoza"],
  ["Locke", "locke"], ["Leibniz", "leibniz"], ["Kant", "kant"], ["Heidegger", "heidegger"]
];
let adgAmb = "all", adgPrueba = false;

function adgEsc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function adgBox(){ return document.getElementById("adagiosbox"); }
function adgHayIlu(id){ return typeof ILUSTRES !== "undefined" && ILUSTRES[id] && typeof loadIlustre === "function"; }

/* texto escapado con el primer nombre de cada pensador convertido en botón (hechos = los ya enlazados en la ficha) */
function adgNombres(txt, hechos){
  let s = adgEsc(txt);
  ADG_ILU.forEach(([n, id]) => {
    if (hechos.has(id) || !adgHayIlu(id)) return;
    /* seguido de un número de pasaje es el título de una obra (Platón, «Protágoras 343b»), no la persona */
    const rx = new RegExp("(^|[^\\p{L}>])(" + n + ")(?![\\p{L}<])(?!\\s*\\d)", "u");
    if (!rx.test(s)) return;
    s = s.replace(rx, (m, a, b) => a + '<button class="adg-ilu" data-ilu="' + id + '" title="' + adgEsc(adgT("verBio", { n: ILUSTRES[id].name })) + '">' + b + '</button>');
    hechos.add(id);
  });
  return s;
}

function adgFiltro(){
  const f = document.getElementById("adagiosfilter");
  if (!f) return;
  f.innerHTML = '<div class="fgroup"><span class="flabel">' + adgT("ambito") + '</span>' +
    ["all"].concat(ADG_AMB).map(a => '<button class="fbtn" data-adg-a="' + a + '" aria-pressed="' + (a === adgAmb) + '">' +
      adgT(a === "all" ? "todos" : a) + '</button>').join("") + '</div>' +
    '<div class="fgroup"><span class="flabel">' + adgT("modo") + '</span>' +
    [["leer", false], ["prueba", true]].map(m => '<button class="fbtn" data-adg-m="' + m[0] + '" aria-pressed="' + (adgPrueba === m[1]) + '">' + adgT(m[0]) + '</button>').join("") + '</div>';
  f.querySelectorAll("[data-adg-a]").forEach(b => b.addEventListener("click", () => { adgAmb = b.dataset.adgA; adgFiltro(); adgRender(); }));
  f.querySelectorAll("[data-adg-m]").forEach(b => b.addEventListener("click", () => { adgPrueba = b.dataset.adgM === "prueba"; adgFiltro(); adgRender(); }));
}

function adgTemas(a){
  if (typeof THEORY === "undefined") return "";
  const ts = (a.t || []).filter(k => THEORY[k]);
  if (!ts.length) return "";
  return '<p class="adg-temas"><span class="adg-k">' + adgT("temas") + '</span> ' +
    ts.map(k => '<button class="adg-tema" data-th="' + adgEsc(k) + '" title="' + adgEsc(THEORY[k].title) + '">' + adgEsc(THEORY[k].title) + '</button>').join("") + '</p>';
}

function adgFicha(a){
  const h = new Set(), N = t => adgNombres(t, h);
  /* (09-10) el original (latín y, si lo hay, griego transliterado) solo se ve al pulsar λ, en la línea del español */
  const lb = adgT(a.gr ? "originalBtnGr" : "originalBtn");
  return '<article class="adg-card' + (adgPrueba ? ' adg-oculta' : '') + '" id="adg-' + adgEsc(a.id) + '" data-ep="' + adgEsc(a.e) + '">' +
    (a.img ? '<figure class="adg-fig' + (a.fit === "contain" ? ' adg-fig-c' : '') + '"><img src="' + adgEsc(a.img) + '" alt="' + adgEsc(a.pie) + '" loading="lazy" decoding="async"><figcaption>' + N(a.pie) + '</figcaption></figure>' : '') +
    '<h2 class="adg-es">' + adgEsc(a.es) + '<button type="button" class="adg-lam" aria-expanded="false" aria-label="' + lb + '" title="' + lb + '">λ</button></h2>' +
    '<div class="adg-orig" hidden><p class="adg-la"><span class="adg-k">' + adgT("latin") + '</span> <i lang="la">' + adgEsc(a.la) + '</i></p>' +
    (a.gr ? '<p class="adg-gr"><span class="adg-k">' + adgT("griego") + '</span> <span lang="grc">' + adgEsc(a.gr) + '</span> (<i>' + adgEsc(a.tr) + '</i>)</p>' : '') + '</div>' +
    (adgPrueba ? '<p class="adg-ayuda">' + adgT("pruebaAyuda") + '</p><button class="adg-desc" aria-expanded="false">' + adgT("descubrir") + '</button>' : '') +
    '<div class="adg-cuerpo">' +
      '<p class="adg-sen"><span class="adg-k">' + adgT("sentido") + '</span> ' + N(a.sen) + '</p>' +
      (a.uso ? '<p class="adg-uso"><span class="adg-k">' + adgT("uso") + '</span> ' + N(a.uso) + '</p>' : '') +
      (a.trampa ? '<p class="adg-trampa"><strong>' + adgT("trampa") + '.</strong> ' + N(a.trampa) + '</p>' : '') +
      '<p class="adg-o"><span class="adg-k">' + adgT("origen") + '</span> ' + N(a.o) + (a.er ? '. ' + N(adgT("erasmo", { n: a.er })) : '') + '.</p>' +
      adgTemas(a) +
    '</div></article>';
}

function adgHistoria(){
  const h = new Set(), p = k => '<p>' + adgNombres(adgT(k), h) + '</p>';
  return '<details class="adg-guia"><summary>' + adgT("hTit") + '</summary>' + p("h1") +
    '<h3>' + adgT("h2t") + '</h3>' + p("h2") + '<h3>' + adgT("h3t") + '</h3>' + p("h3") + p("h3b") +
    '<h3>' + adgT("h4t") + '</h3>' + p("h4") + p("h4b") +
    '<div class="adg-mont">' + [["montaigne_divisa", "pieDivisa"], ["montaigne_medalla", "pieMedalla"]].map(([f, k]) =>
      '<figure><img src="media/galeria_museo/adagios/' + f + '.jpg" alt="' + adgEsc(adgT(k)) + '" loading="lazy"><figcaption>' + adgT(k) + '</figcaption></figure>').join("") + '</div></details>' +
    '<details class="adg-guia"><summary>' + adgT("cTit") + '</summary><p>' + adgT("c0") + '</p><ol>' +
    '<li><strong>' + adgT("c1t") + '</strong> ' + adgT("c1") + '</li>' +
    '<li><strong>' + adgT("c2t") + '</strong><ol type="a">' + ["c2a", "c2b", "c2c", "c2d", "c2e"].map(k => '<li>' + adgT(k) + '</li>').join("") + '</ol>' +
      '<p class="adg-ej"><strong>' + adgT("cEjT") + '</strong> ' + adgNombres(adgT("cEj"), new Set()) + '</p></li>' +
    ["c3", "c4", "c5"].map(k => '<li><strong>' + adgT(k + "t") + '</strong> ' + adgT(k) + '</li>').join("") + '</ol></details>';
}

function adgRender(){
  const box = adgBox();
  if (!box) return;
  const l = ADAGIOS.filter(a => adgAmb === "all" || a.amb === adgAmb);
  box.innerHTML = '<div class="adg-grid">' + l.map(adgFicha).join("") + '</div>' +
    '<p class="adg-cuenta">' + (l.length === 1 ? adgT("cuenta1") : adgT("cuenta", { n: l.length })) + '</p>' + adgHistoria();
}

/* clics delegados (la caja se repinta con cada filtro) */
(() => {
  const box = adgBox();
  if (!box) return;
  box.addEventListener("click", e => {
    const d = e.target.closest(".adg-desc");
    if (d){ const c = d.closest(".adg-card"), oc = c.classList.toggle("adg-oculta");
      d.textContent = adgT(oc ? "descubrir" : "ocultar"); d.setAttribute("aria-expanded", String(!oc)); return; }
    const l = e.target.closest(".adg-lam");
    if (l){ const g = l.closest(".adg-card").querySelector(".adg-orig"); g.hidden = !g.hidden; l.setAttribute("aria-expanded", String(!g.hidden)); return; }
    const i = e.target.closest("[data-ilu]");
    if (i){ (window.show || show)("ilustres"); loadIlustre(i.dataset.ilu); return; }
    const t = e.target.closest("[data-th]");
    if (t){ (window.show || show)("teoria"); if (typeof window.loadTheory === "function") window.loadTheory(t.dataset.th); }
  });
})();

function loadAdagios(arg){
  const id = String(arg || "").split("/")[0];
  const a = ADAGIOS.find(x => x.id === id);
  if (a && adgAmb !== "all" && a.amb !== adgAmb){ adgAmb = "all"; adgFiltro(); }
  adgRender();
  const el = a && document.getElementById("adg-" + a.id);
  /* tras pintar: show() sube al principio de la vista y el enrutado inicial llega después */
  if (el){ el.classList.add("adg-marca"); setTimeout(() => el.scrollIntoView({ block: "center" }), 80); setTimeout(() => el.classList.remove("adg-marca"), 2600); }
}
window.loadAdagios = loadAdagios;
if (adgBox() && typeof ADAGIOS !== "undefined"){ adgFiltro(); adgRender(); }
