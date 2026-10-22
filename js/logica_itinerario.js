// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/logica_itinerario.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const LOG_ITIN = {
 "titulo": "Ibilbidea: zerotik aditu izatera",
 "intro": "Hamabi maila, Aristotelesen silogismotik Spinozaren Etikako proposizioak frogapen-laguntzaile batekin frogatzera arte. Poliki joaten da: maila bakoitzak esaten du amaitzean zer jakingo duzun, zer egin eta zein ordenatan, hurrengora pasa zaitezkeen nola egiaztatu eta ikasitakoa noraino iristen den. Maila bateko tresnak hurrengoan probatzen dira: batzuetan balio dute oraindik, eta beste batzuetan beren muga erakusten dute.",
 "tarjeta": "Hamabi maila ordenan, silogismotik Isabellerekin frogatzera. Hemendik hasi, nondik hasi ez badakizu.",
 "abrir": "Ikusi ibilbidea",
 "nivel": "Nivel {n}",
 "meta": "Amaitzean jakingo duzu:",
 "pasos": "Zer egin, ordena honetan",
 "control": "Kontrol-puntua:",
 "falta": "Prestatzen:",
 "limite": "Noraino iristen den:",
 "hecho": "Gainditu dut",
 "progreso": "{t} mailatik {n} gainditu dituzu.",
 "progresoNada": "Markatu maila bakoitza bere kontrol-puntua gainditzen duzunean: nabigatzaile honetan bakarrik gordetzen da.",
 "noAqui": "ez dago web honetan",
 "ramasTit": "Alboko adarrak",
 "ramasIntro": "Adar horietan sartzeko, adierazitako mailatik abiatu daiteke, bide nagusia utzi gabe.",
 "desde": "{n}. mailatik",
 "puentesTit": "Zubiak: lege bera bost hizkuntzatan",
 "puentes": {
  "cab": [
   "Enuntziatuak",
   "Multzoak",
   "Booleren aljebra",
   "Betiko zenbakiak (0 eta 1ekin)",
   "Ateak"
  ],
  "filas": [
   [
    "¬p",
    "Aᶜ",
    "x′",
    "1 − x",
    "NOT"
   ],
   [
    "p ∧ q",
    "A ∩ B",
    "x · y",
    "x · y",
    "AND"
   ],
   [
    "p ∨ q",
    "A ∪ B",
    "x + y (1 + 1 = 1 izanik)",
    "x + y − x · y",
    "OR"
   ],
   [
    "¬(p ∧ q) ↔ ¬p ∨ ¬q",
    "(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
    "(x · y)′ = x′ + y′",
    "1 − x · y = (1 − x) + (1 − y) − (1 − x)(1 − y)",
    "NAND = bi NOTen OR"
   ],
   [
    "tautologia",
    "U, unibertsoa",
    "1",
    "beti 1",
    "beti piztuta dagoen lanpara"
   ],
   [
    "kontraesana",
    "∅, multzo hutsa",
    "0",
    "beti 0",
    "beti itzalita dagoen lanpara"
   ]
  ],
  "nota": "Errenkada bakoitzak gauza bera esaten du bost aldiz. Egiaztatu: De Morganen legea egia-taula batean ikus daiteke, Vennen diagrama batean, 0 eta 1ekin kontua eginez eta bi atekin."
 },
 "niveles": [
  {
   "n": 1,
   "titulo": "Silogismoa: baliozkotasuna, egia eta orokortasun-mailak",
   "meta": "arrazoibide bat baliozkoa izan daitekeela premisa faltsuekin eta ez-baliozkoa dena egiazkoa izanik ere; zer den deduzitzea eta zer induzitzea; eta «guztiak», «batzuk» eta «bat ere ez» orokortasun-maila desberdinak direla, eta ondo josten direnean bakarrik ematen dutela arrazoibide baliozkoa.",
   "pasos": [
    {
     "t": "Logika eta argudiaketa (4. gaia): baliozkotasuna eta egia, dedukzioa eta indukzioa",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Pistak: baliozkoa ala egiazkoa?",
     "h": "#pistas/fil-validez"
    },
    {
     "t": "Silogismoak: lau proposizioak (A, E, I, O), hiru terminoak, figurak eta arauak",
     "h": "#logica/silogismos"
    },
    {
     "t": "Silogismoaren falaziak: zein arau hausten du bakoitzak",
     "h": "#logica/falacias"
    }
   ],
   "control": {
    "t": "4. gaiko galdetegia",
    "h": "#cuestionarios/fil-t4-banco"
   },
   "limite": "Silogismoak gauza-multzoekin eta hiru terminorekin lan egiten du. Ez daki zer egin «baldin…, orduan» edo «edo» lotuta dauden esaldiekin: hori 3. mailan iritsiko da."
  },
  {
   "n": 2,
   "titulo": "Silogismotik marrazkira: Euler eta Venn",
   "meta": "proposizio bakoitza eta silogismo bakoitza Eulerren diagrama batera eta Vennen batera itzultzea, eta marrazkian ondorioa premisetan jada badagoen irakurtzea.",
   "pasos": [
    {
     "t": "Logika eta argudiaketa (4. gaia): Eulerren eta Vennen diagramak",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Silogismoak: premisen eta ondorioaren diagramak",
     "h": "#logica/silogismos"
    }
   ],
   "control": {
    "t": "Galdetegia: proposizioak, klaseak eta Eulerren eta Vennen diagramak",
    "h": "#cuestionarios/fil-venn-q"
   },
   "limite": "Eulerrek azaltzen du baina ez du frogatzen: marrazki bakar batek engana dezake. Vennek bai frogatzen du, baina hiru multzorekin jada nekeza da, eta ezin ditu gauzen arteko erlazioak marraztu."
  },
  {
   "n": 3,
   "titulo": "Enuntziatuen logika",
   "meta": "konektiboak, lehenengo erabileraren bidez eta gero izenaren bidez; «soilik baldin», «izan ezean» edo «ez… ez…» bezalako esaldiak formalizatzea; egia-taulak egitea; tautologia bat eta kontraesan bat ezagutzea; eta logika bera zirkuitu bat funtzionatzen jartzen duela ikustea.",
   "pasos": [
    {
     "t": "Laborategia, «Hitz egin dezagun?»: konektibo baten esanahia erabileratik ondorioztatu",
     "h": "#logica/hablamos"
    },
    {
     "t": "Formalizatu: 13 esaldi, tranpa-kasuarekin",
     "h": "#logica/formalizar"
    },
    {
     "t": "Egia-taulak: tautologia, kontraesana eta kontingentzia",
     "h": "#logica/tablas"
    },
    {
     "t": "Ate logikoak: formula zirkuitu gisa",
     "h": "#logica/puertas"
    }
   ],
   "control": {
    "t": "Galdetegia: egia-taulak eta logika",
    "h": "#cuestionarios/fil-logica-q"
   },
   "falta": "Formalizazio-galdetegi bat eta egia-taulen galdetegiaren bertsio zabaldu bat.",
   "limite": "Egia-taulak dena erabakitzen du, baina oso azkar hazten da: 5 letrarekin jada 32 errenkada dira. Taula osoa egin gabe arrazoitzeko legeak eta arauak behar dira: 4. maila."
  },
  {
   "n": 4,
   "titulo": "Lege logikoak eta dedukzioa",
   "meta": "enuntziatuen logikaren legeak, arau baliodunak (modus ponens, modus tollens, silogismo hipotetikoa eta disjuntiboa, dilema) eta haien imitazio faltsuak, eta ondorio bat urratsez urrats ondorioztatzea taula egin gabe.",
   "pasos": [
    {
     "t": "Lege logikoak: 70 lege, bakoitza bere taulan egiaztagarria",
     "h": "#logica/leyes"
    },
    {
     "t": "Inferentzia-arauak eta «araua ala tranpa?» ariketa",
     "h": "#logica/inferencia"
    },
    {
     "t": "Lege logikoak: 21 arau eratorriak",
     "h": "#logica/leyes"
    }
   ],
   "control": {
    "t": "Inferentzia-arauen «araua ala tranpa?» ariketa, 12tik 10 asmatuta",
    "h": "#logica/inferencia"
   },
   "falta": "Frogapenak dedukzio naturalean, arauak lerroz lerro aplikatuz.",
   "limite": "Dedukzio-arau bakoitza taulako tautologia bat da: taulak justifikatzen ditu eta arauek lana aurrezten dute. Baina horrek guztiak esaldi osoez hitz egiten du, ez haien barruan dagoenaz."
  },
  {
   "n": 5,
   "titulo": "Klaseak, multzoak eta Booleren aljebra",
   "meta": "klaseen eta multzoen eragiketak, haien legeak, Booleren aljebra eta, batez ere, lege horiek berak direla enuntziatuen logikakoak, 0 eta 1ekin betiko kontuenak eta ate logikoenak.",
   "pasos": [
    {
     "t": "Logika eta argudiaketa (4. gaia): klaseak, eragiketak, legeak eta Russellen paradoxa",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Multzoen legeak: konparatu bi adierazpen Vennen diagraman (eta tranpa-legea)",
     "h": "#logica/conjuntos"
    },
    {
     "t": "Logika eta argudiaketa (4. gaia): Boole eta ateak",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Ate logikoak: De Morgan bi atekin",
     "h": "#logica/puertas"
    },
    {
     "t": "Leibnizen tailerra: bitarra eta zenbaki bereizgarriak",
     "h": "#leibniz"
    }
   ],
   "puentes": true,
   "control": {
    "t": "Lege bera (adibidez, De Morganena) zubien taulako bost hizkuntzetan idaztea eta egia-taulan eta Vennen diagraman egiaztatzea."
   },
   "limite": "Klaseekin «A guztiak B dira» esaten da, baina ez «A bakoitzak B bat maite du»: falta da gauza bakoitzaz bereizita hitz egitea. 6. maila da."
  },
  {
   "n": 6,
   "titulo": "Predikatuen logika: «guztiak», «batzuk», «bat ere ez»",
   "meta": "«guztiak», «batzuk» eta «bat ere ez» antzinako eran eta gaurkoan irakurtzea, ∀ eta ∃ erabiliz; oposizio-karratua eta konbertsioa bi bertsioetan; subjektu hutsaren arazoa; eta aldagaiak (x, y) erabiltzea: zer dagoen lotuta eta zer askea.",
   "pasos": [
    {
     "t": "Oposizio-karratua, irakurketa tradizionalarekin eta gaurkoarekin, eta konbertsioa",
     "h": "#logica/cuadrado"
    },
    {
     "t": "Kuantifikatzaileak: A, E, I eta O ∀ eta ∃ erabiliz, eta bost indibiduoko mundua",
     "h": "#logica/cuantificadores"
    }
   ],
   "control": {
    "t": "Kuantifikatzaileen ariketa (10 esaldi)",
    "h": "#logica/cuantificadores"
   },
   "falta": "Kuantifikatzaileen eta konbertsioaren galdetegi bat.",
   "limite": "Antzinako karratuak onartzen du hitz egiten den zerbait badagoela; gaurko logikak ez. Horregatik betiko inferentzia batzuk (Darapti) premisa hori gehitzen bada bakarrik balio dute."
  },
  {
   "n": 7,
   "titulo": "Ikasitakoa aplikatu: argudio klasikoak, paradoxak eta falaziak",
   "meta": "tresna hauekin egileen argudioak, paradoxak eta falazia klasikoak aztertzea, eta baliozkotasuna egia-zuhaitz batekin egiaztatzea.",
   "pasos": [
    {
     "t": "Argudio klasikoak: Monika, Agustin eta baldintza beharrezkoa eta nahikoa",
     "h": "#logica/clasicos/monica"
    },
    {
     "t": "Ariketak: forma logikoa duten esaldiak",
     "h": "#logica/ejercicios"
    },
    {
     "t": "Paradoxak: gezurtia, bizargina, Zenon…",
     "h": "#logica/paradojas"
    },
    {
     "t": "Falazia klasikoak",
     "h": "#logica/falacias"
    },
    {
     "t": "Laborategia, «Egia-zuhaitza»: cogitoa, gaizkiaren arazoa, dilema",
     "h": "#logica/arbol"
    },
    {
     "t": "Dortokak Akilesi esan ziona",
     "h": "#logica/paradojas/carroll"
    }
   ],
   "control": {
    "t": "Paradoxa bat eta falazia bat aukeratzea eta, behar den tresnarekin, urrats faltsua non dagoen esatea."
   },
   "limite": "Carrollen dortokak funtsezko muga erakusten du: arau bat ezin da premisa gehigarri bihurtu erregresio amaigabean erori gabe. Logika aplikatzeko, arauak onartu behar dira."
  },
  {
   "n": 8,
   "titulo": "Munduak eta erlazioak",
   "meta": "esaldi bat mundu zehatz batean egiazkoa den erabakitzea, eta erlazio baten propietateak (erreflexiboa, simetrikoa, iragankorra…) ezagutzea eta zeintzuetatik zer ondorioztatzen den.",
   "pasos": [
    {
     "t": "Laborategia, «Irudien mundua»: bost erronkak",
     "h": "#logica/mundo"
    },
    {
     "t": "Laborategia, «Erlazioak»: bost erronkak",
     "h": "#logica/relaciones"
    },
    {
     "t": "Laborategia, «Spinoza»: berrikuspeneko propietate-mapa",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "Irudien munduko eta Erlazioetako erronkak",
    "h": "#logica/mundo"
   },
   "limite": "Mundu txiki batek esaldi bat gezurtatu dezake, baina ez frogatu: badira mundu handietan edo infinituetan soilik huts egiten duten esaldiak."
  },
  {
   "n": 9,
   "titulo": "Logikatik matematikara",
   "meta": "froga matematiko bati jarraitzea eta urrats ahula aurkitzea, frogatua eta aurresuposatua bereiztea, eta Kantek zer judizio bereizten zituen eta gaurko logikan zer geratzen den haietatik ikustea.",
   "pasos": [
    {
     "t": "Laborategia, «Frogapen gidatuak»: 2ren erroa, Euklides, Menon, Anselmo",
     "h": "#logica/demos"
    },
    {
     "t": "Laborategia, «Kanten judizioak»",
     "h": "#logica/kant"
    }
   ],
   "control": {
    "t": "Frogapen gidatu bat hasieratik bukaeraraino egitea, urrats bakar batean ere huts egin gabe."
   },
   "limite": "Eskuz idatzitako froga batek urrats bat saltatu dezake inork konturatu gabe. Eta programa batek urrats guztiak egiaztatuko balitu? Hori da datorrena."
  },
  {
   "n": 10,
   "titulo": "Isabelle, 1. maila: denboraren munduak",
   "meta": "zer den frogapen-laguntzaile bat, kontraereduak bilatzea eta premisak kentzea zeintzuk behar diren ikusteko, eta zure proposizioak eta premisak idaztea.",
   "pasos": [
    {
     "t": "Laborategia, «Spinoza»: «Isabelleri buruz, eta eskerrak»",
     "h": "#logica/spinoza"
    },
    {
     "t": "Laborategia, «Spinoza», praktika-mundua: denbora, iraupena eta sorkuntza",
     "h": "#logica/spinoza"
    },
    {
     "t": "Laborategia, «Spinoza», «Denbora, definituta» mundua",
     "h": "#logica/spinoza"
    },
    {
     "t": "«✎ Idatzi zure proposizioa», bi munduetatik edozeinetan",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "«Denbora, definituta» munduan, azaltzea zergatik 9. proposizioak ez gaituen derrigortzen sortu gabeko zerbait onartzera: zein hiru tesi ez datozen batera."
   },
   "limite": "Orriko bilatzaileak lau gauzaraino dituzten munduak soilik aztertzen ditu; aurkitzen ez duena ez dago frogatuta. Frogatuta dagoena Isabellek egiaztatu duena da."
  },
  {
   "n": 11,
   "titulo": "Isabelle, 2. maila: bost bideak",
   "meta": "argudio ospetsu bat bere premisetan banatzea, urrats bakoitzean zeinek egiten duen lana ikustea eta eragozpenek non jartzen duten hatza.",
   "pasos": [
    {
     "t": "Laborategia, «Spinoza», «Bost bideak» mundua",
     "h": "#logica/spinoza"
    },
    {
     "t": "Bost bideak eta nondik datozen",
     "h": "#teoria/hf-cinco-vias"
    }
   ],
   "control": {
    "t": "Zure hitzekin azaltzea 5. eta 9. proposizioen kontraeredua: zein premisa falta den eta zergatik."
   },
   "limite": "Premisa batek lan guztia egiteak ez du faltsu bihurtzen: onartu ala ez erabakitzea ez da jada logika, filosofia da."
  },
  {
   "n": 12,
   "titulo": "Isabelle, 3. maila: Spinozaren Etika",
   "meta": "Etikaren I. zatia sistema gisa irakurtzea, egileak idazten ez dituen premisak aurkitzea, zeintzuk soberan dauden eta zeintzuk talka egiten duten ikustea, eta programa batek obra oso bat egiaztatzeak zer esan nahi duen ulertzea.",
   "pasos": [
    {
     "t": "Laborategia, «Spinoza», «Spinoza, Etika I» mundua: geruzak, «Soberan al dago premisaren bat?» eta «Idatzi zure proposizioa»",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "Proposizio bat aukeratzea, ahal diren premisa guztiak kentzea eta, idatziz, eztabaidagarriena onargarria den defendatzea."
   },
   "limite": "Spinozak substantziaren atributuez hitz egiten du, eta propietateen propietateez hitz egiteak lehen mailako predikatuen logikatik harago eramaten du: goi-mailako logikaren atea da, Isabelle/HOLena."
  }
 ],
 "ramas": [
  {
   "titulo": "Falazia ez-formalak eta erretorika",
   "desde": 1,
   "txt": "Formaren ez baizik edukiaren tranpak, eta eztabaidatzeko artea.",
   "pasos": [
    {
     "t": "Falaziak",
     "h": "#logica/falacias"
    },
    {
     "t": "Arrazoien dueloa",
     "h": "#duelo"
    },
    {
     "t": "Hitzaren artea",
     "h": "#palabra"
    }
   ]
  },
  {
   "titulo": "Logikaren historia",
   "desde": 1,
   "txt": "Aristoteles, Leibniz, Kant, Frege eta Russell: tresna bakoitza nondik datorren.",
   "pasos": [
    {
     "t": "Leibnizen tailerra",
     "h": "#leibniz"
    },
    {
     "t": "Kant: judizioak eta gaurko logika",
     "h": "#teoria/hf-kant-juicios"
    },
    {
     "t": "Filosofia analitikoa: Russell eta Wittgenstein",
     "h": "#teoria/hf-analitica"
    }
   ]
  },
  {
   "titulo": "Indukzioa eta abdukzioa",
   "desde": 1,
   "txt": "Ziurtasunik gabe arrazoitzea: orokortu, alderatu eta azalpen onena bilatu.",
   "pasos": [
    {
     "t": "Logika eta argudiaketa (4. gaia): abdukzioa eta analogia",
     "h": "#teoria/fil-t4"
    }
   ],
   "falta": "Indukzio-indarraren, analogiaren eta azalpen onenaren mahai bat."
  }
 ]
};
