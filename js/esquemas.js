// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/esquemas.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const ESQUEMAS = {
 "AA-REL-02": {
  "subject": "hf",
  "block": "A",
  "tema": "Aristoteles",
  "title": "Aldaketaren kausak",
  "mermaid": "flowchart TD\n  center[\"ALDAKETAREN KAUSAK\"]:::axis\n  intr[\"berezkoak\"]\n  estr[\"kanpokoak\"]\n  mat[\"materiala\"]:::key\n  mat_e[\"aldaketa jasaten duen substratua\"]\n  form[\"formala\"]:::key\n  form_e[\"hartzen den itxura\"]\n  erag[\"eragilea\"]:::key\n  erag_e[\"abian jartzen duena\"]\n  xede[\"finala\"]:::key\n  xede_e[\"aldaketaren helburua\"]\n  center -->|\"hauek dira\"| intr\n  center -->|\"hauek dira\"| estr\n  intr --> mat\n  intr --> form\n  estr --> erag\n  estr --> xede\n  mat -->|\"da\"| mat_e\n  form -->|\"da\"| form_e\n  erag -->|\"da\"| erag_e\n  xede -->|\"da\"| xede_e\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "BH-REL-01": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Hume eta enpirismoa",
  "mermaid": "flowchart TD\n  n0[\"HUME\"]\n  n1[\"Ezagutzaren azterketa\"]\n  n2[\"pertzepzioak\"]:::axis\n  n3[\"inpresioak\"]\n  n4[\"ideiak\"]\n  n5[\"irudimenaren asoziazio-legeek antolatuak\"]\n  n6[\"hurbiltasuna\"]\n  n7[\"kausalitatea\"]:::key\n  n8[\"antzekotasuna\"]\n  n9[\"ezagutza faktikoa\"]:::key\n  n10[\"ideien arteko harremanak\"]:::key\n  n11[\"ohituran oinarritutako sinesmena\"]\n  n12[\"ezagutza unibertsala, beharrezkoa\"]\n  n13[\"metafisikaren eta zientziaren kritika\"]:::axis\n  n14[\"moralaren oinarria: emotibismo morala\"]:::key\n  n15[\"substantziaren ideia: mundua, jainkoa, nia\"]\n  n16[\"lotura beharrezkoaren ideia\"]\n  n17[\"sentimenduan\"]\n  n18[\"fenomenismoa\"]\n  n19[\"eszeptizismoa\"]\n  n20[\"ona\"]\n  n21[\"ekintza\"]\n  n22[\"tolerantzia: bizikidetzarako araua eta jarrera\"]\n  n23[\"itunean\"]\n  n0 --> n1\n  n1 -->|\"haren oinarria\"| n2\n  n2 -->|\"bitan banatzen dira\"| n3\n  n2 --> n4\n  n2 -->|\"honen kausa dira:\"| n5\n  n5 --> n6\n  n5 --> n7\n  n5 --> n8\n  n7 -->|\"hemen aplikatzen dira:\"| n9\n  n8 -->|\"hemen aplikatzen dira:\"| n10\n  n9 -->|\"haren oinarria\"| n11\n  n10 -->|\"osatzen dute\"| n12\n  n11 --> n13\n  n13 --> n15\n  n13 --> n16\n  n12 --> n14\n  n14 -->|\"non?\"| n17\n  n15 -->|\"sortzen du\"| n18\n  n16 -->|\"sortzen du\"| n19\n  n17 -->|\"erabakitzen du\"| n20\n  n17 --> n21\n  n19 -->|\"sortzen du\"| n22\n  n20 -->|\"adierazten da\"| n23\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "BH-REL-02": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Ezagutza Humerengan",
  "mermaid": "flowchart TD\n  ezag[\"EZAGUTZA\"]:::axis\n  lock[\"Locke eta Descartes\"]:::key\n  pertz[\"PERTZEPZIOAK\"]:::axis\n  eduk[\"buruko eduki guztiak\"]\n  inpr[\"inpresioak\"]:::key\n  trin[\"biziak eta indartsuak\"]\n  ideiak[\"ideiak\"]:::key\n  ahul[\"ahulak eta lausoak\"]\n  esper[\"ESPERIENTZIA\"]:::axis\n  desc[\"Descartes\"]:::key\n  sortz[\"jaiotzetiko ideiak, kanpotikoak eta faktizioak\"]\n  ezag -->|\"hauentzat bezala\"| lock\n  ezag -->|\"hau izatea da\"| pertz\n  pertz -->|\"hauek dira\"| eduk\n  pertz -->|\"hauek izan daitezke\"| inpr\n  pertz -->|\"hauek izan daitezke\"| ideiak\n  inpr -->|\"horrelakoak badira\"| trin\n  inpr -->|\"hauek sortzen dituzte\"| ideiak\n  ideiak -->|\"horrelakoak badira\"| ahul\n  pertz -->|\"jatorri hau dute\"| esper\n  esper -->|\"honen aldean\"| desc\n  desc -->|\"hau onartzen zuena\"| sortz\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CK-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Kant eta Ilustrazioa",
  "mermaid": "flowchart TD\n  n0[\"KANTEN FILOSOFIA\"]\n  n1[\"Zer da gizakia?\"]\n  n2[\"Zer ezagut dezaket?\"]:::axis\n  n3[\"Zer egin behar dut?\"]:::axis\n  n4[\"Zer espero dezaket?\"]:::axis\n  n5[\"askatasuna\"]\n  n6[\"arimaren hilezkortasuna\"]\n  n7[\"Jainkoaren existentzia\"]\n  n8[\"moralitatearen baldintza\"]\n  n9[\"betebeharra betetzearen bermea\"]\n  n10[\"ongi gorenaren bermea: bertutea + zoriontasuna\"]\n  n11[\"zientziaren egitatetik abiatzea\"]\n  n12[\"egitate moraletik abiatzea\"]\n  n13[\"arrazoiaren erabilera teorikoa\"]\n  n14[\"arrazoiaren erabilera praktikoa\"]\n  n15[\"haren baldintzak\"]\n  n16[\"haren mugak\"]\n  n17[\"a priori baldintzak: lege moralaren unibertsalak\"]\n  n18[\"a priori baldintza formalak\"]\n  n19[\"baldintza materialak: esperientzia\"]\n  n20[\"betebeharrean legearen forma gisa\"]\n  n21[\"sentimenarena\"]\n  n22[\"adimenarena\"]\n  n23[\"arrazoiarena\"]\n  n24[\"inperatibo kategorikoan\"]:::key\n  n25[\"a priori formak: espazioa eta denbora\"]:::key\n  n26[\"kategoriak\"]:::key\n  n27[\"ideiak\"]\n  n0 --> n1\n  n1 --> n2\n  n2 -->|\"ahalbidetzen du\"| n3\n  n3 -->|\"postulatzen du\"| n4\n  n4 --> n5\n  n4 --> n6\n  n4 --> n7\n  n5 --> n8\n  n6 --> n9\n  n7 --> n10\n  n2 --> n11\n  n3 --> n12\n  n11 -->|\"aztertzeko\"| n13\n  n12 -->|\"aztertzeko\"| n14\n  n13 -->|\"ahalbidetzen du\"| n14\n  n13 --> n15\n  n13 -->|\"haiek osatzen dituzte\"| n16\n  n14 -->|\"haiek ezartzen ditu\"| n17\n  n15 -->|\"zeren sintesi dira?\"| n18\n  n18 --> n21\n  n18 --> n22\n  n18 --> n23\n  n21 --> n25\n  n22 --> n26\n  n23 --> n27\n  n19 -->|\"ez da ezagutza, alde batera uzten baititu\"| n16\n  n17 -->|\"haiek aurkitzen ditu\"| n20\n  n20 -->|\"adierazten da\"| n24\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CK-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Ezagutza sentigarria (Kant)",
  "mermaid": "flowchart TD\n  erreal[\"ERREALITATEA\"]:::axis\n  gbera[\"gauza bere baitan\"]:::key\n  noum[\"noumenoa\"]:::key\n  kaos[\"sentsazioen kaosa\"]:::axis\n  subj[\"subjektua\"]:::key\n  forma[\"sentimenaren a priori formak\"]:::axis\n  puru[\"intuizio hutsak\"]:::key\n  espa[\"espazioa eta denbora\"]\n  objl[\"ezagutza sentigarriaren objektua\"]:::key\n  enp[\"intuizio enpirikoa\"]\n  fen[\"fenomeno sentigarria\"]\n  niret[\"gauza niretzat\"]\n  erreal -->|\"da\"| gbera\n  erreal -->|\"da\"| noum\n  erreal -->|\"bidaltzen du\"| kaos\n  kaos -->|\"hura osatzen dute\"| objl\n  objl -->|\"horrela deitzen da\"| enp\n  enp -->|\"edo\"| fen\n  fen -->|\"hau da\"| niret\n  kaos -->|\"haiek antolatzen dituzte\"| forma\n  forma -->|\"horrela deitzen dira\"| puru\n  puru -->|\"hauek dira\"| espa\n  subj -->|\"haiek ditu\"| forma\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CC-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Comte: gizartea, hiru egoeren legea eta zientzia positiboa",
  "mermaid": "flowchart TD\n  co[\"COMTE\"]\n  giz[\"GIZARTEA\"]:::axis\n  ord[\"ORDENA\"]:::key\n  aur[\"AURRERAPENA\"]:::key\n  lege[\"HIRU EGOEREN LEGEA\"]:::axis\n  teo[\"teologikoa\"]\n  met[\"metafisikoa\"]\n  pos[\"POSITIBOA\"]:::key\n  zient[\"ZIENTZIA\"]:::key\n  gert[\"GERTAERAK ETA LEGEAK\"]:::key\n  feno[\"fenomenoak haietatik azaltzen ditu\"]\n  co --> giz\n  giz -->|\"bi printzipiok antolatua\"| ord\n  giz -->|\"bi printzipiok antolatua\"| aur\n  ord -->|\"honi jarraituz\"| lege\n  aur -->|\"honi jarraituz\"| lege\n  lege --> teo\n  lege --> met\n  lege --> pos\n  pos -->|\"hortik\"| zient\n  zient -->|\"ikertzen du\"| gert\n  gert --> feno\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CM-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Hegel eta Karl Marx",
  "mermaid": "flowchart TD\n  n0[\"MARXEN FILOSOFIA\"]:::axis\n  n1[\"filosofia alemana\"]\n  n2[\"ekonomia politikoa\"]\n  n3[\"sozialismo utopikoa\"]\n  n4[\"Hegel\"]\n  n5[\"Smith, Ricardo\"]\n  n6[\"Owen · Saint-Simon · Fourier\"]\n  n7[\"Feuerbach\"]\n  n8[\"dialektika\"]\n  n9[\"materialismoa\"]\n  n10[\"balio-lanaren teoria\"]\n  n11[\"sozialismoa\"]\n  n12[\"gizakia\"]\n  n13[\"natura\"]\n  n14[\"historia\"]\n  n15[\"jarduera sortzailea: lana\"]\n  n16[\"bere bizitza gizartean sortzen du\"]\n  n17[\"tresnen sorkuntza (teknologia)\"]\n  n18[\"produkzio-indarra hazi egiten da\"]\n  n19[\"harreman kontraesankorra\"]\n  n20[\"produkzio-harremanak aldatzen ditu\"]\n  n21[\"jabetza-harremanak\"]\n  n22[\"produkzio-modu kapitalista\"]\n  n23[\"produkzio-bitartekoen jabetza pribatua\"]\n  n24[\"alienazioa edo bere izatearen desjabetzea\"]:::axis\n  n25[\"soziala\"]:::key\n  n26[\"politikoa\"]:::key\n  n27[\"erlijiosoa\"]:::key\n  n28[\"ekonomikoa\"]:::key\n  n29[\"gizarte-klaseetan banaketa\"]\n  n30[\"burgesia\"]\n  n31[\"proletarioak\"]\n  n32[\"iraultza\"]:::axis\n  n33[\"gizarte-klaserik gabeko gizartea\"]\n  n34[\"esplotazioaren amaiera\"]\n  n35[\"alienazioa gainditzea eta gizakia gauzatzea\"]\n  n1 --> n4\n  n2 --> n5\n  n3 --> n6\n  n4 --> n8\n  n4 -->|\"Feuerbach\"| n7\n  n7 --> n9\n  n5 --> n10\n  n6 --> n11\n  n8 --> n0\n  n9 --> n0\n  n10 --> n0\n  n11 --> n0\n  n0 --> n12\n  n12 -->|\"haren esentzia da\"| n15\n  n15 -->|\"haren bidez\"| n16\n  n16 -->|\"eraldatu eta sozializatzen du\"| n13\n  n16 -->|\"hemen dialektikoki garatzen da\"| n14\n  n16 -->|\"garatzen da\"| n18\n  n16 --> n19\n  n18 -->|\"horregatik\"| n17\n  n20 -->|\"haiek sortzen ditu\"| n21\n  n18 -->|\"horrek sortzen du\"| n22\n  n20 --> n22\n  n21 --> n23\n  n22 -->|\"horrek eragiten du\"| n24\n  n24 -->|\"eragiten du\"| n25\n  n24 --> n26\n  n24 --> n27\n  n24 --> n28\n  n24 -->|\"eragiten du\"| n29\n  n29 -->|\"horrek sortzen du\"| n30\n  n29 --> n31\n  n31 -->|\"horrek eragiten du\"| n32\n  n32 -->|\"horrek dakar\"| n33\n  n32 --> n34\n  n33 -->|\"horretarako baldintza\"| n35\n  n34 -->|\"horretarako baldintza\"| n35\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CM-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Ideologiak marxismoan",
  "mermaid": "flowchart TD\n  ideo[\"IDEOLOGIAK\"]:::axis\n  kausak[\"kausak\"]:::key\n  funtz[\"funtzioak\"]:::key\n  k1[\"banakoen egoera ekonomikoa\"]\n  k2[\"produkzio-prozesuan duten kokapena\"]\n  k3[\"murgilduta dauden produkzio-harremanak\"]\n  f1[\"errealitatearen irudizko irudikapena egitea\"]\n  f2[\"errealitatea modu desitxuratuan berreraikitzea\"]\n  f3[\"gizarte-egitura trinkotzea\"]\n  f4[\"klase zuzendariaren boterea legitimatzea\"]\n  osag[\"osagaiak: Estatua, zuzenbidea, morala, ekonomia politikoa, erlijioa, filosofia, artea\"]:::key\n  ideo -->|\"kausak\"| kausak\n  ideo -->|\"funtzioak\"| funtz\n  ideo -->|\"osagaiak\"| osag\n  kausak --> k1\n  kausak --> k2\n  kausak --> k3\n  funtz --> f1\n  funtz --> f2\n  funtz --> f3\n  funtz --> f4\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CF-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Feuerbach: alienazio erlijiosotik errepublika demokratikora",
  "mermaid": "flowchart TD\n  fe[\"FEUERBACH\"]\n  giz[\"gizakia hau da\"]:::axis\n  nahi[\"NAHIMENA\"]:::key\n  arr[\"ARRAZOIA\"]:::key\n  sent[\"SENTIMENDUA\"]:::key\n  perf[\"JAINKOAREN PERFEKZIO gisa pentsatuak\"]:::axis\n  ali[\"gizakia BERE BURUTIK ALIENATZEN da\"]:::key\n  bot[\"bere boterea berreskuratu behar du\"]\n  erre[\"ERREPUBLIKA DEMOKRATIKOA\"]:::key\n  fe --> giz\n  giz --> nahi\n  giz --> arr\n  giz --> sent\n  nahi -->|\"pentsatuak dira\"| perf\n  arr -->|\"pentsatuak dira\"| perf\n  sent -->|\"pentsatuak dira\"| perf\n  perf -->|\"ondorioz\"| ali\n  ali -->|\"beraz\"| bot\n  bot -->|\"hartan\"| erre\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5A-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Gramsci: hegemonia kulturala",
  "mermaid": "flowchart TD\n  gra[\"GRAMSCI\"]\n  heg[\"hegemonia kulturala\"]:::axis\n  ind[\"indarra: Estatua eta legea\"]\n  bai[\"adostasuna eta akordioa\"]:::key\n  intel[\"intelektual organikoak\"]:::key\n  zen[\"zentzu komuna\"]:::key\n  zib[\"gizarte zibila\"]:::axis\n  bloke[\"bloke historikoa\"]\n  ideo[\"klase-interesa interes orokor gisa\"]\n  ohi[\"normaltzat hartutako ohitura\"]\n  gerra[\"posizio-gerra\"]:::axis\n  kontra[\"zentzu komun berri bat\"]:::key\n  eman[\"emantzipazioa\"]\n  gra -->|\"kontzeptu zentrala\"| heg\n  heg -->|\"ez indarra soilik\"| ind\n  heg -->|\"adostasuna ere bai\"| bai\n  heg -->|\"eragileak\"| intel\n  bai -->|\"honen bidez\"| zen\n  bai -->|\"non\"| zib\n  zib -->|\"eskola, prentsa\"| ohi\n  zen -->|\"ondorioa\"| ideo\n  intel -->|\"aliantza\"| bloke\n  intel -->|\"borroka kulturala\"| gerra\n  gerra -->|\"eraikitzea\"| kontra\n  ideo -->|\"haustea\"| kontra\n  kontra -->|\"helburua\"| eman\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5A-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Frankfurteko Eskola: teoria kritikoa",
  "mermaid": "flowchart TD\n  frk[\"FRANKFURTEKO ESKOLA\"]\n  teo[\"Teoria kritikoa\"]:::axis\n  trad[\"teoria tradizionalaren aurka\"]\n  marx[\"Marx\"]\n  freud[\"Freud\"]\n  weber[\"Weber\"]\n  helb[\"emantzipazioa\"]:::key\n  hoad[\"Horkheimer eta Adorno\"]:::axis\n  mar[\"Marcuse\"]:::axis\n  hab[\"Habermas\"]:::axis\n  ains[\"arrazoi instrumentala\"]:::key\n  dial[\"Ilustrazioaren dialektika\"]:::key\n  indk[\"kultura-industria\"]\n  uni[\"gizarte dimentsiobakarra\"]:::key\n  behf[\"behar faltsuak\"]\n  erre[\"gehiegizko errepresioa\"]\n  komu[\"arrazoi komunikatiboa\"]:::key\n  elka[\"elkarrizketa eta adostasuna\"]\n  esp[\"esfera publikoa\"]\n  frk -->|\"programa\"| teo\n  marx -->|\"iturria\"| teo\n  freud --> teo\n  weber --> teo\n  teo -->|\"helburua\"| helb\n  teo -->|\"bereizten da\"| trad\n  teo --> hoad\n  teo --> mar\n  teo --> hab\n  hoad -->|\"diagnostikoa\"| ains\n  ains -->|\"bihurtzen da\"| dial\n  dial -->|\"adibidez\"| indk\n  mar -->|\"gizartea\"| uni\n  uni -->|\"sortuz\"| behf\n  behf --> erre\n  hab -->|\"irtenbidea\"| komu\n  komu -->|\"honen bidez\"| elka\n  elka --> esp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5B-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Arendt: totalitarismoaren analisia",
  "mermaid": "flowchart TD\n  tot[\"TOTALITARISMOA\"]\n  ideo[\"ideologia totalizatzailea\"]:::key\n  ter[\"izuaren logika\"]:::key\n  masa[\"masa-gizartea\"]\n  bak[\"bakardadea eta atomizazioa\"]:::key\n  sus[\"sustraiak\"]:::axis\n  anti[\"antisemitismoa (Dreyfus)\"]\n  inp[\"inperialismoa\"]\n  ban[\"gaizkiaren hutsalkeria\"]:::key\n  eich[\"Eichmann: pentsatzeari uko\"]\n  tot --> ideo\n  tot --> ter\n  ideo --> masa\n  ter --> bak\n  tot -->|\"jatorria\"| sus\n  sus --> anti\n  sus --> inp\n  tot -->|\"ondorioa\"| ban\n  ban --> eich\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5B-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Arendt: vita activa eta ekintza politikoa",
  "mermaid": "flowchart TD\n  vit[\"VITA ACTIVA\"]\n  lan[\"lana (animal laborans)\"]\n  egi[\"langintza (homo faber)\"]\n  eki[\"ekintza (zoon politikon)\"]:::axis\n  bizi[\"bizirautea\"]\n  mundu[\"objektuen mundua\"]\n  plu[\"jaiotza eta aniztasuna\"]:::key\n  esp[\"espazio publikoa\"]:::key\n  bot[\"boterea: elkarrekin jardutea\"]:::key\n  ind[\"indarkeria\"]\n  vit --> lan\n  vit --> egi\n  vit -->|\"gorena\"| eki\n  lan --> bizi\n  egi --> mundu\n  eki -->|\"oinarria\"| plu\n  eki -->|\"non\"| esp\n  esp --> bot\n  bot -->|\"bereizten da\"| ind\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CdB-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Beauvoir: emakumea, bestetasuna eta askatasuna",
  "mermaid": "flowchart TD\n  be[\"BEAUVOIR\"]\n  tez[\"ez da emakume jaiotzen, emakume bihurtzen da\"]:::axis\n  best[\"emakumea Beste gisa\"]:::key\n  aska[\"askatasuna egoeran\"]:::key\n  mit[\"feminitatearen mitoak\"]\n  obj[\"objektu/subjektu dialektika\"]\n  trans[\"transzendentzia\"]\n  inm[\"immanentzia\"]\n  gor[\"gorputza eta egoera\"]\n  be -->|\"tesia\"| tez\n  tez -->|\"emakumea\"| best\n  tez -->|\"proiektua\"| aska\n  best --> mit\n  best -->|\"Hegel\"| obj\n  aska --> trans\n  aska -->|\"honen aurka\"| inm\n  aska --> gor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CdB-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Beauvoiren ondoren: generoa eta justizia",
  "mermaid": "flowchart TD\n  gen[\"GENEROAREN ERAIKUNTZA\"]\n  but[\"Butler\"]:::axis\n  fra[\"Fraser\"]:::axis\n  nus[\"Nussbaum\"]:::axis\n  perf[\"performatibitatea\"]:::key\n  queer[\"teoria queer-a\"]\n  bir[\"birbanaketa\"]\n  ait[\"aitorpena\"]:::key\n  gait[\"giza gaitasunak\"]:::key\n  just[\"genero-justizia\"]:::key\n  gen --> but\n  gen --> fra\n  gen --> nus\n  but --> perf\n  perf --> queer\n  fra --> bir\n  fra --> ait\n  nus --> gait\n  bir --> just\n  ait --> just\n  gait --> just\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C8-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Existentzialismoa: askatasuna, absurdua eta izatea",
  "mermaid": "flowchart TD\n  ext[\"EXISTENTZIALISMOA\"]\n  tesi[\"existentzia esentziaren aurretik dator\"]:::axis\n  fen[\"fenomenologia\"]\n  kier[\"Kierkegaard\"]\n  hei[\"HEIDEGGER\"]:::axis\n  sar[\"SARTRE\"]:::axis\n  cam[\"CAMUS\"]:::axis\n  das[\"Dasein: munduan-izatea\"]:::key\n  her[\"heriotzarako-izatea\"]\n  den[\"denboratasuna\"]\n  ask[\"askatasuna\"]:::key\n  era[\"erantzukizuna\"]\n  ang[\"larritasuna\"]\n  abs[\"absurdua\"]:::key\n  mat[\"errebeldia\"]\n  zen[\"bizitzari zentzua ematea\"]\n  aut[\"benetakotasuna: norberaren bizitzaren egilea\"]:::key\n  ext -->|\"tesi zentrala\"| tesi\n  fen -->|\"iturria\"| ext\n  kier -->|\"aurrekaria\"| ext\n  tesi -->|\"ontologia gisa\"| hei\n  tesi -->|\"askatasun gisa\"| sar\n  tesi -->|\"absurdu gisa\"| cam\n  hei -->|\"izatearen galdera\"| das\n  das -->|\"egitura\"| her\n  her -->|\"oinarria\"| den\n  sar -->|\"gizakia askatasuna da\"| ask\n  ask -->|\"hortik\"| era\n  era -->|\"eta\"| ang\n  cam -->|\"mundua absurdua da\"| abs\n  abs -->|\"erantzuna\"| mat\n  mat -->|\"sortuz\"| zen\n  den -->|\"benetan bizitzea\"| aut\n  ang --> aut\n  zen --> aut\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C8K-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Kierkegaard: askatasunaren larritasuna eta fedearen jauzia",
  "mermaid": "flowchart TD\n  kk[\"KIERKEGAARD\"]\n  giz[\"gizakia horrela bereizten da\"]:::axis\n  ezdet[\"bere esentziak ez du aldez aurretik determinatzen\"]:::key\n  elegi[\"bere burua hautatu behar du\"]:::key\n  ezdeus[\"berez ez da ezer\"]\n  ahalg[\"aukera oro posibilitate hutsa da\"]\n  angus[\"LARRITASUNA\"]:::key\n  etsip[\"ETSIPENA\"]:::key\n  fede[\"fedearen jauzia: errealitate hutsera\"]:::key\n  jaink[\"JAINKOA\"]:::axis\n  kk --> giz\n  giz --> ezdet\n  giz --> elegi\n  ezdet -->|\"beraz\"| ezdeus\n  elegi -->|\"baina\"| ahalg\n  ezdeus -->|\"sortzen du\"| angus\n  ahalg -->|\"sortzen du\"| etsip\n  angus -->|\"irteten gara\"| fede\n  etsip -->|\"irteten gara\"| fede\n  fede -->|\"da\"| jaink\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C6-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Postmodernitatea: metakontakizunen amaieraren ardatzak",
  "mermaid": "flowchart TD\n  pm[\"POSTMODERNITATEA\"]\n  meta[\"metakontakizunen amaiera\"]\n  niet[\"Nietzscheren ondarea\"]\n  lyo[\"Lyotard\"]:::axis\n  der[\"Derrida\"]:::axis\n  fou[\"Foucault\"]:::axis\n  bau[\"Baudrillard\"]:::axis\n  del[\"Deleuze eta Guattari\"]:::axis\n  jak[\"jakintzaren legitimazio-galera\"]:::key\n  desk[\"dekonstrukzioa eta différance\"]:::key\n  bot[\"boterea / jakintza, biopolitika\"]:::key\n  sim[\"simulakroa\"]:::key\n  erri[\"errizoma eta ihes-lerroak\"]:::key\n  haber[\"Habermas: modernitate amaitugabea\"]:::axis\n  vat[\"Vattimo: pentsamendu ahula\"]\n  ror[\"Rorty: elkarrizketa eta ironia\"]\n  pm -->|\"diagnostiko zentrala\"| meta\n  pm -->|\"abiapuntua\"| niet\n  meta --> lyo\n  meta --> der\n  meta --> fou\n  meta --> bau\n  meta --> del\n  lyo -->|\"jakintza\"| jak\n  der -->|\"testua\"| desk\n  fou -->|\"genealogia\"| bot\n  bau -->|\"hipererrealitatea\"| sim\n  del -->|\"ez-hierarkikoa\"| erri\n  jak -->|\"kontraerantzuna\"| haber\n  desk -->|\"izatea ahultzea\"| vat\n  erri -->|\"elkarrizketa\"| ror\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C7-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Paradigma-aldaketak",
  "mermaid": "flowchart TD\n  arist[\"Aristoteles\"]:::key\n  org[\"paradigma organizista\"]:::axis\n  magik[\"Paradigma magiko-animista\"]:::axis\n  mek[\"paradigma mekanizista\"]:::axis\n  esp[\"esperientzian oinarritua\"]:::key\n  anim[\"natura = animalia handi bat\"]\n  ezoh[\"ohiz kanpoko fenomenoak onartzen ditu\"]\n  inoz[\"mentalitate xaloa\"]\n  makin[\"natura = makinak\"]:::key\n  hedad[\"erreala: hedadura eta mugimendua\"]\n  ezind[\"ez ditu indar ezkutuak onartzen\"]\n  ondor[\"ondorioak: aurkikuntzak eta matematika zientzian\"]:::key\n  arist -->|\"hau da haren jatorria\"| org\n  org -->|\"hau ordezkatu zuen\"| magik\n  magik -->|\"honek ordezkatu zuen\"| mek\n  magik -->|\"oinarritzen da\"| esp\n  esp -->|\"sinesten du\"| anim\n  anim -->|\"onartzen du\"| ezoh\n  ezoh -->|\"sortzen du\"| inoz\n  mek -->|\"natura da\"| makin\n  makin -->|\"erreala soilik\"| hedad\n  makin -->|\"ez du onartzen\"| ezind\n  mek -->|\"ondorioa da\"| ondor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C9-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Feminismoa: generoa, bestetasuna eta gaur egungo eztabaidak",
  "mermaid": "flowchart TD\n  fem[\"FEMINISMOA\"]\n  sgb[\"sexu-genero bereizketa\"]:::axis\n  ola[\"olatuak\"]\n  bea[\"Simone de Beauvoir\"]:::axis\n  but[\"Judith Butler\"]:::axis\n  gaur[\"gaur egungo eztabaidak\"]\n  alt[\"bestetasuna\"]\n  ezda[\"ez da emakume jaiotzen, emakume bihurtzen da\"]:::key\n  traz[\"transzendentzia eta immanentzia\"]\n  perf[\"generoaren performatibitatea\"]:::key\n  queer[\"teoria queer-a\"]\n  deseg[\"generoa desegitea\"]\n  fra[\"Fraser: birbanaketa eta aitorpena\"]:::key\n  nus[\"Nussbaum: gaitasunak\"]:::key\n  inter[\"intersekzionalitatea\"]:::key\n  zain[\"zaintzaren etika eta elkarrekiko mendekotasuna\"]:::key\n  fem -->|\"oinarria\"| sgb\n  fem -->|\"testuingurua\"| ola\n  sgb --> bea\n  sgb --> but\n  sgb --> gaur\n  bea -->|\"gizona subjektu, emakumea Beste\"| alt\n  alt -->|\"hortik\"| ezda\n  ezda -->|\"gainditu nahi du\"| traz\n  but -->|\"generoa ekintza da\"| perf\n  perf -->|\"hortik\"| queer\n  queer --> deseg\n  gaur --> fra\n  gaur --> nus\n  gaur --> inter\n  traz --> zain\n  deseg --> zain\n  inter --> zain\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A2": {
  "subject": "hf",
  "block": "A",
  "tema": "Filosofoaren metodoak",
  "title": "Filosofoaren metodoak eta tresnak",
  "mermaid": "flowchart TD\n  center[\"FILOSOFOAREN METODOAK<br>ETA TRESNAK\"]:::axis\n  fu[\"Informazio-iturriak\"]:::key\n  he[\"Filosofoaren tresnak\"]:::key\n  center -->|\"abiatzen da\"| fu\n  center -->|\"tresnekin lantzen ditu\"| he\n  fu --> f1[\"dokumentuak · hitzaldiak<br>· aztarna digitalak\"]\n  f1 -->|\"honen menpe jartzen dira\"| h1[\"1· iturrien azterketa kritikoa\"]\n  he --> h1\n  h1 --> h2[\"2· dokumentuen interpretazioa\"]\n  h2 --> h3[\"3· arazo filosofikoak identifikatzea\"]\n  h3 --> h4[\"4· argudioetan oinarritutako elkarrizketa\"]\n  h4 --> h5[\"5· ikerketa filosofikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A3": {
  "subject": "hf",
  "block": "A",
  "tema": "Filosofiaren jatorria",
  "title": "Filosofiaren sorrera Grezian",
  "mermaid": "flowchart TD\n  center[\"FILOSOFIAREN JAIOTZA<br>GREZIAN (K.a. VI. mendea)\"]:::axis\n  paso[\"Mitoaren eta logosaren arteko igarobidea\"]:::key\n  fac[\"Ahalbidetzen duten faktoreak\"]:::key\n  center -->|\"honetan datza\"| paso\n  center -->|\"hauek azaltzen dute\"| fac\n  paso --> mito[\"MITOA:<br>azalpen irudimenezkoa (jainkoak)\"]\n  paso --> logos[\"LOGOSA:<br>azalpen arrazionala (kausak)\"]\n  mito -->|\"honetara ematen du bidea\"| logos\n  fac --> c1[\"poliseko demokrazia → agoran eztabaida\"]\n  fac --> c2[\"esklabotza → pentsatzeko denbora librea\"]\n  fac --> c3[\"dogmarik gabeko erlijioa → kritika-askatasuna\"]\n  fac --> c4[\"merkataritza → beste kulturekin harremana\"]\n  fac --> c5[\"lege idatziak → eztabaida sistematikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A4": {
  "subject": "hf",
  "block": "A",
  "tema": "Presokratikoak",
  "title": "Presokratikoak: arkhearen bilaketa",
  "mermaid": "flowchart TD\n  center[\"PRESOKRATIKOAK:<br>zein da guztiaren arkhea (printzipioa)?\"]:::axis\n  fis[\"Fisikoak:<br>printzipio material bat\"]:::key\n  otros[\"Beste erantzun batzuk\"]:::key\n  deb[\"Eztabaida handia:<br>aldaketa vs iraunkortasuna\"]:::key\n  center --> fis\n  center --> otros\n  center --> deb\n  fis --> t1[\"Tales → ura\"]\n  fis --> t2[\"Anaximandro → apeirona\"]\n  fis --> t3[\"Anaximenes → airea\"]\n  fis --> t4[\"Demokrito → atomoak + hutsa\"]\n  otros --> p1[\"Pitagoras → zenbakiak\"]\n  otros --> emp[\"Enpedokles → 4 elementu\"]\n  otros --> ana[\"Anaxagoras → nous-a\"]\n  deb --> her[\"Heraklito → dena isurtzen da (sua)\"]\n  deb --> par[\"Parmenides → izatea aldaezina da\"]\n  her -->|\"aurka dago\"| par\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A5": {
  "subject": "hf",
  "block": "A",
  "tema": "Sofistak eta Sokrates",
  "title": "Sofistak eta Sokrates",
  "mermaid": "flowchart TD\n  center[\"SOFISTAK ETA SOKRATES\"]:::axis\n  sof[\"SOFISTAK<br>(Protagoras, Gorgias)\"]:::key\n  soc[\"SOKRATES\"]:::key\n  asp[\"MILETOKO ASPASIA\"]:::key\n  center --> sof\n  center --> soc\n  center --> asp\n  sof -->|\"hauei aurre egiten diete\"| soc\n  sof --> s1[\"eszeptizismo epistemologikoa\"]\n  sof --> s2[\"erlatibismo morala\"]\n  sof --> s3[\"legeak konbentzioa dira\"]\n  soc --> c1[\"unibertsalismo morala\"]\n  soc --> c2[\"definizio unibertsalak bilatzen ditu\"]\n  soc --> c3[\"intelektualismo morala: jakintza = bertutea\"]\n  soc -->|\"metodoa\"| c4[\"ironia + maiotika\"]\n  asp --> a1[\"erretorika-irakaslea\"]\n  asp -->|\"eragina du\"| soc\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A6": {
  "subject": "hf",
  "block": "A",
  "tema": "Platon eta Aristoteles",
  "title": "Platon eta Aristoteles",
  "mermaid": "flowchart TD\n  center[\"PLATON ETA ARISTOTELES\"]:::axis\n  pla[\"PLATON\"]:::key\n  ari[\"ARISTOTELES\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"kritikatzen du\"| pla\n  pla --> p1[\"dualismoa: Ideien mundua<br>vs mundu fisikoa\"]\n  pla --> p2[\"anamnesia (oroitzapena)\"]\n  pla --> p3[\"episteme (jakintza) vs doxa (iritzia)\"]\n  ari --> a1[\"hilemorfismoa: materia + forma\"]\n  ari --> a2[\"lau kausen teoria\"]\n  ari --> a3[\"potentziatik ekintzara\"]\n  a1 -->|\"dualismoaren aurrean\"| p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A7": {
  "subject": "hf",
  "block": "A",
  "tema": "Antropologia klasikoa",
  "title": "Antropologia klasikoa: psikea",
  "mermaid": "flowchart TD\n  center[\"ANTROPOLOGIA KLASIKOA:<br>zer da psikea (arima)?\"]:::axis\n  soc[\"SOKRATES\"]:::key\n  pla[\"PLATON\"]:::key\n  ari[\"ARISTOTELES\"]:::key\n  center --> soc\n  soc -->|\"honek garatua\"| pla\n  pla -->|\"honek zuzendua\"| ari\n  soc --> s1[\"«ezagutu zeure burua»\"]\n  soc --> s2[\"arima da baliotsuena\"]\n  soc --> s3[\"ezagutza = bertutea\"]\n  pla --> p1[\"arima hilezkorra, hiru zati\"]\n  pla --> p2[\"gorputza bere kartzela da\"]\n  pla --> p3[\"dualismo antropologikoa\"]\n  ari --> a1[\"arima forma da: ez da existitzen gorputzik gabe\"]\n  ari --> a2[\"hiru arima: begetatiboa,<br>sentikorra, arrazionala\"]\n  ari --> a3[\"batasun substantziala (gorputza + arima)\"]\n  p3 -->|\"honek baztertua\"| a3\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A8": {
  "subject": "hf",
  "block": "A",
  "tema": "Etika klasikoa",
  "title": "Eztabaida etikoa",
  "mermaid": "flowchart TD\n  center[\"EZTABAIDA ETIKO KLASIKOA\"]:::axis\n  sp[\"SOKRATES ETA PLATON:<br>intelektualismo morala\"]:::key\n  ari[\"ARISTOTELES:<br>bertutearen etika\"]:::key\n  center --> sp\n  center --> ari\n  ari -->|\"honengandik aldentzen da\"| sp\n  sp --> s1[\"ongia ezagutu → ongi jokatu\"]\n  sp --> s2[\"inork ez du nahita gaizki jokatzen<br>(ezjakintasunagatik soilik)\"]\n  ari --> a1[\"bertutea ohiturarekin lantzen da\"]\n  ari --> a2[\"erdiko terminoa bi muturren artean\"]\n  ari --> a3[\"eudaimonia: zoriontasuna helburu gisa\"]\n  s1 -->|\"jakitea ez da aski:<br>ohitu egin behar da\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A9": {
  "subject": "hf",
  "block": "A",
  "tema": "Politika klasikoa",
  "title": "Eztabaida politikoa",
  "mermaid": "flowchart TD\n  center[\"EZTABAIDA POLITIKO KLASIKOA\"]:::axis\n  pla[\"PLATON:<br>hiri ideala (utopia)\"]:::key\n  ari[\"ARISTOTELES:<br>politika errealista\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"hau baino pragmatikoagoa\"| pla\n  pla --> p1[\"hiru gizarte-klase\"]\n  pla --> p2[\"errege filosofoen gobernua\"]\n  pla --> p3[\"demokraziaren kritika\"]\n  ari --> a0[\"gizakia zoon politikon da<br>(animalia politikoa)\"]\n  ari --> rectos[\"Gobernu zuzenak:<br>monarkia · aristokrazia · errepublika\"]\n  ari --> desv[\"Gobernu okerrak:<br>tirania · oligarkia · demagogia\"]\n  rectos -->|\"hauetan usteltzen dira\"| desv\n  ari -->|\"forma onena\"| a4[\"errepublika\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A10": {
  "subject": "hf",
  "block": "A",
  "tema": "Helenismoa",
  "title": "Eskola helenistikoak",
  "mermaid": "flowchart TD\n  center[\"ESKOLA HELENISTIKOAK\"]:::axis\n  meta[\"Helburu komuna: zoriontasuna<br>lasaitasun gisa (ataraxia)\"]:::key\n  center -->|\"guztiek bilatzen dute\"| meta\n  epi[\"EPIKURISMOA\"]:::key\n  est[\"ESTOIZISMOA\"]:::key\n  cin[\"ZINISMOA\"]:::key\n  esc[\"ESZEPTIZISMOA\"]:::key\n  meta --> epi\n  meta --> est\n  meta --> cin\n  meta --> esc\n  epi -->|\"bidea\"| e1[\"plazer neurritsua,<br>mina saihestu\"]\n  est -->|\"bidea\"| s1[\"patua onartu<br>(apatia)\"]\n  cin -->|\"bidea\"| c1[\"naturaren arabera bizi<br>(autarkia)\"]\n  esc -->|\"bidea\"| x1[\"judizioa eten<br>(epojea)\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B1": {
  "subject": "hf",
  "block": "B",
  "tema": "Erdi Aroko filosofia",
  "title": "Erdi Aroko filosofia",
  "mermaid": "flowchart TD\n  center[\"ERDI AROKO FILOSOFIA\"]:::axis\n  hilo[\"Gai nagusia:<br>froga dezake arrazoiak Jainkoa?\"]:::key\n  et[\"Lau etapa\"]:::key\n  center -->|\"honen inguruan dabil\"| hilo\n  center --> et\n  et --> e1[\"Patristika → Agustin\"]\n  e1 --> e2[\"Eskolastika goiztiarra → Anselmo\"]\n  e2 --> e3[\"Eskolastika berantiarra → Tomas Akinokoa\"]\n  e3 --> e4[\"Nominalismoa → Ockham\"]\n  e1 -->|\"froga\"| p1[\"barne-egia (Agustin)\"]\n  e3 -->|\"froga\"| p2[\"bost bideak (Tomas)\"]\n  e4 -->|\"zalantzan jartzen ditu\"| p3[\"froga arrazionalak (Ockham)\"]\n  p3 -->|\"banatzen amaitzen du\"| sep[\"fedea eta arrazoia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B2": {
  "subject": "hf",
  "block": "B",
  "tema": "Fedea eta arrazoia",
  "title": "Fedea eta arrazoia",
  "mermaid": "flowchart TD\n  center[\"FEDEA ETA ARRAZOIA\"]:::axis\n  q[\"Elkarrekin joan daitezke fedea<br>eta arrazoia egiarantz?\"]\n  center --> q\n  agus[\"AGUSTIN\"]:::key\n  tom[\"TOMAS AKINOKOA\"]:::key\n  ter[\"TERTULIANO\"]:::key\n  q -->|\"batasuna\"| agus\n  q -->|\"harmonia\"| tom\n  q -->|\"oposizioa\"| ter\n  agus -->|\"lema\"| a1[\"«Sinetsi ulertzeko,<br>ulertu sinesteko»\"]\n  agus --> a2[\"fedeak eta arrazoiak elkar behar dute\"]\n  tom --> t1[\"bi eremu:<br>teologia eta filosofia\"]\n  tom -->|\"ez dira elkarren aurka\"| t2[\"arrazoiak fedea prestatzen du<br>(atariak)\"]\n  ter -->|\"«Sinesten dut absurdoa delako»\"| te1[\"fedea aski da,<br>arrazoia soberan dago\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B3": {
  "subject": "hf",
  "block": "B",
  "tema": "Errenazimentua",
  "title": "Errenazimentua",
  "mermaid": "flowchart TD\n  center[\"BERPIZKUNDEA\"]:::axis\n  soc[\"Gizarte-aldaketak\"]:::key\n  ant[\"Antropozentrismoa\"]:::key\n  cie[\"Iraultza zientifikoa\"]:::key\n  center --> soc\n  soc -->|\"hau ahalbidetzen dute\"| ant\n  ant -->|\"honetan amaitzen da\"| cie\n  soc --> s1[\"feudalismoaren krisia\"]\n  soc --> s2[\"burgesiaren gorakada\"]\n  soc --> s3[\"inprenta (Gutenberg)\"]\n  ant --> a1[\"gizakia erdian\"]\n  ant --> a2[\"humanismoa\"]\n  cie --> c1[\"heliozentrismoa<br>(Koperniko, Galileo)\"]\n  cie --> c2[\"metodo enpirikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B4": {
  "subject": "hf",
  "block": "B",
  "tema": "Arrazionalismoa eta enpirismoa",
  "title": "Arrazionalismoa eta enpirismoa",
  "mermaid": "flowchart TD\n  center[\"ARRAZIONALISMOA ETA ENPIRISMOA\"]:::axis\n  rac[\"ARRAZIONALISMOA<br>(Descartes)\"]:::key\n  emp[\"ENPIRISMOA<br>(Hume)\"]:::key\n  center --> rac\n  center --> emp\n  rac -->|\"arrazoia ala esperientzia?\"| emp\n  rac --> r1[\"iturria arrazoia da\"]\n  rac --> r2[\"jaiotzetiko ideiak daude (a priori)\"]\n  rac --> r3[\"metodo matematiko-deduktiboa\"]\n  rac --> r4[\"«cogito ergo sum»\"]\n  emp --> e1[\"iturria esperientzia da\"]\n  emp --> e2[\"gogamena tabula rasa da\"]\n  emp --> e3[\"ezagutza probablea soilik\"]\n  emp --> e4[\"kausalitatearen kritika\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B5": {
  "subject": "hf",
  "block": "B",
  "tema": "Substantzia (modernoak)",
  "title": "Substantziari buruzko eztabaida modernoa",
  "mermaid": "flowchart TD\n  center[\"SUBSTANTZIARI BURUZKO<br>EZTABAIDA MODERNOA\"]:::axis\n  des[\"DESCARTES:<br>dualismoa (hiru substantzia)\"]:::key\n  spi[\"SPINOZA:<br>panteismoa\"]:::key\n  lei[\"LEIBNIZ:<br>monadologia\"]:::key\n  center --> des\n  des --> d1[\"arima eta gorputza bereiziak\"]\n  des --> d2[\"elkarrekintza guruin pinealean\"]\n  des -->|\"konpondu gabeko arazoa\"| pr[\"nola erlazionatzen dira<br>arima eta gorputza?\"]\n  pr -->|\"substantzia bakarra\"| spi\n  pr -->|\"monada infinituak\"| lei\n  spi --> s1[\"substantzia bakarra:<br>Jainkoa edo Natura\"]\n  spi --> s2[\"gorputza eta arima:<br>gauza beraren bi alderdi\"]\n  lei --> l1[\"monadak: substantzia sinpleak\"]\n  lei --> l2[\"aurrez ezarritako harmonia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B6": {
  "subject": "hf",
  "block": "B",
  "tema": "Kontratu soziala",
  "title": "Gizarte-kontratua",
  "mermaid": "flowchart TD\n  center[\"GIZARTE-KONTRATUA\"]:::axis\n  idea[\"Naturazko egoeratik gizartera<br>itun baten bidez\"]:::key\n  hob[\"HOBBES\"]:::key\n  loc[\"LOCKE\"]:::key\n  rou[\"ROUSSEAU\"]:::key\n  center -->|\"tesi komuna\"| idea\n  idea --> hob\n  idea --> loc\n  idea --> rou\n  hob --> h1[\"«homo homini lupus»\"]\n  hob -->|\"ematen duen ituna\"| h2[\"Leviatan:<br>monarkia absolutua\"]\n  loc --> l1[\"eskubide naturalak:<br>bizitza, askatasuna, jabetza\"]\n  loc -->|\"ematen duen ituna\"| l2[\"monarkia parlamentarioa<br>+ botere-banaketa\"]\n  rou --> r1[\"borondate orokorra\"]\n  rou -->|\"ematen duen ituna\"| r2[\"batzar-demokrazia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B7": {
  "subject": "hf",
  "block": "B",
  "tema": "Utilitarismoa eta liberalismoa",
  "title": "Utilitarismoa, liberalismoa eta kapitalismoa",
  "mermaid": "flowchart TD\n  center[\"UTILITARISMOA, LIBERALISMOA<br>ETA KAPITALISMOA\"]:::axis\n  uti[\"UTILITARISMOA<br>(Bentham, Mill)\"]:::key\n  lib[\"LIBERALISMOA\"]:::key\n  cap[\"KAPITALISMOA<br>(Adam Smith)\"]:::key\n  azu[\"AZURMENDI: kritika\"]:::key\n  center --> uti\n  center --> lib\n  center --> cap\n  center --> azu\n  uti --> u1[\"ahalik eta gehienen<br>zoriontasun handiena\"]\n  uti --> u2[\"plazer-minaren balantzea\"]\n  lib --> l1[\"banakoaren nagusitasuna\"]\n  lib --> l2[\"jabetza pribatua\"]\n  lib --> l3[\"Estatua neutrala\"]\n  lib -->|\"oinarritzen du\"| cap\n  cap --> c1[\"«esku ikusezina»\"]\n  cap --> c2[\"interes pertsonalak ongizate<br>orokorra ekartzen du\"]\n  azu -->|\"honi erantzuten dio\"| c2\n  azu --> az1[\"gizakia ere naturalki<br>kooperatiboa da\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C1": {
  "subject": "hf",
  "block": "C",
  "tema": "Ilustrazioa",
  "title": "Ilustrazioa: arrazoia eta eskubideak",
  "mermaid": "flowchart TD\n  center[\"ILUSTRAZIOA:<br>arrazoia eta eskubideak\"]:::axis\n  raz[\"Arrazoiaren eredu berria\"]:::key\n  der[\"Eskubide naturalak\"]:::key\n  fem[\"Feminismoaren lehen olatua\"]:::key\n  center --> raz\n  raz -->|\"hau eskatzen du\"| der\n  der -->|\"hau aldarrikatzean zabaltzen da\"| fem\n  raz --> r1[\"arrazoi kritikoa\"]\n  raz --> r2[\"arrazoi autonomoa («ausart zaitez jakitera»)\"]\n  der --> d1[\"absolutismoaren bazterketa\"]\n  der --> d2[\"botere-banaketa (Montesquieu)\"]\n  der --> d3[\"herri-subiranotasuna (Rousseau)\"]\n  fem --> f1[\"Mary Wollstonecraft\"]\n  fem --> f2[\"Olympe de Gouges\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C2": {
  "subject": "hf",
  "block": "C",
  "tema": "Kant",
  "title": "Kanten filosofia kritikoa",
  "mermaid": "flowchart TD\n  center[\"KANTEN FILOSOFIA KRITIKOA\"]:::axis\n  cri[\"Kritizismoa\"]:::key\n  fn[\"Fenomenoa / Noumenoa\"]:::key\n  met[\"Metafisikaren arazoa\"]:::key\n  center --> cri\n  cri -->|\"bereizten du\"| fn\n  fn -->|\"ondorioa\"| met\n  cri --> c1[\"arrazionalismoa + enpirismoa batzen ditu\"]\n  cri --> c2[\"ezagutzea = materia (a posteriori)<br>+ forma (a priori)\"]\n  fn --> fe[\"FENOMENOA: agertzen den errealitatea<br>(ezagut daiteke)\"]\n  fn --> no[\"NOUMENOA: gauza bere baitan<br>(ezagutezina)\"]\n  no -->|\"horregatik\"| met\n  met --> m1[\"metafisika ezin da zientzia izan\"]\n  met --> m2[\"objektu transzendenteak<br>ezin dira frogatu\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C3": {
  "subject": "hf",
  "block": "C",
  "tema": "Etika modernoa",
  "title": "Etika: Kant utilitarismoaren aurrean",
  "mermaid": "flowchart TD\n  center[\"ETIKA: KANT UTILITARISMOAREN<br>AURREAN\"]:::axis\n  kant[\"KANT:<br>etika deontologikoa (betebeharrarena)\"]:::key\n  uti[\"UTILITARISMOA<br>(Bentham, Mill)\"]:::key\n  azu[\"AZURMENDI:<br>erlatibismo erlatiboa\"]:::key\n  center --> kant\n  center --> uti\n  kant -->|\"aurka dago\"| uti\n  kant --> k1[\"betebeharrari eta asmoari begiratzen die\"]\n  kant --> k2[\"inperatibo kategorikoa\"]\n  kant --> k3[\"pertsona helburu gisa, ez bitarteko gisa\"]\n  uti --> u1[\"ondorioei begiratzen die\"]\n  uti --> u2[\"ahalik eta gehienen<br>zoriontasun handiena\"]\n  center --> azu\n  azu -->|\"bien ñabardurak egiten ditu\"| kant\n  azu -->|\"bien ñabardurak egiten ditu\"| uti\n  azu --> az1[\"ez dago oinarri etiko absoluturik\"]\n  azu --> az2[\"balioak testuinguruaren mende daude\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C4": {
  "subject": "hf",
  "block": "C",
  "tema": "Susmoaren filosofoak",
  "title": "Susmoaren filosofoak",
  "mermaid": "flowchart TD\n  center[\"SUSMOAREN FILOSOFOAK\"]:::axis\n  idea[\"Kontzientzia ez da gardena:<br>zerbait ezkutuk baldintzatzen du\"]\n  center -->|\"tesi komuna\"| idea\n  marx[\"MARX\"]:::key\n  niet[\"NIETZSCHE\"]:::key\n  freud[\"FREUD\"]:::key\n  idea --> marx\n  idea --> niet\n  idea --> freud\n  marx -->|\"desmaskaratzen du\"| eco[\"ekonomia\"]\n  eco -->|\"sortzen du\"| ideo[\"ideologia eta alienazioa\"]\n  ideo -->|\"honekin gainditzen da\"| rev[\"iraultza → komunismoa\"]\n  niet -->|\"desmaskaratzen du\"| moral[\"morala eta bere balioak\"]\n  moral -->|\"honetara darama\"| nih[\"nihilismoa · Jainkoaren heriotza\"]\n  nih -->|\"erantzuna\"| super[\"boterearen nahimena · gaingizakia\"]\n  freud -->|\"desmaskaratzen du\"| incon[\"inkontzientea\"]\n  incon --> yo[\"hura · nia · supernia\"]\n  incon --> pul[\"Eros eta Thanatos\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C5": {
  "subject": "hf",
  "block": "C",
  "tema": "Kapitalismoaren kritika",
  "title": "Kapitalismoaren kritika",
  "mermaid": "flowchart TD\n  center[\"KAPITALISMOAREN KRITIKA<br>ETA MASA-GIZARTEA\"]:::axis\n  fra[\"FRANKFURTEKO ESKOLA\"]:::key\n  are[\"HANNAH ARENDT\"]:::key\n  raw[\"JOHN RAWLS\"]:::key\n  center --> fra\n  center --> are\n  center --> raw\n  fra --> f1[\"arrazoi instrumentala\"]\n  fra --> f2[\"kultura-industria\"]\n  fra -->|\"sortzen du\"| f3[\"deshumanizazioa\"]\n  are --> a1[\"totalitarismoaren azterketa\"]\n  are --> a2[\"ideologia totalizatzailea\"]\n  are -->|\"eragiten du\"| a3[\"esfera publikoaren eta<br>pribatuaren deuseztatzea\"]\n  raw -->|\"erantzuna: erreformatu, ez suntsitu\"| r1[\"justizia ekitate gisa\"]\n  raw --> r2[\"ongizate-estatua\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C6": {
  "subject": "hf",
  "block": "C",
  "tema": "Postmodernitatea",
  "title": "Nietzsche eta postmodernitatea",
  "mermaid": "flowchart TD\n  center[\"NIETZSCHE ETA POSMODERNITATEA\"]:::axis\n  niet[\"NIETZSCHE:<br>deseraikuntza\"]:::key\n  post[\"POSMODERNITATEA\"]:::key\n  hab[\"HABERMAS:<br>modernitatearen defentsa\"]:::key\n  center --> niet\n  niet -->|\"inspiratzen du\"| post\n  niet --> n1[\"egia objektiboaren kritika\"]\n  niet --> n2[\"metafisikaren kritika\"]\n  niet --> n3[\"dualismoaren kritika\"]\n  post --> p1[\"egia unibertsalen kritika<br>(metakontakizunen amaiera)\"]\n  post --> p2[\"aniztasuna eta aldea\"]\n  center --> hab\n  hab -->|\"honi erantzuten dio\"| post\n  hab --> h1[\"arrazoi komunikatiboa\"]\n  hab --> h2[\"modernitatea ez da agortu\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C7": {
  "subject": "hf",
  "block": "C",
  "tema": "Hizkuntzaren filosofia",
  "title": "Hizkuntzaren filosofia",
  "mermaid": "flowchart TD\n  center[\"HIZKUNTZAREN FILOSOFIA\"]:::axis\n  w1[\"WITTGENSTEIN I<br>(lehena)\"]:::key\n  w2[\"WITTGENSTEIN II<br>(bigarrena)\"]:::key\n  txi[\"TXILLARDEGI\"]:::key\n  center --> w1\n  w1 -->|\"bere burua zuzentzen du\"| w2\n  w1 --> a1[\"hizkuntza munduaren irudia da\"]\n  w1 --> a2[\"metafisikak ez du zentzurik\"]\n  w1 --> a3[\"«hitz egin ezin denaz,<br>isildu egin behar da»\"]\n  w2 --> b1[\"esanahia erabilera da\"]\n  w2 --> b2[\"hizkuntza-jokoak\"]\n  w2 --> b3[\"filosofia terapeutikoa\"]\n  center --> txi\n  txi -->|\"euskaratik\"| w2\n  txi --> c1[\"hizkuntzak pentsamendua baldintzatzen du\"]\n  txi --> c2[\"egituratzaile inkontzientea da\"]\n  txi --> c3[\"euskararen biziraupena,<br>zaila euskal estaturik gabe\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C8": {
  "subject": "hf",
  "block": "C",
  "tema": "Existentzialismoa",
  "title": "Existentzialismoa",
  "mermaid": "flowchart TD\n  center[\"EXISTENTZIALISMOA\"]:::axis\n  idea[\"Existentzia konkretutik abiatzen da,<br>ez esentzia abstraktuetatik\"]:::key\n  center -->|\"tesi komuna\"| idea\n  sar[\"SARTRE (ateoa)\"]:::key\n  hei[\"HEIDEGGER\"]:::key\n  ort[\"ORTEGA Y GASSET\"]:::key\n  una[\"UNAMUNO (kristaua)\"]:::key\n  idea --> sar\n  idea --> hei\n  idea --> ort\n  idea --> una\n  sar --> s1[\"existentzia esentziaren aurretik doa\"]\n  sar --> s2[\"aske izatera kondenatuak\"]\n  hei --> h1[\"izatea eta izakiak bereiztea\"]\n  hei --> h2[\"Dasein: munduan projektatua\"]\n  ort --> o1[\"arrazoi bitala\"]\n  ort --> o2[\"«ni neu naiz ni eta nire zirkunstantzia»\"]\n  una --> u1[\"bizitzaren sentimendu tragikoa\"]\n  una --> u2[\"hilezkortasun-irrika\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C9": {
  "subject": "hf",
  "block": "C",
  "tema": "Beauvoir / feminismoa",
  "title": "Simone de Beauvoir: feminismoa",
  "mermaid": "flowchart TD\n  center[\"SIMONE DE BEAUVOIR:<br>feminismoa\"]:::axis\n  tesis[\"«Ez da emakume jaiotzen,<br>egiten da»\"]:::key\n  alt[\"Alteritatea: bigarren sexua\"]:::key\n  eman[\"Emantzipazioa\"]:::key\n  center --> tesis\n  tesis -->|\"azaltzen du\"| alt\n  alt -->|\"honekin gainditzen da\"| eman\n  tesis --> t1[\"ez dago funts femenino finkorik\"]\n  tesis --> t2[\"kulturak eraikitzen du «femeninoa»\"]\n  alt --> a1[\"gizona = subjektu absolutua\"]\n  alt --> a2[\"emakumea = «bestea», osagarria\"]\n  alt --> a3[\"jaunaren eta esklaboaren dialektika\"]\n  eman --> e1[\"hezkuntza berdintzailea\"]\n  eman --> e2[\"abortatzeko eta antisorgailuetarako eskubidea\"]\n  eman --> e3[\"autonomia ekonomikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 }
};
