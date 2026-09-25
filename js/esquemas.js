// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/esquemas.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const ESQUEMAS = {
 "AA-REL-02": {
  "subject": "hf",
  "block": "A",
  "tema": "Aristoteles",
  "title": "Aldaketaren kausak",
  "mermaid": "flowchart TD\n  center[\"ALDAKETAREN KAUSAK\"]:::axis\n  intr[\"berezkoak\"]\n  estr[\"kanpokoak\"]\n  mat[\"materiala\"]:::key\n  mat_e[\"aldaketa jasaten duen substratua\"]\n  form[\"formala\"]:::key\n  form_e[\"hartzen den itxura\"]\n  erag[\"eragilea\"]:::key\n  erag_e[\"abian jartzen duena\"]\n  xede[\"finala\"]:::key\n  xede_e[\"aldaketaren helburua\"]\n  center -->|\"hauek dira\"| intr\n  center -->|\"hauek dira\"| estr\n  intr --> mat\n  intr --> form\n  estr --> erag\n  estr --> xede\n  mat -->|\"da\"| mat_e\n  form -->|\"da\"| form_e\n  erag -->|\"da\"| erag_e\n  xede -->|\"da\"| xede_e\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zergatik aldatzen dira gauzak, eta zer behar da aldaketa bat azaltzeko?",
   "raiz": "ALDAKETAREN KAUSAK",
   "raiz_d": "Aristotelesek Parmenidesi erantzuten dio: aldaketa erreala da, eta bere kausen bidez azal daiteke.",
   "ramas": [
    {
     "rel": "honela ulertzen da",
     "t": "Potentziatik ekintzarako igarotzea",
     "k": true,
     "a": "Aristoteles",
     "d": "Potentzia izateko aukera da; ekintza, aukera hori gauzatuta.",
     "c": [
      {
       "rel": "adibidez",
       "t": "Brontzea estatua bihurtzen da",
       "d": "Brontzea estatua da potentzian; landu ondoren, ekintzan."
      }
     ]
    },
    {
     "rel": "gauzaren barruan",
     "t": "Barne-kausak",
     "d": "Substantziaren beraren parte dira: haren materia eta haren forma (hilemorfismoa).",
     "c": [
      {
       "rel": "zerez egina dagoen",
       "t": "Kausa materiala",
       "k": true,
       "d": "Aldaketan zehar irauten duen substratua: brontzea."
      },
      {
       "rel": "zer den",
       "t": "Kausa formala",
       "k": true,
       "d": "Hartzen duen egitura edo esentzia: estatuaren irudia."
      }
     ]
    },
    {
     "rel": "gauzatik kanpo",
     "t": "Kanpo-kausak",
     "d": "Ez dira gauzaren parte, baina sortu eta bideratu egiten dute.",
     "c": [
      {
       "rel": "zerk sortzen duen",
       "t": "Kausa eraginkorra",
       "k": true,
       "d": "Aldaketa abian jartzen duen eragilea: eskultorea."
      },
      {
       "rel": "zertarako",
       "t": "Kausa finala",
       "k": true,
       "d": "Aldaketak jotzen duen helburua: estatua amaitua eta haren xedea."
      }
     ]
    },
    {
     "rel": "hortik ikuspegi bat",
     "t": "Teleologia",
     "d": "Izaki guztiek, natura barne, helburu baterantz jotzen dute (finalismoa).",
     "c": [
      {
       "rel": "haren azken printzipioa",
       "t": "Motor geldia",
       "d": "Ekintza hutsa: mugitu gabe, gainerako guztia kausa final gisa erakartzen du."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Kausa formala",
     "rel": "potentzia aktualizatzen dio",
     "a": "Kausa materiala"
    },
    {
     "de": "Kausa finala",
     "rel": "orokortuta, hau da",
     "a": "Teleologia"
    }
   ],
   "idea": "Aristotelesentzat, aldatzea potentziatik ekintzara igarotzea da, eta aldaketa bat erabat azalduta geratzeko lau kausak behar dira: zerez, zer, nork eta zertarako. Naturan dena helburu baterantz doa."
  }
 },
 "BH-REL-01": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Hume eta enpirismoa",
  "mermaid": "flowchart TD\n  n0[\"HUME\"]\n  n1[\"Ezagutzaren azterketa\"]\n  n2[\"pertzepzioak\"]:::axis\n  n3[\"inpresioak\"]\n  n4[\"ideiak\"]\n  n5[\"irudimenaren asoziazio-legeek antolatuak\"]\n  n6[\"hurbiltasuna\"]\n  n7[\"kausalitatea\"]:::key\n  n8[\"antzekotasuna\"]\n  n9[\"ezagutza faktikoa\"]:::key\n  n10[\"ideien arteko harremanak\"]:::key\n  n11[\"ohituran oinarritutako sinesmena\"]\n  n12[\"ezagutza unibertsala, beharrezkoa\"]\n  n13[\"metafisikaren eta zientziaren kritika\"]:::axis\n  n14[\"moralaren oinarria: emotibismo morala\"]:::key\n  n15[\"substantziaren ideia: mundua, jainkoa, nia\"]\n  n16[\"lotura beharrezkoaren ideia\"]\n  n17[\"sentimenduan\"]\n  n18[\"fenomenismoa\"]\n  n19[\"eszeptizismoa\"]\n  n20[\"ona\"]\n  n21[\"ekintza\"]\n  n22[\"tolerantzia: bizikidetzarako araua eta jarrera\"]\n  n23[\"itunean\"]\n  n0 --> n1\n  n1 -->|\"haren oinarria\"| n2\n  n2 -->|\"bitan banatzen dira\"| n3\n  n2 --> n4\n  n2 -->|\"honen kausa dira:\"| n5\n  n5 --> n6\n  n5 --> n7\n  n5 --> n8\n  n7 -->|\"hemen aplikatzen dira:\"| n9\n  n8 -->|\"hemen aplikatzen dira:\"| n10\n  n9 -->|\"haren oinarria\"| n11\n  n10 -->|\"osatzen dute\"| n12\n  n11 --> n13\n  n13 --> n15\n  n13 --> n16\n  n12 --> n14\n  n14 -->|\"non?\"| n17\n  n15 -->|\"sortzen du\"| n18\n  n16 -->|\"sortzen du\"| n19\n  n17 -->|\"erabakitzen du\"| n20\n  n17 --> n21\n  n19 -->|\"sortzen du\"| n22\n  n20 -->|\"adierazten da\"| n23\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer geratzen da kausalitatetik, substantziatik eta moraletik, inpresio batetik datorrena bakarrik baliozkoa bada?",
   "raiz": "HUMEREN KRITIKA",
   "raiz_d": "Humek proba bat aplikatzen die filosofiaren ideia handiei: zein inpresiotatik dator ideia hau? Inpresiorik ez badago, ideiak ez du oinarririk.",
   "ramas": [
    {
     "rel": "lehen jomuga",
     "t": "Kausalitatea",
     "k": true,
     "d": "Kausak ondorioa nahitaez sortzen duela uste dugu.",
     "c": [
      {
       "rel": "esperientziak erakusten du",
       "t": "Segida eta lotura konstantea",
       "d": "Gertakari bat beste baten ondoren datorrela ikusten dugu, behin eta berriz."
      },
      {
       "rel": "baina ez du erakusten",
       "t": "Beharrezko lotura",
       "d": "Ez dago «gertatu behar du» horren inpresiorik: ideia hori ez dator esperientziatik."
      },
      {
       "rel": "honen bidez azaltzen da",
       "t": "Ohitura",
       "k": true,
       "d": "Errepikapenak ondorioa itxaroteko ohitura sortzen du gugan: sinesmen bat da, ez arrazoi bat."
      }
     ]
    },
    {
     "rel": "bigarren jomuga",
     "t": "Substantzia",
     "d": "Pertzepzioen azpian legokeen zerbait iraunkorra.",
     "c": [
      {
       "rel": "kanpoko munduarena",
       "t": "Pertzepzioak baino ez ditugu",
       "d": "Ezin gara haietatik irten, haiek eragiten dituzten gorputzak badirela egiaztatzeko."
      },
      {
       "rel": "niarena",
       "t": "Pertzepzio-sorta bat",
       "d": "Ez dago ni finko baten inpresiorik; elkarren segidan datozen pertzepzioen jario bat baino ez."
      },
      {
       "rel": "Jainkoarena",
       "t": "Jainkoa munduaren kausa gisa",
       "d": "Ez dago Jainkoaren inpresiorik, eta kausa gisa ondorioztatzeko ezagutzen ez dugun beharrezko lotura bat behar da."
      }
     ]
    },
    {
     "rel": "ondorioak",
     "t": "Ezagutzaren mugak",
     "k": true,
     "c": [
      {
       "rel": "metafisikan",
       "t": "Fenomenismoa",
       "d": "Fenomenoak baino ez ditugu ezagutzen, ez errealitatea bere baitan."
      },
      {
       "rel": "zientzian",
       "t": "Ezagutza probablea soilik",
       "d": "Lege naturalek behatutakoa orokortzen dute; bihar betetzea ez da beharrezkoa."
      },
      {
       "rel": "azken jarrera",
       "t": "Eszeptizismo moderatua",
       "d": "Ezin ditugu sinesmen horiek arrazionalki oinarritu, baina bizitzak haiei jarraitzera behartzen gaitu."
      }
     ]
    },
    {
     "rel": "moralean ere bai",
     "t": "Emotibismoa",
     "k": true,
     "d": "Judizio moralek onespen- edo gaitzespen-sentimenduak adierazten dituzte, ez egitateak.",
     "c": [
      {
       "rel": "zeren",
       "t": "Arrazoiak ez gaitu ekintzara bultzatzen",
       "d": "«Arrazoia grinen esklabo da, eta halakoa besterik ez luke izan behar.»"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ohitura",
     "rel": "hau bihurtzen du",
     "a": "Ezagutza probablea soilik"
    },
    {
     "de": "Beharrezko lotura",
     "rel": "hura gabe, erori egiten da honen froga",
     "a": "Jainkoa munduaren kausa gisa"
    }
   ],
   "idea": "Humek ez du ukatzen kausetan, gorputzetan edo ni batean sinesten dugunik: sinesmen horiek ohituratik eta irudimenetik sortzen direla erakusten du, ez arrazoitik ezta inongo inpresiotatik ere."
  }
 },
 "BH-REL-02": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Ezagutza Humerengan",
  "mermaid": "flowchart TD\n  ezag[\"EZAGUTZA\"]:::axis\n  lock[\"Locke eta Descartes\"]:::key\n  pertz[\"PERTZEPZIOAK\"]:::axis\n  eduk[\"buruko eduki guztiak\"]\n  inpr[\"inpresioak\"]:::key\n  trin[\"biziak eta indartsuak\"]\n  ideiak[\"ideiak\"]:::key\n  ahul[\"ahulak eta lausoak\"]\n  esper[\"ESPERIENTZIA\"]:::axis\n  desc[\"Descartes\"]:::key\n  sortz[\"jaiotzetiko ideiak, kanpotikoak eta faktizioak\"]\n  ezag -->|\"hauentzat bezala\"| lock\n  ezag -->|\"hau izatea da\"| pertz\n  pertz -->|\"hauek dira\"| eduk\n  pertz -->|\"hauek izan daitezke\"| inpr\n  pertz -->|\"hauek izan daitezke\"| ideiak\n  inpr -->|\"horrelakoak badira\"| trin\n  inpr -->|\"hauek sortzen dituzte\"| ideiak\n  ideiak -->|\"horrelakoak badira\"| ahul\n  pertz -->|\"jatorri hau dute\"| esper\n  esper -->|\"honen aldean\"| desc\n  desc -->|\"hau onartzen zuena\"| sortz\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nondik datoz gure ideiak, eta zer ezagutza mota lor ditzakegu haiekin?",
   "raiz": "EZAGUTZA HUMEREN ARABERA",
   "raiz_d": "Enpirismoa: ez dago jaiotzetiko ideiarik; gogoaren eduki oro esperientziatik dator.",
   "ramas": [
    {
     "rel": "lehengaia",
     "t": "Pertzepzioak",
     "a": "Hume",
     "d": "Gogoan dagoen guztia: ikusi, entzun, gogoratu, irudikatu, pentsatu.",
     "c": [
      {
       "rel": "biziagoak",
       "t": "Inpresioak",
       "k": true,
       "d": "Esperientziaren pertzepzio biziak: ikustean, entzutean edo desiratzean sentitzen duguna."
      },
      {
       "rel": "haien kopia ahulak",
       "t": "Ideiak",
       "d": "Lehen sentitu genuena gogoratzean edo pentsatzean gogoan geratzen dena."
      }
     ]
    },
    {
     "rel": "hortik ateratzen den araua",
     "t": "Inpresioaren irizpidea",
     "k": true,
     "d": "Ideia baliozko oro aurretiko inpresio batetik dator.",
     "c": [
      {
       "rel": "ondorioa",
       "t": "Inpresiorik gabeko ideia: ideia hutsa",
       "d": "Ideia batek zentzurik duen jakiteko, zein inpresiotatik datorren bilatu behar da."
      },
      {
       "rel": "baztertzen ditu",
       "t": "Jaiotzetiko ideiak",
       "a": "Descartes",
       "d": "Gogoak ez du edukirik ekartzen jaiotzetik."
      }
     ]
    },
    {
     "rel": "irudimenak lotzen ditu",
     "t": "Ideien elkartzea",
     "d": "Ideiak ez dira zoriz lotzen: irudimenak hiru legeren arabera elkartzen ditu.",
     "c": [
      {
       "rel": "honen bidez",
       "t": "Antzekotasuna",
       "d": "Erretratu batek erretratatutako pertsonarengan pentsarazten digu."
      },
      {
       "rel": "honen bidez",
       "t": "Hurbiltasuna",
       "d": "Kale batean pentsatzeak ondoko kalera garamatza (espazioan edo denboran)."
      },
      {
       "rel": "honen bidez",
       "t": "Kausa eta ondorioa",
       "d": "Kea ikusteak suan pentsarazten digu."
      }
     ]
    },
    {
     "rel": "bi jakintza mota",
     "t": "Ezagutza motak",
     "k": true,
     "c": [
      {
       "rel": "a priori",
       "t": "Ideien arteko erlazioak",
       "d": "Matematika eta logika: egia beharrezkoak; ukatzea kontraesana da.",
       "c": [
        {
         "rel": "baina",
         "t": "Ez dute egitateez informatzen",
         "d": "Ideiak elkarren artean konparatzen dituzte soilik."
        }
       ]
      },
      {
       "rel": "a posteriori",
       "t": "Egitate-kontuak",
       "d": "Egia kontingenteak, esperientzian oinarrituak: beste modu batera izan litezke.",
       "c": [
        {
         "rel": "adibidea",
         "t": "«Eguzkia bihar aterako da»",
         "d": "Hori ukatzea ez da kontraesana: esperientziak soilik babesten du."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Egitate-kontuak",
     "rel": "honen erlazioan oinarritzen dira",
     "a": "Kausa eta ondorioa"
    }
   ],
   "idea": "Humerentzat dena inpresioetan hasten da: ideiak haien kopiak dira, eta bi jakintza baino ez daude: ideien arteko erlazioak (beharrezkoak) eta egitate-kontuak (kontingenteak)."
  }
 },
 "CK-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Kant eta Ilustrazioa",
  "mermaid": "flowchart TD\n  n0[\"KANTEN FILOSOFIA\"]\n  n1[\"Zer da gizakia?\"]\n  n2[\"Zer ezagut dezaket?\"]:::axis\n  n3[\"Zer egin behar dut?\"]:::axis\n  n4[\"Zer espero dezaket?\"]:::axis\n  n5[\"askatasuna\"]\n  n6[\"arimaren hilezkortasuna\"]\n  n7[\"Jainkoaren existentzia\"]\n  n8[\"moralitatearen baldintza\"]\n  n9[\"betebeharra betetzearen bermea\"]\n  n10[\"ongi gorenaren bermea: bertutea + zoriontasuna\"]\n  n11[\"zientziaren egitatetik abiatzea\"]\n  n12[\"egitate moraletik abiatzea\"]\n  n13[\"arrazoiaren erabilera teorikoa\"]\n  n14[\"arrazoiaren erabilera praktikoa\"]\n  n15[\"haren baldintzak\"]\n  n16[\"haren mugak\"]\n  n17[\"a priori baldintzak: lege moralaren unibertsalak\"]\n  n18[\"a priori baldintza formalak\"]\n  n19[\"baldintza materialak: esperientzia\"]\n  n20[\"betebeharrean legearen forma gisa\"]\n  n21[\"sentimenarena\"]\n  n22[\"adimenarena\"]\n  n23[\"arrazoiarena\"]\n  n24[\"inperatibo kategorikoan\"]:::key\n  n25[\"a priori formak: espazioa eta denbora\"]:::key\n  n26[\"kategoriak\"]:::key\n  n27[\"ideiak\"]\n  n0 --> n1\n  n1 --> n2\n  n2 -->|\"ahalbidetzen du\"| n3\n  n3 -->|\"postulatzen du\"| n4\n  n4 --> n5\n  n4 --> n6\n  n4 --> n7\n  n5 --> n8\n  n6 --> n9\n  n7 --> n10\n  n2 --> n11\n  n3 --> n12\n  n11 -->|\"aztertzeko\"| n13\n  n12 -->|\"aztertzeko\"| n14\n  n13 -->|\"ahalbidetzen du\"| n14\n  n13 --> n15\n  n13 -->|\"haiek osatzen dituzte\"| n16\n  n14 -->|\"haiek ezartzen ditu\"| n17\n  n15 -->|\"zeren sintesi dira?\"| n18\n  n18 --> n21\n  n18 --> n22\n  n18 --> n23\n  n21 --> n25\n  n22 --> n26\n  n23 --> n27\n  n19 -->|\"ez da ezagutza, alde batera uzten baititu\"| n16\n  n17 -->|\"haiek aurkitzen ditu\"| n20\n  n20 -->|\"adierazten da\"| n24\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer da gizakia Kanten arabera, eta zer lotura du haren filosofiak Ilustrazioarekin?",
   "raiz": "KANT: ARRAZOIMEN ILUSTRATUA BERE BURUA AZTERTZEN",
   "raiz_d": "Kritizismoak arrazoimenaren mugak eta irismena aztertzen ditu, bakar batean laburbiltzen diren hiru galderarekin: zer da gizakia?",
   "ramas": [
    {
     "rel": "abiapuntuko jarrera",
     "t": "Sapere aude",
     "k": true,
     "a": "Kant",
     "d": "Zer da Ilustrazioa? (1784) idazkiaren lema: ausartu zeure kabuz pentsatzera, besteren gidaritzarik gabe.",
     "c": [
      {
       "rel": "honetatik irteteko",
       "t": "Erruzko adingabetasuna",
       "d": "Ez da adimen falta, adore falta baizik: nagikeriak, koldarkeriak eta tutoreek mantentzen dute."
      },
      {
       "rel": "askatasuna baino ez du behar honetarako",
       "t": "Arrazoiaren erabilera publikoa",
       "d": "Jakintsu gisa arrazoitzea irakurle-publikoaren aurrean. Karguan (erabilera pribatua) obeditu egiten da."
      }
     ]
    },
    {
     "rel": "lehen galdera",
     "t": "Zer ezagut dezaket?",
     "d": "Arrazoimenaren erabilera teorikoa: zientziaren egitatetik abiatzen da.",
     "c": [
      {
       "rel": "ezagutzeak eskatzen ditu",
       "t": "A priori formak eta kategoriak",
       "d": "Espazioak eta denborak (sentimena) eta kategoriek (adimena) esperientziak ematen duena ordenatzen dute."
      },
      {
       "rel": "muga",
       "t": "Fenomenoak baino ez ditugu ezagutzen",
       "d": "Ez gauzak beren baitan: horregatik metafisika ezin da zientzia izan."
      }
     ]
    },
    {
     "rel": "bigarren galdera",
     "t": "Zer egin behar dut?",
     "d": "Arrazoimenaren erabilera praktikoa: egitate moraletik abiatzen da.",
     "c": [
      {
       "rel": "honekin erantzuten du",
       "t": "Inperatibo kategorikoa",
       "k": true,
       "d": "Agindu unibertsal eta baldintzarik gabea: betebeharragatik jardutea, ez interesagatik ezta joeragatik ere."
      },
      {
       "rel": "hau eskatzen du",
       "t": "Autonomia morala",
       "d": "Arrazoimenak berak ematen dio bere buruari legea, Jainkoaren, agintearen edo zoriontasunaren menpe egon gabe."
      }
     ]
    },
    {
     "rel": "hirugarren galdera",
     "t": "Zer itxaron dezaket?",
     "d": "Moralak arrazoimen teorikoak frogatu ezin duena onartzea eskatzen du.",
     "c": [
      {
       "rel": "hauekin erantzuten du",
       "t": "Arrazoimen praktikoaren postulatuak",
       "k": true,
       "c": [
        {
         "rel": "lehena",
         "t": "Askatasuna",
         "d": "Moraltasunaren baldintza: behar badut, ahal dut."
        },
        {
         "rel": "bigarrena",
         "t": "Arimaren hilezkortasuna",
         "d": "Bertute osora etengabe hurbiltzea ahalbidetzen du."
        },
        {
         "rel": "hirugarrena",
         "t": "Jainkoaren existentzia",
         "d": "Ongi gorena bermatzen du: bertutea eta zoriontasuna elkarrekin joatea."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Sapere aude",
     "rel": "honen eskakizun bera da",
     "a": "Autonomia morala"
    },
    {
     "de": "Fenomenoak baino ez ditugu ezagutzen",
     "rel": "hauei lekua uzten die",
     "a": "Arrazoimen praktikoaren postulatuak"
    }
   ],
   "idea": "Kant bere burua aztertzen duen Ilustrazioa da: arrazoimenak onartzen du ezin duela esperientziatik haratago ezagutu, baina lege morala ematen dio bere buruari. Norberaren kabuz pentsatzea eta jardutea da haren muina."
  }
 },
 "CK-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Ezagutza sentigarria (Kant)",
  "mermaid": "flowchart TD\n  erreal[\"ERREALITATEA\"]:::axis\n  gbera[\"gauza bere baitan\"]:::key\n  noum[\"noumenoa\"]:::key\n  kaos[\"sentsazioen kaosa\"]:::axis\n  subj[\"subjektua\"]:::key\n  forma[\"sentimenaren a priori formak\"]:::axis\n  puru[\"intuizio hutsak\"]:::key\n  espa[\"espazioa eta denbora\"]\n  objl[\"ezagutza sentigarriaren objektua\"]:::key\n  enp[\"intuizio enpirikoa\"]\n  fen[\"fenomeno sentigarria\"]\n  niret[\"gauza niretzat\"]\n  erreal -->|\"da\"| gbera\n  erreal -->|\"da\"| noum\n  erreal -->|\"bidaltzen du\"| kaos\n  kaos -->|\"hura osatzen dute\"| objl\n  objl -->|\"horrela deitzen da\"| enp\n  enp -->|\"edo\"| fen\n  fen -->|\"hau da\"| niret\n  kaos -->|\"haiek antolatzen dituzte\"| forma\n  forma -->|\"horrela deitzen dira\"| puru\n  puru -->|\"hauek dira\"| espa\n  subj -->|\"haiek ditu\"| forma\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zerbait hautematen dugunean, zer jartzen du errealitateak eta zer subjektuak?",
   "raiz": "EZAGUTZA SENTIGARRIA",
   "raiz_d": "Ezagutzaren lehen urratsa Kanten arabera (estetika transzendentala): sentimenak iristen zaiguna jaso eta ordenatzen du.",
   "ramas": [
    {
     "rel": "kanpotik datorrena",
     "t": "Materia: sentsazioak",
     "d": "A posteriori jasotzen dena, esperientziaren bidez.",
     "c": [
      {
       "rel": "honela iristen da",
       "t": "Inpresioen kaos bat",
       "d": "Datu solteak, oraindik ordenarik gabe."
      },
      {
       "rel": "hemendik dator",
       "t": "Gauza bere baitan (noumenoa)",
       "k": true,
       "d": "Errealitatea bere baitan den bezala: eragin egiten digu, baina ez dugu inoiz ezagutzen."
      }
     ]
    },
    {
     "rel": "subjektuak jartzen duena",
     "t": "Sentimenaren a priori formak",
     "k": true,
     "d": "Esperientziaren aurreko egiturak, hura posible egiten dutenak.",
     "c": [
      {
       "rel": "hauek dira",
       "t": "Espazioa eta denbora",
       "d": "Hautematen dugun guztia nonbait eta noizbait dago."
      },
      {
       "rel": "horregatik, hauek ere badira",
       "t": "Intuizio puruak",
       "d": "Ez dira esperientziatik ateratzen: esperientzia orotan daude."
      },
      {
       "rel": "oinarritzen dute",
       "t": "Matematika",
       "d": "Geometria (espazioa) eta aritmetika (denbora) ezagutza unibertsal eta beharrezkoa dira."
      }
     ]
    },
    {
     "rel": "emaitza",
     "t": "Fenomenoa",
     "k": true,
     "d": "Gauza niri agertzen zaidan bezala: gauza niretzat.",
     "c": [
      {
       "rel": "honetan jasotzen da",
       "t": "Intuizio enpirikoa",
       "d": "Espazioan eta denboran kokatutako sentsazioak."
      },
      {
       "rel": "gero honek pentsatzen du",
       "t": "Adimena",
       "d": "Bere kategoriekin (kausalitatea, substantzia…) fenomenoa objektu ezagun bihurtzen du."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Espazioa eta denbora",
     "rel": "ordenatzen dute",
     "a": "Inpresioen kaos bat"
    },
    {
     "de": "Fenomenoa",
     "rel": "ez dator inoiz bat honekin",
     "a": "Gauza bere baitan (noumenoa)"
    }
   ],
   "idea": "Ez dugu inoiz errealitatea «bere baitan» hautematen: fenomenoak hautematen ditugu, hau da, espazioak eta denborak —subjektuak berak jarriak— ordenatutako sentsazioak."
  }
 },
 "CC-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Comte: gizartea, hiru egoeren legea eta zientzia positiboa",
  "mermaid": "flowchart TD\n  co[\"COMTE\"]\n  giz[\"GIZARTEA\"]:::axis\n  ord[\"ORDENA\"]:::key\n  aur[\"AURRERAPENA\"]:::key\n  lege[\"HIRU EGOEREN LEGEA\"]:::axis\n  teo[\"teologikoa\"]\n  met[\"metafisikoa\"]\n  pos[\"POSITIBOA\"]:::key\n  zient[\"ZIENTZIA\"]:::key\n  gert[\"GERTAERAK ETA LEGEAK\"]:::key\n  feno[\"fenomenoak haietatik azaltzen ditu\"]\n  co --> giz\n  giz -->|\"bi printzipiok antolatua\"| ord\n  giz -->|\"bi printzipiok antolatua\"| aur\n  ord -->|\"honi jarraituz\"| lege\n  aur -->|\"honi jarraituz\"| lege\n  lege --> teo\n  lege --> met\n  lege --> pos\n  pos -->|\"hortik\"| zient\n  zient -->|\"ikertzen du\"| gert\n  gert --> feno\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola egiten du aurrera giza ezagutzak, eta nola nahi du Comtek gizartea zientziaren bidez antolatu?",
   "raiz": "POSITIBISMOA",
   "raiz_d": "Auguste Comte (XIX. mendea): egitate behagarri eta egiaztagarrietan oinarritzen dena bakarrik da egiazko ezagutza.",
   "ramas": [
    {
     "rel": "gizadiak honen arabera egiten du aurrera",
     "t": "Hiru estadioen legea",
     "k": true,
     "a": "Comte",
     "d": "Zientzia bakoitza eta gizadi osoa errealitatea azaltzeko hiru modutatik igarotzen dira.",
     "c": [
      {
       "rel": "lehena",
       "t": "Estadio teologikoa",
       "d": "Fenomenoak jainkoen ekintzaren bidez azaltzen ditu."
      },
      {
       "rel": "gero",
       "t": "Estadio metafisikoa",
       "d": "Esentzia eta indar abstraktuen bidez azaltzen du."
      },
      {
       "rel": "azkenik",
       "t": "Estadio positiboa",
       "k": true,
       "d": "Lege zientifikoen bidez azaltzen du."
      }
     ]
    },
    {
     "rel": "haren metodoa",
     "t": "Zientzia positiboa",
     "k": true,
     "c": [
      {
       "rel": "hemendik abiatzen da",
       "t": "Egitate behagarriak",
       "d": "Enpirikoki egiazta daitekeena bakarrik da baliozkoa."
      },
      {
       "rel": "bilatzen ditu",
       "t": "Legeak, ez azken kausak",
       "d": "Fenomenoen arteko erlazio konstanteak, ez haien azken «zergatia»."
      },
      {
       "rel": "horregatik",
       "t": "Metafisika baztertzen du",
       "d": "Egitaterik gabeko espekulazioa ez da ezagutza."
      }
     ]
    },
    {
     "rel": "haren azken zientzia",
     "t": "Soziologia",
     "d": "«Fisika soziala»: gizartea natur zientzien metodoaz aztertzea.",
     "c": [
      {
       "rel": "hau aztertzen du",
       "t": "Ordena",
       "d": "Estatika soziala: gizartea batuta mantentzen duena."
      },
      {
       "rel": "eta hau",
       "t": "Aurrerapena",
       "d": "Dinamika soziala: gizarteak nola eboluzionatzen duen."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Estadio positiboa",
     "rel": "honena da",
     "a": "Zientzia positiboa"
    },
    {
     "de": "Aurrerapena",
     "rel": "honi jarraitzen dio",
     "a": "Hiru estadioen legea"
    }
   ],
   "idea": "Comtek muturreraino eramaten du zientzian konfiantza modernoa: gizadia heldu egiten da jainkoen bidez azaltzetik legeen bidez azaltzera igarotzean, eta gizartea bera ere zientifikoki aztertu behar da."
  }
 },
 "CM-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Hegel eta Karl Marx",
  "mermaid": "flowchart TD\n  n0[\"MARXEN FILOSOFIA\"]:::axis\n  n1[\"filosofia alemana\"]\n  n2[\"ekonomia politikoa\"]\n  n3[\"sozialismo utopikoa\"]\n  n4[\"Hegel\"]\n  n5[\"Smith, Ricardo\"]\n  n6[\"Owen · Saint-Simon · Fourier\"]\n  n7[\"Feuerbach\"]\n  n8[\"dialektika\"]\n  n9[\"materialismoa\"]\n  n10[\"balio-lanaren teoria\"]\n  n11[\"sozialismoa\"]\n  n12[\"gizakia\"]\n  n13[\"natura\"]\n  n14[\"historia\"]\n  n15[\"jarduera sortzailea: lana\"]\n  n16[\"bere bizitza gizartean sortzen du\"]\n  n17[\"tresnen sorkuntza (teknologia)\"]\n  n18[\"produkzio-indarra hazi egiten da\"]\n  n19[\"harreman kontraesankorra\"]\n  n20[\"produkzio-harremanak aldatzen ditu\"]\n  n21[\"jabetza-harremanak\"]\n  n22[\"produkzio-modu kapitalista\"]\n  n23[\"produkzio-bitartekoen jabetza pribatua\"]\n  n24[\"alienazioa edo bere izatearen desjabetzea\"]:::axis\n  n25[\"soziala\"]:::key\n  n26[\"politikoa\"]:::key\n  n27[\"erlijiosoa\"]:::key\n  n28[\"ekonomikoa\"]:::key\n  n29[\"gizarte-klaseetan banaketa\"]\n  n30[\"burgesia\"]\n  n31[\"proletarioak\"]\n  n32[\"iraultza\"]:::axis\n  n33[\"gizarte-klaserik gabeko gizartea\"]\n  n34[\"esplotazioaren amaiera\"]\n  n35[\"alienazioa gainditzea eta gizakia gauzatzea\"]\n  n1 --> n4\n  n2 --> n5\n  n3 --> n6\n  n4 --> n8\n  n4 -->|\"Feuerbach\"| n7\n  n7 --> n9\n  n5 --> n10\n  n6 --> n11\n  n8 --> n0\n  n9 --> n0\n  n10 --> n0\n  n11 --> n0\n  n0 --> n12\n  n12 -->|\"haren esentzia da\"| n15\n  n15 -->|\"haren bidez\"| n16\n  n16 -->|\"eraldatu eta sozializatzen du\"| n13\n  n16 -->|\"hemen dialektikoki garatzen da\"| n14\n  n16 -->|\"garatzen da\"| n18\n  n16 --> n19\n  n18 -->|\"horregatik\"| n17\n  n20 -->|\"haiek sortzen ditu\"| n21\n  n18 -->|\"horrek sortzen du\"| n22\n  n20 --> n22\n  n21 --> n23\n  n22 -->|\"horrek eragiten du\"| n24\n  n24 -->|\"eragiten du\"| n25\n  n24 --> n26\n  n24 --> n27\n  n24 --> n28\n  n24 -->|\"eragiten du\"| n29\n  n29 -->|\"horrek sortzen du\"| n30\n  n29 --> n31\n  n31 -->|\"horrek eragiten du\"| n32\n  n32 -->|\"horrek dakar\"| n33\n  n32 --> n34\n  n33 -->|\"horretarako baldintza\"| n35\n  n34 -->|\"horretarako baldintza\"| n35\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer hartzen du Marxek Hegelengandik eta Feuerbachengandik, eta nola azaltzen ditu horrekin historia eta kapitalismoa?",
   "raiz": "MATERIALISMO HISTORIKOA",
   "raiz_d": "Marxek Hegelen dialektika idealista materiaren dialektika bihurtzen du: ekonomiak mugiarazten du historia.",
   "ramas": [
    {
     "rel": "bere iturrietatik jasotzen du",
     "t": "Marxen iturriak",
     "c": [
      {
       "rel": "Hegelengandik",
       "t": "Dialektika",
       "a": "Hegel",
       "d": "Errealitateak kontraesanen bidez egiten du aurrera. Hegelengan Ideia da; Marxengan, bizitza materiala."
      },
      {
       "rel": "Feuerbachengandik",
       "t": "Materialismoa",
       "a": "Feuerbach",
       "d": "Erreala materiala da; Jainkoa gizakiaren proiekzio bat da."
      },
      {
       "rel": "ekonomia politikotik",
       "t": "Lan-balioa",
       "a": "Smith, Ricardo",
       "d": "Merkantzien balioa lanetik dator."
      },
      {
       "rel": "sozialismo utopikotik",
       "t": "Ideal sozialista",
       "a": "Owen, Saint-Simon, Fourier"
      }
     ]
    },
    {
     "rel": "historia azaltzen du",
     "t": "Egitura ekonomikoa",
     "k": true,
     "d": "Antolaketa soziala, politikoa eta ideologikoa determinatzen ditu.",
     "c": [
      {
       "rel": "hemendik abiatzen da",
       "t": "Lana",
       "d": "Giza esentzia: natura eraldatuz, gizakiak bere burua egiten du."
      },
      {
       "rel": "hauen arteko talka",
       "t": "Ekoizpen-indarrak eta -harremanak",
       "d": "Teknika hazten denean, jabetza-harremanek balaztatu egiten dute, eta kontraesana lehertzen da."
      },
      {
       "rel": "hau eraikitzen du",
       "t": "Gainegitura",
       "d": "Zuzenbidea, politika, erlijioa, filosofia: klase menderatzailea justifikatzen duten ideiak."
      },
      {
       "rel": "historiaren motorra",
       "t": "Klase-borroka",
       "k": true
      }
     ]
    },
    {
     "rel": "bere garaiari aplikatzen dio",
     "t": "Kapitalismoa",
     "c": [
      {
       "rel": "honetan oinarritzen da",
       "t": "Ekoizpen-bitartekoen jabetza pribatua",
       "d": "Burgesiak ditu ekoizpen-bitartekoak; proletalgoak, bere lan-indarra soilik."
      },
      {
       "rel": "hortik",
       "t": "Plusbalioa",
       "d": "Langileak sortu bai baina jasotzen ez duen balioa."
      },
      {
       "rel": "eragiten du",
       "t": "Alienazioa",
       "k": true,
       "d": "Langilea bere produktutik, prozesutik, esentziatik eta besteengandik bereizten da."
      }
     ]
    },
    {
     "rel": "irtenbidea",
     "t": "Iraultza proletarioa",
     "c": [
      {
       "rel": "honetara darama",
       "t": "Klaserik gabeko gizartea",
       "d": "Komunismoa: esplotazioaren eta alienazioaren amaiera."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Dialektika",
     "rel": "bihurtzen da",
     "a": "Klase-borroka"
    },
    {
     "de": "Lan-balioa",
     "rel": "hau azaltzeko aukera ematen dio",
     "a": "Plusbalioa"
    },
    {
     "de": "Alienazioa",
     "rel": "honekin gainditzen da",
     "a": "Iraultza proletarioa"
    }
   ],
   "idea": "«Filosofoek mundua modu desberdinetan interpretatu besterik ez dute egin; kontua, ordea, hura eraldatzea da» (Marx): dialektikak, ekonomiari aplikatuta, historia azaltzen du eta haren aldaketa iragartzen du."
  }
 },
 "CM-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Ideologiak marxismoan",
  "mermaid": "flowchart TD\n  ideo[\"IDEOLOGIAK\"]:::axis\n  kausak[\"kausak\"]:::key\n  funtz[\"funtzioak\"]:::key\n  k1[\"banakoen egoera ekonomikoa\"]\n  k2[\"produkzio-prozesuan duten kokapena\"]\n  k3[\"murgilduta dauden produkzio-harremanak\"]\n  f1[\"errealitatearen irudizko irudikapena egitea\"]\n  f2[\"errealitatea modu desitxuratuan berreraikitzea\"]\n  f3[\"gizarte-egitura trinkotzea\"]\n  f4[\"klase zuzendariaren boterea legitimatzea\"]\n  osag[\"osagaiak: Estatua, zuzenbidea, morala, ekonomia politikoa, erlijioa, filosofia, artea\"]:::key\n  ideo -->|\"kausak\"| kausak\n  ideo -->|\"funtzioak\"| funtz\n  ideo -->|\"osagaiak\"| osag\n  kausak --> k1\n  kausak --> k2\n  kausak --> k3\n  funtz --> f1\n  funtz --> f2\n  funtz --> f3\n  funtz --> f4\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer da ideologia bat, nondik sortzen da eta zertarako balio du?",
   "raiz": "IDEOLOGIA",
   "raiz_d": "Marxentzat, «kontzientzia faltsua»: esplotazioa ezkutatzen duen ideia-sistema bat.",
   "ramas": [
    {
     "rel": "hemendik sortzen da",
     "t": "Egitura ekonomikoa",
     "k": true,
     "d": "Ideiak nola ekoizten den eta ekoizpen-bitartekoak nork dituen araberakoak dira.",
     "c": [
      {
       "rel": "bakoitzak hemendik pentsatzen du",
       "t": "Klase-posizioa",
       "d": "Ekoizpen-harremanetan betetzen duen lekua."
      },
      {
       "rel": "haren gainean eraikitzen da",
       "t": "Gainegitura",
       "d": "Erakundeak eta ideiak: Estatua eta zuzenbidea, morala, erlijioa, filosofia, artea."
      }
     ]
    },
    {
     "rel": "hauetan adierazten da",
     "t": "Haren formak",
     "c": [
      {
       "rel": "argiena",
       "t": "Erlijioa",
       "d": "«Herriaren opioa»: haraindiarekin kontsolatzen du eta matxinatzea eragozten du."
      },
      {
       "rel": "baita ere",
       "t": "Morala eta zuzenbidea",
       "d": "Klase menderatzaileari komeni zaiona zuzen eta betiereko gisa aurkezten dute."
      },
      {
       "rel": "baita ere",
       "t": "Filosofia eta ekonomia burgesak",
       "d": "Ordena kapitalista natural gisa aurkezten dute."
      }
     ]
    },
    {
     "rel": "betetzen ditu",
     "t": "Haren funtzioak",
     "c": [
      {
       "rel": "lehena",
       "t": "Errealitatea desitxuratzea",
       "d": "Irudi alderantzikatua ematen du: historikoa naturala dirudi."
      },
      {
       "rel": "batez ere",
       "t": "Klase menderatzailea legitimatzea",
       "k": true,
       "d": "Haren interes partikularra guztien interes gisa agertzen da."
      },
      {
       "rel": "horrela lortzen du",
       "t": "Gizartea kohesionatzea",
       "d": "Gizarte-ordena onarrarazten du eta gatazka saihesten du."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Klase-posizioa",
     "rel": "zergatik komeni zaion azaltzen du",
     "a": "Klase menderatzailea legitimatzea"
    },
    {
     "de": "Erlijioa",
     "rel": "honen adibide argia da",
     "a": "Errealitatea desitxuratzea"
    }
   ],
   "idea": "Ideiak ez daude airean zintzilik: ekonomiatik sortzen dira eta, kontzientzia faltsu gisa, klase baten menderakuntza natural eta zuzen gisa agerrarazten dute. Egitura ekonomikoa aldatzeak ideiak aldatzen ditu."
  }
 },
 "CF-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Feuerbach: alienazio erlijiosotik errepublika demokratikora",
  "mermaid": "flowchart TD\n  fe[\"FEUERBACH\"]\n  giz[\"gizakia hau da\"]:::axis\n  nahi[\"NAHIMENA\"]:::key\n  arr[\"ARRAZOIA\"]:::key\n  sent[\"SENTIMENDUA\"]:::key\n  perf[\"JAINKOAREN PERFEKZIO gisa pentsatuak\"]:::axis\n  ali[\"gizakia BERE BURUTIK ALIENATZEN da\"]:::key\n  bot[\"bere boterea berreskuratu behar du\"]\n  erre[\"ERREPUBLIKA DEMOKRATIKOA\"]:::key\n  fe --> giz\n  giz --> nahi\n  giz --> arr\n  giz --> sent\n  nahi -->|\"pentsatuak dira\"| perf\n  arr -->|\"pentsatuak dira\"| perf\n  sent -->|\"pentsatuak dira\"| perf\n  perf -->|\"ondorioz\"| ali\n  ali -->|\"beraz\"| bot\n  bot -->|\"hartan\"| erre\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer da Jainkoa Feuerbachen arabera, eta nola berreskuratzen du gizakiak harengan jarri duena?",
   "raiz": "ALIENAZIO ERLIJIOSOA",
   "raiz_d": "Ludwig Feuerbach (XIX. mendea), Hegelen ikasle kritikoa eta materialista: erlijioa gizakiaren lana da.",
   "ramas": [
    {
     "rel": "abiapuntua",
     "t": "Giza esentzia",
     "a": "Feuerbach",
     "d": "Gizakia espezie gisa definitzen duten ahalmenak.",
     "c": [
      {
       "rel": "hau da",
       "t": "Arrazoia"
      },
      {
       "rel": "hau da",
       "t": "Nahimena"
      },
      {
       "rel": "hau da",
       "t": "Sentimendua (maitasuna)"
      }
     ]
    },
    {
     "rel": "gizakiak hau egiten du",
     "t": "Proiekzioa",
     "k": true,
     "d": "Bere ezaugarriak hartu, infinituraino eraman eta beregandik kanpoko izaki bati egozten dizkio.",
     "c": [
      {
       "rel": "horrela sortzen da",
       "t": "Jainkoa",
       "d": "Giza esentzia idealizatua eta gizakiarengandik kanpo jarria."
      },
      {
       "rel": "ondorioa",
       "t": "Alienazioa",
       "k": true,
       "d": "Zenbat eta gehiago jarri Jainkoarengan, orduan eta pobreago geratzen da: bere izatetik bereizi eta haren menpe jartzen da."
      }
     ]
    },
    {
     "rel": "irtenbidea",
     "t": "Giza esentzia berreskuratzea",
     "c": [
      {
       "rel": "hau ohartuz",
       "t": "Teologia antropologia da",
       "k": true,
       "d": "Jainkoaz hitz egitea, jakin gabe, gizakiaz hitz egitea da."
      },
      {
       "rel": "gizarte-bizitzan",
       "t": "Gizakien arteko maitasuna",
       "d": "Hurkoarekiko maitasunak Jainkoarekiko maitasunaren lekua hartzen du."
      },
      {
       "rel": "politikan",
       "t": "Errepublika demokratikoa",
       "d": "Berdinen komunitatea, jainko- edo errege-tutoretzarik gabe."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Giza esentzia",
     "rel": "hemen proiektatzen da",
     "a": "Jainkoa"
    },
    {
     "de": "Teologia antropologia da",
     "rel": "hau desegiten du",
     "a": "Alienazioa"
    }
   ],
   "idea": "Jainkoak ez du gizakia sortzen: gizakiak sortzen du Jainkoa bere ezaugarri onenekin, eta pobretu egiten da. Marxek ideia hori baliatuko du, baina alienazioaren sustraia ekonomian bilatuko du."
  }
 },
 "C5A-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Gramsci: hegemonia kulturala",
  "mermaid": "flowchart TD\n  gra[\"GRAMSCI\"]\n  heg[\"hegemonia kulturala\"]:::axis\n  ind[\"indarra: Estatua eta legea\"]\n  bai[\"adostasuna eta akordioa\"]:::key\n  intel[\"intelektual organikoak\"]:::key\n  zen[\"zentzu komuna\"]:::key\n  zib[\"gizarte zibila\"]:::axis\n  bloke[\"bloke historikoa\"]\n  ideo[\"klase-interesa interes orokor gisa\"]\n  ohi[\"normaltzat hartutako ohitura\"]\n  gerra[\"posizio-gerra\"]:::axis\n  kontra[\"zentzu komun berri bat\"]:::key\n  eman[\"emantzipazioa\"]\n  gra -->|\"kontzeptu zentrala\"| heg\n  heg -->|\"ez indarra soilik\"| ind\n  heg -->|\"adostasuna ere bai\"| bai\n  heg -->|\"eragileak\"| intel\n  bai -->|\"honen bidez\"| zen\n  bai -->|\"non\"| zib\n  zib -->|\"eskola, prentsa\"| ohi\n  zen -->|\"ondorioa\"| ideo\n  intel -->|\"aliantza\"| bloke\n  intel -->|\"borroka kulturala\"| gerra\n  gerra -->|\"eraikitzea\"| kontra\n  ideo -->|\"haustea\"| kontra\n  kontra -->|\"helburua\"| eman\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zergatik ez du klase menderatzaileak indarraren bidez bakarrik agintzen?",
   "raiz": "HEGEMONIA KULTURALA",
   "raiz_d": "Antonio Gramsci (marxista italiarra, 1891-1937): boterea menderatuen baimenean ere oinarritzen da.",
   "ramas": [
    {
     "rel": "alde batetik",
     "t": "Hertsapena",
     "a": "Gramsci",
     "d": "Gizarte politikoa: Estatua, legea, polizia. Indarrez inposatzen da.",
     "c": [
      {
       "rel": "honekin erasotzen zaio",
       "t": "Maniobra-gerra",
       "d": "Estatuaren aurkako eraso zuzen eta azkarra, Errusian 1917an bezala."
      }
     ]
    },
    {
     "rel": "bestetik",
     "t": "Adostasuna",
     "k": true,
     "d": "Gizarte zibila: eskola, Eliza, prentsa, familia. Behartu beharrean, konbentzitu egiten du.",
     "c": [
      {
       "rel": "hau sortzen du",
       "t": "Zentzu komuna",
       "k": true,
       "d": "Denek normaltzat jotzen dutena: klase baten interesa interes orokor gisa agertzen da."
      },
      {
       "rel": "hauek lantzen dute",
       "t": "Intelektual organikoak",
       "k": true,
       "d": "Gizarte-klase baten mundu-ikuskera antolatu eta zabaltzen dute.",
       "c": [
        {
         "rel": "hau kohesionatzen dute",
         "t": "Bloke historikoa",
         "d": "Oinarri ekonomikoaren eta gizarte-ordena bati eusten dion kulturaren batasuna."
        }
       ]
      }
     ]
    },
    {
     "rel": "erantzuna",
     "t": "Kontrahegemonia",
     "d": "Klase menpekoek kultura irabazi behar dute boterea baino lehen.",
     "c": [
      {
       "rel": "estrategia",
       "t": "Posizio-gerra",
       "d": "Borroka kultural geldoa, lubakiz lubaki, gizarte zibilaren barruan."
      },
      {
       "rel": "helburua",
       "t": "Zentzu komun berri bat",
       "d": "Emantzipazioa posible egingo duen mundu-ikuskera propioa."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Posizio-gerra",
     "rel": "Mendebaldean honen ordez dator",
     "a": "Maniobra-gerra"
    },
    {
     "de": "Zentzu komun berri bat",
     "rel": "honen alde lehiatzen da",
     "a": "Zentzu komuna"
    }
   ],
   "idea": "Gizarte modernoetan boterea baimenean oinarritzen da batez ere: bere mundu-ikuskera «zentzu komun» gisa agerraraztea lortzen duenak menderatzen du. Horregatik, aldaketa kulturan hasten da."
  }
 },
 "C5A-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Frankfurteko Eskola: teoria kritikoa",
  "mermaid": "flowchart TD\n  frk[\"FRANKFURTEKO ESKOLA\"]\n  teo[\"Teoria kritikoa\"]:::axis\n  trad[\"teoria tradizionalaren aurka\"]\n  marx[\"Marx\"]\n  freud[\"Freud\"]\n  weber[\"Weber\"]\n  helb[\"emantzipazioa\"]:::key\n  hoad[\"Horkheimer eta Adorno\"]:::axis\n  mar[\"Marcuse\"]:::axis\n  hab[\"Habermas\"]:::axis\n  ains[\"arrazoi instrumentala\"]:::key\n  dial[\"Ilustrazioaren dialektika\"]:::key\n  indk[\"kultura-industria\"]\n  uni[\"gizarte dimentsiobakarra\"]:::key\n  behf[\"behar faltsuak\"]\n  erre[\"gehiegizko errepresioa\"]\n  komu[\"arrazoi komunikatiboa\"]:::key\n  elka[\"elkarrizketa eta adostasuna\"]\n  esp[\"esfera publikoa\"]\n  frk -->|\"programa\"| teo\n  marx -->|\"iturria\"| teo\n  freud --> teo\n  weber --> teo\n  teo -->|\"helburua\"| helb\n  teo -->|\"bereizten da\"| trad\n  teo --> hoad\n  teo --> mar\n  teo --> hab\n  hoad -->|\"diagnostikoa\"| ains\n  ains -->|\"bihurtzen da\"| dial\n  dial -->|\"adibidez\"| indk\n  mar -->|\"gizartea\"| uni\n  uni -->|\"sortuz\"| behf\n  behf --> erre\n  hab -->|\"irtenbidea\"| komu\n  komu -->|\"honen bidez\"| elka\n  elka --> esp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zergatik bihurtu da menderakuntza-tresna askatuko gintuela agintzen zuen arrazoia?",
   "raiz": "FRANKFURTEKO ESKOLA",
   "raiz_d": "XX. mendeko filosofo alemanak: gerren, holokaustoaren eta totalitarismoaren ondoren, gizartea eta kultura kritikatzen dituzte.",
   "ramas": [
    {
     "rel": "haren programa",
     "t": "Teoria kritikoa",
     "k": true,
     "a": "Horkheimer",
     "d": "Ez da gizartea deskribatzera mugatzen, teoria tradizionalak bezala: emantzipatzeko aztertzen du.",
     "c": [
      {
       "rel": "uztartzen ditu",
       "t": "Marx, Freud eta Weber",
       "d": "Ekonomia, psikoanalisia eta arrazionalizazioa."
      }
     ]
    },
    {
     "rel": "haren diagnostikoa",
     "t": "Arrazoi instrumentala",
     "k": true,
     "a": "Horkheimer, Adorno",
     "d": "Bitartekoez galdetzen du (nola lortu), ez helburuez (zer den zuzena): eraginkortasuna eta kalkulua.",
     "c": [
      {
       "rel": "honek azaltzen du",
       "t": "Ilustrazioaren dialektika",
       "d": "1944ko lana: aurrerapen teknikoak ez du gizarte zuzenagoa bermatzen; arrazoia menderakuntza bihurtzen da."
      },
      {
       "rel": "hemen ikusten da",
       "t": "Industria kulturala",
       "d": "Entretenimendu estandarizatua, pasibotasuna eta konformismoa sustatzen dituena."
      }
     ]
    },
    {
     "rel": "kontsumo-gizartean",
     "t": "Gizarte unidimentsionala",
     "a": "Marcuse",
     "d": "Sistemak guztiak integratzen ditu eta aurka egiteko gaitasuna itzaltzen du.",
     "c": [
      {
       "rel": "sortzen ditu",
       "t": "Behar faltsuak",
       "d": "Merkatuak ezarritako desirak, kontsumora lotzen gaituztenak."
      }
     ]
    },
    {
     "rel": "irtenbidea (2. belaunaldia)",
     "t": "Arrazoi komunikatiboa",
     "k": true,
     "a": "Habermas",
     "d": "Ez dugu ekoizten bakarrik: komunikatu ere egiten gara.",
     "c": [
      {
       "rel": "bilatzen du",
       "t": "Elkarrizketa bidezko adostasuna",
       "d": "Elkarrizketa zintzotik sortzen den akordioa, ez manipulaziotik."
      },
      {
       "rel": "eskatzen du",
       "t": "Esfera publiko librea",
       "d": "Demokrazia deliberatiboaren oinarria."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Industria kulturala",
     "rel": "fabrikatzen du",
     "a": "Behar faltsuak"
    },
    {
     "de": "Arrazoi komunikatiboa",
     "rel": "erantzuten dio",
     "a": "Arrazoi instrumentala"
    }
   ],
   "idea": "Aurrerapen teknikoak ez du berez gizarte justurik ekartzen: kalkulura murriztutako arrazoiak pertsonak menderatzen ditu. Habermasek arrazoia berreskuratzea proposatzen du, elkar ulertzera bideratutako elkarrizketa gisa."
  }
 },
 "C5B-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Arendt: totalitarismoaren analisia",
  "mermaid": "flowchart TD\n  tot[\"TOTALITARISMOA\"]\n  ideo[\"ideologia totalizatzailea\"]:::key\n  ter[\"izuaren logika\"]:::key\n  masa[\"masa-gizartea\"]\n  bak[\"bakardadea eta atomizazioa\"]:::key\n  sus[\"sustraiak\"]:::axis\n  anti[\"antisemitismoa (Dreyfus)\"]\n  inp[\"inperialismoa\"]\n  ban[\"gaizkiaren hutsalkeria\"]:::key\n  eich[\"Eichmann: pentsatzeari uko\"]\n  tot --> ideo\n  tot --> ter\n  ideo --> masa\n  ter --> bak\n  tot -->|\"jatorria\"| sus\n  sus --> anti\n  sus --> inp\n  tot -->|\"ondorioa\"| ban\n  ban --> eich\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer da totalitarismoa, eta nola sortu ahal izan zen?",
   "raiz": "TOTALITARISMOA (ARENDT)",
   "raiz_d": "XX. mendeko botere-forma berria, tirania klasikoaz bestelakoa: gizabanakoaren menderatze osoa bilatzen du.",
   "ramas": [
    {
     "rel": "hemendik sortzen da",
     "t": "Sustrai historikoak",
     "d": "Estatu-nazioaren krisia prestatu zuten bi prozesu.",
     "c": [
      {
       "rel": "lehena",
       "t": "Antisemitismo modernoa",
       "d": "Dreyfus auziak erakusten du juduenganako gorrotoa nola bihurtzen den indar politiko."
      },
      {
       "rel": "bigarrena",
       "t": "Inperialismoa",
       "d": "Kolonia-hedapenak beste herrien gaineko menderatze mugagabea entseatzen du."
      }
     ]
    },
    {
     "rel": "oinarri du",
     "t": "Masa-gizartea",
     "k": true,
     "d": "Gizabanako isolatuak, lotura komunik gabeak, manipulatzen errazak.",
     "c": [
      {
       "rel": "haren oinarria",
       "t": "Bakardade politikoa",
       "d": "Besteekiko loturak galtzen dituena babesik gabe geratzen da propagandaren eta obedientziaren aurrean."
      }
     ]
    },
    {
     "rel": "hauek baliatzen ditu",
     "t": "Ideologia eta terrorea",
     "k": true,
     "d": "Menderatze osoaren bi tresnak.",
     "c": [
      {
       "rel": "dena honekin azaltzen du",
       "t": "Ideologia totalizatzaile bat",
       "d": "Ideia bakar bat (arraza, klasea), historia osoa azaldu nahi duena."
      },
      {
       "rel": "zabaldu egiten du",
       "t": "Propaganda",
       "d": "Kontzientzia eta irudimen politikoa masiboki bideratzen ditu."
      },
      {
       "rel": "ezarri egiten du",
       "t": "Terrorea",
       "d": "Oposizioa eta pluraltasuna ezabatzen ditu; biztanleria masa bereizgabe bihurtzen du."
      }
     ]
    },
    {
     "rel": "agerian uzten du",
     "t": "Gaizkiaren banalitatea",
     "k": true,
     "d": "Gaizkia ez da nahitaez asmo gaizto batetik sortzen: pentsatzeari uko egitetik sor daiteke.",
     "c": [
      {
       "rel": "adibidea",
       "t": "Eichmann",
       "d": "Burokrata esaneko bat, ez munstro bat: aginduak betetzen zituen, haiek epaitu gabe."
      },
      {
       "rel": "sendabidea",
       "t": "Norberak pentsatu eta epaitu",
       "d": "Pentsamendu kritikoak eta espazio publikoak menderatze osotik babesten gaituzte."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Bakardade politikoa",
     "rel": "babesik gabe uzten du honen aurrean",
     "a": "Propaganda"
    },
    {
     "de": "Norberak pentsatu eta epaitu",
     "rel": "aurre egiten dio",
     "a": "Ideologia totalizatzaile bat"
    }
   ],
   "idea": "Totalitarismoa ez da beste tirania bat: ideologiaren eta terrorearen bidez gizabanako isolatuak masa bihurtzen ditu, eta haren gaizkia pentsatzeari uko egiten dioten pertsona arruntek gauzatzen dute."
  }
 },
 "C5B-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Arendt: vita activa eta ekintza politikoa",
  "mermaid": "flowchart TD\n  vit[\"VITA ACTIVA\"]\n  lan[\"lana (animal laborans)\"]\n  egi[\"langintza (homo faber)\"]\n  eki[\"ekintza (zoon politikon)\"]:::axis\n  bizi[\"bizirautea\"]\n  mundu[\"objektuen mundua\"]\n  plu[\"jaiotza eta aniztasuna\"]:::key\n  esp[\"espazio publikoa\"]:::key\n  bot[\"boterea: elkarrekin jardutea\"]:::key\n  ind[\"indarkeria\"]\n  vit --> lan\n  vit --> egi\n  vit -->|\"gorena\"| eki\n  lan --> bizi\n  egi --> mundu\n  eki -->|\"oinarria\"| plu\n  eki -->|\"non\"| esp\n  esp --> bot\n  bot -->|\"bereizten da\"| ind\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer egiten dugu gizakiok jarduten dugunean, eta zer jarduerak egiten gaitu aske?",
   "raiz": "VITA ACTIVA (ARENDT)",
   "raiz_d": "Giza egoera (1958) lanean, Arendtek giza jardueraren hiru forma bereizten ditu, beharrizanari lotuenetik askeenera.",
   "ramas": [
    {
     "rel": "maila biologikoa",
     "t": "Lana",
     "d": "Bizitza mantentzea: ekoiztu eta kontsumitu. Etengabe errepikatzen da eta ez du arrastorik uzten.",
     "c": [
      {
       "rel": "haren egilea",
       "t": "Animal laborans",
       "d": "Gizakia, bizirik iraun behar duen espezie gisa."
      }
     ]
    },
    {
     "rel": "maila artifiziala",
     "t": "Lana",
     "d": "Objektu iraunkorrak fabrikatzea: etxeak, tresnak, obrak.",
     "c": [
      {
       "rel": "haren egilea",
       "t": "Homo faber"
      },
      {
       "rel": "sortzen ditu",
       "t": "Objektuen mundu egonkor bat",
       "d": "Etxe komun bat, giza bizitza bakoitza baino gehiago irauten duena."
      }
     ]
    },
    {
     "rel": "maila politikoa",
     "t": "Ekintza",
     "k": true,
     "d": "Besteekin jardun eta hitz egin, objekturik tartean gabe: benetan askea den jarduera.",
     "c": [
      {
       "rel": "oinarri du",
       "t": "Jaiotza (natalitatea)",
       "k": true,
       "d": "Jaiotza bakoitzak hasiera berri bat dakar: ustekabeko zerbait has dezakegu."
      },
      {
       "rel": "eskatzen du",
       "t": "Pluraltasuna",
       "d": "Berdinak eta, aldi berean, bakarrak gara: desberdinen artean jarduten dugu."
      },
      {
       "rel": "hemen gertatzen da",
       "t": "Espazio publikoa",
       "d": "Hiritarrek hitz egin, elkar entzun eta besteen aurrean agertzen diren lekua."
      }
     ]
    },
    {
     "rel": "ekintzatik sortzen da",
     "t": "Boterea",
     "k": true,
     "d": "Jendeak elkarrekin jardun eta ados jartzen denean sortzen da.",
     "c": [
      {
       "rel": "ez nahastu honekin",
       "t": "Indarkeria",
       "d": "Boterea ordezkatzen edo haren hutsunea betetzen duen tresna: suntsi dezake, ez sortu."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Boterea",
     "rel": "hemen bakarrik existitzen da",
     "a": "Espazio publikoa"
    },
    {
     "de": "Animal laborans",
     "rel": "modernitatean inbaditzen du",
     "a": "Espazio publikoa"
    }
   ],
   "idea": "Arendtentzat askatasuna ez dago ekoiztean ez kontsumitzean, besteekin espazio publikoan jardutean baizik: hortik sortzen da boterea, indarkeriaren kontrakoa."
  }
 },
 "CdB-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Beauvoir: emakumea, bestetasuna eta askatasuna",
  "mermaid": "flowchart TD\n  be[\"BEAUVOIR\"]\n  tez[\"ez da emakume jaiotzen, emakume bihurtzen da\"]:::axis\n  best[\"emakumea Beste gisa\"]:::key\n  aska[\"askatasuna egoeran\"]:::key\n  mit[\"feminitatearen mitoak\"]\n  obj[\"objektu/subjektu dialektika\"]\n  trans[\"transzendentzia\"]\n  inm[\"immanentzia\"]\n  gor[\"gorputza eta egoera\"]\n  be -->|\"tesia\"| tez\n  tez -->|\"emakumea\"| best\n  tez -->|\"proiektua\"| aska\n  best --> mit\n  best -->|\"Hegel\"| obj\n  aska --> trans\n  aska -->|\"honen aurka\"| inm\n  aska --> gor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Askeak bagara, zergatik bizi izan da emakumea «Bestea» gisa?",
   "raiz": "EMAKUMEA, BESTETASUNA ETA ASKATASUNA",
   "raiz_d": "Bigarren sexua lanaren argudioa (USEko testua: Ondorioa), Beauvoirrek Sartrerekin partekatzen duen existentzialismotik irakurria.",
   "ramas": [
    {
     "rel": "hemendik abiatzen da",
     "t": "Askatasuna egoeran",
     "a": "Beauvoir, Sartre",
     "d": "Ez dago aurretiko esentziarik: gizaki bakoitza bere egintzen bidez egiten da, baina beti egoera baten barruan.",
     "c": [
      {
       "rel": "hortik tesia",
       "t": "«Ez da emakume jaiotzen: egiten da»",
       "k": true,
       "d": "Emakumearen nortasuna kulturaren eta gizartearen emaitza da, ez biologiarena."
      },
      {
       "rel": "Ondorioan",
       "t": "«Giza gizartean ezer ez da naturala»",
       "d": "Emakumea zibilizazioaren produktua da: haren patua ez dute hormonek finkatzen."
      }
     ]
    },
    {
     "rel": "diagnostikoa",
     "t": "Emakumea «Bestea» gisa",
     "k": true,
     "d": "Gizonak bere burua Subjektu gisa definitu du; emakumea, berriz, beti harekiko definitzen da.",
     "c": [
      {
       "rel": "honen bidez azaltzen du",
       "t": "Nagusiaren eta morroiaren dialektika",
       "a": "Hegel",
       "d": "Nortasuna bestearen aitortzaren aldeko borrokan eraikitzen da."
      },
      {
       "rel": "hemen itxita uzten du",
       "t": "Inmanentzia",
       "d": "Arrastorik uzten ez duten zeregin errepikakorrak; transzendentzia gizonarentzat geratzen da."
      },
      {
       "rel": "justifikatu egiten dute",
       "t": "«Betiko femeninoaren» mitoak",
       "d": "Egoera historiko bat betiko esentzia gisa aurkezten dute."
      }
     ]
    },
    {
     "rel": "mantendu egiten du",
     "t": "Konplizitatea eta fede txarra",
     "k": true,
     "d": "Askatasunak larritasuna sortzen du, eta bi sexuek beren burua engainatzen dute hari aurre ez egiteko.",
     "c": [
      {
       "rel": "emakumearengan",
       "t": "«Objektu babestua» izatea onartzea",
       "d": "Norbera ukatzea goraipatzen duen hezkuntzak erraztasunera eta mendekotasunera gonbidatzen du."
      },
      {
       "rel": "gizonarengan",
       "t": "Bere pribilegioa «natura» bihurtzea"
      }
     ]
    },
    {
     "rel": "irtenbidea",
     "t": "Elkarrekikotasuna",
     "k": true,
     "d": "Elkar topatzen diren bi askatasun gisa aitortzea: berdinen arteko anaitasuna.",
     "c": [
      {
       "rel": "eskatzen du",
       "t": "Ekonomia eta kultura eraldatzea",
       "d": "Ez da nahikoa independentzia ekonomikoa: hezkuntza eta ohiturak ere aldatu behar dira."
      },
      {
       "rel": "lortzen du",
       "t": "Bi sexuen askapena",
       "d": "«Aske izan nahi izatea besteak aske izatea nahi izatea ere bada.»"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "«Giza gizartean ezer ez da naturala»",
     "rel": "desegin egiten du",
     "a": "«Betiko femeninoaren» mitoak"
    },
    {
     "de": "Inmanentzia",
     "rel": "hausten da honekin",
     "a": "Ekonomia eta kultura eraldatzea"
    }
   ],
   "idea": "Emakumea ez da «Bestea» izaeraz, egoera historiko baten ondorioz baizik, eta batzuetan fede txarrez onartzen du egoera hori; irtenbidea bi askatasunen arteko elkarrekikotasuna da."
  }
 },
 "CdB-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Beauvoiren ondoren: generoa eta justizia",
  "mermaid": "flowchart TD\n  gen[\"GENEROAREN ERAIKUNTZA\"]\n  but[\"Butler\"]:::axis\n  fra[\"Fraser\"]:::axis\n  nus[\"Nussbaum\"]:::axis\n  perf[\"performatibitatea\"]:::key\n  queer[\"teoria queer-a\"]\n  bir[\"birbanaketa\"]\n  ait[\"aitorpena\"]:::key\n  gait[\"giza gaitasunak\"]:::key\n  just[\"genero-justizia\"]:::key\n  gen --> but\n  gen --> fra\n  gen --> nus\n  but --> perf\n  perf --> queer\n  fra --> bir\n  fra --> ait\n  nus --> gait\n  bir --> just\n  ait --> just\n  gait --> just\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Beauvoirren ondoren, zer da generoa, eta zer eskatzen du sexuen arteko justiziak?",
   "raiz": "BEAUVOIRREN ONDOREN: GENEROA ETA JUSTIZIA",
   "raiz_d": "Beauvoirren oinordekoek bi eztabaida irekitzen dituzte: zer den generoa (nortasuna) eta zer aldatu behar den gizartean (justizia).",
   "ramas": [
    {
     "rel": "zer da generoa",
     "t": "Generoa performance gisa",
     "k": true,
     "a": "Judith Butler",
     "d": "Ez da esentzia biologiko bat: keinuak, arropa eta hitz egiteko moduak errepikatuz egiten dugu.",
     "c": [
      {
       "rel": "beraz",
       "t": "Irauli egin daiteke",
       "d": "Generoa errepikatzen den gidoi bat bada, berridatzi ere egin daiteke."
      },
      {
       "rel": "hortik",
       "t": "Queer teoria",
       "d": "Zalantzan jartzen du bi nortasun finko eta «normal» bakarrik daudenik."
      }
     ]
    },
    {
     "rel": "zer eskatzen du justiziak",
     "t": "Birbanaketa eta aitortza",
     "k": true,
     "a": "Nancy Fraser",
     "d": "Genero-justiziak bi ardatz behar ditu aldi berean; bakarra ez da nahikoa.",
     "c": [
      {
       "rel": "ardatz ekonomikoa",
       "t": "Birbanaketa",
       "d": "Baliabideak, denbora eta aukerak banatzea."
      },
      {
       "rel": "ardatz kulturala",
       "t": "Aitortza",
       "d": "Zapalkuntza jasaten dutenen duintasuna eta ahotsa errespetatzea."
      }
     ]
    },
    {
     "rel": "nola neurtu",
     "t": "Gaitasunen ikuspegia",
     "k": true,
     "a": "Martha Nussbaum",
     "d": "Gizarte bat justua da pertsona guztiei benetan izan eta egin dezaketena bermatzen badie.",
     "c": [
      {
       "rel": "ez da neurtzen honekin",
       "t": "BPGa",
       "d": "Batez besteko aberastasunak ezkutatu egiten du pertsona bakoitzak bere bizitzarekin benetan zer egin dezakeen."
      },
      {
       "rel": "baizik eta honekin",
       "t": "Oinarrizko gaitasunak",
       "d": "Bizitza, osasuna, osotasuna, emozioak, arrazoi praktikoa, afiliazioa, jolasa…"
      }
     ]
    },
    {
     "rel": "zer jarri erdigunean",
     "t": "Ekofeminismoa",
     "a": "Yayo Herrero",
     "d": "Krisi ekologikoa eta emakumeen zapalkuntza lotzen ditu.",
     "c": [
      {
       "rel": "hauxe garelako",
       "t": "Ekodependenteak eta elkarren mendekoak",
       "d": "Naturaren eta besteen zaintzen mende gaude."
      },
      {
       "rel": "proposatzen du",
       "t": "Bizitza eta zaintzak erdigunean jartzea"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Bizitza eta zaintzak erdigunean jartzea",
     "rel": "eskatzen du",
     "a": "Birbanaketa"
    }
   ],
   "idea": "Beauvoirrek erakutsi zuen emakumea egin egiten dela; Butlerrek gehitzen du generoa ekintza bakoitzean berregiten dela, eta Fraserrek, Nussbaumek eta Herrerok galdetzen dute zer aldatu behar den gizartean justizia egon dadin."
  }
 },
 "C8-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Existentzialismoa: askatasuna, absurdua eta izatea",
  "mermaid": "flowchart TD\n  ext[\"EXISTENTZIALISMOA\"]\n  tesi[\"existentzia esentziaren aurretik dator\"]:::axis\n  fen[\"fenomenologia\"]\n  kier[\"Kierkegaard\"]\n  hei[\"HEIDEGGER\"]:::axis\n  sar[\"SARTRE\"]:::axis\n  cam[\"CAMUS\"]:::axis\n  das[\"Dasein: munduan-izatea\"]:::key\n  her[\"heriotzarako-izatea\"]\n  den[\"denboratasuna\"]\n  ask[\"askatasuna\"]:::key\n  era[\"erantzukizuna\"]\n  ang[\"larritasuna\"]\n  abs[\"absurdua\"]:::key\n  mat[\"errebeldia\"]\n  zen[\"bizitzari zentzua ematea\"]\n  aut[\"benetakotasuna: norberaren bizitzaren egilea\"]:::key\n  ext -->|\"tesi zentrala\"| tesi\n  fen -->|\"iturria\"| ext\n  kier -->|\"aurrekaria\"| ext\n  tesi -->|\"ontologia gisa\"| hei\n  tesi -->|\"askatasun gisa\"| sar\n  tesi -->|\"absurdu gisa\"| cam\n  hei -->|\"izatearen galdera\"| das\n  das -->|\"egitura\"| her\n  her -->|\"oinarria\"| den\n  sar -->|\"gizakia askatasuna da\"| ask\n  ask -->|\"hortik\"| era\n  era -->|\"eta\"| ang\n  cam -->|\"mundua absurdua da\"| abs\n  abs -->|\"erantzuna\"| mat\n  mat -->|\"sortuz\"| zen\n  den -->|\"benetan bizitzea\"| aut\n  ang --> aut\n  zen --> aut\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Esentzia finkorik gabe jaiotzen bagara, zer egiten dugu gure askatasunarekin?",
   "raiz": "EXISTENTZIALISMOA",
   "raiz_d": "40ko eta 50eko hamarkadetako korrontea, mundu-gerren ondoren: bizitzaren zentzuari buruzko galdera premiazko bihurtzen da. Aurrekaria: Kierkegaard.",
   "ramas": [
    {
     "rel": "abiapuntua",
     "t": "Existentzia esentziaren aurretik dator",
     "k": true,
     "a": "Sartre",
     "d": "Ez gara izaera finko batekin jaiotzen: geure egintzen bidez eraikitzen gara.",
     "c": [
      {
       "rel": "gizakia hau da",
       "t": "Proiektu bat",
       "d": "Aukeratuz bere burua egiten duen izakia."
      },
      {
       "rel": "ardatz du",
       "t": "Gizabanako konkretua",
       "a": "Unamuno",
       "d": "«Hezur-haragizko gizakia», ez abstrakzioak."
      }
     ]
    },
    {
     "rel": "ondorioa",
     "t": "Askatasun erradikala",
     "k": true,
     "a": "Sartre",
     "d": "«Gizakia aske izatera kondenatuta dago»: beti dago aukera; ez aukeratzea ere aukeratzea da.",
     "c": [
      {
       "rel": "dakar",
       "t": "Erantzukizuna",
       "d": "Aitzakia emango digun Jainkorik edo naturarik gabe, garen horren erantzule gara."
      },
      {
       "rel": "sortzen du",
       "t": "Larritasuna",
       "d": "Oinarri absoluturik eza eta aukeratzearen zama sentitzen ditugu."
      }
     ]
    },
    {
     "rel": "hondoan",
     "t": "Finitasuna eta zentzugabekeria",
     "d": "Bizitzak ez du aurrez finkatutako helbururik.",
     "c": [
      {
       "rel": "honela bizitzen da",
       "t": "Heriotzarako-izatea",
       "a": "Heidegger",
       "d": "Aukeratu ez dugun mundu batera jaurtiak gaude, eta finituak gara."
      },
      {
       "rel": "honela bizitzen da",
       "t": "Nazka eta ezereza",
       "a": "Sartre, Heidegger",
       "d": "Existentzia arrazoirik eta oinarririk gabe agertzen da."
      },
      {
       "rel": "honela bizitzen da",
       "t": "Absurdua",
       "a": "Camus",
       "d": "Gure zentzu-egarriaren eta hura asetzen ez duen munduaren arteko talka."
      }
     ]
    },
    {
     "rel": "bizitzeko bi modu",
     "t": "Benetakotasuna ala ihesa",
     "k": true,
     "d": "Zer egiten dugun askatasunaren eta heriotzaren aurrean.",
     "c": [
      {
       "rel": "ihes egitea hau da",
       "t": "Fede txarra eta benetakotasun eza",
       "d": "Norbera engainatzea («ni horrelakoa naiz», «ez nuen aukerarik») edo «egiten dena» egitea, masak bezala."
      },
      {
       "rel": "onartzea hau da",
       "t": "Bizitza benetakoa",
       "d": "Finitasuna onartu eta kontzienteki aukeratu, ondorioak bere gain hartuz."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Larritasuna",
     "rel": "honetan babestera darama",
     "a": "Fede txarra eta benetakotasun eza"
    },
    {
     "de": "Heriotzarako-izatea",
     "rel": "onartuz gero, irekitzen du",
     "a": "Bizitza benetakoa"
    }
   ],
   "idea": "Ez dago gure ordez erabakitzen duen esentziarik ez Jainkorik: aske izatera kondenatuta gaude, eta benetan bizitzea askatasun hori eta gure finitasuna aitzakiarik gabe onartzea da."
  }
 },
 "C8K-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Kierkegaard: askatasunaren larritasuna eta fedearen jauzia",
  "mermaid": "flowchart TD\n  kk[\"KIERKEGAARD\"]\n  giz[\"gizakia horrela bereizten da\"]:::axis\n  ezdet[\"bere esentziak ez du aldez aurretik determinatzen\"]:::key\n  elegi[\"bere burua hautatu behar du\"]:::key\n  ezdeus[\"berez ez da ezer\"]\n  ahalg[\"aukera oro posibilitate hutsa da\"]\n  angus[\"LARRITASUNA\"]:::key\n  etsip[\"ETSIPENA\"]:::key\n  fede[\"fedearen jauzia: errealitate hutsera\"]:::key\n  jaink[\"JAINKOA\"]:::axis\n  kk --> giz\n  giz --> ezdet\n  giz --> elegi\n  ezdet -->|\"beraz\"| ezdeus\n  elegi -->|\"baina\"| ahalg\n  ezdeus -->|\"sortzen du\"| angus\n  ahalg -->|\"sortzen du\"| etsip\n  angus -->|\"irteten gara\"| fede\n  etsip -->|\"irteten gara\"| fede\n  fede -->|\"da\"| jaink\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer esan nahi du bere burua aukeratu behar duen norbanako gisa existitzeak?",
   "raiz": "KIERKEGAARD",
   "raiz_d": "XIX. mendeko pentsalari daniarra, existentzialismoaren aurrekaria: sistema abstraktu handien aurrean (Hegel), norbanako konkretua.",
   "ramas": [
    {
     "rel": "abiapuntua",
     "t": "Norbanako bakarra",
     "k": true,
     "d": "Garrantzitsua ez da gizateria abstraktuan, nire existentzia konkretua baizik.",
     "c": [
      {
       "rel": "ez dago emanda",
       "t": "Nia zeregin bat da",
       "d": "Norbanakoak bere burua izatera iritsi behar du."
      },
      {
       "rel": "horregatik",
       "t": "Norbera aukeratu: «edo hau edo bestea»",
       "d": "Existitzea erabakitzea da, eta inork ezin du nire ordez aukeratu."
      }
     ]
    },
    {
     "rel": "askatasunak sortzen du",
     "t": "Larritasuna",
     "k": true,
     "d": "Askatasunaren bertigoa: aukera hutsaren aurrean egotea, hautua ezerk bermatu gabe.",
     "c": [
      {
       "rel": "hemendik sortzen da",
       "t": "Posibilitatea",
       "d": "Dena izan daiteke eta ezer ez dago aurretik ziurtatuta."
      }
     ]
    },
    {
     "rel": "existitzeko moduak",
     "t": "Hiru estadioak",
     "d": "Hiru bizimodu; batetik bestera ez da arrazoiketaz igarotzen, aukeratuz baizik.",
     "c": [
      {
       "rel": "lehena",
       "t": "Estetikoa",
       "d": "Unearen plazererako bizitzea, konpromisorik gabe (limurtzailea).",
       "c": [
        {
         "rel": "hemen amaitzen da",
         "t": "Etsipena",
         "d": "Norbera izan nahi ez izatea: bizitza sakabanatua hustu egiten da."
        }
       ]
      },
      {
       "rel": "bigarrena",
       "t": "Etikoa",
       "d": "Betebeharrarekiko eta arau unibertsalekiko konpromisoa (ezkontza)."
      },
      {
       "rel": "hirugarrena",
       "t": "Erlijiosoa",
       "d": "Norbanakoak Jainkoarekin duen harreman pertsonal eta absolutua."
      }
     ]
    },
    {
     "rel": "irtenbide bakarra",
     "t": "Fedearen jauzia",
     "k": true,
     "d": "Fedea ez da arrazoiaz frogatzen: erabaki egiten da, dena arriskatuz.",
     "c": [
      {
       "rel": "hau da",
       "t": "Paradoxa bat",
       "d": "Etikaren eta logika ororen gainetik dago."
      },
      {
       "rel": "modelo",
       "t": "Abraham",
       "d": "Isaak sakrifikatzea onartzen du Jainkoari obeditzeagatik, arrazoi etiko ororen aurka."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Etsipena",
     "rel": "honetara bultzatzen du",
     "a": "Fedearen jauzia"
    },
    {
     "de": "Fedearen jauzia",
     "rel": "estadiora sarbidea ematen du",
     "a": "Erlijiosoa"
    }
   ],
   "idea": "Kierkegaardentzat existitzea norbera aukeratzea da: askatasun horrek angustia sortzen du, bizitza estetikoa etsipenean amaitzen da, eta arrazoiak justifikatzen ez duen fedearen jauziak bakarrik adiskidetzen du norbanakoa bere buruarekin Jainkoaren aurrean."
  }
 },
 "C6-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Postmodernitatea: metakontakizunen amaieraren ardatzak",
  "mermaid": "flowchart TD\n  pm[\"POSTMODERNITATEA\"]\n  meta[\"metakontakizunen amaiera\"]\n  niet[\"Nietzscheren ondarea\"]\n  lyo[\"Lyotard\"]:::axis\n  der[\"Derrida\"]:::axis\n  fou[\"Foucault\"]:::axis\n  bau[\"Baudrillard\"]:::axis\n  del[\"Deleuze eta Guattari\"]:::axis\n  jak[\"jakintzaren legitimazio-galera\"]:::key\n  desk[\"dekonstrukzioa eta différance\"]:::key\n  bot[\"boterea / jakintza, biopolitika\"]:::key\n  sim[\"simulakroa\"]:::key\n  erri[\"errizoma eta ihes-lerroak\"]:::key\n  haber[\"Habermas: modernitate amaitugabea\"]:::axis\n  vat[\"Vattimo: pentsamendu ahula\"]\n  ror[\"Rorty: elkarrizketa eta ironia\"]\n  pm -->|\"diagnostiko zentrala\"| meta\n  pm -->|\"abiapuntua\"| niet\n  meta --> lyo\n  meta --> der\n  meta --> fou\n  meta --> bau\n  meta --> del\n  lyo -->|\"jakintza\"| jak\n  der -->|\"testua\"| desk\n  fou -->|\"genealogia\"| bot\n  bau -->|\"hipererrealitatea\"| sim\n  del -->|\"ez-hierarkikoa\"| erri\n  jak -->|\"kontraerantzuna\"| haber\n  desk -->|\"izatea ahultzea\"| vat\n  erri -->|\"elkarrizketa\"| ror\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Arrazoian, egian eta aurrerapenean konfiantza izaten jarrai dezakegu?",
   "raiz": "POSTMODERNITATEA",
   "raiz_d": "Gerren eta totalitarismoen ondoren, eszeptizismoak ordezkatzen du aurrerapenean zegoen fede modernoa. Haren aitzindari handia Nietzsche da.",
   "ramas": [
    {
     "rel": "diagnostikoa",
     "t": "Metakontakizunen amaiera",
     "k": true,
     "a": "Lyotard",
     "d": "«Metakontakizunekiko sinesgogortasuna»: jada ez dugu sinesten errealitate osoa azaldu nahi duten kontakizunetan.",
     "c": [
      {
       "rel": "adibideak",
       "t": "Kristautasuna, marxismoa, aurrerapena",
       "d": "Historiari helmuga bat agintzen zioten kontakizun handiak."
      },
      {
       "rel": "haien ordez",
       "t": "Tokiko kontakizun txikiak",
       "d": "Zatiketa eta pluralismoa: ez dago «Historia Handi» bakarrik."
      }
     ]
    },
    {
     "rel": "kritika erradikalizatzen dute",
     "t": "Pentsamendu hausturazalea",
     "d": "Arrazoi eta egia unibertsalen proiektu modernoa baztertzen dute.",
     "c": [
      {
       "rel": "kontzeptuak desegiten ditu",
       "t": "Dekonstrukzioa",
       "a": "Derrida",
       "d": "Ez dago ezer «testutik kanpo»: kontzeptu orok kontraesanak eta botere-hierarkiak ezkutatzen ditu."
      },
      {
       "rel": "nia desegiten du",
       "t": "Subjektuaren heriotza",
       "a": "Foucault",
       "d": "Nia botere-sareen eta diskurtsoen eraikuntza da: jakintza orok boterea sortzen du."
      },
      {
       "rel": "egia sendoari uko egiten dio",
       "t": "Pentsamendu ahula",
       "a": "Vattimo",
       "d": "Interpretazioen pluraltasuna onartzen du: tolerantziaren etika bat."
      },
      {
       "rel": "erreala desegiten du",
       "t": "Hiperrealitatea",
       "a": "Baudrillard",
       "d": "Simulakroak erreala ordezkatzen du: «mapak lurraldea ordezkatu du»."
      }
     ]
    },
    {
     "rel": "erantzuna",
     "t": "Modernitatea konpontzea",
     "k": true,
     "a": "Habermas",
     "d": "Arrazoi unibertsalari uko egiten badiogu, injustizia kritikatzeko tresnarik gabe geratzen gara.",
     "c": [
      {
       "rel": "arazoa hau da",
       "t": "Arrazoi instrumentala",
       "d": "Menderatzeko eta kalkulatzeko bitarteko gisa soilik erabilitako arrazoia."
      },
      {
       "rel": "proposatzen du",
       "t": "Arrazoi dialogikoa",
       "k": true,
       "d": "Akordio arrazionalak hizketa-komunitate ideal batean, hertsapenik gabe."
      }
     ]
    },
    {
     "rel": "aporia",
     "t": "Edozerk balio du?",
     "d": "Egia objektiborik gabe, nola bereizten dugu benetako albiste bat bulo batetik, edo aditu bat influencer batetik?"
    }
   ],
   "cruces": [
    {
     "de": "Arrazoi dialogikoa",
     "rel": "erantzuten dio",
     "a": "Pentsamendu hausturazalea"
    },
    {
     "de": "Hiperrealitatea",
     "rel": "zorroztu egiten du",
     "a": "Edozerk balio du?"
    }
   ],
   "idea": "Postmodernitateak kontakizun handien eta egia bakarraren amaiera aldarrikatzen du; Habermasek erantzuten du arrazoi dialogikorik gabe injustizia kritikatzeko tresnarik gabe geratzen garela."
  }
 },
 "C7-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Paradigma-aldaketak",
  "mermaid": "flowchart TD\n  arist[\"Aristoteles\"]:::key\n  org[\"paradigma organizista\"]:::axis\n  magik[\"Paradigma magiko-animista\"]:::axis\n  mek[\"paradigma mekanizista\"]:::axis\n  esp[\"esperientzian oinarritua\"]:::key\n  anim[\"natura = animalia handi bat\"]\n  ezoh[\"ohiz kanpoko fenomenoak onartzen ditu\"]\n  inoz[\"mentalitate xaloa\"]\n  makin[\"natura = makinak\"]:::key\n  hedad[\"erreala: hedadura eta mugimendua\"]\n  ezind[\"ez ditu indar ezkutuak onartzen\"]\n  ondor[\"ondorioak: aurkikuntzak eta matematika zientzian\"]:::key\n  arist -->|\"hau da haren jatorria\"| org\n  org -->|\"hau ordezkatu zuen\"| magik\n  magik -->|\"honek ordezkatu zuen\"| mek\n  magik -->|\"oinarritzen da\"| esp\n  esp -->|\"sinesten du\"| anim\n  anim -->|\"onartzen du\"| ezoh\n  ezoh -->|\"sortzen du\"| inoz\n  mek -->|\"natura da\"| makin\n  makin -->|\"erreala soilik\"| hedad\n  makin -->|\"ez du onartzen\"| ezind\n  mek -->|\"ondorioa da\"| ondor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola aldatu da natura ulertzeko modua?",
   "raiz": "PARADIGMA-ALDAKETAK",
   "raiz_d": "Paradigma aro batek natura azaltzeko partekatzen duen markoa da; krisian sartzen denean, beste batek ordezkatzen du.",
   "ramas": [
    {
     "rel": "Antzinaroa eta Erdi Aroa",
     "t": "Paradigma organizista",
     "k": true,
     "a": "Aristoteles",
     "d": "Natura organismo bizidun handi baten modukoa da, eta bertan dena helburu baterantz doa.",
     "c": [
      {
       "rel": "oinarri du",
       "t": "Zentzumenen esperientzia",
       "d": "Behaketa kualitatiboa eta sen ona, neurtu eta esperimentatu gabe."
      },
      {
       "rel": "honen bidez azaltzen du",
       "t": "Azken kausak",
       "d": "Gauza bakoitza bere leku naturalerantz edo bere helbururantz mugitzen da (teleologia)."
      }
     ]
    },
    {
     "rel": "Errenazimentua",
     "t": "Paradigma magiko-animista",
     "k": true,
     "a": "Ficino, Paracelso, Bruno",
     "d": "Natura izaki animatua da, arimaz, sinpatiaz eta antipatiaz betea.",
     "c": [
      {
       "rel": "onartzen ditu",
       "t": "Indar ezkutuak eta gertaera apartekoak",
       "d": "Astroen, gorputzen eta landareen arteko korrespondentzia sekretuak."
      },
      {
       "rel": "jakintsua hau da",
       "t": "Magoa",
       "d": "Indar horiek ezagutzen dituenak natura menderatu dezake (alkimia, astrologia)."
      }
     ]
    },
    {
     "rel": "XVII. mendea",
     "t": "Paradigma mekanizista",
     "k": true,
     "a": "Galileo, Descartes, Newton",
     "d": "Natura lege matematikoek gobernatzen duten makina bat da.",
     "c": [
      {
       "rel": "hau bakarrik onartzen du",
       "t": "Hedadura eta mugimendua",
       "d": "Erreala neurgarria dena da; indar ezkutuak eta helburuak baztertzen dira."
      },
      {
       "rel": "metodoa",
       "t": "Esperimentua eta matematika",
       "d": "Zientzia modernoaren eta haren aurkikuntza handien oinarria."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Paradigma magiko-animista",
     "rel": "harekin hausten du",
     "a": "Paradigma organizista"
    },
    {
     "de": "Paradigma mekanizista",
     "rel": "ordezkatu egiten du",
     "a": "Paradigma magiko-animista"
    },
    {
     "de": "Hedadura eta mugimendua",
     "rel": "ezabatu egiten du",
     "a": "Azken kausak"
    }
   ],
   "idea": "Natura helburuak dituen organismo bat izatetik (Aristoteles) indar ezkutuz betetako izaki animatu bat izatera (Errenazimentua) igarotzen da, eta, azkenik, matematikaz neur daitekeen makina bat izatera: zientzia modernoa jaiotzen da."
  }
 },
 "C9-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "Modernitatearen krisia",
  "title": "Feminismoa: generoa, bestetasuna eta gaur egungo eztabaidak",
  "mermaid": "flowchart TD\n  fem[\"FEMINISMOA\"]\n  sgb[\"sexu-genero bereizketa\"]:::axis\n  ola[\"olatuak\"]\n  bea[\"Simone de Beauvoir\"]:::axis\n  but[\"Judith Butler\"]:::axis\n  gaur[\"gaur egungo eztabaidak\"]\n  alt[\"bestetasuna\"]\n  ezda[\"ez da emakume jaiotzen, emakume bihurtzen da\"]:::key\n  traz[\"transzendentzia eta immanentzia\"]\n  perf[\"generoaren performatibitatea\"]:::key\n  queer[\"teoria queer-a\"]\n  deseg[\"generoa desegitea\"]\n  fra[\"Fraser: birbanaketa eta aitorpena\"]:::key\n  nus[\"Nussbaum: gaitasunak\"]:::key\n  inter[\"intersekzionalitatea\"]:::key\n  zain[\"zaintzaren etika eta elkarrekiko mendekotasuna\"]:::key\n  fem -->|\"oinarria\"| sgb\n  fem -->|\"testuingurua\"| ola\n  sgb --> bea\n  sgb --> but\n  sgb --> gaur\n  bea -->|\"gizona subjektu, emakumea Beste\"| alt\n  alt -->|\"hortik\"| ezda\n  ezda -->|\"gainditu nahi du\"| traz\n  but -->|\"generoa ekintza da\"| perf\n  perf -->|\"hortik\"| queer\n  queer --> deseg\n  gaur --> fra\n  gaur --> nus\n  gaur --> inter\n  traz --> zain\n  deseg --> zain\n  inter --> zain\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola aldatu du feminismoak «emakume izatea» ulertzeko modua?",
   "raiz": "FEMINISMOA",
   "raiz_d": "Sexuen arteko desberdintasuna salatzen duen teoria eta mugimendua; desberdintasun hori historikoa dela erakusten du, ez naturala. «Olatuka» kontatu ohi da.",
   "ramas": [
    {
     "rel": "lehen olatua",
     "t": "Eskubide-berdintasuna",
     "a": "Sufragistak",
     "d": "XIX. eta XX. mendeak: botoa, hezkuntza eta lege-eskubideak emakumeentzat.",
     "c": [
      {
       "rel": "muga",
       "t": "Legeak aldatzea ez da nahikoa",
       "d": "Desberdintasunak bere horretan dirau familian, lanean eta kulturan."
      }
     ]
    },
    {
     "rel": "bigarren olatua",
     "t": "Kultura osoaren kritika",
     "k": true,
     "a": "Simone de Beauvoir",
     "d": "60ko eta 80ko hamarkaden artean: zapalkuntza ez da legezkoa soilik, egiturazkoa baizik.",
     "c": [
      {
       "rel": "abiapuntua",
       "t": "«Ez da emakume jaiotzen: egiten da»"
      },
      {
       "rel": "diagnostikoa",
       "t": "Emakumea «bestea» gisa",
       "d": "Beti gizonarekiko definitua, zeina Subjektu gisa aurkezten baita."
      },
      {
       "rel": "hortik sortzen da",
       "t": "Sexua / generoa bereizketa",
       "k": true,
       "d": "Sexua biologikoa da; generoa (femeninoa eta maskulinoa), berriz, eraikuntza soziala."
      }
     ]
    },
    {
     "rel": "gaur egungo eztabaidak",
     "t": "Generoa, aniztasuna eta zaintzak",
     "d": "90eko hamarkadatik aurrera feminismoa zabaldu eta pluraldu egiten da.",
     "c": [
      {
       "rel": "zalantzan jartzen du",
       "t": "Generoa performance gisa",
       "k": true,
       "a": "Judith Butler",
       "d": "Generoa ekintzak errepikatuz egiten da; ez dago hura azaltzen duen esentziarik atzean."
      },
      {
       "rel": "gehitzen du",
       "t": "Intersekzionalitatea",
       "k": true,
       "d": "Genero-zapalkuntza klasearekin, arrazarekin, sexualitatearekin edo migrazioarekin gurutzatzen da."
      },
      {
       "rel": "eskatzen du",
       "t": "Birbanaketa eta aitortza",
       "a": "Nancy Fraser",
       "d": "Justizia ekonomikoa eta duintasunarekiko errespetua, aldi berean."
      },
      {
       "rel": "proposatzen du",
       "t": "Zaintzak erdigunean",
       "a": "Yayo Herrero (ekofeminismoa)",
       "d": "Zaurgarriak eta elkarren mendekoak gara: bizitzak eta zaintzek gidatu behar dute politika."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Legeak aldatzea ez da nahikoa",
     "rel": "bidea ematen dio",
     "a": "Kultura osoaren kritika"
    },
    {
     "de": "Generoa performance gisa",
     "rel": "zalantzan jartzen du",
     "a": "Sexua / generoa bereizketa"
    }
   ],
   "idea": "Feminismoa eskubideak aldarrikatzetik emakumezko «natura» baten ideia desegitera igarotzen da; gaur egun, generoa zer den eta beste desberdintasun batzuekin nola gurutzatzen den eztabaidatzen du."
  }
 },
 "ds-A2": {
  "subject": "hf",
  "block": "A",
  "tema": "Filosofoaren metodoak",
  "title": "Filosofoaren metodoak eta tresnak",
  "mermaid": "flowchart TD\n  center[\"FILOSOFOAREN METODOAK<br>ETA TRESNAK\"]:::axis\n  fu[\"Informazio-iturriak\"]:::key\n  he[\"Filosofoaren tresnak\"]:::key\n  center -->|\"abiatzen da\"| fu\n  center -->|\"tresnekin lantzen ditu\"| he\n  fu --> f1[\"dokumentuak · hitzaldiak<br>· aztarna digitalak\"]\n  f1 -->|\"honen menpe jartzen dira\"| h1[\"1· iturrien azterketa kritikoa\"]\n  he --> h1\n  h1 --> h2[\"2· dokumentuen interpretazioa\"]\n  h2 --> h3[\"3· arazo filosofikoak identifikatzea\"]\n  h3 --> h4[\"4· argudioetan oinarritutako elkarrizketa\"]\n  h4 --> h5[\"5· ikerketa filosofikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola egiten du lan filosofo batek: zer materialekin eta zer tresnarekin?",
   "raiz": "FILOSOFIAREN METODOAK",
   "raiz_d": "Filosofia egitea ez da iritzia ematea: galdera bat ondo formulatzea, kontzeptuak argitzea eta erantzun bat arrazoiekin defendatzea da.",
   "ramas": [
    {
     "rel": "hemendik abiatzen da",
     "t": "Iturriak",
     "d": "Dokumentuak, hitzaldiak, aztarna digitalak: izpiritu kritikoz irakurri beharreko testuak.",
     "c": [
      {
       "rel": "hemen irakurtzen dira",
       "t": "Beren testuingurua (historikotasuna)",
       "k": true,
       "d": "Pentsamendu oro garai, gizarte eta kultura jakin batean sortzen da."
      },
      {
       "rel": "berrikustera behartzen du",
       "t": "Kanona",
       "d": "«Klasikoa» dena ez da neutroa: emakumeak eta pentsalari ez-europarrak kanpoan utzi dira."
      }
     ]
    },
    {
     "rel": "honen bidez interpretatzen ditu",
     "t": "Interpretazioa",
     "d": "Testu filosofiko bat irakurtzea hura interpretatzea da.",
     "c": [
      {
       "rel": "haren araua",
       "t": "Karitate-printzipioa",
       "k": true,
       "d": "Egilearen bertsiorik sendoena berreraiki, kritikatu aurretik. Ez da hari arrazoia ematea."
      }
     ]
    },
    {
     "rel": "bere tesiak honen bidez defendatzen ditu",
     "t": "Argudiaketa",
     "k": true,
     "d": "Premisetatik abiatuta ondorio bat defendatzea, hartara zergatik iristen den erakutsiz.",
     "c": [
      {
       "rel": "hauteman behar du",
       "t": "Faltsukeria",
       "d": "Sendoa dirudien baina bere ondorioa justifikatzen ez duen arrazoiketa."
      }
     ]
    },
    {
     "rel": "dena hemen antolatzen du",
     "t": "Ikerketa filosofikoa",
     "k": true,
     "d": "Galdera bat mugatu, iturriak aukeratu, kontzeptuak argitu eta jarrera arrazoitu bat eraiki.",
     "c": [
      {
       "rel": "ordena bat jarraitzen du",
       "t": "Arazoa, kontzeptuak, tesia, argudioak",
       "d": "Eta ondorioa, kritika ahaztu gabe: norberaren ahuleziak eta aurkako jarrerak."
      }
     ]
    },
    {
     "rel": "historiarekin aldatzen dira",
     "t": "Metodoak eta generoak",
     "d": "Garai bakoitzak bere erara lantzen ditu arazoak, eta bere forma propioan idazten.",
     "c": [
      {
       "rel": "Antzinaroan",
       "t": "Elkarrizketa, dialektika eta tratatua",
       "a": "Sokrates, Platon, Aristoteles",
       "d": "Galdetu eta gezurtatu; Ideietara igo; definitu, sailkatu eta kausak bilatu."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Karitate-printzipioa",
     "rel": "bidezko kritika ahalbidetzen du",
     "a": "Argudiaketa"
    },
    {
     "de": "Beren testuingurua (historikotasuna)",
     "rel": "azaltzen du zergatik aldatzen diren",
     "a": "Metodoak eta generoak"
    }
   ],
   "idea": "Filosofia egitea iritzia jarrera arrazoizko bihurtzea da: iturriak beren testuinguruan eta karitatez irakurtzea, premisekin argudiatzea eta ondo mugatutako galdera bati emandako erantzuna ordenatzea."
  }
 },
 "ds-A3": {
  "subject": "hf",
  "block": "A",
  "tema": "Filosofiaren jatorria",
  "title": "Filosofiaren sorrera Grezian",
  "mermaid": "flowchart TD\n  center[\"FILOSOFIAREN JAIOTZA<br>GREZIAN (K.a. VI. mendea)\"]:::axis\n  paso[\"Mitoaren eta logosaren arteko igarobidea\"]:::key\n  fac[\"Ahalbidetzen duten faktoreak\"]:::key\n  center -->|\"honetan datza\"| paso\n  center -->|\"hauek azaltzen dute\"| fac\n  paso --> mito[\"MITOA:<br>azalpen irudimenezkoa (jainkoak)\"]\n  paso --> logos[\"LOGOSA:<br>azalpen arrazionala (kausak)\"]\n  mito -->|\"honetara ematen du bidea\"| logos\n  fac --> c1[\"poliseko demokrazia → agoran eztabaida\"]\n  fac --> c2[\"esklabotza → pentsatzeko denbora librea\"]\n  fac --> c3[\"dogmarik gabeko erlijioa → kritika-askatasuna\"]\n  fac --> c4[\"merkataritza → beste kulturekin harremana\"]\n  fac --> c5[\"lege idatziak → eztabaida sistematikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zergatik jaio zen filosofia Grezian, eta zer aldatu zen mitotik logosera igarotzean?",
   "raiz": "MITOTIK LOGOSERA",
   "raiz_d": "K.a. VI. mendea, Joniako (Mileto) eta Magna Greziako kolonia greziarrak: errealitatea naturaz gaindikoa erabili gabe azaltzeko lehen saiakerak.",
   "ramas": [
    {
     "rel": "lehen",
     "t": "Mitoa",
     "k": true,
     "a": "Homero, Hesiodo",
     "d": "Poeten kontakizun tradizionalak, munduari, gizakiei eta jainkoei buruzkoak.",
     "c": [
      {
       "rel": "erantzuten dio",
       "t": "Nork egin zuen?",
       "d": "Gertatzen dena jainkoen borondate apetatsuaren mende dago. Onartu eta transmititu egiten da."
      },
      {
       "rel": "zalantzan jartzen du",
       "t": "Xenofanesen kritika",
       "a": "Xenofanes",
       "d": "Jainkoak giza proiekzio bat dira: idiek margotuko balute, idien antzeko jainkoak margotuko lituzkete."
      }
     ]
    },
    {
     "rel": "gero",
     "t": "Logosa",
     "k": true,
     "d": "Arrazoia: kausak natura bertan (physis) bilatzea, ez jainkoengan.",
     "c": [
      {
       "rel": "erantzuten dio",
       "t": "Zergatik gertatzen da nahitaez?",
       "k": true,
       "d": "Gauzak ez dira apetaz gertatzen: beharrezkotasuna dago, eta physis kosmos bat da, ordena bat."
      },
      {
       "rel": "bilatzen ditu",
       "t": "Arkhea",
       "d": "Dena bertatik datorren printzipioa."
      },
      {
       "rel": "menpe jartzen da",
       "t": "Kritika eta eztabaida",
       "d": "Azalpenak kritikatu eta probatu egiten dira."
      }
     ]
    },
    {
     "rel": "posible egin zuten",
     "t": "Greziako baldintzak",
     "k": true,
     "c": [
      {
       "rel": "izan zen",
       "t": "Pentsatzeko aisia",
       "d": "Esklaboen lanak denbora librea ematen zien hiritarrei."
      },
      {
       "rel": "ez zen izan",
       "t": "Ez liburu sakraturik ez apaiz-kastarik",
       "d": "Ez zegoen inposatzeko dogmarik ezta egia errebelaturik ere."
      },
      {
       "rel": "zabaldu ziren",
       "t": "Polisa eta merkataritza",
       "d": "Egipto, Asia eta beste kultura batzuekin izandako harremanak norberaren sinesmenak erlatibizatu zituen."
      },
      {
       "rel": "sortu ziren",
       "t": "Hiritarra eta agora",
       "d": "Plaza publikoan eztabaidatu egiten da, eta argudiaketak balioa hartzen du."
      },
      {
       "rel": "garatu zen",
       "t": "Idazkera alfabetikoa",
       "d": "Pentsamendua finkatzen du, eta hura kritikatzeko eta transmititzeko aukera ematen du."
      }
     ]
    },
    {
     "rel": "bere mugekin",
     "t": "Itzalak dituen jatorria",
     "c": [
      {
       "rel": "kanpoan utzi zituen",
       "t": "Emakumeak, esklaboak eta atzerritarrak",
       "d": "Hitz publikoa ez zen guztientzat."
      },
      {
       "rel": "gezurtatzen du",
       "t": "«Mirari greziarra»",
       "d": "Greziak Egipto, Mesopotamia edo Feniziako jakintzak heredatu zituen; bere berrikuntza azalpenak jendaurrean eztabaidatzea izan zen."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Xenofanesen kritika",
     "rel": "bidea irekitzen dio",
     "a": "Logosa"
    },
    {
     "de": "Hiritarra eta agora",
     "rel": "ahalbidetzen du",
     "a": "Kritika eta eztabaida"
    }
   ],
   "idea": "Mitotik logoserako igarotzeak ez ditu istorio batzuk beste batzuekin ordezkatzen: azalpen mota aldatzen du, «nork egin zuen?» galderatik «zergatik gertatzen da nahitaez?» galderara. Berrikuntza greziarra azalpenak jendaurrean eztabaidagarri bihurtzea izan zen."
  }
 },
 "ds-A4": {
  "subject": "hf",
  "block": "A",
  "tema": "Presokratikoak",
  "title": "Presokratikoak: arkhearen bilaketa",
  "mermaid": "flowchart TD\n  center[\"PRESOKRATIKOAK:<br>zein da guztiaren arkhea (printzipioa)?\"]:::axis\n  fis[\"Fisikoak:<br>printzipio material bat\"]:::key\n  otros[\"Beste erantzun batzuk\"]:::key\n  deb[\"Eztabaida handia:<br>aldaketa vs iraunkortasuna\"]:::key\n  center --> fis\n  center --> otros\n  center --> deb\n  fis --> t1[\"Tales → ura\"]\n  fis --> t2[\"Anaximandro → apeirona\"]\n  fis --> t3[\"Anaximenes → airea\"]\n  fis --> t4[\"Demokrito → atomoak + hutsa\"]\n  otros --> p1[\"Pitagoras → zenbakiak\"]\n  otros --> emp[\"Enpedokles → 4 elementu\"]\n  otros --> ana[\"Anaxagoras → nous-a\"]\n  deb --> her[\"Heraklito → dena isurtzen da (sua)\"]\n  deb --> par[\"Parmenides → izatea aldaezina da\"]\n  her -->|\"aurka dago\"| par\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Dena aldatzen bada, zerk irauten du? Zein da errealitatearen printzipioa (arkhe)?",
   "raiz": "PRESOKRATIKOAK ETA ARKHEA",
   "raiz_d": "Physis kosmos bat da, ordena bat. Aldaketaren atzean zerbaitek iraun behar du: arkheak, guztiaren jatorri, substratu eta kausa denak.",
   "ramas": [
    {
     "rel": "printzipio material bakarra",
     "t": "Miletoko monistak",
     "k": true,
     "d": "Substantzia natural bakarra, berez bizia (hilozoismoa), eraldatu egiten dena.",
     "c": [
      {
       "rel": "Talesentzat",
       "t": "Ura",
       "a": "Tales",
       "d": "Bizidun orok behar du, eta hartatik sortzen da."
      },
      {
       "rel": "Anaximandrorentzat",
       "t": "Apeirona",
       "a": "Anaximandro",
       "d": "Zehaztugabea eta mugagabea, dena bertatik sortu eta bertara itzultzen dena."
      },
      {
       "rel": "Anaximenesentzat",
       "t": "Airea",
       "a": "Anaximenes",
       "d": "Kondentsazioz eta bakantzez: aldaketa azaltzen duen lehen mekanismoa."
      }
     ]
    },
    {
     "rel": "printzipio ez-materiala",
     "t": "Pitagorikoak",
     "a": "Pitagoras",
     "d": "Zenbakia eta proportzioa: gauzak diren bezalakoak dira proportzioak gordetzen dituztelako.",
     "c": [
      {
       "rel": "irakasten dute",
       "t": "Arima hilezkorra, gorputza kartzela",
       "d": "Arima gorputz batetik bestera transmigratzen da. Platonengan eragina izango du."
      }
     ]
    },
    {
     "rel": "eztabaida handia",
     "t": "Aldaketaren arazoa",
     "c": [
      {
       "rel": "baieztatzen du",
       "t": "Dena isurtzen da",
       "k": true,
       "a": "Heraklito",
       "d": "Etengabeko bilakaera eta kontrakoen borroka, logos batek (suak) gobernatuak."
      },
      {
       "rel": "ukatzen du",
       "t": "Izatea bada, ez-izatea ez da",
       "k": true,
       "a": "Parmenides",
       "d": "Izatea betierekoa, bakarra eta aldaezina da; aldaketa zentzumenen itxura da.",
       "c": [
        {
         "rel": "hortik",
         "t": "Arrazoia zentzumenen aurrean",
         "d": "Egiaren bidea (arrazoia) eta iritziaren bidea (zentzumenak): ezagutzaren arazoa sortzen da."
        }
       ]
      }
     ]
    },
    {
     "rel": "betiereko hainbat printzipio",
     "t": "Pluralistak",
     "k": true,
     "d": "Printzipioak ez dira jaiotzen ez hiltzen; aldatzea nahastea eta bereiztea da.",
     "c": [
      {
       "rel": "Enpedoklesentzat",
       "t": "Lau erro",
       "a": "Enpedokles",
       "d": "Lurra, ura, airea eta sua, Maitasunak batu eta Gorrotoak bereizten dituenak."
      },
      {
       "rel": "Anaxagorasentzat",
       "t": "Haziak eta Nous",
       "a": "Anaxagoras",
       "d": "Hazi infinituak (homeomeriak), gogo batek, Nousak, mugimenduan jartzen dituenak."
      },
      {
       "rel": "Demokritorentzat",
       "t": "Atomoak eta hutsa",
       "a": "Demokrito",
       "d": "Dena da materia eta mugimendua, xederik gabe (mekanizismoa)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Pluralistak",
     "rel": "izatearen betierekotasuna hartzen diote",
     "a": "Izatea bada, ez-izatea ez da"
    },
    {
     "de": "Pluralistak",
     "rel": "aldaketa salbatzen diote",
     "a": "Dena isurtzen da"
    },
    {
     "de": "Atomoak eta hutsa",
     "rel": "ez-izate bat (hutsa) onartzen du, honen aurka",
     "a": "Izatea bada, ez-izatea ez da"
    }
   ],
   "idea": "Guztiek arkhea bilatzen dute, baina funtsezko arazoa aldaketa da: Heraklitok baieztatu egiten du, Parmenidesek ukatu, eta pluralistek betiereko hainbat printziporekin salbatzen dute. Platonek heredatuko du arazoa."
  }
 },
 "ds-A5": {
  "subject": "hf",
  "block": "A",
  "tema": "Sofistak eta Sokrates",
  "title": "Sofistak eta Sokrates",
  "mermaid": "flowchart TD\n  center[\"SOFISTAK ETA SOKRATES\"]:::axis\n  sof[\"SOFISTAK<br>(Protagoras, Gorgias)\"]:::key\n  soc[\"SOKRATES\"]:::key\n  asp[\"MILETOKO ASPASIA\"]:::key\n  center --> sof\n  center --> soc\n  center --> asp\n  sof -->|\"hauei aurre egiten diete\"| soc\n  sof --> s1[\"eszeptizismo epistemologikoa\"]\n  sof --> s2[\"erlatibismo morala\"]\n  sof --> s3[\"legeak konbentzioa dira\"]\n  soc --> c1[\"unibertsalismo morala\"]\n  soc --> c2[\"definizio unibertsalak bilatzen ditu\"]\n  soc --> c3[\"intelektualismo morala: jakintza = bertutea\"]\n  soc -->|\"metodoa\"| c4[\"ironia + maiotika\"]\n  asp --> a1[\"erretorika-irakaslea\"]\n  asp -->|\"eragina du\"| soc\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Legeak eta balioak naturalak ala konbentzionalak dira? Ba al dago guztientzat baliozkoa den egiarik?",
   "raiz": "SOFISTAK, SOKRATES ETA ASPASIA",
   "raiz_d": "K.a. V. mendea, Atena demokratikoa: bira antropologikoarekin, filosofia physisetik polisera igarotzen da.",
   "ramas": [
    {
     "rel": "funtsezko eztabaida",
     "t": "Physis nomosaren aurrean",
     "k": true,
     "d": "Naturala, aldatzen ez dena, gizakiek adostutakoaren aurrean: legea, ohitura, balioak.",
     "c": [
      {
       "rel": "Hipiasen arabera",
       "t": "Legeak konbentzioa dira",
       "a": "Hipias",
       "d": "Komunitate batetik bestera aldatzen dira, eta, horregatik, alda daitezke."
      }
     ]
    },
    {
     "rel": "erretorika irakasten dute",
     "t": "Sofistak",
     "d": "Maisu ibiltariak, ordainduta, batzarrean arrakasta izaten irakasten zutenak.",
     "c": [
      {
       "rel": "defendatzen du",
       "t": "Erlatibismoa",
       "k": true,
       "a": "Protagoras",
       "d": "«Gizakia da gauza guztien neurria»: ez dago egia bakar bat, ezta justizia bakar bat ere."
      },
      {
       "rel": "defendatzen du",
       "t": "Eszeptizismoa",
       "a": "Gorgias",
       "d": "Ez dago ezer; egongo balitz, ez litzateke ezagutuko; ezagutuko balitz, ez litzateke komunikatuko."
      },
      {
       "rel": "hizkuntza honetara murrizten dute",
       "t": "Pertsuasioa",
       "d": "Erretorika eta eristika: konbentzitzea, ez gauzak zer diren esatea."
      }
     ]
    },
    {
     "rel": "sofistei aurre egiten die",
     "t": "Sokrates",
     "d": "Ez du kobratzen, hitzaldiak eman beharrean elkarrizketan aritzen da, eta «Ezer ez dakidala baino ez dakit» du abiapuntu.",
     "c": [
      {
       "rel": "erlatibismoaren aurrean",
       "t": "Definizio unibertsalak",
       "k": true,
       "d": "Klase bateko gauza guztiei komun zaiena adierazten duten kontzeptuak."
      },
      {
       "rel": "moralean",
       "t": "Intelektualismo morala",
       "d": "Ongia ezagutzen duenak bakarrik jokatzen du ongi; gaizkia ezjakintasunagatik egiten da."
      },
      {
       "rel": "metodoarekin",
       "t": "Ironia eta maieutika",
       "k": true,
       "d": "Norberaren ezjakintasuna aurkitzea (aporia) eta egia «erditzen» laguntzea."
      }
     ]
    },
    {
     "rel": "salbuespena polis patriarkalean",
     "t": "Aspasia Miletokoa",
     "d": "Hizlari eta erretorika-maistra, hiritartasuna gizonezko askeena soilik zenean.",
     "c": [
      {
       "rel": "Sokratesek honela deitzen dio",
       "t": "«Nire maistra»",
       "d": "Horrela izendatzen du Platonen Menexeno-n."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Definizio unibertsalak",
     "rel": "gezurtatzen dute",
     "a": "Erlatibismoa"
    },
    {
     "de": "Ironia eta maieutika",
     "rel": "egia bilatzen duen elkarrizketa, ez hau:",
     "a": "Pertsuasioa"
    },
    {
     "de": "Aspasia Miletokoa",
     "rel": "erretorika irakasten dio",
     "a": "Sokrates"
    }
   ],
   "idea": "Sofistek konbentzio (nomos) bihurtzen dituzte legeak eta balioak, eta egia, erlatibo; Sokratesek, elkarrizketaren bidez, guztientzat balio duten definizio unibertsalak bilatzen ditu."
  }
 },
 "ds-A6": {
  "subject": "hf",
  "block": "A",
  "tema": "Platon eta Aristoteles",
  "title": "Platon eta Aristoteles",
  "mermaid": "flowchart TD\n  center[\"PLATON ETA ARISTOTELES\"]:::axis\n  pla[\"PLATON\"]:::key\n  ari[\"ARISTOTELES\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"kritikatzen du\"| pla\n  pla --> p1[\"dualismoa: Ideien mundua<br>vs mundu fisikoa\"]\n  pla --> p2[\"anamnesia (oroitzapena)\"]\n  pla --> p3[\"episteme (jakintza) vs doxa (iritzia)\"]\n  ari --> a1[\"hilemorfismoa: materia + forma\"]\n  ari --> a2[\"lau kausen teoria\"]\n  ari --> a3[\"potentziatik ekintzara\"]\n  a1 -->|\"dualismoaren aurrean\"| p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Non dago benetan erreala dena, eta nola ezagutzen dugu?",
   "raiz": "PLATON ETA ARISTOTELES: ERREALITATEA",
   "raiz_d": "Heraklitoren eta Parmenidesen arazoari bi erantzun: nola pentsatu aldi berean aldatzen dena eta irauten duena.",
   "ramas": [
    {
     "rel": "bi mundu bereizten ditu",
     "t": "Platon: dualismo ontologikoa",
     "k": true,
     "a": "Platon",
     "c": [
      {
       "rel": "erreala hauek dira",
       "t": "Ideiak",
       "k": true,
       "d": "Eredu betierekoak, aldaezinak eta unibertsalak. Gailurrean, Ongiaren Ideia."
      },
      {
       "rel": "haien kopiak hauek dira",
       "t": "Gauza sentigarriak",
       "d": "Aldakorrak eta anitzak; Ideietan partaide dira eta haiek imitatzen dituzte."
      },
      {
       "rel": "honen bidez ezagutzen da",
       "t": "Oroitzapena",
       "d": "Ezagutzea arimak gorpuztu aurretik ikusi zuena gogoratzea da."
      },
      {
       "rel": "igo egiten da",
       "t": "Doxatik epistemera",
       "d": "Sentigarriari buruzko iritzitik adigarriaren zientziara (dialektika).",
       "c": [
        {
         "rel": "kontatzen du",
         "t": "Kobazuloaren alegoria",
         "d": "Errepublika VII: itzaletatik Eguzkiraino igotzea, Ongiaren Ideiaraino."
        }
       ]
      }
     ]
    },
    {
     "rel": "materia eta forma batzen ditu",
     "t": "Aristoteles: hilemorfismoa",
     "k": true,
     "a": "Aristoteles",
     "c": [
      {
       "rel": "erreala hau da",
       "t": "Substantzia konkretua",
       "k": true,
       "d": "Gauza indibidual bakoitza, materiaz eta formaz osatua."
      },
      {
       "rel": "forma hemen dago",
       "t": "Gauzetan bertan",
       "d": "Ez mundu bereizi batean: gauzaren beraren egitura da."
      },
      {
       "rel": "aldaketa hau da",
       "t": "Potentziatik ekintzarako igarotzea",
       "d": "Erreala, eta bere kausen bidez azal daitekeena (ikus «Aldaketaren kausak»)."
      },
      {
       "rel": "honen bidez ezagutzen da",
       "t": "Abstrakzioa",
       "d": "Adimenak forma erauzten du zentzumenek ematen dutenetik abiatuta."
      }
     ]
    },
    {
     "rel": "Aristotelesen eragozpena",
     "t": "Ideien kritika",
     "d": "Formak gauzetatik bereizteak errealitatea bikoizten du, azaldu gabe.",
     "c": [
      {
       "rel": "adibidez",
       "t": "Hirugarren gizona",
       "d": "Gauza eta Ideia antzekoak badira, beste Ideia bat beharko litzateke hori azaltzeko, eta horrela infinituraino."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Abstrakzioa",
     "rel": "honen aurrean",
     "a": "Oroitzapena"
    },
    {
     "de": "Gauzetan bertan",
     "rel": "ez mundu bereizi batean, hauek bezala",
     "a": "Ideiak"
    },
    {
     "de": "Ideien kritika",
     "rel": "hauen bereizketa baztertzen du",
     "a": "Ideiak"
    }
   ],
   "idea": "Platonek Ideien mundu bereizi batean jartzen du erreala, eta ezagutzea gogoratzea da; Aristotelesek substantzia konkretuetan, materiaz eta formaz osatuetan, eta ezagutzea zentzumenetatik abiatuta abstraitzea da."
  }
 },
 "ds-A7": {
  "subject": "hf",
  "block": "A",
  "tema": "Antropologia klasikoa",
  "title": "Antropologia klasikoa: psikea",
  "mermaid": "flowchart TD\n  center[\"ANTROPOLOGIA KLASIKOA:<br>zer da psikea (arima)?\"]:::axis\n  soc[\"SOKRATES\"]:::key\n  pla[\"PLATON\"]:::key\n  ari[\"ARISTOTELES\"]:::key\n  center --> soc\n  soc -->|\"honek garatua\"| pla\n  pla -->|\"honek zuzendua\"| ari\n  soc --> s1[\"«ezagutu zeure burua»\"]\n  soc --> s2[\"arima da baliotsuena\"]\n  soc --> s3[\"ezagutza = bertutea\"]\n  pla --> p1[\"arima hilezkorra, hiru zati\"]\n  pla --> p2[\"gorputza bere kartzela da\"]\n  pla --> p3[\"dualismo antropologikoa\"]\n  ari --> a1[\"arima forma da: ez da existitzen gorputzik gabe\"]\n  ari --> a2[\"hiru arima: begetatiboa,<br>sentikorra, arrazionala\"]\n  ari --> a3[\"batasun substantziala (gorputza + arima)\"]\n  p3 -->|\"honek baztertua\"| a3\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer da arima (psikea), eta zer harreman du gorputzarekin?",
   "raiz": "PSIKEA GREZIA KLASIKOAN",
   "raiz_d": "Bira antropologikoarekin, galdera hau bihurtzen da: «nor naiz ni, eta nola bizi behar dut?».",
   "ramas": [
    {
     "rel": "arima zaindu behar da",
     "t": "Sokrates",
     "a": "Sokrates",
     "d": "Benetako askatasuna norbera ezagutzea eta norbera gobernatzea da.",
     "c": [
      {
       "rel": "bere leloa",
       "t": "«Ezagutu zeure burua»",
       "d": "Delfosko tenplutik: norbera aztertu gabe bizitzea lo bizitzea da."
      }
     ]
    },
    {
     "rel": "arima eta gorputza bereizten ditu",
     "t": "Platon: dualismo antropologikoa",
     "k": true,
     "a": "Platon",
     "c": [
      {
       "rel": "arima hau da",
       "t": "Hilezkorra eta aurretik existitzen dena",
       "d": "Jaio aurretik Ideiak ikusi zituen, eta transmigratu egiten da (metenpsikosia), herentzia pitagorikoa."
      },
      {
       "rel": "gorputza hau da",
       "t": "Arimaren kartzela",
       "k": true,
       "d": "Desirekin eta beldurrekin distraitzen du, eta egiara iristea eragozten dio."
      },
      {
       "rel": "hauetan banatzen da",
       "t": "Arimaren hiru zatiak",
       "d": "Arrazionala (gurdizaina), suminkorra eta gutiziatsua: gurdi hegodunaren mitoa."
      }
     ]
    },
    {
     "rel": "arima eta gorputza batzen ditu",
     "t": "Aristoteles: hilemorfismoa",
     "k": true,
     "a": "Aristoteles",
     "c": [
      {
       "rel": "arima hau da",
       "t": "Gorputz biziaren forma",
       "k": true,
       "d": "Ez da existitzen gorputzik gabe, estatuaren irudia brontzerik gabe existitzen ez den bezala."
      },
      {
       "rel": "gizakia hau da",
       "t": "Substantzia bakarra",
       "d": "Materia (gorputza) eta forma (arima) batuta."
      },
      {
       "rel": "arimak hauek ditu",
       "t": "Hiru funtzio",
       "d": "Begetatiboa (bizidun oro), sentikorra (animaliak) eta arrazionala (gizakia soilik)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Sokrates",
     "rel": "bere arima-zaintzak inspiratzen du",
     "a": "Platon: dualismo antropologikoa"
    },
    {
     "de": "Gorputz biziaren forma",
     "rel": "ideia hau baztertzen du",
     "a": "Arimaren kartzela"
    }
   ],
   "idea": "Platonentzat gorputz batean preso dagoen arima hilezkorra gara; Aristotelesentzat, substantzia bakarra, non arima gorputzaren forma den eta gorputzik gabe existitzen ez den."
  }
 },
 "ds-A8": {
  "subject": "hf",
  "block": "A",
  "tema": "Etika klasikoa",
  "title": "Eztabaida etikoa",
  "mermaid": "flowchart TD\n  center[\"EZTABAIDA ETIKO KLASIKOA\"]:::axis\n  sp[\"SOKRATES ETA PLATON:<br>intelektualismo morala\"]:::key\n  ari[\"ARISTOTELES:<br>bertutearen etika\"]:::key\n  center --> sp\n  center --> ari\n  ari -->|\"honengandik aldentzen da\"| sp\n  sp --> s1[\"ongia ezagutu → ongi jokatu\"]\n  sp --> s2[\"inork ez du nahita gaizki jokatzen<br>(ezjakintasunagatik soilik)\"]\n  ari --> a1[\"bertutea ohiturarekin lantzen da\"]\n  ari --> a2[\"erdiko terminoa bi muturren artean\"]\n  ari --> a3[\"eudaimonia: zoriontasuna helburu gisa\"]\n  s1 -->|\"jakitea ez da aski:<br>ohitu egin behar da\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer da bertutea, eta nola lortzen da zoriontasuna?",
   "raiz": "ETIKA KLASIKOA",
   "raiz_d": "Areté (bertutea) eta eudaimonia (zoriontasuna): intelektualismoak jakintzan batzen ditu; Aristotelesek, ohituran.",
   "ramas": [
    {
     "rel": "bertutea jakintza da",
     "t": "Sokrates: intelektualismo morala",
     "k": true,
     "a": "Sokrates",
     "c": [
      {
       "rel": "horregatik",
       "t": "«Inork ez du gaizkia nahita egiten»",
       "d": "Gaizki jokatzen duenak ezjakintasunagatik egiten du."
      },
      {
       "rel": "batzen ditu",
       "t": "Zientzia, bertutea eta zoriontasuna",
       "d": "Ongia ezagutzen duenak praktikatu egiten du, eta zoriontsu da."
      }
     ]
    },
    {
     "rel": "intelektualismoa ñabartzen du",
     "t": "Platon: bertutea eta arazketa",
     "a": "Platon",
     "d": "Arima gorputzetik askatzen da Ongiaren Ideia ikusteko; bertute gorena jakinduria da.",
     "c": [
      {
       "rel": "bertute bat zati bakoitzeko",
       "t": "Zuhurtzia, ausardia, neurritasuna",
       "d": "Arimaren zati arrazionalarena, suminkorrarena eta gutiziatsuarena."
      },
      {
       "rel": "haien harmonia hau da",
       "t": "Justizia",
       "d": "Zati bakoitzak bere funtzioa betetzen du arrazoiaren gobernupean."
      }
     ]
    },
    {
     "rel": "bertutea ohitura da",
     "t": "Aristoteles: bertutearen etika",
     "k": true,
     "a": "Aristoteles",
     "c": [
      {
       "rel": "azken helburua",
       "t": "Eudaimonia",
       "k": true,
       "d": "Bizitza betea: arimaren jarduera, bertutearen araberakoa, bizitza oso batean zehar."
      },
      {
       "rel": "bereizten ditu",
       "t": "Bertute dianoetikoak eta etikoak",
       "d": "Adimenarenak ikasi egiten dira; izaerarenak ekintzak errepikatuz eskuratzen dira."
      },
      {
       "rel": "bertute etikoa hau da",
       "t": "Termino erdikoa",
       "k": true,
       "d": "Bi bizioren artean: ausardia, koldarkeriaren eta ausarkeriaren artean. Zuhurtziak finkatzen du."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Aristoteles: bertutearen etika",
     "rel": "jakitea ez da nahikoa, ohitu egin behar da:",
     "a": "Sokrates: intelektualismo morala"
    },
    {
     "de": "Termino erdikoa",
     "rel": "zuhurtziak finkatzen du, ez Ideia batek:",
     "a": "Platon: bertutea eta arazketa"
    }
   ],
   "idea": "Sokratesentzat eta Platonentzat nahikoa da ongia ezagutzea hura egiteko; Aristotelesek erantzuten du bertute etikoa ohitura dela, zuhurtziak finkatzen duen erdibidea, eta zoriontasuna bertutearen araberako bizitza oso bat dela."
  }
 },
 "ds-A9": {
  "subject": "hf",
  "block": "A",
  "tema": "Politika klasikoa",
  "title": "Eztabaida politikoa",
  "mermaid": "flowchart TD\n  center[\"EZTABAIDA POLITIKO KLASIKOA\"]:::axis\n  pla[\"PLATON:<br>hiri ideala (utopia)\"]:::key\n  ari[\"ARISTOTELES:<br>politika errealista\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"hau baino pragmatikoagoa\"| pla\n  pla --> p1[\"hiru gizarte-klase\"]\n  pla --> p2[\"errege filosofoen gobernua\"]\n  pla --> p3[\"demokraziaren kritika\"]\n  ari --> a0[\"gizakia zoon politikon da<br>(animalia politikoa)\"]\n  ari --> rectos[\"Gobernu zuzenak:<br>monarkia · aristokrazia · errepublika\"]\n  ari --> desv[\"Gobernu okerrak:<br>tirania · oligarkia · demagogia\"]\n  rectos -->|\"hauetan usteltzen dira\"| desv\n  ari -->|\"forma onena\"| a4[\"errepublika\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zein da ordena politiko onena, eta nork gobernatu behar du?",
   "raiz": "POLITIKA KLASIKOA",
   "raiz_d": "Sokratesen kondenaren ondoren (K.a. 399): demokraziak zuzenena hil ahal izan bazuen, zein da gizarte-ordena onena?",
   "ramas": [
    {
     "rel": "hiri ideala diseinatzen du",
     "t": "Platon: Errepublika",
     "k": true,
     "a": "Platon",
     "d": "Utopia bat: hiria arima letra handiz idatzia da.",
     "c": [
      {
       "rel": "hauetan banatzen da",
       "t": "Hiru gizarte-klase",
       "d": "Ekoizleak (neurritasuna), zaindariak (ausardia) eta agintari-filosofoak (zuhurtzia)."
      },
      {
       "rel": "justizia hau da",
       "t": "Klase bakoitza bere funtzioan",
       "d": "Besteen funtzioa inbaditu gabe."
      },
      {
       "rel": "honek gobernatu behar du",
       "t": "Errege filosofoa",
       "k": true,
       "d": "Ongiaren Ideia ezagutzen duenak soilik. Horregatik kritikatzen du bere garaiko demokrazia."
      },
      {
       "rel": "ustelduz gero",
       "t": "Endekapen-zikloa",
       "d": "Timokrazia, oligarkia, demokrazia eta, denetan txarrena, tirania."
      }
     ]
    },
    {
     "rel": "polis erreala aztertzen du",
     "t": "Aristoteles: Politika",
     "k": true,
     "a": "Aristoteles",
     "c": [
      {
       "rel": "honetatik abiatzen da",
       "t": "Zoon politikon",
       "k": true,
       "d": "Gizakia animalia politikoa da: komunitatean bakarrik bizi da betetasunez."
      },
      {
       "rel": "hauetan antolatzen da",
       "t": "Familia, herrixka eta polisa",
       "d": "Polisa komunitate perfektua da: ez du bizitzea bakarrik bilatzen, ondo bizitzea baizik."
      },
      {
       "rel": "sailkatzen ditu",
       "t": "Erregimen zuzenak eta endekatuak",
       "d": "Nork gobernatzen duen (bakar batek, gutxi batzuek, askok) eta norentzat.",
       "c": [
        {
         "rel": "on komuna bilatzen dute",
         "t": "Monarkia, aristokrazia, errepublika"
        },
        {
         "rel": "norberaren interesa bilatzen dute",
         "t": "Tirania, oligarkia, demagogia"
        }
       ]
      },
      {
       "rel": "nahiago du",
       "t": "Muturrak saihesten dituen erregimena",
       "d": "Herri bakoitzera egokitua eta erdiko klasean oinarritua: politika ere erdibidea da."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Muturrak saihesten dituen erregimena",
     "rel": "jakintsuaren gobernuaren aurrean:",
     "a": "Errege filosofoa"
    },
    {
     "de": "Tirania, oligarkia, demagogia",
     "rel": "ustelkeriak dira hauek ere, hemen bezala:",
     "a": "Endekapen-zikloa"
    }
   ],
   "idea": "Platonek hiri zuzen ideala diseinatzen du, Ongia ezagutzen duenak gobernatua; Aristoteles polis errealetik eta gizakia animalia politikoa izatetik abiatzen da, eta muturrak saihestuz on komuna bilatzen duen erregimena nahiago du."
  }
 },
 "ds-A10": {
  "subject": "hf",
  "block": "A",
  "tema": "Helenismoa",
  "title": "Eskola helenistikoak",
  "mermaid": "flowchart TD\n  center[\"ESKOLA HELENISTIKOAK\"]:::axis\n  meta[\"Helburu komuna: zoriontasuna<br>lasaitasun gisa (ataraxia)\"]:::key\n  center -->|\"guztiek bilatzen dute\"| meta\n  epi[\"EPIKURISMOA\"]:::key\n  est[\"ESTOIZISMOA\"]:::key\n  cin[\"ZINISMOA\"]:::key\n  esc[\"ESZEPTIZISMOA\"]:::key\n  meta --> epi\n  meta --> est\n  meta --> cin\n  meta --> esc\n  epi -->|\"bidea\"| e1[\"plazer neurritsua,<br>mina saihestu\"]\n  est -->|\"bidea\"| s1[\"patua onartu<br>(apatia)\"]\n  cin -->|\"bidea\"| c1[\"naturaren arabera bizi<br>(autarkia)\"]\n  esc -->|\"bidea\"| x1[\"judizioa eten<br>(epojea)\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola izan zoriontsu polisa desagertzen denean eta mundua ziurgabe bihurtzen denean?",
   "raiz": "ESKOLA HELENISTIKOAK",
   "raiz_d": "Alexandro Handiaren ondoren, polisak erresuma handiei uzten die lekua: filosofia norbanakora eta haren barne-zoriontasunera bihurtzen da.",
   "ramas": [
    {
     "rel": "artifiziala dena baztertu",
     "t": "Zinismoa",
     "a": "Antistenes, Diogenes Sinopekoa",
     "c": [
      {
       "rel": "bere ideala",
       "t": "Autarkia",
       "k": true,
       "d": "Burujabetasuna: ezeren eta inoren mende ez egotea."
      },
      {
       "rel": "bere bidea",
       "t": "Naturaren arabera bizitzea",
       "d": "Konbentzioak, aberastasuna, boterea eta ospea baztertzea: behar artifizialak dira."
      }
     ]
    },
    {
     "rel": "munduaren ordena onartu",
     "t": "Estoizismoa",
     "a": "Zenon Zitiokoa",
     "c": [
      {
       "rel": "bere ideala",
       "t": "Apatia eta ataraxia",
       "k": true,
       "d": "Arima nahasten duten grinarik gabe; barne-bakea."
      },
      {
       "rel": "bere bidea",
       "t": "Logosa eta patua onartzea",
       "d": "Gure mende dagoena bakarrik da garrantzitsua: gure judizioak eta jarrerak."
      },
      {
       "rel": "hortik",
       "t": "Kosmopolitismoa",
       "d": "Denok gara mundu bereko hiritarrak."
      }
     ]
    },
    {
     "rel": "plazer lasaia bilatu",
     "t": "Epikureismoa",
     "a": "Epikuro",
     "c": [
      {
       "rel": "bere ideala",
       "t": "Plazera, minaren gabezia gisa",
       "k": true,
       "d": "Gorputzean minik gabe (aponia) eta ariman asaldurarik gabe (ataraxia); gehiegikeriarik ez."
      },
      {
       "rel": "bere bidea",
       "t": "Tetrafarmakoa",
       "d": "Jainkoei eta heriotzari beldurrik ez izatea; ongia erraz lortzen da, eta gaizkia erraz jasaten."
      }
     ]
    },
    {
     "rel": "ziurtasunari uko egin",
     "t": "Eszeptizismoa",
     "a": "Pirron Elisekoa",
     "c": [
      {
       "rel": "honetatik abiatzen da",
       "t": "Ez dago ezagutza segururik",
       "d": "Baieztapen bakoitzari beste bat kontrajartzen zaio, arrazoi berdin baliozkoekin."
      },
      {
       "rel": "bere bidea",
       "t": "Epokhe",
       "k": true,
       "d": "Judizioa etetea, ezer ez baieztatzea ez ukatzea: hortik sortzen da ataraxia."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Plazera, minaren gabezia gisa",
     "rel": "ataraxia partekatzen du honekin",
     "a": "Apatia eta ataraxia"
    },
    {
     "de": "Epokhe",
     "rel": "honetara ere iristen da:",
     "a": "Apatia eta ataraxia"
    }
   ],
   "idea": "Zentzua ematen duen polisik gabe, lau eskolek norbanakoaren zoriontasuna bilatzen dute: autarkia zinikoa, apatia estoikoa, Epikuroren plazer lasaia eta judizioaren etete eszeptikoa."
  }
 },
 "ds-B1": {
  "subject": "hf",
  "block": "B",
  "tema": "Erdi Aroko filosofia",
  "title": "Erdi Aroko filosofia",
  "mermaid": "flowchart TD\n  center[\"ERDI AROKO FILOSOFIA\"]:::axis\n  hilo[\"Gai nagusia:<br>froga dezake arrazoiak Jainkoa?\"]:::key\n  et[\"Lau etapa\"]:::key\n  center -->|\"honen inguruan dabil\"| hilo\n  center --> et\n  et --> e1[\"Patristika → Agustin\"]\n  e1 --> e2[\"Eskolastika goiztiarra → Anselmo\"]\n  e2 --> e3[\"Eskolastika berantiarra → Tomas Akinokoa\"]\n  e3 --> e4[\"Nominalismoa → Ockham\"]\n  e1 -->|\"froga\"| p1[\"barne-egia (Agustin)\"]\n  e3 -->|\"froga\"| p2[\"bost bideak (Tomas)\"]\n  e4 -->|\"zalantzan jartzen ditu\"| p3[\"froga arrazionalak (Ockham)\"]\n  p3 -->|\"banatzen amaitzen du\"| sep[\"fedea eta arrazoia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola antolatu zen Erdi Aroko filosofia, eta zer arazo handi eztabaidatu zituen?",
   "raiz": "ERDI AROKO FILOSOFIA",
   "raiz_d": "Kristautasunarekin sortzen da, eta arazo berri baten inguruan biratzen da: fedearen eta arrazoiaren arteko harremana.",
   "ramas": [
    {
     "rel": "lehen etapa",
     "t": "Patristika",
     "k": true,
     "a": "Agustin Hiponakoa",
     "d": "II-VIII. mendeak: Elizako Gurasoak.",
     "c": [
      {
       "rel": "zeregina",
       "t": "Dogma kristaua defendatzea",
       "d": "Herejien aurrean, filosofia greziarrean oinarrituta."
      },
      {
       "rel": "honetan inspiratzen da",
       "t": "Neoplatonismoa",
       "a": "Plotino",
       "d": "Platonen berrinterpretazioa, filosofia eta erlijio-esperientzia batzen dituena."
      }
     ]
    },
    {
     "rel": "bigarren etapa",
     "t": "Eskolastika",
     "k": true,
     "a": "Anselmo, Tomas Akinokoa",
     "d": "IX-XIV. mendeak: unibertsitateetako filosofia.",
     "c": [
      {
       "rel": "bilatzen ditu",
       "t": "Fedearen eta arrazoiaren arteko sintesia",
       "d": "Sistematikoa; arrazoia erabiltzen da, baina fedearen menpe."
      },
      {
       "rel": "metodo batekin",
       "t": "Lectio, quaestio, disputatio",
       "d": "Autoritateak irakurri eta iruzkindu, galdera aldeko eta aurkako argudioekin planteatu, eta eztabaidatu."
      }
     ]
    },
    {
     "rel": "eztabaida handia",
     "t": "Unibertsalen arazoa",
     "k": true,
     "d": "Zer dira kontzeptu orokorrak, «gizateria» edo «zuritasuna» bezalakoak?",
     "c": [
      {
       "rel": "benetan existitzen dira",
       "t": "Errealismoa",
       "a": "Platon, Agustin",
       "d": "Ideietan edo Jainkoaren gogoan."
      },
      {
       "rel": "gogoan existitzen dira",
       "t": "Kontzeptualismoa",
       "a": "Abelardo",
       "d": "Gogoak eratzen dituen kontzeptuak dira."
      },
      {
       "rel": "izenak baino ez dira",
       "t": "Nominalismoa",
       "a": "Ockham",
       "d": "Norbanakoak bakarrik existitzen dira."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Patristika",
     "rel": "defendatzen du",
     "a": "Errealismoa"
    },
    {
     "de": "Nominalismoa",
     "rel": "krisian jartzen du",
     "a": "Fedearen eta arrazoiaren arteko sintesia"
    }
   ],
   "idea": "Bi etapa, patristika eta eskolastika, funtsezko arazo berarekin (fedea eta arrazoia); Ockhamen nominalismoak, norbanakoak baino uzten ez dituenez, sintesia hausten du eta modernitatea iragartzen du."
  }
 },
 "ds-B2": {
  "subject": "hf",
  "block": "B",
  "tema": "Fedea eta arrazoia",
  "title": "Fedea eta arrazoia",
  "mermaid": "flowchart TD\n  center[\"FEDEA ETA ARRAZOIA\"]:::axis\n  q[\"Elkarrekin joan daitezke fedea<br>eta arrazoia egiarantz?\"]\n  center --> q\n  agus[\"AGUSTIN\"]:::key\n  tom[\"TOMAS AKINOKOA\"]:::key\n  ter[\"TERTULIANO\"]:::key\n  q -->|\"batasuna\"| agus\n  q -->|\"harmonia\"| tom\n  q -->|\"oposizioa\"| ter\n  agus -->|\"lema\"| a1[\"«Sinetsi ulertzeko,<br>ulertu sinesteko»\"]\n  agus --> a2[\"fedeak eta arrazoiak elkar behar dute\"]\n  tom --> t1[\"bi eremu:<br>teologia eta filosofia\"]\n  tom -->|\"ez dira elkarren aurka\"| t2[\"arrazoiak fedea prestatzen du<br>(atariak)\"]\n  ter -->|\"«Sinesten dut absurdoa delako»\"| te1[\"fedea aski da,<br>arrazoia soberan dago\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Iritsi al daiteke arrazoia fedearen egietara, ala bide desberdinetatik doaz?",
   "raiz": "FEDEA ETA ARRAZOIA",
   "raiz_d": "Aurkakotasunetik bereizketara: Erdi Aroko bost erantzun, baita Jainkoaren existentzia froga daitekeen ala ez ere.",
   "ramas": [
    {
     "rel": "aurkakotasuna",
     "t": "Tertuliano",
     "d": "«Sinesten dut absurdoa delako»: fedeak ez du arrazoiaren beharrik."
    },
    {
     "rel": "fedeak gidatzen du",
     "t": "Agustin",
     "k": true,
     "d": "«Ulertzeko sinetsi»: fedeak gidatzen du, eta arrazoiak ulertzen.",
     "c": [
      {
       "rel": "Jainkoa hemen bilatzen du",
       "t": "Barrentasuna",
       "d": "«Gizakiaren barnean bizi da egia»: arima Jainkoarengana igotzen da."
      },
      {
       "rel": "honen bidez ezagutzen du",
       "t": "Iluminazioa",
       "d": "Jainkoak arima argitzen du, betiereko egiak ezagut ditzan."
      }
     ]
    },
    {
     "rel": "bi egia",
     "t": "Averroes",
     "d": "Egia bikoitza: bata fedearentzat eta bestea arrazoiarentzat."
    },
    {
     "rel": "lankidetza",
     "t": "Tomas Akinokoa",
     "k": true,
     "d": "Arrazoiak fedea prestatu eta defendatzen du; ezin dute elkar kontraesan.",
     "c": [
      {
       "rel": "bereizten ditu",
       "t": "Egia naturalak eta naturaz gaindikoak",
       "d": "Batzuetara arrazoia iristen da; beste batzuk errebelazioaren bidez bakarrik ezagutzen dira."
      },
      {
       "rel": "Jainkoa frogatzen du honekin",
       "t": "Bost bideak",
       "d": "A posteriori frogak: mugimendutik, kausetatik, kontingentziatik, mailetatik eta ordenatik abiatzen dira."
      }
     ]
    },
    {
     "rel": "bereizketa",
     "t": "Ockham",
     "k": true,
     "d": "Arrazoiak ezin ditu fedearen egiak frogatu.",
     "c": [
      {
       "rel": "bere labanarekin",
       "t": "Entitateak ez biderkatu",
       "d": "Zorrozki beharrezkoa ez den guztia ezabatzen du."
      },
      {
       "rel": "emaitza",
       "t": "Teologia ez da jada zientzia",
       "d": "Fedeak eta arrazoiak bide desberdinak hartzen dituzte: modernitatea bidea irekitzen hasten da."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Bost bideak",
     "rel": "mundutik abiatzen dira, ez honetatik",
     "a": "Barrentasuna"
    },
    {
     "de": "Teologia ez da jada zientzia",
     "rel": "sintesia hausten dio",
     "a": "Tomas Akinokoa"
    }
   ],
   "idea": "Agustinek Jainkoa barnean bilatzen du, eta Tomasek mundutik frogatzen du; biek uste dute fedeak eta arrazoiak elkarlanean jarduten dutela. Ockhamek bereizi egiten ditu: arrazoia ez da fedearen egietara iristen."
  }
 },
 "ds-B3": {
  "subject": "hf",
  "block": "B",
  "tema": "Errenazimentua",
  "title": "Errenazimentua",
  "mermaid": "flowchart TD\n  center[\"BERPIZKUNDEA\"]:::axis\n  soc[\"Gizarte-aldaketak\"]:::key\n  ant[\"Antropozentrismoa\"]:::key\n  cie[\"Iraultza zientifikoa\"]:::key\n  center --> soc\n  soc -->|\"hau ahalbidetzen dute\"| ant\n  ant -->|\"honetan amaitzen da\"| cie\n  soc --> s1[\"feudalismoaren krisia\"]\n  soc --> s2[\"burgesiaren gorakada\"]\n  soc --> s3[\"inprenta (Gutenberg)\"]\n  ant --> a1[\"gizakia erdian\"]\n  ant --> a2[\"humanismoa\"]\n  cie --> c1[\"heliozentrismoa<br>(Koperniko, Galileo)\"]\n  cie --> c2[\"metodo enpirikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola igarotzen da Europa Jainkoa erdigunean duen mundu batetik gizakia erdigunean duen batera?",
   "raiz": "ERRENAZIMENTUA",
   "raiz_d": "XIV.-XVI. mendeak: Erdi Aroko teozentrismotik antropozentrismora; modernitatearen sustraiak.",
   "ramas": [
    {
     "rel": "oinarri materiala",
     "t": "Gizarte-aldaketak",
     "d": "Ordena feudal eta nekazaria hondoratzen da.",
     "c": [
      {
       "rel": "politikan",
       "t": "Monarkiak eta estatu-nazioak",
       "d": "Feudalismoaren ordez datoz."
      },
      {
       "rel": "ekonomian",
       "t": "Merkataritza, banka, burgesia",
       "d": "Kapitalismoaren lehen urratsak."
      },
      {
       "rel": "kulturan",
       "t": "Inprenta",
       "a": "Gutenberg",
       "d": "Ezagutzaren zabalkundea irauli egiten du."
      }
     ]
    },
    {
     "rel": "begirada berria",
     "t": "Humanismoa",
     "k": true,
     "d": "Greziar eta latindar testuak berraurkitzen dira.",
     "c": [
      {
       "rel": "erdigunean jartzen du",
       "t": "Antropozentrismoa",
       "d": "Gizakia, eta ez Jainkoa, da hausnarketaren erdigunea."
      },
      {
       "rel": "balioesten du",
       "t": "Dignitas hominis",
       "d": "Norbanako bakoitzaren duintasuna eta ahalmena."
      }
     ]
    },
    {
     "rel": "haustura erlijiosoa",
     "t": "Erreforma protestantea",
     "a": "Luther (1517)",
     "d": "Elizaren autoritatea zalantzan jartzen du.",
     "c": [
      {
       "rel": "defendatzen du",
       "t": "Bibliaren interpretazio librea",
       "d": "Fededunaren harreman zuzena Jainkoarekin."
      },
      {
       "rel": "bultzatzen du",
       "t": "Sekularizazioa",
       "d": "Kultura erlijiotik askatuz doa."
      }
     ]
    },
    {
     "rel": "zientzia berria",
     "t": "Iraultza zientifikoa",
     "k": true,
     "a": "Koperniko, Kepler, Galileo, Newton",
     "d": "XVI.-XVII. mendeak.",
     "c": [
      {
       "rel": "kosmosa",
       "t": "Heliozentrismoa",
       "d": "Eguzkia erdigunean; Lurra haren inguruan biraka."
      },
      {
       "rel": "metodoa",
       "t": "Behaketa eta esperimentazioa",
       "d": "Aristotelesen eta Bibliaren autoritatearen ordez datoz."
      },
      {
       "rel": "natura",
       "t": "Mekanizismoa",
       "d": "Lege matematikoek gobernatzen duten makina bat, ez helburuak dituen organismo bat."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Inprenta",
     "rel": "ahalbidetzen du",
     "a": "Bibliaren interpretazio librea"
    },
    {
     "de": "Antropozentrismoa",
     "rel": "konfiantza ematen dio",
     "a": "Behaketa eta esperimentazioa"
    }
   ],
   "idea": "Humanismoak, Erreformak eta zientzia berriak norabide berean bultzatzen dute: autoritate gutxiago (Elizarena, Aristotelesena) eta konfiantza handiagoa norbanakoarengan eta haren arrazoian."
  }
 },
 "ds-B4": {
  "subject": "hf",
  "block": "B",
  "tema": "Arrazionalismoa eta enpirismoa",
  "title": "Arrazionalismoa eta enpirismoa",
  "mermaid": "flowchart TD\n  center[\"ARRAZIONALISMOA ETA ENPIRISMOA\"]:::axis\n  rac[\"ARRAZIONALISMOA<br>(Descartes)\"]:::key\n  emp[\"ENPIRISMOA<br>(Hume)\"]:::key\n  center --> rac\n  center --> emp\n  rac -->|\"arrazoia ala esperientzia?\"| emp\n  rac --> r1[\"iturria arrazoia da\"]\n  rac --> r2[\"jaiotzetiko ideiak daude (a priori)\"]\n  rac --> r3[\"metodo matematiko-deduktiboa\"]\n  rac --> r4[\"«cogito ergo sum»\"]\n  emp --> e1[\"iturria esperientzia da\"]\n  emp --> e2[\"gogamena tabula rasa da\"]\n  emp --> e3[\"ezagutza probablea soilik\"]\n  emp --> e4[\"kausalitatearen kritika\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zertan kontrajartzen dira zehazki Descartes eta Hume ezagutza azaltzean?",
   "raiz": "DESCARTES HUMEREN AURREAN",
   "raiz_d": "XVII.-XVIII. mendeak: epistemologia erdigunera igarotzen da. Arrazionalismoa eta enpirismoa, puntuz puntu.",
   "ramas": [
    {
     "rel": "lehen aldea",
     "t": "Ezagutzaren jatorria",
     "k": true,
     "c": [
      {
       "rel": "Descartesen arabera",
       "t": "Arrazoia eta haren jaiotzetiko ideiak",
       "d": "Jainkoa, egia matematikoak: gogoak jaiotzetik ditu."
      },
      {
       "rel": "Humeren arabera",
       "t": "Esperientzia: inpresioak",
       "d": "Ez dago jaiotzetiko ideiarik; ideia oro inpresio baten kopia da."
      }
     ]
    },
    {
     "rel": "bigarren aldea",
     "t": "Eredua eta metodoa",
     "c": [
      {
       "rel": "Descartesen arabera",
       "t": "Matematika eta dedukzioa",
       "d": "Argi eta bereizi dagoenetik gainerako egiak deduzitzen dira."
      },
      {
       "rel": "Humeren arabera",
       "t": "Behaketa eta indukzioa",
       "d": "Behatutako kasuetatik abiatuta orokortzen da."
      }
     ]
    },
    {
     "rel": "hirugarren aldea",
     "t": "Kausalitatea",
     "k": true,
     "c": [
      {
       "rel": "Descartesen arabera",
       "t": "Arrazoiarentzat ebidentea",
       "d": "Kausak gutxienez bere ondorioak adina errealitate du: printzipio horrekin frogatzen du Jainkoa badela."
      },
      {
       "rel": "Humeren arabera",
       "t": "Ohitura, ez beharrezkotasuna",
       "d": "Gertaera bat beste baten ondoren datorrela baino ez dugu ikusten; lotura ohiturak jartzen du."
      }
     ]
    },
    {
     "rel": "laugarren aldea",
     "t": "Nia",
     "c": [
      {
       "rel": "Descartesen arabera",
       "t": "Pentsatzen duen gauza bat",
       "d": "«Pentsatzen dut, beraz banaiz»: nia substantzia pentsatzailea da, lehen ziurtasuna."
      },
      {
       "rel": "Humeren arabera",
       "t": "Pertzepzio-sorta bat",
       "d": "Ez dago ni iraunkor baten inpresiorik."
      }
     ]
    },
    {
     "rel": "emaitza",
     "t": "Ezagutzaren irismena",
     "k": true,
     "c": [
      {
       "rel": "Descartesen arabera",
       "t": "Ziurtasuna eta metafisika",
       "d": "Metafisika jakintzaren zuhaitzaren sustraia da."
      },
      {
       "rel": "Humeren arabera",
       "t": "Probabilitatea eta eszeptizismoa",
       "d": "Metafisika esperientziak mugatzen du."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Arrazoia eta haren jaiotzetiko ideiak",
     "rel": "ahalbidetzen du",
     "a": "Matematika eta dedukzioa"
    },
    {
     "de": "Ohitura, ez beharrezkotasuna",
     "rel": "hona darama",
     "a": "Probabilitatea eta eszeptizismoa"
    },
    {
     "de": "Arrazoiarentzat ebidentea",
     "rel": "oinarritzen du",
     "a": "Ziurtasuna eta metafisika"
    }
   ],
   "idea": "Descartesek metafisika oinarrituko duen ziurtasun absolutua bilatzen du arrazoian; Humek, inpresioetatik abiatuta, ondorioztatzen du gertaerei buruz jakintza probablea baino ezin dela izan."
  }
 },
 "ds-B5": {
  "subject": "hf",
  "block": "B",
  "tema": "Substantzia (modernoak)",
  "title": "Substantziari buruzko eztabaida modernoa",
  "mermaid": "flowchart TD\n  center[\"SUBSTANTZIARI BURUZKO<br>EZTABAIDA MODERNOA\"]:::axis\n  des[\"DESCARTES:<br>dualismoa (hiru substantzia)\"]:::key\n  spi[\"SPINOZA:<br>panteismoa\"]:::key\n  lei[\"LEIBNIZ:<br>monadologia\"]:::key\n  center --> des\n  des --> d1[\"arima eta gorputza bereiziak\"]\n  des --> d2[\"elkarrekintza guruin pinealean\"]\n  des -->|\"konpondu gabeko arazoa\"| pr[\"nola erlazionatzen dira<br>arima eta gorputza?\"]\n  pr -->|\"substantzia bakarra\"| spi\n  pr -->|\"monada infinituak\"| lei\n  spi --> s1[\"substantzia bakarra:<br>Jainkoa edo Natura\"]\n  spi --> s2[\"gorputza eta arima:<br>gauza beraren bi alderdi\"]\n  lei --> l1[\"monadak: substantzia sinpleak\"]\n  lei --> l2[\"aurrez ezarritako harmonia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Arima eta gorputza substantzia desberdinak badira, nola erlazionatzen dira? Eta bakarra badago?",
   "raiz": "SUBSTANTZIARI BURUZKO EZTABAIDA",
   "raiz_d": "Substantzia: bere kabuz dagoena, beste ezeren beharrik gabe. Zenbat daude eta zer motatakoak?",
   "ramas": [
    {
     "rel": "abiapuntua",
     "t": "Dualismoa",
     "k": true,
     "a": "Descartes",
     "d": "Hiru substantzia: Jainkoa (infinitua), arima eta gorputza.",
     "c": [
      {
       "rel": "arima hau da",
       "t": "Res cogitans",
       "d": "Substantzia pentsatzailea: hedagabea, askea eta hilezkorra."
      },
      {
       "rel": "gorputza hau da",
       "t": "Res extensa",
       "d": "Substantzia materiala: hedatua eta mekanikoa."
      },
      {
       "rel": "irekita uzten du",
       "t": "Komunikazioaren arazoa",
       "k": true,
       "d": "Nola eragiten diote elkarri? Guruin pinealak ez du konpontzen."
      }
     ]
    },
    {
     "rel": "1. konponbidea",
     "t": "Okasionalismoa",
     "a": "Malebranche",
     "d": "Substantziek ez diote elkarri eragiten: Jainkoak sortzen du ondorioa kasu bakoitzean."
    },
    {
     "rel": "2. konponbidea",
     "t": "Monismoa",
     "k": true,
     "a": "Spinoza",
     "d": "Substantzia bakarra: «Jainkoa edo Natura».",
     "c": [
      {
       "rel": "pentsamendua eta hedadura dira",
       "t": "Gauza beraren bi atributu",
       "d": "Ez bi substantzia: horregatik ez dago arima-gorputz arazorik."
      }
     ]
    },
    {
     "rel": "3. konponbidea",
     "t": "Monadologia",
     "a": "Leibniz",
     "d": "Monada infinituak: substantzia bakun, aktibo eta zatiezinak.",
     "c": [
      {
       "rel": "ez diote elkarri eragiten, baina",
       "t": "Harmonia aurrez ezarria",
       "d": "Jainkoak hasieratik sinkronizatu zituen, ondo egindako bi erloju bezala."
      }
     ]
    },
    {
     "rel": "alternatiba",
     "t": "Materialismoa",
     "a": "Hobbes, La Mettrie",
     "d": "Materia baino ez dago; pentsamendua materiaren mugimendua da.",
     "c": [
      {
       "rel": "gizakia hau da",
       "t": "Gizaki-makina",
       "d": "Automata konplexu bat: arima organoen emaitza da, batez ere garunarena."
      },
      {
       "rel": "hortik ondorioztatzen da",
       "t": "Determinismoa",
       "d": "Egintza oro aurrekoak eragina da: askatasuna ilusio bat litzateke."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Okasionalismoa",
     "rel": "erantzuten dio",
     "a": "Komunikazioaren arazoa"
    },
    {
     "de": "Gauza beraren bi atributu",
     "rel": "desegiten du",
     "a": "Komunikazioaren arazoa"
    },
    {
     "de": "Materialismoa",
     "rel": "ukatu egiten du",
     "a": "Res cogitans"
    }
   ],
   "idea": "Descartesen dualismoak arazo bat uzten du (nola komunikatzen dira arima eta gorputza?); arrazionalistek Jainkoarekin edo substantzia bakar batekin konpontzen dute, eta materialismoak askatasunaren kontura ezabatzen du."
  }
 },
 "ds-B6": {
  "subject": "hf",
  "block": "B",
  "tema": "Kontratu soziala",
  "title": "Gizarte-kontratua",
  "mermaid": "flowchart TD\n  center[\"GIZARTE-KONTRATUA\"]:::axis\n  idea[\"Naturazko egoeratik gizartera<br>itun baten bidez\"]:::key\n  hob[\"HOBBES\"]:::key\n  loc[\"LOCKE\"]:::key\n  rou[\"ROUSSEAU\"]:::key\n  center -->|\"tesi komuna\"| idea\n  idea --> hob\n  idea --> loc\n  idea --> rou\n  hob --> h1[\"«homo homini lupus»\"]\n  hob -->|\"ematen duen ituna\"| h2[\"Leviatan:<br>monarkia absolutua\"]\n  loc --> l1[\"eskubide naturalak:<br>bizitza, askatasuna, jabetza\"]\n  loc -->|\"ematen duen ituna\"| l2[\"monarkia parlamentarioa<br>+ botere-banaketa\"]\n  rou --> r1[\"borondate orokorra\"]\n  rou -->|\"ematen duen ituna\"| r2[\"batzar-demokrazia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Gizartea naturala ez bada, zergatik obeditzen diogu botereari eta zer muga ditu?",
   "raiz": "GIZARTE-KONTRATUA",
   "raiz_d": "Modernitateak Aristotelesen gizarterako joera naturalarekin hausten du: gizartea giza borondatearen emaitza da, itun bat.",
   "ramas": [
    {
     "rel": "aitzindaria",
     "t": "Makiavelo",
     "d": "Errealismo politikoa: politika moraletik eta erlijiotik bereizten du.",
     "c": [
      {
       "rel": "agintariak bilatzen du",
       "t": "Ordena eta segurtasuna",
       "d": "Indarra eta engainua erabil ditzake, beharrezkoa bada."
      }
     ]
    },
    {
     "rel": "beldurragatiko ituna",
     "t": "Hobbes",
     "k": true,
     "c": [
      {
       "rel": "naturazko egoera",
       "t": "Denak denen aurkako gerra",
       "d": "«Gizakia otso da gizakiarentzat.»"
      },
      {
       "rel": "kontratuak sortzen du",
       "t": "Subirano absolutu bat: Leviatana",
       "d": "Denek ematen diote beren boterea segurtasunaren truke."
      }
     ]
    },
    {
     "rel": "eskubideengatiko ituna",
     "t": "Locke",
     "k": true,
     "c": [
      {
       "rel": "naturazko egoera",
       "t": "Eskubide natural babesgabeak",
       "d": "Bizitza, askatasuna eta jabetza badaude jada, baina inork ez ditu bermatzen."
      },
      {
       "rel": "kontratuak sortzen du",
       "t": "Gobernu mugatu bat",
       "d": "Eskubideak urratzen baditu, herriak aurre egin eta alda dezake. Liberalismoaren oinarria."
      }
     ]
    },
    {
     "rel": "askatasunagatiko ituna",
     "t": "Rousseau",
     "k": true,
     "c": [
      {
       "rel": "naturazko egoera",
       "t": "Gizakia ona da",
       "d": "Gizarteak ustelten du."
      },
      {
       "rel": "kontratuak sortzen du",
       "t": "Borondate orokorra",
       "d": "Interes komuna, ez interesen batura: subiranotasuna herrian datza."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Gobernu mugatu bat",
     "rel": "honen boterearen aurrean",
     "a": "Subirano absolutu bat: Leviatana"
    },
    {
     "de": "Ordena eta segurtasuna",
     "rel": "honen helburua ere bada",
     "a": "Subirano absolutu bat: Leviatana"
    }
   ],
   "idea": "Hirurak naturazko egoera batetik eta itun batetik abiatzen dira; aldatzen dena gizakiaren ikuspegia da, eta horren araberakoa da boterea: absolutua (Hobbes), mugatua (Locke) edo herriarena (Rousseau)."
  }
 },
 "ds-B7": {
  "subject": "hf",
  "block": "B",
  "tema": "Utilitarismoa eta liberalismoa",
  "title": "Utilitarismoa, liberalismoa eta kapitalismoa",
  "mermaid": "flowchart TD\n  center[\"UTILITARISMOA, LIBERALISMOA<br>ETA KAPITALISMOA\"]:::axis\n  uti[\"UTILITARISMOA<br>(Bentham, Mill)\"]:::key\n  lib[\"LIBERALISMOA\"]:::key\n  cap[\"KAPITALISMOA<br>(Adam Smith)\"]:::key\n  azu[\"AZURMENDI: kritika\"]:::key\n  center --> uti\n  center --> lib\n  center --> cap\n  center --> azu\n  uti --> u1[\"ahalik eta gehienen<br>zoriontasun handiena\"]\n  uti --> u2[\"plazer-minaren balantzea\"]\n  lib --> l1[\"banakoaren nagusitasuna\"]\n  lib --> l2[\"jabetza pribatua\"]\n  lib --> l3[\"Estatua neutrala\"]\n  lib -->|\"oinarritzen du\"| cap\n  cap --> c1[\"«esku ikusezina»\"]\n  cap --> c2[\"interes pertsonalak ongizate<br>orokorra ekartzen du\"]\n  azu -->|\"honi erantzuten dio\"| c2\n  azu --> az1[\"gizakia ere naturalki<br>kooperatiboa da\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer ideia filosofikok eusten diote kapitalismoari, eta zer giza irudi dakar berekin?",
   "raiz": "KAPITALISMOAREN OINARRIAK",
   "raiz_d": "Liberalismoa eta utilitarismoa dira haren oinarri teorikoak; Adam Smithek batzen ditu. Azurmendik eztabaidatu egiten du haren giza ikuspegia.",
   "ramas": [
    {
     "rel": "oinarri politikoa",
     "t": "Liberalismoa",
     "k": true,
     "a": "Hobbes, Locke",
     "d": "Norbanakoaren lehentasuna: gizartea bigarren mailakoa da, kontratuaren emaitza.",
     "c": [
      {
       "rel": "defendatzen du",
       "t": "Norbanakoaren eskubideak",
       "d": "Horien artean, jabetza pribatua."
      },
      {
       "rel": "eskatzen du",
       "t": "Estatu neutrala",
       "d": "Ez du ongiaren ideia bat ezartzen: bakoitzaren askatasuna bermatzen du."
      }
     ]
    },
    {
     "rel": "oinarri morala",
     "t": "Utilitarismoa",
     "k": true,
     "a": "Bentham, Mill",
     "d": "Ekintza bat ona da plazera sortzen badu eta mina saihesten badu: baliagarritasunaren irizpidea.",
     "c": [
      {
       "rel": "Bentham",
       "t": "Ondorioak neurtu",
       "d": "Zoriontasuna ekintzen ondorioen arabera kalkulatzen da."
      },
      {
       "rel": "Mill",
       "t": "Zoriontasun handienaren printzipioa",
       "d": "«Zoriontasunik handiena pertsona kopururik handienarentzat»; plazer psikikoek balio handiagoa dute."
      }
     ]
    },
    {
     "rel": "sintesi ekonomikoa",
     "t": "Adam Smith",
     "d": "Nazioen aberastasuna (1776).",
     "c": [
      {
       "rel": "merkatuak honela jarduten du",
       "t": "Esku ikusezina",
       "k": true,
       "d": "Norberaren interesak, nahi gabe, ongizate komunera darama."
      },
      {
       "rel": "horregatik",
       "t": "Estatuak ez du esku hartu behar",
       "d": "Haren esku-hartzea hazkundearen oztopo litzateke."
      }
     ]
    },
    {
     "rel": "kritika",
     "t": "Azurmendi",
     "d": "Kapitalismoak gizaki lehiakorra dakar berekin; badago beste tradizio bat.",
     "c": [
      {
       "rel": "baztertzen ditu",
       "t": "Sozialdarwinismoa",
       "d": "Batzuen nagusitasuna besteen gainean justifikatzea."
      },
      {
       "rel": "defendatzen du",
       "t": "Lankidetza naturala da",
       "a": "Kropotkin, Wilson",
       "d": "Morala komunitate-zentzutik sortzen da, ez arrazoiaren kalkulu hotzetik."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Liberalismoa",
     "rel": "Smithengan honekin batzen da",
     "a": "Utilitarismoa"
    },
    {
     "de": "Zoriontasun handienaren printzipioa",
     "rel": "Smithen ustez, honekin lortuko litzateke",
     "a": "Esku ikusezina"
    },
    {
     "de": "Lankidetza naturala da",
     "rel": "honek dakarren berekoikeria eztabaidatzen du",
     "a": "Esku ikusezina"
    }
   ],
   "idea": "Kapitalismoa eskubideak dituen eta bere baliagarritasuna bilatzen duen norbanako batean oinarritzen da (liberalismoa eta utilitarismoa); Smithek merkatuak berekoikeriak harmonizatuko dituela uste du. Azurmendik galdetzen du ea hain berekoiak garen."
  }
 },
 "ds-C1": {
  "subject": "hf",
  "block": "C",
  "tema": "Ilustrazioa",
  "title": "Ilustrazioa: arrazoia eta eskubideak",
  "mermaid": "flowchart TD\n  center[\"ILUSTRAZIOA:<br>arrazoia eta eskubideak\"]:::axis\n  raz[\"Arrazoiaren eredu berria\"]:::key\n  der[\"Eskubide naturalak\"]:::key\n  fem[\"Feminismoaren lehen olatua\"]:::key\n  center --> raz\n  raz -->|\"hau eskatzen du\"| der\n  der -->|\"hau aldarrikatzean zabaltzen da\"| fem\n  raz --> r1[\"arrazoi kritikoa\"]\n  raz --> r2[\"arrazoi autonomoa («ausart zaitez jakitera»)\"]\n  der --> d1[\"absolutismoaren bazterketa\"]\n  der --> d2[\"botere-banaketa (Montesquieu)\"]\n  der --> d3[\"herri-subiranotasuna (Rousseau)\"]\n  fem --> f1[\"Mary Wollstonecraft\"]\n  fem --> f2[\"Olympe de Gouges\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer agintzen du arrazoi ilustratuak, eta nor utzi zuen kanpoan?",
   "raiz": "ILUSTRAZIOA",
   "raiz_d": "XVIII. mendea: arrazoiak aurreiritzietatik eta autoritate itsutik askatzen gaituela eta aurrerapenera eta askatasunera garamatzala sinestea.",
   "ramas": [
    {
     "rel": "abiapuntua",
     "t": "Arrazoi-eredu berri bat",
     "k": true,
     "c": [
      {
       "rel": "bere leloa",
       "t": "«Sapere aude»",
       "a": "Kant",
       "d": "Ausartu zeure kabuz pentsatzen: adin-txikitasunetik irten."
      },
      {
       "rel": "hau da",
       "t": "Arrazoi kritikoa",
       "d": "Azterketapean jartzen ditu erlijioa, politika, zientzia eta bere burua."
      },
      {
       "rel": "hau da",
       "t": "Arrazoi autonomoa",
       "d": "Ez dago teologiaren ez autoritatearen menpe."
      },
      {
       "rel": "konfiantza du honetan",
       "t": "Aurrerapena",
       "a": "Diderot, D'Alembert",
       "d": "Entziklopediak jakintza osoa ordenatu nahi du gizartearen zerbitzura."
      }
     ]
    },
    {
     "rel": "ondorio politikoa",
     "t": "Eskubide naturalak",
     "k": true,
     "d": "Jaiotzez ditugun eskubideak, Estatua baino lehenagokoak: absolutismoarekin hausten da.",
     "c": [
      {
       "rel": "hauetan zehaztuak",
       "t": "Bizitza, askatasuna eta jabetza",
       "a": "Locke"
      },
      {
       "rel": "eskatzen du",
       "t": "Botere-banaketa",
       "a": "Montesquieu"
      },
      {
       "rel": "eskatzen du",
       "t": "Herri-subiranotasuna",
       "a": "Rousseau"
      },
      {
       "rel": "menekoa bihurtzen du",
       "t": "Hiritarra",
       "d": "Boterean parte hartzen eta hura legitimatzen duena, itsuki obeditu beharrean."
      },
      {
       "rel": "lege bihurtzen dira hemen",
       "t": "1789ko Adierazpena",
       "d": "Gizakiaren eta Hiritarraren Eskubideen Adierazpena."
      }
     ]
    },
    {
     "rel": "haren kontraesana",
     "t": "Lehen olatu feminista",
     "k": true,
     "d": "Berdintasuna unibertsaltzat aldarrikatzen da, baina emakumeak kanpoan uzten ditu.",
     "c": [
      {
       "rel": "salatzen du",
       "t": "Emakumeen bazterketa",
       "a": "Rousseau, Voltaire, Kant",
       "d": "Izaeraz etxeko bizitzara bideratzen zituzten."
      },
      {
       "rel": "honekin erantzuten du",
       "t": "Emakumearen Eskubideen Adierazpena",
       "a": "Olympe de Gouges (1791)"
      },
      {
       "rel": "hau defendatzen du",
       "t": "«Arrazoiak ez du sexurik»",
       "a": "Mary Wollstonecraft (1792)",
       "d": "Desberdintasuna kulturala da, hezkuntza faltagatik: hezkuntza berdinzalea eta independentzia ekonomikoa eskatzen ditu."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Arrazoi autonomoa",
     "rel": "oinarritzen ditu",
     "a": "Eskubide naturalak"
    },
    {
     "de": "Emakumearen Eskubideen Adierazpena",
     "rel": "emakumea barne hartzeko berridazten du",
     "a": "1789ko Adierazpena"
    }
   ],
   "idea": "Arrazoi ilustratuak eskubide naturalak oinarritzen ditu eta menekoa hiritar bihurtzen du; baina, arrazoia unibertsala bada, emakumeak baztertzea inkoherentzia da, eta lehen olatu feministak salatu egiten du."
  }
 },
 "ds-C2": {
  "subject": "hf",
  "block": "C",
  "tema": "Kant",
  "title": "Kanten filosofia kritikoa",
  "mermaid": "flowchart TD\n  center[\"KANTEN FILOSOFIA KRITIKOA\"]:::axis\n  cri[\"Kritizismoa\"]:::key\n  fn[\"Fenomenoa / Noumenoa\"]:::key\n  met[\"Metafisikaren arazoa\"]:::key\n  center --> cri\n  cri -->|\"bereizten du\"| fn\n  fn -->|\"ondorioa\"| met\n  cri --> c1[\"arrazionalismoa + enpirismoa batzen ditu\"]\n  cri --> c2[\"ezagutzea = materia (a posteriori)<br>+ forma (a priori)\"]\n  fn --> fe[\"FENOMENOA: agertzen den errealitatea<br>(ezagut daiteke)\"]\n  fn --> no[\"NOUMENOA: gauza bere baitan<br>(ezagutezina)\"]\n  no -->|\"horregatik\"| met\n  met --> m1[\"metafisika ezin da zientzia izan\"]\n  met --> m2[\"objektu transzendenteak<br>ezin dira frogatu\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer ezagut dezakegu, eta zergatik ezin da metafisika zientzia izan?",
   "raiz": "KANTEN KRITIZISMOA",
   "raiz_d": "Arrazoimen hutsaren kritika (1781): arrazoimenak bere muga eta irismenak aztertzen ditu.",
   "ramas": [
    {
     "rel": "hemendik abiatzen da",
     "t": "Bi korronte nahikoak ez",
     "c": [
      {
       "rel": "dogmatismoan erortzen da",
       "t": "Arrazionalismoa",
       "a": "Descartes",
       "d": "Dena arrazoitik a priori deduzitzen dela uste du."
      },
      {
       "rel": "eszeptizismoan erortzen da",
       "t": "Enpirismoa",
       "a": "Hume",
       "d": "Dena esperientziatik dator; Kant «lo dogmatikotik» esnatu zuen."
      }
     ]
    },
    {
     "rel": "proposatzen du",
     "t": "Iraultza kopernikarra",
     "k": true,
     "d": "Ez da subjektua objektura egokitzen: objektua da subjektuaren egituretara egokitzen dena.",
     "c": [
      {
       "rel": "ezagutzeak batzen ditu",
       "t": "Materia (a posteriori)",
       "d": "Esperientziatik datorrena."
      },
      {
       "rel": "eta",
       "t": "Forma (a priori)",
       "d": "Subjektuak jartzen duena: espazioa eta denbora, eta adimenaren kategoriak."
      },
      {
       "rel": "honela deitzen da",
       "t": "Idealismo transzendentala"
      }
     ]
    },
    {
     "rel": "hortik bereizten du",
     "t": "Ezagutzaren mugak",
     "c": [
      {
       "rel": "hau ezagutzen dugu",
       "t": "Fenomenoa",
       "k": true,
       "d": "Errealitatea guri agertzen zaigun bezala."
      },
      {
       "rel": "hau ez dugu ezagutzen",
       "t": "Noumenoa",
       "k": true,
       "d": "Errealitatea bere baitan, esperientzia orotik kanpo: ezin ezagutuzkoa."
      }
     ]
    },
    {
     "rel": "ondorioa",
     "t": "Metafisika ezin da zientzia izan",
     "c": [
      {
       "rel": "zeren",
       "t": "Jainkoa, arima eta mundua",
       "d": "Ezin dira esperientziaren bidez frogatu."
      },
      {
       "rel": "aldiz",
       "t": "Zientzia bai, posible da",
       "d": "Fisikak eta matematikak fenomenoak aztertzen dituzte."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Iraultza kopernikarra",
     "rel": "hauen onena batzen du",
     "a": "Bi korronte nahikoak ez"
    },
    {
     "de": "Forma (a priori)",
     "rel": "antolatu egiten du",
     "a": "Fenomenoa"
    },
    {
     "de": "Jainkoa, arima eta mundua",
     "rel": "honen aldean geratzen dira",
     "a": "Noumenoa"
    }
   ],
   "idea": "«Gure ezagutza oro esperientziarekin hasten da, baina ez dator guztia esperientziatik» (Kant): fenomenoak baino ez ditugu ezagutzen; horregatik da posible zientzia, eta ez metafisika."
  }
 },
 "ds-C3": {
  "subject": "hf",
  "block": "C",
  "tema": "Etika modernoa",
  "title": "Etika: Kant utilitarismoaren aurrean",
  "mermaid": "flowchart TD\n  center[\"ETIKA: KANT UTILITARISMOAREN<br>AURREAN\"]:::axis\n  kant[\"KANT:<br>etika deontologikoa (betebeharrarena)\"]:::key\n  uti[\"UTILITARISMOA<br>(Bentham, Mill)\"]:::key\n  azu[\"AZURMENDI:<br>erlatibismo erlatiboa\"]:::key\n  center --> kant\n  center --> uti\n  kant -->|\"aurka dago\"| uti\n  kant --> k1[\"betebeharrari eta asmoari begiratzen die\"]\n  kant --> k2[\"inperatibo kategorikoa\"]\n  kant --> k3[\"pertsona helburu gisa, ez bitarteko gisa\"]\n  uti --> u1[\"ondorioei begiratzen die\"]\n  uti --> u2[\"ahalik eta gehienen<br>zoriontasun handiena\"]\n  center --> azu\n  azu -->|\"bien ñabardurak egiten ditu\"| kant\n  azu -->|\"bien ñabardurak egiten ditu\"| uti\n  azu --> az1[\"ez dago oinarri etiko absoluturik\"]\n  azu --> az2[\"balioak testuinguruaren mende daude\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zerk egiten du ona ekintza bat: zein asmorekin egiten den ala haren ondorioek?",
   "raiz": "BETEBEHARRAREN ETA ZORIONTASUNAREN ETIKAK",
   "raiz_d": "XVIII. mendearen amaieran bi erantzun talka egiten dute: printzipioz zuzena dena eta komeni zaiguna.",
   "ramas": [
    {
     "rel": "ekintza bera epaitzen du",
     "t": "Betebeharraren etika",
     "k": true,
     "a": "Kant",
     "d": "Etika deontologikoa, formala eta autonomoa: ez du esaten zer egin, arauak izan behar duen forma baizik.",
     "c": [
      {
       "rel": "mugarik gabe ona den gauza bakarra",
       "t": "Borondate ona",
       "d": "Betebeharragatik jardutea, ez betebeharraren arabera soilik, ez interesagatik edo joeragatik."
      },
      {
       "rel": "honetan adierazten da",
       "t": "Inperatibo kategorikoa",
       "k": true,
       "d": "Agindu moral unibertsala eta baldintzagabea.",
       "c": [
        {
         "rel": "formula",
         "t": "Lege unibertsala",
         "d": "Jardun denentzako lege izatea nahi dezakezun maxima baten arabera."
        },
        {
         "rel": "formula",
         "t": "Helburua bere baitan",
         "d": "Tratatu gizateria beti helburu gisa, inoiz ez bitarteko huts gisa: duintasunaren oinarria."
        }
       ]
      }
     ]
    },
    {
     "rel": "ondorioak epaitzen ditu",
     "t": "Utilitarismoa",
     "k": true,
     "a": "Bentham, Mill",
     "d": "Etika ondoriozalea (teleologikoa): ona da plazera handitu eta mina gutxitzen duen ekintza.",
     "c": [
      {
       "rel": "honek gidatzen du",
       "t": "Baliagarritasunaren printzipioa",
       "d": "Zoriontasun handiena ahalik eta jende gehienarentzat."
      },
      {
       "rel": "Benthamengan, kuantitatiboa",
       "t": "Kalkulu hedonikoa",
       "d": "Plazera neurtzen du: intentsitatea, iraupena, ziurtasuna, hedadura…"
      },
      {
       "rel": "Millengan, kualitatiboa",
       "t": "Goi- eta behe-mailako plazerak",
       "d": "Intelektualek eta moralek fisikoek baino balio handiagoa dute."
      }
     ]
    },
    {
     "rel": "hirugarren bide euskalduna",
     "t": "Erlatibismo erlatiboa",
     "a": "Joxe Azurmendi",
     "c": [
      {
       "rel": "baztertzen ditu",
       "t": "Oinarri absolutuak",
       "d": "Ez Jainkoak ez arrazoiak ezin dute etika unibertsal bat oinarritu."
      },
      {
       "rel": "nihilismoan erori gabe",
       "t": "Komunitate bakoitzaren barruko baliozkotasuna",
       "d": "Balioak testuinguruaren araberakoak dira, baina bertan ia erabat balio dute."
      },
      {
       "rel": "uztartzen ditu",
       "t": "Konbikzioa eta erantzukizuna",
       "a": "Max Weber",
       "d": "Printzipioak eta ondorioak, kasuz kasu bereiziz."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Betebeharraren etika",
     "rel": "asmoa ondorioen aurrean",
     "a": "Utilitarismoa"
    },
    {
     "de": "Oinarri absolutuak",
     "rel": "zalantzan jartzen du",
     "a": "Inperatibo kategorikoa"
    },
    {
     "de": "Konbikzioa eta erantzukizuna",
     "rel": "ondorioei begiratzen die, hau bezala",
     "a": "Utilitarismoa"
    }
   ],
   "idea": "Kantentzat, ekintza bat morala da betebeharra betetzeko asmoagatik, ez haren emaitzengatik; utilitarismoarentzat, sortzen duen zoriontasunagatik. Azurmendik absolutuak baztertzen ditu, baina ez du onartzen dena berdin dela."
  }
 },
 "ds-C4": {
  "subject": "hf",
  "block": "C",
  "tema": "Susmoaren filosofoak",
  "title": "Susmoaren filosofoak",
  "mermaid": "flowchart TD\n  center[\"SUSMOAREN FILOSOFOAK\"]:::axis\n  idea[\"Kontzientzia ez da gardena:<br>zerbait ezkutuk baldintzatzen du\"]\n  center -->|\"tesi komuna\"| idea\n  marx[\"MARX\"]:::key\n  niet[\"NIETZSCHE\"]:::key\n  freud[\"FREUD\"]:::key\n  idea --> marx\n  idea --> niet\n  idea --> freud\n  marx -->|\"desmaskaratzen du\"| eco[\"ekonomia\"]\n  eco -->|\"sortzen du\"| ideo[\"ideologia eta alienazioa\"]\n  ideo -->|\"honekin gainditzen da\"| rev[\"iraultza → komunismoa\"]\n  niet -->|\"desmaskaratzen du\"| moral[\"morala eta bere balioak\"]\n  moral -->|\"honetara darama\"| nih[\"nihilismoa · Jainkoaren heriotza\"]\n  nih -->|\"erantzuna\"| super[\"boterearen nahimena · gaingizakia\"]\n  freud -->|\"desmaskaratzen du\"| incon[\"inkontzientea\"]\n  incon --> yo[\"hura · nia · supernia\"]\n  incon --> pul[\"Eros eta Thanatos\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer ezkutatzen da askatasunez pentsatzen eta nahi dugula uste dugunaren atzean?",
   "raiz": "SUSMOAREN MAISUAK",
   "raiz_d": "Ricoeurren arabera, Marxek, Nietzschek eta Freudek erakusten dute subjektua ez dela «bere etxeko jabe».",
   "ramas": [
    {
     "rel": "susmo ekonomikoa",
     "t": "Marx",
     "k": true,
     "c": [
      {
       "rel": "honetaz susmatzen du",
       "t": "Ideiak eta erlijioa",
       "d": "Ez dira egia unibertsalak, gainegitura baizik."
      },
      {
       "rel": "atzean dago",
       "t": "Ideologia",
       "d": "Klase menderatzailea justifikatu eta esplotazioa ezkutatzen duen kontzientzia faltsua."
      },
      {
       "rel": "proposatzen du",
       "t": "Klaserik gabeko iraultza",
       "d": "Langilearen alienazioa gainditzeko."
      }
     ]
    },
    {
     "rel": "susmo morala",
     "t": "Nietzsche",
     "k": true,
     "c": [
      {
       "rel": "honetaz susmatzen du",
       "t": "Morala eta egia",
       "d": "Errukia, apaltasuna eta berdintasuna: esklaboen morala."
      },
      {
       "rel": "atzean dago",
       "t": "Ahularen erresumina",
       "d": "Bizitzarekiko eta indartsuekiko gorrotoa, Platonez geroztik eta kristautasunaz geroztik."
      },
      {
       "rel": "balioak erortzean",
       "t": "Nihilismoa",
       "d": "«Jainkoa hil da»: gizakia zentzurik gabe geratzen da."
      },
      {
       "rel": "hau proposatzen du",
       "t": "Gaingizakia",
       "d": "Bere balioak sortzen ditu botere-nahiaren bidez: balioen transmutazioa."
      }
     ]
    },
    {
     "rel": "susmo psikikoa",
     "t": "Freud",
     "k": true,
     "c": [
      {
       "rel": "honetaz susmatzen du",
       "t": "Arrazionaltasun kontzientea",
       "d": "Kontzientzia icebergaren punta baino ez da."
      },
      {
       "rel": "atzean dago",
       "t": "Inkontzientea",
       "d": "Gobernatzen gaituzten desira erreprimituak; Eros (bizitza) eta Tanatos (heriotza) bulkadak.",
       "c": [
        {
         "rel": "honela egituratzen da",
         "t": "Elloa, Nia eta Supernia",
         "d": "Instintuak, errealitatearekin bitartekari den arrazoia, barneratutako arau moralak."
        }
       ]
      },
      {
       "rel": "bilatzen ditu",
       "t": "Osasun mentala eta norberaren ezagutza"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ahularen erresumina",
     "rel": "interesak ezkutatzen ditu, hau bezala",
     "a": "Ideologia"
    }
   ],
   "idea": "Marxek, Nietzschek eta Freudek kontzientzia desmaskaratzen dute: gure ideien, balioen eta arrazoien azpian kontrolatzen ez ditugun indarrak ari dira (ekonomia, erresumina, inkontzientea)."
  }
 },
 "ds-C5": {
  "subject": "hf",
  "block": "C",
  "tema": "Kapitalismoaren kritika",
  "title": "Kapitalismoaren kritika",
  "mermaid": "flowchart TD\n  center[\"KAPITALISMOAREN KRITIKA<br>ETA MASA-GIZARTEA\"]:::axis\n  fra[\"FRANKFURTEKO ESKOLA\"]:::key\n  are[\"HANNAH ARENDT\"]:::key\n  raw[\"JOHN RAWLS\"]:::key\n  center --> fra\n  center --> are\n  center --> raw\n  fra --> f1[\"arrazoi instrumentala\"]\n  fra --> f2[\"kultura-industria\"]\n  fra -->|\"sortzen du\"| f3[\"deshumanizazioa\"]\n  are --> a1[\"totalitarismoaren azterketa\"]\n  are --> a2[\"ideologia totalizatzailea\"]\n  are -->|\"eragiten du\"| a3[\"esfera publikoaren eta<br>pribatuaren deuseztatzea\"]\n  raw -->|\"erantzuna: erreformatu, ez suntsitu\"| r1[\"justizia ekitate gisa\"]\n  raw --> r2[\"ongizate-estatua\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola aldatzen da kapitalismoaren kritika Marxengandik XX. mendeko filosofoengana?",
   "raiz": "KAPITALISMOAREN KRITIKA",
   "raiz_d": "Marxek Industria Iraultzako esplotazioa kritikatzen du; totalitarismoaren ondoren, XX. mendeak kultura, arrazoia eta Estatua ere kritikatzen ditu.",
   "ramas": [
    {
     "rel": "XIX. mendea",
     "t": "Esplotazioa eta alienazioa",
     "a": "Marx",
     "c": [
      {
       "rel": "honetan oinarritzen da",
       "t": "Plusbalioa",
       "d": "Kapitalistak langileak sortzen duen eta jasotzen ez duen balioaz jabetzen da."
      },
      {
       "rel": "honekin gainditzen da",
       "t": "Iraultza proletarioa",
       "d": "Klaserik gabeko gizarte komunista baterantz."
      }
     ]
    },
    {
     "rel": "kritika kulturala",
     "t": "Arrazoi instrumentala",
     "k": true,
     "a": "Adorno, Horkheimer (Frankfurt)",
     "d": "Eraginkortasuna eta kalkulua, helburuez galdetu gabe: arrazoia menderakuntza bihurtzen da.",
     "c": [
      {
       "rel": "hemen ikusten da",
       "t": "Industria kulturala",
       "d": "Entretenimendu estandarizatua: pasibotasuna eta konformismoa."
      }
     ]
    },
    {
     "rel": "Estatuaren zeregina",
     "t": "Demokrazia eta erreforma",
     "c": [
      {
       "rel": "Popperrek proposatzen du",
       "t": "Gizarte-ingeniaritza zatikakoa",
       "a": "Popper",
       "d": "Huts egiten badute zuzentzen diren erreforma txiki eta mailakatuak; historizismoaren aurka."
      },
      {
       "rel": "Habermasek proposatzen du",
       "t": "Demokrazia deliberatiboa",
       "a": "Habermas",
       "d": "Elkarrizketa bidezko adostasuna, esfera publiko aske batean."
      }
     ]
    },
    {
     "rel": "muturreko arriskua",
     "t": "Totalitarismoa",
     "a": "Hannah Arendt",
     "d": "Izuaren eta propagandaren bidezko menderakuntza osoa: biztanleria masa bihurtzen da.",
     "c": [
      {
       "rel": "haren aurrean",
       "t": "Espazio publikoa berreskuratu",
       "d": "Pentsamendu kritikoa eta aniztasuna."
      }
     ]
    },
    {
     "rel": "oinarri morala",
     "t": "Justizia ekitate gisa",
     "k": true,
     "a": "John Rawls",
     "c": [
      {
       "rel": "honen azpian aukeratzen da",
       "t": "Ezjakintasunaren estalkia",
       "d": "Zer leku izango dugun jakin gabe: egoerarik txarrenean dagoena babestea aukeratuko genuke."
      },
      {
       "rel": "hortik dator",
       "t": "Diferentziaren printzipioa",
       "k": true,
       "d": "Desberdintasunak justuak dira soilik egoerarik txarrenean daudenei mesede egiten badiete: ongizate-estatuaren oinarria."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Gizarte-ingeniaritza zatikakoa",
     "rel": "erreforma mailakatua, honen aurrean",
     "a": "Iraultza proletarioa"
    },
    {
     "de": "Demokrazia deliberatiboa",
     "rel": "erantzuten dio",
     "a": "Arrazoi instrumentala"
    }
   ],
   "idea": "Marxengandik XX. mendera, kritika esplotazio ekonomikotik kulturara eta arrazoira igarotzen da; eta erantzuna, iraultzatik erreformara: demokrazia deliberatiboa eta justizia ekitate gisa."
  }
 },
 "ds-C6": {
  "subject": "hf",
  "block": "C",
  "tema": "Postmodernitatea",
  "title": "Nietzsche eta postmodernitatea",
  "mermaid": "flowchart TD\n  center[\"NIETZSCHE ETA POSMODERNITATEA\"]:::axis\n  niet[\"NIETZSCHE:<br>deseraikuntza\"]:::key\n  post[\"POSMODERNITATEA\"]:::key\n  hab[\"HABERMAS:<br>modernitatearen defentsa\"]:::key\n  center --> niet\n  niet -->|\"inspiratzen du\"| post\n  niet --> n1[\"egia objektiboaren kritika\"]\n  niet --> n2[\"metafisikaren kritika\"]\n  niet --> n3[\"dualismoaren kritika\"]\n  post --> p1[\"egia unibertsalen kritika<br>(metakontakizunen amaiera)\"]\n  post --> p2[\"aniztasuna eta aldea\"]\n  center --> hab\n  hab -->|\"honi erantzuten dio\"| post\n  hab --> h1[\"arrazoi komunikatiboa\"]\n  hab --> h2[\"modernitatea ez da agortu\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zergatik da Nietzsche modernitateari egindako kritika postmodernoaren abiapuntua?",
   "raiz": "NIETZSCHE ETA POSTMODERNITATEA",
   "raiz_d": "Nietzschek, bere burua «dinamita» deitzen duenak, Mendebaldeko tradizioa eraisten du; postmodernitateak haren susmoa jasotzen du, eta Habermasek erantzuten dio.",
   "ramas": [
    {
     "rel": "eraispena",
     "t": "Tradizioaren kritika",
     "k": true,
     "a": "Nietzsche",
     "d": "Metodo genealogikoaren bidez erakusten du sinesmenak ez direla betierekoak: interesetatik, erresuminetik eta boteretik sortzen dira.",
     "c": [
      {
       "rel": "egia objektiboaren aurka",
       "t": "Perspektibismoa",
       "k": true,
       "d": "Ezagutza oro ikuspuntuaren araberakoa da: perspektibak eta interpretazioak baino ez daude."
      },
      {
       "rel": "metafisikaren aurka",
       "t": "«Egiazko mundua» fikzio bat da",
       "d": "Platonek eta kristautasunak haratago bat asmatu zuten dagoen mundu bakarra gutxiesteko."
      },
      {
       "rel": "moralaren aurka",
       "t": "Esklaboen morala",
       "d": "«Ontasunaren», apaltasunaren eta berdintasunaren atzean bizitzaren aurkako erresumina ezkutatzen da."
      }
     ]
    },
    {
     "rel": "proposamena",
     "t": "Balioen transmutazioa",
     "k": true,
     "a": "Nietzsche",
     "d": "Bizitza ukatzen duten balioak irauli eta hura baieztatzen dutenak sortu.",
     "c": [
      {
       "rel": "hemendik abiatzen da",
       "t": "Jainkoaren heriotza",
       "d": "«Jainkoa hil da»: balio absolutuen oinarria erortzen da eta nihilismoa iristen da."
      },
      {
       "rel": "hark gorpuzten du",
       "t": "Gaingizakia",
       "d": "Bere balioak botere-nahiaren bidez sortzen dituena."
      }
     ]
    },
    {
     "rel": "susmoa jasotzen du",
     "t": "Postmodernitatea",
     "a": "Lyotard, Derrida, Foucault, Vattimo",
     "d": "Nietzscheren susmoa XX. mendeko kulturari aplikatzen dio.",
     "c": [
      {
       "rel": "baztertzen ditu",
       "t": "Egia unibertsalak",
       "d": "Metakontakizunen amaiera: ez dago historia bakar bat, ezta denentzako egia bat ere."
      },
      {
       "rel": "defendatzen du",
       "t": "Aniztasuna eta diferentzia"
      }
     ]
    },
    {
     "rel": "erantzuten du",
     "t": "Modernitatearen defentsa",
     "k": true,
     "a": "Habermas",
     "d": "Modernitatea agortu ez den proiektua da: konpondu egin behar da, ez abandonatu.",
     "c": [
      {
       "rel": "proposatzen du",
       "t": "Arrazoi komunikatiboa",
       "d": "Hertsadurarik gabeko elkarrizketak akordio arrazionalak lortzea eta injustizia kritikatzea ahalbidetzen du."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Perspektibismoa",
     "rel": "honen kritika aurreratzen du",
     "a": "Egia unibertsalak"
    },
    {
     "de": "Arrazoi komunikatiboa",
     "rel": "adostasuna bilatzen du, honen aurrean",
     "a": "Aniztasuna eta diferentzia"
    }
   ],
   "idea": "Nietzschek Mendebaldeko egia, metafisika eta morala eraisten ditu bizitzari baietz esateko; posmodernitateak haren susmoa jasotzen du, eta Habermasek erantzuten du arrazoia, dialogikoa bada, oraindik salba daitekeela."
  }
 },
 "ds-C7": {
  "subject": "hf",
  "block": "C",
  "tema": "Hizkuntzaren filosofia",
  "title": "Hizkuntzaren filosofia",
  "mermaid": "flowchart TD\n  center[\"HIZKUNTZAREN FILOSOFIA\"]:::axis\n  w1[\"WITTGENSTEIN I<br>(lehena)\"]:::key\n  w2[\"WITTGENSTEIN II<br>(bigarrena)\"]:::key\n  txi[\"TXILLARDEGI\"]:::key\n  center --> w1\n  w1 -->|\"bere burua zuzentzen du\"| w2\n  w1 --> a1[\"hizkuntza munduaren irudia da\"]\n  w1 --> a2[\"metafisikak ez du zentzurik\"]\n  w1 --> a3[\"«hitz egin ezin denaz,<br>isildu egin behar da»\"]\n  w2 --> b1[\"esanahia erabilera da\"]\n  w2 --> b2[\"hizkuntza-jokoak\"]\n  w2 --> b3[\"filosofia terapeutikoa\"]\n  center --> txi\n  txi -->|\"euskaratik\"| w2\n  txi --> c1[\"hizkuntzak pentsamendua baldintzatzen du\"]\n  txi --> c2[\"egituratzaile inkontzientea da\"]\n  txi --> c3[\"euskararen biziraupena,<br>zaila euskal estaturik gabe\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Non daude esan eta pentsa dezakegunaren mugak?",
   "raiz": "HIZKUNTZAREN FILOSOFIA",
   "raiz_d": "Bihurgune linguistikoa: arazo filosofiko asko hizkuntzaren erabilera okerretik sortzen dira, eta hizkuntzak markatzen du pentsa dezakegunaren muga.",
   "ramas": [
    {
     "rel": "Tractatus (1921)",
     "t": "Lehen Wittgenstein",
     "k": true,
     "d": "Hizkuntzak eta munduak partekatzen duten egitura logikoa bilatzen du.",
     "c": [
      {
       "rel": "defendatzen du",
       "t": "Irudikapenaren teoria",
       "d": "Proposizioak gertaeren «irudiak» dira, mapa batek lurraldea islatzen duen bezala."
      },
      {
       "rel": "ondorioztatzen du",
       "t": "Metafisika zentzugabekeria da",
       "d": "Metafisikak eta etikak esan ezin dena esan nahi dute; mistikoa erakutsi baino ezin da egin."
      },
      {
       "rel": "horregatik",
       "t": "Esan ezinaren aurrean isildu",
       "d": "«Hitz egin ezin denaz, isilik egon behar da.» Filosofia argitze-jarduera bat da."
      }
     ]
    },
    {
     "rel": "Ikerketa filosofikoak",
     "t": "Bigarren Wittgenstein",
     "k": true,
     "d": "Hizkuntza ez da gertaeren ispilua, erreminta-kaxa bat baizik.",
     "c": [
      {
       "rel": "defendatzen du",
       "t": "Esanahia erabilera da"
      },
      {
       "rel": "bereizten ditu",
       "t": "Hizkuntza-jokoak",
       "d": "Aginduak ematea, txiste bat kontatzea, otoitz egitea…: arau propioak eta «familia-antzekotasunak» dituzten jarduerak."
      },
      {
       "rel": "filosofia da",
       "t": "Terapia linguistiko bat",
       "d": "Arazoak ez dira konpontzen: desegin egiten dira, hitzak nola erabiltzen ditugun ikustean."
      }
     ]
    },
    {
     "rel": "euskaratik",
     "t": "Hizkuntzak pentsamendua egituratzen du",
     "k": true,
     "a": "Txillardegi",
     "d": "Sapir-Whorfen eraginez: hizkuntza dugulako pentsatzen dugu, eta hizkuntza bakoitzak mundu-ikuskera bat darama.",
     "c": [
      {
       "rel": "honela jarduten du",
       "t": "Egituratzaile inkontziente gisa",
       "d": "Errealitatea antolatzen du guk ohartu aurretik."
      },
      {
       "rel": "horregatik",
       "t": "Euskara, bizkarrezurra",
       "d": "Desagertzen bada, mundua ikusteko modu propio bat galtzen da; haren ustez, euskal Estaturik gabe nekez iraungo luke bizirik."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Bigarren Wittgenstein",
     "rel": "zuzentzen du",
     "a": "Lehen Wittgenstein"
    }
   ],
   "idea": "Lehen Wittgensteinentzat hizkuntzak mundua marrazten du; bigarrenarentzat, erabilera-multzo bat da; Txillardegirentzat, hizkuntza bakoitzak herri baten pentsamendua taxutzen du."
  }
 },
 "ds-C8": {
  "subject": "hf",
  "block": "C",
  "tema": "Existentzialismoa",
  "title": "Existentzialismoa",
  "mermaid": "flowchart TD\n  center[\"EXISTENTZIALISMOA\"]:::axis\n  idea[\"Existentzia konkretutik abiatzen da,<br>ez esentzia abstraktuetatik\"]:::key\n  center -->|\"tesi komuna\"| idea\n  sar[\"SARTRE (ateoa)\"]:::key\n  hei[\"HEIDEGGER\"]:::key\n  ort[\"ORTEGA Y GASSET\"]:::key\n  una[\"UNAMUNO (kristaua)\"]:::key\n  idea --> sar\n  idea --> hei\n  idea --> ort\n  idea --> una\n  sar --> s1[\"existentzia esentziaren aurretik doa\"]\n  sar --> s2[\"aske izatera kondenatuak\"]\n  hei --> h1[\"izatea eta izakiak bereiztea\"]\n  hei --> h2[\"Dasein: munduan projektatua\"]\n  ort --> o1[\"arrazoi bitala\"]\n  ort --> o2[\"«ni neu naiz ni eta nire zirkunstantzia»\"]\n  una --> u1[\"bizitzaren sentimendu tragikoa\"]\n  una --> u2[\"hilezkortasun-irrika\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer da gizakia pentsalari existentzialista bakoitzarentzat?",
   "raiz": "EXISTENTZIALISMOA",
   "raiz_d": "Tesi komuna: existentzia konkretutik abiatzen da, ez esentzia abstraktuetatik.",
   "ramas": [
    {
     "rel": "ontologia",
     "t": "Dasein",
     "k": true,
     "a": "Heidegger",
     "d": "«Hor-izatea»: gizakia, izateaz galdetzen duen izakia.",
     "c": [
      {
       "rel": "bereizten ditu",
       "t": "Izatea eta izakiak",
       "d": "Gauza konkretuek ez dute agortzen izateari buruzko galdera."
      },
      {
       "rel": "honela existitzen da",
       "t": "Munduan-izatea, jaurtia",
       "d": "Existentziara jaurtia, hala eskatu gabe."
      },
      {
       "rel": "badaki bera dela",
       "t": "Heriotzarako-izatea",
       "d": "Finitasuna onartzeak bizitza autentikoa irekitzen du."
      }
     ]
    },
    {
     "rel": "existentzialismo ateoa",
     "t": "Askatasun erradikala",
     "k": true,
     "a": "Sartre",
     "d": "Arauak ezarriko dituen Jainkorik gabe, erabat gara erantzule garenaz.",
     "c": [
      {
       "rel": "zeren",
       "t": "Existentzia esentziaren aurretik dator"
      },
      {
       "rel": "hortik",
       "t": "«Libre izatera kondenatuak»",
       "d": "Beti dago aukera: ez aukeratzea ere aukeraketa bat da."
      },
      {
       "rel": "honekin ihes egiten da",
       "t": "Fede txarra",
       "d": "Norbera engainatzea: «horrelakoa naiz», «ez nuen aukerarik izan»."
      }
     ]
    },
    {
     "rel": "existentzialismo kristaua",
     "t": "Bizitzaren sentimendu tragikoa",
     "k": true,
     "a": "Unamuno",
     "d": "Gizakia agonian dagoen izakia da.",
     "c": [
      {
       "rel": "honen arteko borroka",
       "t": "Arrazoia eta bihotza",
       "d": "Arrazoiak hilezkortasuna ukatzen du; bihotzak irrikatu egiten du."
      },
      {
       "rel": "mugiarazten du",
       "t": "Hilezkortasun-irrika"
      }
     ]
    },
    {
     "rel": "arraziobitalismoa",
     "t": "Bizi-arrazoia",
     "a": "Ortega y Gasset",
     "d": "Arrazoi hutsa ez da nahikoa: bizitza konkretutik pentsatu behar da.",
     "c": [
      {
       "rel": "zeren",
       "t": "«Ni naiz ni eta nire zirkunstantzia»"
      },
      {
       "rel": "hortik",
       "t": "Perspektibismoa",
       "d": "Inork ez du egia absolutua: egia ikuspegi guztien batura da."
      }
     ]
    },
    {
     "rel": "Ortegaren ikaslea",
     "t": "Arrazoi poetikoa",
     "a": "María Zambrano",
     "d": "Filosofia eta poesia uztartzen ditu gizakiaren «erraietara» iristeko: ametsak, sentimenduak, itxaropena."
    }
   ],
   "cruces": [
    {
     "de": "Arrazoi poetikoa",
     "rel": "zabaltzen du",
     "a": "Bizi-arrazoia"
    }
   ],
   "idea": "Denak norbanako konkretutik abiatzen dira: Heideggerrek heriotzarantz jaurtia ikusten du, Sartrek libre izatera kondenatua, Unamunok agonian, Ortegak bere zirkunstantziari lotua eta Zambranok hitz poetikoaren beharrean."
  }
 },
 "ds-C9": {
  "subject": "hf",
  "block": "C",
  "tema": "Beauvoir / feminismoa",
  "title": "Simone de Beauvoir: feminismoa",
  "mermaid": "flowchart TD\n  center[\"SIMONE DE BEAUVOIR:<br>feminismoa\"]:::axis\n  tesis[\"«Ez da emakume jaiotzen,<br>egiten da»\"]:::key\n  alt[\"Alteritatea: bigarren sexua\"]:::key\n  eman[\"Emantzipazioa\"]:::key\n  center --> tesis\n  tesis -->|\"azaltzen du\"| alt\n  alt -->|\"honekin gainditzen da\"| eman\n  tesis --> t1[\"ez dago funts femenino finkorik\"]\n  tesis --> t2[\"kulturak eraikitzen du «femeninoa»\"]\n  alt --> a1[\"gizona = subjektu absolutua\"]\n  alt --> a2[\"emakumea = «bestea», osagarria\"]\n  alt --> a3[\"jaunaren eta esklaboaren dialektika\"]\n  eman --> e1[\"hezkuntza berdintzailea\"]\n  eman --> e2[\"abortatzeko eta antisorgailuetarako eskubidea\"]\n  eman --> e3[\"autonomia ekonomikoa\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer esan nahi du «emakume izateak», eta nola irits daiteke emakumea libre izatera?",
   "raiz": "SIMONE DE BEAUVOIR: FEMINISMOA",
   "raiz_d": "Sartre bezala existentzialista, Bigarren sexua (1949) lanarekin feminismoaren bigarren olatuari hasiera ematen dio.",
   "ramas": [
    {
     "rel": "tesia",
     "t": "«Ez da emakume jaiotzen: egiten da»",
     "k": true,
     "d": "Emakumezko identitatea eraikuntza kulturala da, ez patu biologikoa.",
     "c": [
      {
       "rel": "ukatzen du",
       "t": "Emakumezko esentzia finko bat",
       "d": "Existentzia esentziaren aurretik dator: ez dago «betiko femeninorik» ere."
      },
      {
       "rel": "baieztatzen du",
       "t": "Kulturak eraikitzen du «femeninoa»",
       "d": "Amatasunak, ezkontzak eta etxeko lanek zapalkuntza-tresna gisa jarduten dute."
      }
     ]
    },
    {
     "rel": "diagnostikoa",
     "t": "Bestetasuna: bigarren sexua",
     "k": true,
     "d": "Emakumea beti gizonarekiko harremanean definitu da: alaba, emaztea, ama.",
     "c": [
      {
       "rel": "gizona da",
       "t": "Subjektua, funtsezkoa"
      },
      {
       "rel": "emakumea da",
       "t": "Objektua, «bestea»"
      },
      {
       "rel": "honen bidez azaltzen da",
       "t": "Nagusiaren eta morroiaren dialektika",
       "a": "Hegel",
       "d": "Identitatea bestearen aitortzaren bidez eraikitzen da."
      },
      {
       "rel": "ez da matxinatzen, honengatik",
       "t": "Bere lanaren inmanentzia",
       "d": "Etxeko lana errepikatu egiten da eta ez du arrastorik uzten; transzendentzia gizonarentzat geratzen da."
      }
     ]
    },
    {
     "rel": "proposamena",
     "t": "Emantzipazioa",
     "k": true,
     "d": "Emakumea gizaki oso izatea, ez gizon bihurtzea.",
     "c": [
      {
       "rel": "lehen bidea",
       "t": "Berdintasunean oinarritutako hezkuntza"
      },
      {
       "rel": "bigarren bidea",
       "t": "Independentzia ekonomikoa"
      },
      {
       "rel": "hirugarren bidea",
       "t": "Ugalketa-autonomia",
       "d": "Jaiotza-kontrola (antisorgailuak, abortua) eta amatasun askea."
      },
      {
       "rel": "helburua",
       "t": "Elkarrekikotasuna",
       "d": "Elkar bi askatasun gisa aitortzea: emakumearen askapena gizonarena ere bada."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Bere lanaren inmanentzia",
     "rel": "honekin hausten da",
     "a": "Independentzia ekonomikoa"
    }
   ],
   "idea": "«Ez da emakume jaiotzen: egiten da»: femeninoa emakumea «bestea» bihurtu duen eraikuntza da; eraikia bada, eraldatu egin daiteke."
  }
 }
};
