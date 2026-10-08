"use strict";
/* ===== La República ===== juego de diseño de la ciudad de Platón (v4) =====
   Diseñas una ciudad con perfiles (+/−). Cada persona tiene TRES VIRTUDES del alma:
   Sabiduría-Justicia (SJ ⚖️), Valentía (V 🛡️) y Templanza (T 🍷). Coste = suma de las 3.
     · Guardián: las tres virtudes ≥4  (444 → máx. 555)
     · Guerrero: valentía y templanza ≥4  (x44 → máx. 355)
     · Productor: templanza ≥4  (xx4 → máx. 335)
   La PRODUCCIÓN 🌾 NO es una virtud: es un stat DE LA CIUDAD. Solo la generan los
   productores (cada uno alimenta a 2 personas) y debe cubrir a toda la población.
   Luego, tantos turnos como cartas del mazo (Real 8 / Fácil 7), fundados en
   Platón/Aristóteles, con penalizaciones graduadas y ULTRAEXIGENTES (un diseño
   casi perfecto también cae), eventos positivos, eventos que MATAN ciudadanos,
   penalización creciente a las ciudades de menos de 30 habitantes y CARTAS DEL
   DESTINO (peste, guerra, terremoto, muerte del fundador): sucesos inevitables
   que golpean a cualquier ciudad — la fortuna/necesidad que ni la polis justa
   evita. El mazo siempre incluye varias (Real 3 / Fácil 2). Las acciones son
   la tabla de salvación de quien diseñó mal. */

const REP_ARM0 = 10, REP_START = 10, REP_TARGET = 30;   // armonía: empieza en 10 (referencia de la barra); NO tiene techo, puede subir por encima
const REP_FATE = ["peste","guerra","terremoto","fundador"];   // cartas del destino (daño inevitable)
const REP_AP0 = 6;
const REP_OUT = 2;   // cada productor alimenta (produce para) 2 personas
const REP_MODES = {
  facil: { name:"Erraza", budget:265, ratio:false, deck:7 },
  real:  { name:"Erreala",  budget:225, ratio:true,  deck:8 }
};
const REP_ROSTER = {
  Z: [ { id:"z_recto", name:"Zaindari zuzenak", sj:4,v:4,t:4, note:"hiru bertuteak gutxienekoan" },
       { id:"z_sabio", name:"Zaindari jakintsuak", sj:5,v:4,t:4, note:"jakinduria-justizia gehiago" },
       { id:"z_pleno", name:"Zaindari osoak", sj:5,v:5,t:5, note:"bertute gorena" } ],
  G: [ { id:"g_tropa", name:"Gerlariak", sj:1,v:4,t:4, note:"oinarrizkoa" },
       { id:"g_vet", name:"Beteranoak", sj:2,v:5,t:4, note:"eskarmentudunak" },
       { id:"g_heroe", name:"Heroiak", sj:3,v:5,t:5, note:"onenak" } ],
  E: [ { id:"labriego", name:"Nekazariak", sj:1,v:1,t:4, note:"lan egiten duen herria" },
       { id:"diligente", name:"Ekoizle saiatuak", sj:2,v:2,t:5, note:"neurritsuak eta langileak" } ]
};
const REP_IMG = "media/juegos/platon/";
const REP_ACTS = [
  { id:"moviliza", name:"Mobilizazioa", ap:2, img:"ac-agoge", d:"Ekoizle bat gerlari gisa prestatzen da.", ok:()=>rep.t.E.n>1,
    run:()=>{ repMove("E","G",1); } },
  { id:"heroismo", name:"Heroismoa", ap:1, img:"ac-heroismo", d:"Txanda honetan, gerlariek ×1,5 balio dute.", ok:()=>!rep.t.hero, run:()=>{ rep.t.hero=true; } },
  { id:"educacion", name:"Hezkuntza-erreforma", ap:1, img:"ac-ejemplo", d:"Zaindariek jakinduria-justizia irabazten dute (+3).", run:()=>{ rep.t.Z.sj+=3; if(rep.t.Z.max<5)rep.t.Z.max=5; rep.t.Z.just=rep.t.Z.n; } },
  { id:"cosecha", name:"Ekoizpenari bultzada", ap:1, img:"ac-vida", d:"Hiriak elikagai gehiago ekoizten du (+8 ekoizpen).", run:()=>{ rep.t.prodBonus=(rep.t.prodBonus||0)+8; } },
  { id:"purga", name:"Ustelen garbiketa", ap:2, img:"ac-politica", d:"Harmonia-puntu 1 berreskuratzen duzu.", run:()=>{ rep.armonia=Math.round((rep.armonia+1)*10)/10; } }
];

const rep = repFresh();
function repFresh(){ return { mode:"real", acciones:"si", cnt:{}, armonia:REP_START, turn:0, turns:8, deck:[], resolved:false, nZ:0,nG:0,nE:0, t:null, ap:0, apTurn:0, used:new Set(), log:[], turnActs:[], designText:"" }; }
function repBox(){ return document.getElementById("repbox"); }
function cost(c){ return c.sj+c.v+c.t; }
function repShuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

// ---- estado de la ciudad diseñada ----
function repCompute(){
  const cls={}; let pts=0;
  ["Z","G","E"].forEach(k=>{ let n=0,sj=0,v=0,t=0,max=0,just=0;
    REP_ROSTER[k].forEach(c=>{ const q=rep.cnt[c.id]||0; if(q){ n+=q; pts+=cost(c)*q; sj+=c.sj*q; v+=c.v*q; t+=c.t*q; max=Math.max(max,c.sj); if(c.sj>=5)just+=q; } });
    cls[k]={n,sj,v,t,max,just}; });
  rep.nZ=cls.Z.n; rep.nG=cls.G.n; rep.nE=cls.E.n; rep._cls=cls;
  const pop=cls.Z.n+cls.G.n+cls.E.n, prod=REP_OUT*cls.E.n;
  return { nZ:cls.Z.n, nG:cls.G.n, nE:cls.E.n, pop, pts, prod };
}
function repLegal(){
  const s=repCompute(); const m=REP_MODES[rep.mode]; const errs=[];
  if(s.nZ<1||s.nG<1||s.nE<1) errs.push("Gutxienez zaindari bat, gerlari bat eta ekoizle bat egon behar dira.");
  if(s.pts>m.budget) errs.push("Aurrekontua gainditzen duzu ("+s.pts+"/"+m.budget+" puntu).");
  if(m.ratio && s.nE < 2*(s.nZ+s.nG)) errs.push("Platonen araua: ekoizleek ("+s.nE+") ≥ 2×(zaindariak+gerlariak) = "+2*(s.nZ+s.nG)+" izan behar dute.");
  return { ok:errs.length===0, errs, s };
}

// ---- durante la partida: totales derivados y muertes ----
function T(){ return rep.t; }
function repPop(){ return rep.t.Z.n+rep.t.G.n+rep.t.E.n; }
function repNGeff(){ return rep.t.hero ? rep.t.G.n*1.5 : rep.t.G.n; }
function repSum(stat){ return rep.t.Z[stat]+rep.t.G[stat]+rep.t.E[stat]; }
function repProd(){ return REP_OUT*rep.t.E.n + (rep.t.prodBonus||0); }   // producción de la CIUDAD (solo productores)
function repKill(cls,n){ const c=rep.t[cls]; if(c.n<=0)return 0; const k=Math.min(n,c.n); const f=(c.n-k)/c.n;
  c.sj*=f; c.v*=f; c.t*=f; c.just=Math.round(c.just*f); c.n-=k; return k; }
function repMove(a,b,n){ const A=rep.t[a],B=rep.t[b]; if(A.n<n)return; const proto=REP_ROSTER[b][0];
  const fa=(A.n-n)/A.n; A.sj*=fa;A.v*=fa;A.t*=fa; A.n-=n;
  B.n+=n; B.sj+=proto.sj*n; B.v+=proto.v*n; B.t+=proto.t*n; }

/* ================= EVENTOS (v4) — d: cambio de armonía (± ); kill:{cls,n}; ================= */
const F=Math.floor;
const REP_EVENTS = [
  // — negativos graduados (Platón, República) —
  { id:"rebelion", name:"Ekoizleen matxinada", src:"Errep. IV", img:"ev-matxinada",
    threat:"Ekoizle gehiegi gerlarien aldean: X = (ekoizleak − gerlariak) ÷ 4.",
    effect:()=>{ const x=F(Math.max(0,rep.t.E.n-rep.t.G.n)/4); return { d:-x, msg:x?("Matxinada: −"+x):"Jendetza kontrolpean dago." }; } },
  { id:"golpe", name:"Estatu-kolpea", src:"Errep. VIII", img:"ev-golpe",
    threat:"Gobernua baino askoz indartsuagoa den armada batek estatu-kolpea ematen du (zaindari bat hiltzen du).",
    effect:()=>{ if(repNGeff()>rep.t.Z.n*3){ const k=repKill("Z",1); return { d:-3, msg:"Kolpea! −3 eta "+k+" zaindari hiltzen da." }; }
      if(rep.t.G.n>rep.t.Z.n*2) return { d:-1, msg:"Tentsio militarra: −1." }; return { d:0, msg:"Armadak gobernua errespetatzen du." }; } },
  { id:"corrupcion", name:"Ustelkeria", src:"Errep. I", img:"ev-corrupcion",
    threat:"Puntu 1 galtzen duzu guztiz zuzena ez den zaindari bakoitzeko (JJ<5).",
    effect:()=>{ const x=rep.t.Z.n-rep.t.Z.just; return { d:-x, msg:x?("−"+x+" zaindari ez-zuzenengatik"):"Zure zaindari guztiak zuzenak dira." }; } },
  { id:"caverna", name:"Itzalak kobazuloan", src:"Errep. VII", img:"ev-sabiduria",
    threat:"Polisaren batez besteko jakinduria-justizia baxua bada (<3,8), itzalen artean jarraitzen du.",
    effect:()=>{ const avg=repSum("sj")/Math.max(1,repPop()); return avg<3.8 ? { d:-2, msg:"Ezjakintasuna: −2." } : { d:0, msg:"Hiriak argia bilatzen du." }; } },
  // — Aristóteles / muertes / tamaño —
  { id:"ataque", name:"Kanpoko erasoa", src:"Pol. VII", img:"ev-ataque",
    threat:"Defendatzaile gutxi badaude (gerlariak < ekoizleak ÷ 2,5), etsaia sartu eta hil egiten du.",
    effect:()=>{ if(repNGeff() < rep.t.E.n/2.5){ const k=repKill("G",F(rep.t.G.n/4))+repKill("E",F(rep.t.E.n/12)); return { d:-2, msg:"Inbasioa: −2"+(k?" eta "+k+" herritar hiltzen dira.":".") }; } return { d:0, msg:"Defentsak eutsi egiten du." }; } },
  { id:"peste", name:"Izurritea", src:"Patua", img:"ev-hambruna", fate:true,
    threat:"Epidemia batek jendetza jotzen du: ekoizle eta gerlarien zati bat hiltzen du.",
    effect:()=>{ const k=repKill("E",F(rep.t.E.n/5))+repKill("G",F(rep.t.G.n/8)); return { d:-2, msg:"Izurritea: −2 eta "+k+" herritar hiltzen dira." }; } },
  { id:"hambruna", name:"Gosetea", src:"Pol. I", img:"ev-hambruna",
    threat:"Ekoizpen-tarte zabalik gabe (soberakina < biztanleriaren % 10), gosea eta heriotzak daude.",
    effect:()=>{ const margin=repPop()*0.1, surplus=repProd()-repPop(); if(surplus<margin){ const x=F((margin-surplus)/3)||1, k=repKill("E",F(Math.max(0,-surplus)/6)); return { d:-x, msg:"Gosea: −"+x+(k?" eta "+k+" ekoizle hiltzen dira.":".") }; } return { d:0, msg:"Ekoizpenak hiria elikatzen du." }; } },
  { id:"menguada", name:"Hiri txikitua", src:"Pol. I", img:"ev-ataque",
    threat:"Polis txiki bat ez da bere kabuz moldatzen: 30 biztanletik behera, zenbat eta gutxiago, okerrago (÷2).",
    effect:()=>{ const x=F(Math.max(0,REP_TARGET-repPop())/2); return { d:-x, msg:x?("Ahultasuna ("+repPop()+" biz.): −"+x):"Hiri autosufizientea." }; } },
  // — positivos —
  { id:"alianza", name:"Merkataritza-aliantza", src:"Errep.", img:"ev-corrupcion",
    threat:"Ekoizleak gehiengoa badira (≥% 60), merkataritza loratzen da.",
    effect:()=>{ return rep.t.E.n >= 0.6*repPop() ? { d:2, msg:"Merkataritza oparoa: +2." } : { d:0, msg:"Ekoizleen gehiengorik ez." }; } },
  { id:"victoria", name:"Garaipen militarra", src:"—", img:"ev-golpe",
    threat:"Armada indartsu batek (gerlariak ≥ zaindariak ×3) gerra bat irabazten du.",
    effect:()=>{ return repNGeff() >= rep.t.Z.n*3 ? { d:1, msg:"Garaipena: +1." } : { d:0, msg:"Irabazteko indarrik ez." }; } },
  { id:"reforma", name:"Erreforma zuzena", src:"Errep.", img:"ev-sabiduria",
    threat:"Zure zaindariak guztiz zuzenak badira (batez besteko JJ ≥5), harmonia berreskuratzen duzu.",
    effect:()=>{ return (rep.t.Z.sj/Math.max(1,rep.t.Z.n))>=5 ? { d:2, msg:"Gobernu ona: +2." } : { d:0, msg:"Goian justizia osoa falta da." }; } },
  { id:"cosecha", name:"Uzta oparoa", src:"—", img:"ev-hambruna",
    threat:"Hiriak soberan ekoizten badu (soberakina ≥ biztanleriaren % 40), oparotasuna dago.",
    effect:()=>{ return (repProd()-repPop()) >= repPop()*0.4 ? { d:2, msg:"Soberakina: +2." } : { d:0, msg:"Soberakin nabarmenik ez." }; } },
  // — Atenas y su historia (contexto de Platón y Aristóteles) —
  { id:"delos", name:"Delosko Liga", src:"Historia", img:"ev-delos",
    threat:"Itsas armada indartsu batekin (gerlariak ≥ ekoizleak ÷ 2,5), aliatuek zerga ordaintzen dute; bestela, altxatu egiten dira.",
    effect:()=>{ return repNGeff() >= rep.t.E.n/2.5 ? { d:2, msg:"Aliatuen zerga: +2." } : { d:-1, msg:"Aliatuak altxatu egiten dira: −1." }; } },
  { id:"esparta", name:"Espartaren inbasioa", src:"Peloponesoko gerra", img:"ev-esparta",
    threat:"Espartak soroak suntsitzen ditu. Defendatzaileak urriak badira (gerlariak < ekoizleak ÷ 3), sarraski bat da.",
    effect:()=>{ if(repNGeff() < rep.t.E.n/3){ const k=repKill("E",F(rep.t.E.n/8))+repKill("G",F(rep.t.G.n/6)); return { d:-3, msg:"Suntsipena: −3 eta "+k+" herritar hiltzen dira." }; } return { d:-1, msg:"Harresien atzean eusten duzu: −1." }; } },
  { id:"socrates", name:"Sokratesen epaiketa", src:"Apologia", img:"ev-socrates",
    threat:"Hiriak bere gizonik jakintsuena epaitzen du. Guztiz jakintsua den zaindaririk gabe (JJ 5), kondenatu egiten du.",
    effect:()=>{ return rep.t.Z.max>=5 ? { d:1, msg:"Jakinduriak absolbitzen du: +1." } : { d:-2, msg:"Jakintsuena kondenatzen dute: −2." }; } },
  { id:"pericles", name:"Periklesen handinahia", src:"Historia", img:"ev-pericles",
    threat:"Buruzagi bikain batek obra handiei ekiten die. Zaindari neurtuekin (batez besteko neurritasuna ≥4,5) urrezko aroa da; neurririk gabe, hybris.",
    effect:()=>{ const tavg=rep.t.Z.t/Math.max(1,rep.t.Z.n); return tavg>=4.5 ? { d:2, msg:"Periklesen urrezko aroa: +2." } : { d:-2, msg:"Handinahi neurrigabea (hybris): −2." }; } },
  { id:"sofistas", name:"Sofisten gorakada", src:"Gorgias", img:"ev-sofistas",
    threat:"Erretorikaren maisuek gazteria liluratzen dute. Zure zaindarien 3/4 baino gutxiago guztiz zuzenak badira, irabazi egiten dute.",
    effect:()=>{ return rep.t.Z.just >= rep.t.Z.n*0.75 ? { d:1, msg:"Filosofoek gezurtatzen dituzte: +1." } : { d:-2, msg:"Erlatibismoak hiria usteltzen du: −2." }; } },
  { id:"timocracia", name:"Timokrazia", src:"Errep. VIII", img:"ev-timocracia",
    threat:"Gerlariek zaindariak 1,5× gainditzen badituzte, ohoreak arrazoia ordezkatzen du.",
    effect:()=>{ return rep.t.G.n > rep.t.Z.n*1.5 ? { d:-2, msg:"Hiria timokrazian endekatzen da: −2." } : { d:1, msg:"Arrazoiak agintzen jarraitzen du: +1." }; } },
  { id:"oraculo", name:"Orakulu kezkagarria", src:"Delfos", img:"ev-oraculo",
    threat:"Pitiak iragarpen anbiguo bat ematen du. Patua, oraingoan, ez dago zure hiriaren esku.",
    effect:()=>{ return rep.rng<0.55 ? { d:-2, msg:"Iragarpen beltza: −2." } : { d:1, msg:"Iragarpen aldekoa: +1." }; } },
  // — CARTAS DEL DESTINO (inevitables: golpean a cualquier ciudad, se diseñe como se diseñe) —
  { id:"guerra", name:"Gerra luzea", src:"Patua", img:"ev-guerra", fate:true,
    threat:"Hiri bat ere ez da gerratik libratzen: polisa higatzen du eta gerlarien bizitzak kostatzen ditu.",
    effect:()=>{ const k=repKill("G",F(rep.t.G.n/8)); return { d:-2, msg:"Gerrak hiria odolustu egiten du: −2"+(k?" eta "+k+" gerlari erortzen dira.":".") }; } },
  { id:"terremoto", name:"Lurrikara", src:"Patua", img:"ev-terremoto", fate:true,
    threat:"Lurrak ohartarazi gabe dardara egiten du: klaseak bereizi gabe eraisten eta hiltzen du.",
    effect:()=>{ const k=repKill("E",F(rep.t.E.n/10))+repKill("Z",F(rep.t.Z.n/12)); return { d:-2, msg:"Hiria erori egiten da: −2"+(k?" eta "+k+" pertsona hiltzen dira.":".") }; } },
  { id:"fundador", name:"Sortzailearen heriotza", src:"Patua", img:"ev-fundador", fate:true,
    threat:"Hiria sortu zuena hiltzen da: ondorengotzak inor barkatzen ez duen krisia irekitzen du.",
    effect:()=>{ return { d:-2, msg:"Ondorengotza-krisia: −2." }; } }
];

/* ---------- setup ---------- */
function renderRepStart(){
  const box=repBox(); if(!box) return; Object.assign(rep, repFresh());
  box.innerHTML='<div class="rep-wrap"><div class="rep-modes-pick" id="repModes"></div>'+
    '<div class="rep-design"><div class="rep-roster" id="repRoster"></div><aside class="rep-summary" id="repSummary"></aside></div>'+
    '<p class="ia-note">AArekin sortutako ilustrazioak</p></div>';
  drawRepModes(); drawRepRoster(); drawRepSummary();
}
function drawRepModes(){
  document.getElementById("repModes").innerHTML=
    '<span class="flabel">Zailtasuna</span>'+Object.entries(REP_MODES).map(([k,m])=>'<button class="pbtn" data-mode="'+k+'" aria-pressed="'+(k===rep.mode)+'">'+m.name+'</button>').join("")+
    '<span class="flabel" style="margin-left:.8rem">Ekintzak</span><button class="pbtn" data-acc="si" aria-pressed="'+(rep.acciones==="si")+'">Ekintzekin</button><button class="pbtn" data-acc="no" aria-pressed="'+(rep.acciones==="no")+'">Ekintzarik gabe</button>'+
    '<button class="pbtn rep-rnd" id="repRandom">🎲 Ausazkoa</button>'+
    (repHistLoad().length?'<button class="pbtn rep-hist-open" id="repHistOpen">📚 Partidak ('+repHistLoad().length+')</button>':'');
  document.querySelectorAll("#repModes [data-mode]").forEach(b=>b.addEventListener("click",()=>{ rep.mode=b.dataset.mode; drawRepModes(); drawRepSummary(); }));
  document.querySelectorAll("#repModes [data-acc]").forEach(b=>b.addEventListener("click",()=>{ rep.acciones=b.dataset.acc; drawRepModes(); }));
  const rnd=document.getElementById("repRandom"); if(rnd) rnd.addEventListener("click",repRandom);
  const ho=document.getElementById("repHistOpen"); if(ho) ho.addEventListener("click",renderRepHistory);
}
function statPips(c){ return '<span class="rep-pips">⚖️'+c.sj+' 🛡️'+c.v+' 🍷'+c.t+' <em>· '+cost(c)+'</em></span>'; }
function drawRepRoster(){
  const sec=(title,list)=>'<div class="rep-rsec"><h3>'+title+'</h3>'+list.map(c=>{ const n=rep.cnt[c.id]||0;
    return '<div class="rep-rrow prod"><div class="rep-rname">'+c.name+' <span class="rep-note">'+c.note+'</span><br>'+statPips(c)+'</div>'+
      '<div class="rep-step"><button data-esub="'+c.id+'">−</button><span class="n">'+n+'</span><button data-eadd="'+c.id+'">+</button></div></div>'; }).join("")+'</div>';
  document.getElementById("repRoster").innerHTML =
    sec("🦉 Zaindariak <span class=\"rep-floor\">hiru bertuteak ≥4</span>",REP_ROSTER.Z)+
    sec("🛡️ Gerlariak <span class=\"rep-floor\">ausardia eta neurritasuna ≥4</span>",REP_ROSTER.G)+
    sec("🌾 Ekoizleak <span class=\"rep-floor\">neurritasuna ≥4 · hiria elikatzen dute</span>",REP_ROSTER.E);
  document.querySelectorAll("#repRoster [data-eadd]").forEach(b=>b.addEventListener("click",()=>{ const id=b.dataset.eadd; rep.cnt[id]=(rep.cnt[id]||0)+1; drawRepRoster(); drawRepSummary(); }));
  document.querySelectorAll("#repRoster [data-esub]").forEach(b=>b.addEventListener("click",()=>{ const id=b.dataset.esub; if(rep.cnt[id]>0){ rep.cnt[id]--; drawRepRoster(); drawRepSummary(); } }));
}
function drawRepSummary(){
  const { ok, errs, s }=repLegal(); const m=REP_MODES[rep.mode]; const fed=s.prod>=s.pop;
  document.getElementById("repSummary").innerHTML=
    '<div class="rep-sum-h">Zure hiria</div>'+
    '<div class="rep-sum-row"><span>Biztanleria</span><b class="'+(s.pop>=REP_TARGET?"ok":"")+'">'+s.pop+(s.pop<REP_TARGET?' <small>(&lt;30: zigorra)</small>':'')+'</b></div>'+
    '<div class="rep-sum-row"><span>Puntuak</span><b class="'+(s.pts<=m.budget?"ok":"bad")+'">'+s.pts+' / '+m.budget+'</b></div>'+
    '<div class="rep-sum-classes"><span>🦉 '+s.nZ+'</span><span>🛡️ '+s.nG+'</span><span>🌾 '+s.nE+'</span></div>'+
    '<div class="rep-sum-row"><span>🌾 Ekoizpena</span><b class="'+(fed?"ok":"bad")+'">'+s.prod+' <small>vs '+s.pop+' jaten dute</small></b></div>'+
    (m.ratio?'<div class="rep-sum-row"><span>Proportzioa</span><b class="'+(s.nE>=2*(s.nZ+s.nG)?"ok":"bad")+'">ekoiz. ≥ 2×elitea</b></div>':'')+
    '<div class="rep-fate-note">🎴 Kontuz: mundua zorrotza da. Diseinu txarra zigortzen duten gertaerez gain (orain gogorragoak), karta-sortak <b>patuaren kartak</b> dakartza —izurritea, gerra, lurrikara, sortzailearen heriotza—, edozein hiri jotzen dutenak. Diseinu perfektua ere ez dago salbu; <b>ekintzak</b> dira zure salbabidea.</div>'+
    (ok?'<button class="rep-play" id="repPlay">Errepublika sortu →</button>':'<ul class="rep-errs">'+errs.map(e=>'<li>'+e+'</li>').join("")+'</ul>');
  const p=document.getElementById("repPlay"); if(p) p.addEventListener("click",repStart);
}
function repRandom(){
  const m=REP_MODES[rep.mode], pick=arr=>arr[Math.floor(Math.random()*arr.length)];
  for(let a=0;a<200;a++){ rep.cnt={};
    [REP_ROSTER.Z,REP_ROSTER.G,REP_ROSTER.E].forEach(arr=>{ rep.cnt[pick(arr).id]=1; });
    for(let g=0;g<300;g++){ const s=repCompute(); if(s.pts>=m.budget-6) break;
      const r=Math.random(), cls=r<0.7?REP_ROSTER.E:(r<0.86?REP_ROSTER.G:REP_ROSTER.Z); const c=pick(cls);
      if(s.pts+cost(c)>m.budget) continue; rep.cnt[c.id]=(rep.cnt[c.id]||0)+1; }
    if(repLegal().ok){ drawRepRoster(); drawRepSummary(); return; } }
  rep.cnt={}; rep.cnt[REP_ROSTER.Z[0].id]=1; rep.cnt[REP_ROSTER.G[0].id]=1; rep.cnt[REP_ROSTER.E[0].id]=6;
  drawRepRoster(); drawRepSummary();
}

/* ---------- turnos ---------- */
function repStart(){
  const s0=repCompute(); const c=rep._cls; rep.armonia=REP_START; rep.turn=0; rep.ap=(rep.acciones==="si")?REP_AP0:0;
  // crónica: instantánea del diseño inicial
  const parts=[]; ["Z","G","E"].forEach(k=>REP_ROSTER[k].forEach(p=>{ const q=rep.cnt[p.id]||0; if(q) parts.push(q+"× "+p.name); }));
  rep.designText=parts.join(", ")+" — "+s0.pop+" biz., "+s0.pts+" pt";
  rep.log=[];
  const n=REP_MODES[rep.mode].deck;   // Real 8 · Fácil 7 — cada carta es un turno
  rep.turns=n;
  const nFate=(rep.mode==="real")?3:2;                                  // cartas del destino inevitables por partida
  const forced=repShuffle(REP_FATE).slice(0,nFate).concat("menguada");  // + «Ciudad menguada» siempre presente
  const forcedSet=new Set(forced);
  const pool=REP_EVENTS.filter(e=>!forcedSet.has(e.id)).map(e=>e.id);   // el resto: eventos condicionales variados
  const rest=repShuffle(pool).slice(0, Math.max(0, n-forced.length));
  rep.deck=repShuffle(rest.concat(forced));
  rep.t={ Z:Object.assign({},c.Z), G:Object.assign({},c.G), E:Object.assign({},c.E), hero:false, prodBonus:0 };
  repRenderTurn();
}
function repFmt(n){ n=Math.round(n*10)/10; return Number.isInteger(n)?n:n.toFixed(1); }
function repRenderTurn(){
  rep.resolved=false; rep.apTurn=0; rep.used=new Set(); rep.turnActs=[]; rep.t.hero=false;
  rep.rng=Math.random();   // azar fijo del turno (oráculo): igual en previsualización y resolución
  const ev=REP_EVENTS.find(e=>e.id===rep.deck[rep.turn]);
  repBox().innerHTML='<div class="rep-wrap">'+
    '<div class="rep-hud"><span class="stat">Txanda <b>'+(rep.turn+1)+'</b>/'+rep.turns+'</span>'+
      '<span class="stat" title="10etik hasten zara, baina ez dago sabairik: gainetik meta dezakezu.">⚖️ Harmonia <b id="repArm">'+repFmt(rep.armonia)+'</b></span>'+
      (rep.acciones==="si"?'<span class="stat">🔧 EP <b id="repAp">'+rep.ap+'</b></span>':'')+'</div>'+
    '<div class="rep-arm'+(rep.armonia<=4?' low':'')+(rep.armonia>REP_ARM0?' over':'')+'"><i style="width:'+Math.min(100,Math.max(0,rep.armonia/REP_ARM0*100))+'%"></i></div>'+
    '<div class="rep-classes" id="repClasses"></div>'+
    '<div class="rep-city" id="repCity"></div>'+
    '<div class="rep-event reveal" id="repEvent"></div>'+
    (rep.acciones==="si"?'<div class="rep-actions-h">Ekintzak (gehienez 2 txanda honetan)</div><div class="rep-acts" id="repActs"></div>':'')+
    '<div class="rep-resolve"><button id="repResolve">Gertaerari aurre egin →</button></div></div>';
  repDrawTurn(ev);
  document.getElementById("repResolve").addEventListener("click",()=>repResolve(ev));
}
function repDrawTurn(ev){
  document.getElementById("repClasses").innerHTML=[
    { em:"🦉", l:"Zaindariak", c:rep.t.Z.n }, { em:"🛡️", l:"Gerlariak", c:rep.t.G.n+(rep.t.hero?" ×1,5":"") }, { em:"🌾", l:"Ekoizleak", c:rep.t.E.n }
  ].map(x=>'<div class="rep-class"><div class="c">'+x.em+' '+x.c+'</div><div class="l">'+x.l+'</div></div>').join("");
  // stat de CIUDAD: producción vs población
  const prod=repProd(), pop=repPop(), sur=prod-pop;
  const city=document.getElementById("repCity");
  if(city) city.innerHTML='<span class="rep-cstat">🌾 Ekoizpena <b>'+prod+'</b></span>'+
    '<span class="rep-cstat">👥 Jaten dute <b>'+pop+'</b></span>'+
    '<span class="rep-cstat rep-sur '+(sur<0?"bad":"ok")+'">'+(sur<0?"⚠ defizita ":"✓ soberakina +")+Math.abs(sur)+'</span>';
  // previsualizar el efecto sin aplicarlo (clonando rep.t)
  const snap=JSON.parse(JSON.stringify(rep.t)); const pre=ev.effect(); rep.t=snap;
  const good=pre.d>0, bad=pre.d<0; const evb=document.getElementById("repEvent");
  evb.classList.toggle("danger",bad); evb.classList.toggle("safe",!bad);
  evb.innerHTML='<img class="rep-ev-img" src="'+REP_IMG+ev.img+'.jpg" alt="">'+
    '<div class="rep-ev-body"><span class="rep-ev-tag'+(ev.fate?' fate':'')+'">'+(ev.fate?'🎴 Patuaren karta · saihestezina':'🃏 Txandako gertaera'+(ev.src&&ev.src!=="—"?' · '+ev.src:''))+'</span><h3>'+ev.name+'</h3>'+
    '<div class="threat">'+ev.threat+'</div>'+
    '<div class="rep-status '+(bad?"bad":good?"good":"ok")+'">'+(bad?"⚠ ":good?"✓ ":"• ")+pre.msg+'</div></div>';
  if(rep.acciones==="si"){ const acts=document.getElementById("repActs");
    acts.innerHTML=REP_ACTS.map(a=>{ const dis=rep.apTurn>=2||rep.used.has(a.id)||rep.ap<a.ap||(a.ok&&!a.ok());
      return '<button class="rep-act" data-act="'+a.id+'"'+(dis?" disabled":"")+'>'+(a.img?'<span class="rep-act-art"><img src="'+REP_IMG+a.img+'.jpg" alt=""></span>':'')+'<span class="rep-act-b"><b>'+a.name+' <span class="ap">'+a.ap+' EP</span></b><span class="d">'+a.d+'</span></span></button>'; }).join("");
    acts.querySelectorAll("[data-act]").forEach(b=>b.addEventListener("click",()=>repDoAct(b.dataset.act,ev))); }
}
function repDoAct(id,ev){ const a=REP_ACTS.find(x=>x.id===id);
  if(rep.apTurn>=2||rep.used.has(id)||rep.ap<a.ap||(a.ok&&!a.ok())) return;
  a.run(); rep.ap-=a.ap; rep.apTurn++; rep.used.add(id); rep.turnActs.push(a.name);
  const ael=document.getElementById("repAp"); if(ael)ael.textContent=rep.ap;
  const arm=document.getElementById("repArm"); if(arm)arm.textContent=repFmt(rep.armonia);
  document.querySelector("#republica .rep-arm > i").style.width=Math.min(100,Math.max(0,rep.armonia/REP_ARM0*100))+"%";
  repDrawTurn(ev); }
function repResolve(ev){
  if(rep.resolved) return; rep.resolved=true;
  const before=rep.armonia;
  const r=ev.effect(); const after=Math.round((before+r.d)*10)/10; rep.armonia=after;   // sin techo
  rep.log.push({ n:rep.turn+1, ev:ev.name, src:ev.src, fate:!!ev.fate, msg:r.msg, acts:rep.turnActs.slice(), before, after, Z:rep.t.Z.n, G:rep.t.G.n, E:rep.t.E.n });
  rep.turn++;
  if(rep.turn>=rep.turns || rep.armonia<=0 || repPop()<3) repResult(); else repRenderTurn();
}
/* ---------- crónica de la partida ---------- */
function repChronicleText(){
  const m=REP_MODES[rep.mode]; const L=[
    "NIRE ERREPUBLIKAREN KRONIKA — Filosofia Gela · Martín de Bertendona BHI",
    "Partida: "+(rep.gameName||"(izenik gabe)"),
    "Modua: "+m.name+" · "+(rep.acciones==="si"?"ekintzekin":"ekintzarik gabe"),
    "Hasierako diseinua: "+rep.designText, ""];
  rep.log.forEach(e=>{
    L.push("Txanda "+e.n+" — "+e.ev+(e.src&&e.src!=="—"?" ("+e.src+")":"")+(e.fate?" [patuaren karta]":""));
    L.push("   Emaitza: "+e.msg);
    if(e.acts.length) L.push("   Zure ekintzak: "+e.acts.join(", "));
    L.push("   Harmonia "+repFmt(e.before)+" → "+repFmt(e.after)+"  ·  hiria "+e.Z+"/"+e.G+"/"+e.E+" (zaindariak/gerlariak/ekoizleak)");
    L.push("");
  });
  L.push("AMAIERA: "+(rep._rank||"—")+" — "+repFmt(Math.max(0,rep.armonia))+" harmonia (oinarria "+REP_ARM0+"), "+rep.log.length+" txanda bizi ondoren.");
  return L.join("\n");
}
function repDownloadText(txt,name){
  try{ const blob=new Blob([txt],{type:"text/plain;charset=utf-8"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a");
    a.href=url; a.download=(name||"cronica")+".txt";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000);
  }catch(e){}
}
/* nombre de archivo único y legible: mi-republica-<ciudad>-AAAA-MM-DD-HHMM */
function repFileSlug(s){ return String(s||"").normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40); }
function repStamp(ts){ const d=ts?new Date(ts):new Date(); const p=n=>String(n).padStart(2,"0"); return d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate())+"-"+p(d.getHours())+p(d.getMinutes()); }
function repChronicleFilename(name,ts){ const s=repFileSlug(name); return "mi-republica"+(s?"-"+s:"")+"-"+repStamp(ts); }
function repDownloadChronicle(){ repDownloadText(repChronicleText(),repChronicleFilename(rep.gameName||rep._defaultName)); }
/* ---------- historial de partidas (localStorage) ---------- */
const REP_HIST_KEY="aula-republica-hist", REP_HIST_MAX=12;
function repHistLoad(){ try{ const h=store.get(REP_HIST_KEY,[]); return Array.isArray(h)?h:[]; }catch(e){ return []; } }
function repHistPush(rec){ try{ const h=repHistLoad(); h.unshift(rec); while(h.length>REP_HIST_MAX) h.pop(); store.set(REP_HIST_KEY,h); }catch(e){} }
/* ---- exportar / importar historial (JSON, para llevarlo entre equipos) ---- */
function repExportHistory(){
  const h=repHistLoad();
  if(!h.length){ alert("Oraindik ez dago esportatzeko gordetako partidarik."); return; }
  const data={ app:"aula-republica", version:1, exportado:new Date().toISOString(), partidas:h };
  try{ const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json;charset=utf-8"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a");
    a.href=url; a.download="republica-partidas-"+new Date().toISOString().slice(0,10)+".json";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000);
  }catch(e){ alert("Ezin izan da fitxategia sortu."); }
}
function repImportHistoryFile(file){
  if(!file) return;
  const rd=new FileReader();
  rd.onload=function(){
    let data; try{ data=JSON.parse(rd.result); }catch(e){ alert("Fitxategia ez da JSON baliozkoa."); return; }
    const arr = Array.isArray(data) ? data : (data && Array.isArray(data.partidas) ? data.partidas : null);
    if(!arr){ alert("Fitxategiak ez du Errepublikaren partidarik."); return; }
    const valid=arr.filter(r=>r && typeof r==="object" && typeof r.text==="string");
    if(!valid.length){ alert("Fitxategiak ez du partida baliozkorik."); return; }
    const cur=repHistLoad();
    const seen={}; cur.forEach(r=>{ if(r&&r.ts!=null) seen[r.ts]=true; });
    const nuevos=valid.filter(r=> r.ts==null || !seen[r.ts]);
    if(!nuevos.length){ alert("Partida horiek ordenagailu honetan zeuden jada. Ez da bat ere gehitu."); return; }
    let merged=cur.concat(nuevos);
    merged.sort((a,b)=>(b.ts||0)-(a.ts||0));
    while(merged.length>REP_HIST_MAX) merged.pop();
    store.set(REP_HIST_KEY,merged);
    alert("Inportatuak: "+nuevos.length+" partida. "+REP_HIST_MAX+" berrienak gordetzen dira.");
    renderRepHistory();
  };
  rd.onerror=function(){ alert("Ezin izan da fitxategia irakurri."); };
  rd.readAsText(file);
}
function repEsc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
const REP_NAMES=["Calípolis","Magnesia","Atenas Berria","Politeia","Eunomía","Kalonia","Aristópolis","Eguzkiaren Hiria","Sofópolis","Areté"];
function repDefaultName(){ return REP_NAMES[Math.floor(Math.random()*REP_NAMES.length)]; }
function repHistSetLatestName(name){
  const nm=(name||"").trim().slice(0,40)||rep._defaultName||"(izenik gabe)"; rep.gameName=nm;
  try{ const h=repHistLoad(); if(h.length){ h[0].name=nm; h[0].text=repChronicleText(); store.set(REP_HIST_KEY,h); } }catch(e){}
}
function renderRepHistory(){
  const box=repBox(); if(!box) return; const h=repHistLoad();
  box.innerHTML='<div class="rep-wrap"><div class="rep-hist">'+
    '<div class="rep-hist-top"><button class="btn2" id="repHistBack">← Berriro diseinatu</button><h3>📚 Gordetako partidak</h3>'+
      '<span class="rep-hist-io">'+(h.length?'<button class="btn2" id="repHistExport" title="Deskargatu zure partida guztiak JSON fitxategi batean, gordetzeko edo beste ordenagailu batera eramateko">⬆️ Esportatu</button>':'')+'<button class="btn2" id="repHistImport" title="Kargatu partidak esportatutako JSON fitxategi batetik (ordenagailu honetakoei gehitzen zaizkie, ezabatu gabe)">⬇️ Inportatu</button>'+(h.length?'<button class="btn2" id="repHistClear" title="Ezabatu nabigatzaile honetan gordetako partida guztiak (ez die esportatutako fitxategiei eragiten)">🗑️ Dena ezabatu</button>':'')+'</span>'+
      '<input type="file" id="repHistFile" accept="application/json,.json" style="display:none">'+
      '</div>'+
    (h.length? h.map((r,i)=>'<details class="rep-hist-item"><summary><span class="rep-hist-badge">'+r.emoji+'</span> '+(r.name?'<b class="rep-hist-name">'+repEsc(r.name)+'</b> · ':'')+r.rank+' · ⚖ '+r.arm+' · '+r.turns+' txanda · '+r.mode+(r.acc==="no"?" (ekintzarik gabe)":"")+' · <span class="rep-hist-date">'+r.date+'</span></summary>'+
        '<pre class="rep-hist-text">'+repEsc(r.text)+'</pre>'+
        '<div class="rep-hist-btns"><button class="btn2" data-hcopy="'+i+'">📋 Kopiatu</button><button class="btn2" data-hdl="'+i+'">💾 Deskargatu</button></div></details>').join("")
      : '<p class="rep-hist-empty">Oraindik ez duzu partidarik amaitu. Jokatu bat eta hemen gordeko da (azken '+REP_HIST_MAX+'ak gordetzen dira).</p>')+
    '</div></div>';
  document.getElementById("repHistBack").addEventListener("click",renderRepStart);
  const clr=document.getElementById("repHistClear"); if(clr) clr.addEventListener("click",()=>{ if(confirm("Gordetako partida guztiak ezabatu?")){ store.set(REP_HIST_KEY,[]); renderRepHistory(); } });
  const exp=document.getElementById("repHistExport"); if(exp) exp.addEventListener("click",repExportHistory);
  const imp=document.getElementById("repHistImport"), fi=document.getElementById("repHistFile");
  if(imp&&fi){ imp.addEventListener("click",()=>fi.click()); fi.addEventListener("change",()=>{ repImportHistoryFile(fi.files&&fi.files[0]); fi.value=""; }); }
  box.querySelectorAll("[data-hcopy]").forEach(b=>b.addEventListener("click",()=>{ const r=repHistLoad()[+b.dataset.hcopy]; if(r&&navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(r.text).then(()=>{ const o=b.textContent; b.textContent="✓ Kopiatuta!"; setTimeout(()=>{b.textContent=o;},1400); }).catch(()=>{}); } }));
  box.querySelectorAll("[data-hdl]").forEach(b=>b.addEventListener("click",()=>{ const r=repHistLoad()[+b.dataset.hdl]; if(r) repDownloadText(r.text,repChronicleFilename(r.name,r.ts)); }));
}
function repCopyChronicle(btn){
  const txt=repChronicleText();
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(()=>{ const o=btn.textContent; btn.textContent="✓ Kopiatuta!"; setTimeout(()=>{btn.textContent=o;},1600); }).catch(()=>{}); }
}
function repResult(){
  const a=rep.armonia; let emoji,rank;
  if(a<=0||repPop()<3){ emoji="💥"; rank="Errepublika hondoratu egiten da"; }
  else if(a>=8){ emoji="🏛️"; rank="Errepublika harmoniatsua"; }
  else if(a>=5){ emoji="⚖️"; rank="Errepublika egonkorra"; }
  else { emoji="⚠️"; rank="Errepublika hauskorra, baina zutik"; }
  rep._rank=rank;
  const key="aula-republica-best"; const best=store.get(key,0); const record=a>best; if(record) store.set(key,a);
  // guardar en el historial del navegador (con nombre por defecto, editable después)
  rep._defaultName=repDefaultName(); rep.gameName=rep._defaultName;
  const ts=Date.now(); let fecha; try{ fecha=new Date(ts).toLocaleString("eu-ES",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}); }catch(e){ fecha=new Date(ts).toLocaleString(); }
  repHistPush({ ts, date:fecha, name:rep.gameName, emoji, rank, mode:REP_MODES[rep.mode].name, acc:rep.acciones, arm:repFmt(Math.max(0,a)), turns:rep.log.length, text:repChronicleText() });
  const qs=["Zer erakusten du joko honek Platonen gizartean orekaren beharrari buruz?",
    "Zer arrisku dakartza gizarte-klase bakoitzaren gehiegizko botereak?",
    "Egia al da, Platonek zioen bezala, gobernari filosoforik gabe gizartea ezin dela salbatu?",
    "Merezi al du hiri zuzen batek, hura lortzeko klaseen arteko berdintasunari uko egin behar bada?"];
  const chronicle=rep.log.map(e=>{ const s=e.after-e.before, cls=s<0?"bad":s>0?"good":"ok";
    return '<li class="rep-cr-item'+(e.fate?" fate":"")+'"><div class="rep-cr-h"><span class="rep-cr-n">T'+e.n+'</span><b>'+e.ev+'</b>'+(e.fate?' <span class="rep-cr-badge">patua</span>':'')+'<span class="rep-cr-arm '+cls+'">'+repFmt(e.before)+'→'+repFmt(e.after)+'</span></div>'+
      '<div class="rep-cr-msg">'+e.msg+'</div>'+
      (e.acts.length?'<div class="rep-cr-acts">🔧 '+e.acts.join(", ")+'</div>':'')+'</li>'; }).join("");
  repBox().innerHTML='<div class="rep-wrap"><div class="rep-result">'+
    '<div class="rep-badge">'+emoji+'</div><div class="rep-rank">'+rank+'</div>'+
    '<div class="rep-final">'+repFmt(Math.max(0,a))+' <span>harmonia</span></div>'+
    '<p class="rep-pop">'+rep.log.length+' bizitako txanda · azken hiria '+rep.t.Z.n+'/'+rep.t.G.n+'/'+rep.t.E.n+' · '+(rep.acciones==="si"?"ekintzekin":"ekintzarik gabe")+' · '+(record?"zure errepublikarik onena! 🎉":"marka onena: "+repFmt(Math.max(best,a)))+'</p>'+
    '<div class="rep-name"><label for="repName">🏷️ Partida honen izena</label><input id="repName" type="text" maxlength="40" value="'+repEsc(rep.gameName)+'" placeholder="Jarri izena zure errepublikari"></div>'+
    '<div class="rep-chronicle"><div class="rep-cr-title">📜 Zure errepublikaren kronika</div><ol class="rep-cr-list">'+chronicle+'</ol></div>'+
    '<div class="rep-save"><button class="btn2" id="repSave">💾 Gorde kronika (.txt)</button><button class="btn2" id="repCopy">📋 Kopiatu kronika</button><button class="btn2" id="repHistView">📚 Ikusi historiala</button></div>'+
    '<blockquote class="rep-reflect">Pentsatzeko: '+qs[Math.floor(Math.random()*qs.length)]+'</blockquote>'+
    '<div class="rep-actions2"><button class="btn2 primary" id="repAgain">Beste hiri bat diseinatu</button></div></div></div>';
  document.getElementById("repAgain").addEventListener("click",renderRepStart);
  const sv=document.getElementById("repSave"); if(sv) sv.addEventListener("click",repDownloadChronicle);
  const cp=document.getElementById("repCopy"); if(cp) cp.addEventListener("click",()=>repCopyChronicle(cp));
  const hv=document.getElementById("repHistView"); if(hv) hv.addEventListener("click",renderRepHistory);
  const nm=document.getElementById("repName"); if(nm){ nm.addEventListener("input",()=>repHistSetLatestName(nm.value)); nm.addEventListener("focus",()=>nm.select()); }
}
function initRep(){ renderRepStart(); }
document.addEventListener("DOMContentLoaded", initRep);
(function(){ const nav=document.getElementById("tabs"); if(nav) nav.addEventListener("click", e=>{ const b=e.target.closest("button"); if(b && b.dataset.view==="republica") renderRepStart(); }); })();
