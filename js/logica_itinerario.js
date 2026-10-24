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
 "enLaDe1o": "1. mailako webgunean",
 "mapaIntro": "Sakatu maila bat bere orria irekitzeko. Markatutako laukia zuri hurrengo dagokiona da.",
 "estHecho": "gaindituta",
 "estSig": "hurrengoa",
 "anterior": "Aurreko maila",
 "siguiente": "Hurrengo maila",
 "volverMapa": "Ibilbidearen mapa",
 "etapas": [
  {
   "titulo": "Logika klasikoa",
   "de": 1,
   "a": 2
  },
  {
   "titulo": "Enuntziatuak, legeak eta klaseak",
   "de": 3,
   "a": 5
  },
  {
   "titulo": "Predikatuak eta aplikazioa",
   "de": 6,
   "a": 9
  },
  {
   "titulo": "Isabelle: programa batekin frogatzea",
   "de": 10,
   "a": 12
  }
 ],
 "guiaTit": "Lan-gida",
 "guiaObj": "Helburua:",
 "guiaRec": "Ibilbidea",
 "guiaPreg": "Galderak: kendu eta jarri premisak",
 "guiaRub": "Kontrol-puntuaren errubrika",
 "guiaNiv": [
  "Aditua",
  "Aurreratua",
  "Bidean",
  "Hasiberria"
 ],
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
    "t": "Galdetegia: baliozkotasuna eta egia, dedukzioa eta indukzioa",
    "h": "#cuestionarios/fil-validez-q",
    "mas": [
     {
      "t": "4. gaiko galdetegia",
      "h": "#cuestionarios/fil-t4-banco"
     }
    ]
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
    },
    {
     "t": "Silogismoak, amaieran: zortzi silogismo Vennen marrazkian urratsez urrats, Eulerrek engainatzen duen kasu batekin",
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
     "t": "Formalizatu: 23 esaldi, tranpa-kasuarekin",
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
    "t": "Galdetegia: enuntziatuen logikan formalizatzea",
    "h": "#cuestionarios/fil-formalizar-q",
    "mas": [
     {
      "t": "Galdetegia: egia-taulak eta logika",
      "h": "#cuestionarios/fil-logica-q"
     }
    ]
   },
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
    },
    {
     "t": "Laborategia, «Dedukzio naturala»: 27 froga lerroz lerro, behin-behineko suposizioekin",
     "h": "#logica/deduccion"
    }
   ],
   "control": {
    "t": "Inferentzia-arauen «araua ala tranpa?» ariketa, 20tik 16 asmatuta",
    "h": "#logica/inferencia"
   },
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
    "t": "Lege bera (adibidez, De Morganena) zubien taulako bost hizkuntzetan idaztea eta egia-taulan eta Vennen diagraman egiaztatzea.",
    "mas": [
     {
      "t": "Galdetegia: lege bera bost hizkuntzatan",
      "h": "#cuestionarios/fil-boole-q"
     }
    ]
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
    "t": "Galdetegia: kuantifikatzaileak, oposizio-karratua eta konbertsioa",
    "h": "#cuestionarios/fil-cuantif-q",
    "mas": [
     {
      "t": "Kuantifikatzaileen ariketa",
      "h": "#logica/cuantificadores"
     }
    ]
   },
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
     "t": "Falazia ez-formalak: Txokoko zerrenda eta «Zer falazia da?» ariketa (20 kasu)",
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
     "t": "Laborategia, «Mundu posibleak»: errepasoko propietateen mapa",
     "h": "#logica/mundos"
    }
   ],
   "control": {
    "t": "Irudien munduko eta Erlazioetako erronkak",
    "h": "#logica/mundo",
    "mas": [
     {
      "t": "Galdetegia: erlazioen propietateak eta mundu txikiak",
      "h": "#cuestionarios/fil-relaciones-q"
     }
    ]
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
   "guia": {
    "obj": "Frogapen bat hasieratik amaierara jarraitzea, urrats bakoitza zerk justifikatzen duen esatea eta frogatzen dena onartutzat ematen denetik bereiztea.",
    "rec": [
     "Frogapen gidatuak, «√2 irrazionala da»: egin urrats guztiak pistei begiratu gabe.",
     "«Zenbaki lehenak infinituak dira»: erreparatu ezertatik ondorioztatzen ez den urratsari (N eraikitzea).",
     "«Menonen karratua»: zer dakien esklaboak hasieran eta zer amaieran.",
     "«Argudio ontologikoa»: jarraitu urratsei eta lotu objekzio bakoitza zein urratsi zuzentzen zaion.",
     "Kanten judizioak: sailkatu «7 + 5 = 12» eta azaldu zergatik ez zuen Kantek analitikotzat hartzen."
    ],
    "preg": [
     "√2ren frogapenean, kendu «zatikia sinplifikatuta dago» premisa: kontraesana dago oraindik? Zein urratsek uzten dio talka egiteari?",
     "Frogapen berean, non erabiltzen da zenbaki oso oro bikoitia edo bakoitia dela? Hori onartuko ez bazenu, zein urrats eroriko litzateke?",
     "Euklidesenean, kendu «1 baino handiagoa den zenbaki orok badu zatitzaile lehenen bat»: jarrai daiteke? Zergatik ez da nahikoa N lehena dela esatea?",
     "Euklidesek N eraikitzen du. Premisa bat da, arau bat ala urrats bat? 4. mailako dedukzio naturalaren arau gisa idatz liteke?",
     "Argudio ontologikoan, kendu 4. urratseko premisa (errealitatean existitzea handiagoa da): kontraesanik dago 5. urratsean? Lotu Kanten objekzioarekin.",
     "Jarri horren ordez Gauniloren uhartea: idatzi argudioa «hura baino handiagorik pentsa ezin daitekeen uhartea» erabiliz. Zein premisa onartu beharko zenuke argudioak funtziona zezan?",
     "Kantek dio «7 + 5 = 12» sintetiko a priori dela. «Batuketa» kontzeptuari buruzko zein premisa gehitu beharko litzaioke analitikoa izan zedin, Leibnizek uste zuen bezala?"
    ],
    "rub": [
     "Frogapen bateko urrats bakoitza bere justifikazioarekin azaltzen du, zein premisa erabiltzen dituen eta zein ematen diren onartutzat esaten du, eta premisa bat kenduta froga hausten den kasu bat proposatzen du.",
     "Frogapen gidatua akatsik gabe egiten du eta premisak izendatzen ditu, baina ez du beti esaten zer gertatuko litzatekeen bat faltako balitz.",
     "Frogapenari pisten laguntzaz jarraitzen dio; batzuetan premisa bat ondorioztatutako urrats batekin nahasten du.",
     "Urratsak errepikatzen ditu, bakoitza zergatik ondorioztatzen den esan gabe."
    ]
   },
   "limite": "Eskuz idatzitako froga batek urrats bat saltatu dezake inork konturatu gabe. Eta programa batek urrats guztiak egiaztatuko balitu? Hori da datorrena."
  },
  {
   "n": 10,
   "titulo": "Isabelle, 1. maila: denboraren munduak",
   "meta": "zer den frogapen-laguntzaile bat, kontraereduak bilatzea eta premisak kentzea zeintzuk behar diren ikusteko, eta zure proposizioak eta premisak idaztea.",
   "pasos": [
    {
     "t": "Laborategia, «Mundu posibleak»: «Isabelleri buruz, eta eskerrak»",
     "h": "#logica/mundos"
    },
    {
     "t": "Laborategia, «Mundu posibleak», praktikako teoria: denbora, iraupena eta sorkuntza",
     "h": "#logica/mundos"
    },
    {
     "t": "Laborategia, «Mundu posibleak», «Denbora, definituta» teoria",
     "h": "#logica/mundos"
    },
    {
     "t": "«✎ Idatzi zure proposizioa», bi munduetatik edozeinetan",
     "h": "#logica/mundos"
    }
   ],
   "control": {
    "t": "«Denbora, definituta» munduan, azaltzea zergatik 9. proposizioak ez gaituen derrigortzen sortu gabeko zerbait onartzera: zein hiru tesi ez datozen batera."
   },
   "guia": {
    "obj": "Frogapen-laguntzaile batek zer egiten duen ulertzea, kontraeredu-bilatzailea erabiltzea zein premisa behar diren ikusteko, eta zure proposizioak idaztea.",
    "rec": [
     "«Mundu posibleak» mahaia, «Isabelleri buruz, eta eskerrak»: zer egiaztatzen duen Isabellek eta zer ez.",
     "Praktikako teoria: mahaiaren «hasteko ibilbidea», ordenan.",
     "«Denbora, definituta» teoria: 9. eta 10. proposizioak.",
     "«✎ Idatzi zure proposizioa» bi teorietako edozeinetan."
    ],
    "preg": [
     "Praktika-munduan, 2. proposizioa: sakatu «Ondorioztatzen al da?» dagoen bezala. Zein premisa falta da? Gehitu eta probatu berriro.",
     "4. proposizioa: premisa eztabaidagarririk gabe dator, eta kontraeredu bat ateratzen da. Zein kasu errealek dauka haren antza? Onartuko zenuke premisa?",
     "Praktika-munduko 9. proposizioa: zenbat gauza behar ditu munduak zerbaitek bi sortzaile izan ditzan? Markatu «Ezerk ez du bi sortzaile» eta azaldu zer aldatzen den.",
     "«Denbora, definituta» munduan, praktika-munduko zein premisa bihurtu dira teorema denbora definitzean? Zergatik da hori aurrerapen bat?",
     "Denbora definituaren 9. proposizioa: kendu aldi bakoitzean talka egiten duten hiru tesietako bat. Zein kenduko zenuke zuk, eta zergatik?",
     "Idatzi egiazkoa iruditzen zaizun proposizio bat. Bilatu kontraeredu bat; ateratzen ez bada, frogatuta geratzen da? Zer esango luke Isabellek?",
     "Zer alde dago «ez dut aurkitu huts egiten duen mundurik» eta «Isabellen frogatua» artean?"
    ],
    "rub": [
     "Bilatzailea erabiltzen du zein premisa behar den aurkitzeko, kontraeredua kasu erreal batekin interpretatzen du eta zehatz bereizten ditu kontraeredurik ez aurkitzea eta frogatuta egotea.",
     "Falta diren premisak aurkitzen ditu eta kontraereduak irakurtzen ditu, baina kosta egiten zaio kasu errealekin lotzea.",
     "Ibilbideko proposizioak laguntzarekin egiten ditu; batzuetan «mundu txikietan ez du huts egiten» eta «frogatua» nahasten ditu.",
     "Botoiak sakatzen ditu, ikusten duena interpretatu gabe."
    ]
   },
   "limite": "Orriko bilatzaileak lau gauzaraino dituzten munduak soilik aztertzen ditu; aurkitzen ez duena ez dago frogatuta. Frogatuta dagoena Isabellek egiaztatu duena da."
  },
  {
   "n": 11,
   "titulo": "Isabelle, 2. maila: bost bideak",
   "meta": "argudio ospetsu bat bere premisetan banatzea, urrats bakoitzean zeinek egiten duen lana ikustea eta eragozpenek non jartzen duten hatza.",
   "pasos": [
    {
     "t": "Laborategia, «Mundu posibleak», «Bost bideak» teoria",
     "h": "#logica/mundos"
    },
    {
     "t": "Laborategia, «Mundu posibleak», «Kanten antinomiak» teoria: tesia, antitesia, Kanten irtenbidea eta besteak",
     "h": "#logica/mundos"
    },
    {
     "t": "Laborategia, «Mundu posibleak», «Izatetik kosmosera» teoria: Parmenides, haren oinordekoak eta Demiurgoa",
     "h": "#logica/mundos"
    },
    {
     "t": "Bost bideak eta nondik datozen",
     "h": "#teoria/hf-cinco-vias"
    }
   ],
   "control": {
    "t": "Zure hitzekin azaltzea 5. eta 9. proposizioen kontraeredua: zein premisa falta den eta zergatik."
   },
   "guia": {
    "obj": "Argudio ospetsu bat bere premisetan banatzea, urrats bakoitzean zeinek egiten duen lana eta objekzioek non jartzen duten hatza ikustea, funtsezko auziari buruzko epairik eman gabe.",
    "rec": [
     "Irakurri «Bost bideak eta nondik datozen» esplorazioa.",
     "«Mundu posibleak» mahaia, «Bost bideak» teoria: bide bakoitza bere premisekin.",
     "5. eta 9. proposizioak: bilatu haien kontraereduak.",
     "Definizioen azpian dagoen oharra, «berezko» kausei eta denborari buruzkoa."
    ],
    "preg": [
     "Lehen bidean, kendu erregresio amaigabea debekatzen duen premisa. Zer mundu eraikitzen du mahaiak? Mundu posible bat da?",
     "Bideek ez dute denboran hasierarik aipatzen, eta Tomasentzat Jainkoa ez dago denboran: betikoa da (Summa Theologiae I, q. 10). Bigarren kausen katean, kausa bakoitza bere efektuarekin batera jarduten da; «batera» hori bigarren kausentzat balio du, ez Jainkoarentzat. Mendekotasuna norabide bakarrekoa da: efektua kausaren mendekoa da, eta ez alderantziz. Zein premisa gehitu beharko zenuke lehen une batez hitz egiteko? Bideren batek behar al du?",
     "5. proposizioa: non dago «gauza bakoitza une batean falta da»-tik «bada une bat zeinetan ez dagoen ezer»-erako jauzia? Idatzi ∀ eta ∃ erabiliz (6. maila).",
     "9. proposizioa: zergatik izan litezke lehen motor bat eta lehen kausa bat bi gauza desberdin? Zein premisa beharko litzateke gauza bera izan daitezen?",
     "Tomasek ukatu egiten du zerbait bere buruaren kausa izatea. Non agertzen da ideia hori mahaian (premisetan edo oharretan)? Zer gertatuko litzateke bigarren bidearekin onartuko balitz?",
     "Tomasek frogagarritzat du dena Jainkoaren mende dagoela izateko (Summa Theologiae I, q. 44) eta fedezko egiatzat, ez frogagarri ez gezurtagarri, mundua denboran hasi zela (I, q. 46, 1. eta 2. artikuluak). Zertan antzematen da alde hori mahaiko premisetan?",
     "Aukeratu eztabaidagarriena iruditzen zaizun premisa. Logikako arazo bat da ala filosofiakoa?"
    ],
    "rub": [
     "Bide bakoitzean lana egiten duen premisa identifikatzen du, 5. eta 9. proposizioen kontraeredua azaltzen du eta argudioaren baliozkotasuna eta premisen onargarritasuna bereizten ditu, funtsezko auzia itxitzat eman gabe.",
     "Bi kontraereduak azaltzen ditu, baina ez daki beti zein premisak saihesten dituen.",
     "Mahaiari jarraitzen dio eta premisak ezagutzen ditu, baina kritika logikoa eta ondorioari buruzko iritzia nahasten ditu.",
     "Jainkoaren existentziari buruzko epaia ematen du, argudioa aztertu beharrean."
    ]
   },
   "limite": "Premisa batek lan guztia egiteak ez du faltsu bihurtzen: onartu ala ez erabakitzea ez da jada logika, filosofia da."
  },
  {
   "n": 12,
   "titulo": "Isabelle, 3. maila: Spinozaren Etika",
   "meta": "Etikaren I. zatia sistema gisa irakurtzea, egileak idazten ez dituen premisak aurkitzea, zeintzuk soberan dauden eta zeintzuk talka egiten duten ikustea, eta programa batek obra oso bat egiaztatzeak zer esan nahi duen ulertzea.",
   "pasos": [
    {
     "t": "Laborategia, «Mundu posibleak», «Spinoza, Etika I» teoria: geruzak, «Soberan al dago premisaren bat?» eta «Idatzi zure proposizioa»",
     "h": "#logica/mundos"
    }
   ],
   "control": {
    "t": "Proposizio bat aukeratzea, ahal diren premisa guztiak kentzea eta, idatziz, eztabaidagarriena onargarria den defendatzea."
   },
   "guia": {
    "obj": "Etikaren I. zatia sistema gisa irakurtzea, Spinozak idazten ez dituen premisak aurkitzea, zein dauden soberan eta zeinek egiten duten talka ikustea, eta programa batek obra oso bat egiaztatzeak zer esan nahi duen ulertzea.",
    "rec": [
     "«Mundu posibleak» mahaia, «Spinoza, Etika I» teoria: hasi lehen geruzatik.",
     "Aukeratu proposizio bat eta sakatu «Soberan al dago premisaren bat?».",
     "Bilatu H_ hasiera duen premisa bat (Spinozak idazten ez dituenak) eta irakurri lasai.",
     "«✎ Idatzi zure proposizioa» Etikaren terminoekin."
    ],
    "preg": [
     "Aukeratu proposizio bat. Kendu premisak banan-banan: zeintzuk dira benetan beharrezkoak? Bat datoz Spinozak bere frogapenean aipatzen dituenekin?",
     "Zein H_ premisa iruditzen zaizu eztabaidagarriena? Kendu eta begiratu kontraeredua: zer motatako mundua onartzen du?",
     "Bi premisak talka egiten badute, zein kenduko zenuke? Zein proposizio eroriko lirateke harekin batera?",
     "Spinozak dio Jainkoa bere buruaren kausa dela, eta Tomasek ukatu egiten du. Mahaiaren laguntzaz, Etikaren zein definiziok edo axiomak egiten du posible bere buruaren kausa?",
     "Etikak substantziaren atributuez hitz egiten du, eta horiek propietateen propietateak dira. Zergatik eramaten du horrek lehen mailako logikatik harago (6. maila)?",
     "Zer irabazten du irakurle batek programa batek obra oso bat egiaztatzen duenean? Zer ezin dio esan programak?"
    ],
    "rub": [
     "Proposizio bat aukeratzen du, ahal dituen premisa guztiak kentzen ditu kontraereduekin justifikatuz, eta idatziz defendatzen du premisa eztabaidagarriena onargarria den ala ez, logika eta filosofia bereiziz.",
     "Premisak kentzen ditu eta kontraereduak irakurtzen ditu, baina idatzizko defentsa laburra da edo ez ditu logika eta filosofia bereizten.",
     "«Soberan al dago premisaren bat?» erabiltzen du eta ateratzen dena deskribatzen du, baloratu gabe.",
     "Ez da iristen premisak Spinozaren frogapenarekin lotzera."
    ]
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
     "t": "Falaziak: ez-formalen zerrenda, hiztegiarekin lotua, eta «Zer falazia da?»",
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
   "txt": "Aristoteles, estoikoak, Erdi Arokoak, Leibniz, Kant, Frege eta Russell: tresna bakoitza nondik datorren.",
   "pasos": [
    {
     "t": "Logika estoikoa: Krisiporen bost frogaezinak",
     "h": "#logica/clasicos/estoicos"
    },
    {
     "t": "Erdi Aroko logika: suposizioa, ondorioztapenak eta obligazioak",
     "h": "#logica/clasicos/medievales"
    },
    {
     "t": "Helenismoa (Filosofia 1.): estoikoak eta epikurearrak",
     "h": "#teoria/fil-helenismo"
    },
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
     "t": "Laborategia, «Indukzioa eta abdukzioa»: ziurtasunik gabe arrazoitzeko lau modu, Humeren arazoa, Peirceren abdukzioa eta hogei kasu",
     "h": "#logica/induccion"
    },
    {
     "t": "Logika eta argudiaketa (4. gaia): abdukzioa eta analogia",
     "h": "#teoria/fil-t4"
    }
   ]
  }
 ]
};
