// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/republica_mazo_a.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const REP_MAZO_A = {
 "acciones": [
  {
   "id": "censura",
   "v": "a",
   "ap": 1,
   "img": "ac-censura",
   "name": "Poeten zentsura",
   "d": "Gazteek entzuten dituzten mitoak zaintzen dira: +1 jakinduria zaindari bakoitzari eta −1 hurrengo txandako gertaeren kalteari.",
   "cita": "«Lehenik mitoak sortzen dituztenak zaindu behar ditugu: ondo sortzen dutena onartu eta ez dutena baztertu.»",
   "loc": "Errepublika II, 377b-c; X, 607a",
   "nota": "Eztabaida irekia: Platonek arimaren gogo suminkorra mitoen bidez hezten du; Aristotelesek gogorarazten du imitatzea berezkoa dela eta horrela ikasten dugula (Poetika 4, 1448b). Sinplifikatua: balaztak edozein gertaeratarako balio du, ez soilik sofistentzat/timokraziarentzat; demokrazian +1 AP gabe.",
   "ef": {
    "zsj": 1,
    "dura": {
     "k": "menos",
     "n": 1,
     "turnos": 1
    }
   }
  },
  {
   "id": "limite",
   "v": "a",
   "ap": 1,
   "img": "ac-limite",
   "name": "Luxuaren aurkako legea",
   "d": "Aberastasunaren metaketa mugatzen da: +2 harmonia hiria aristokraziatik atera bada; aristokrazian, ez dago ezer geldiarazteko.",
   "cita": "«Zenbat eta gehiago estimatzen duten aberastasuna, orduan eta gutxiago estimatzen dute bertutea.»",
   "loc": "Errepublika VIII, 550d-551b",
   "nota": "Oligarkia geldiarazten du, bere kausari eraso eginez. Sinplifikatua: «oligarkian edo hura aldera erortzen» = timokraziatik aurrera; oligarkiaren tantakadaren deuseztapena ez dago programatuta.",
   "ef": {
    "si": {
     "req": "reg>=1",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "sorteo",
   "v": "a",
   "ap": 1,
   "img": "../aristoteles/azar-suerte",
   "name": "Kargu-banaketa zozketaz",
   "d": "Kargu guztiak denen artean banatzen dira: +2 AP, baina −1 harmonia, eta hiria demokraziara hurbiltzen da.",
   "cita": "«Gobernua eta kargu guztiak berdintasunez banatzen dituzte, eta gehienetan zozketaz.»",
   "loc": "Errepublika VIII, 557a",
   "nota": "Erorketa azkartzen duen ekintza: energia ematen duen guztiak ez du hiria salbatzen. Sinplifikatua: demokraziaren atalasea −1 jaitsi gabe.",
   "ef": {
    "ap": 2,
    "arm": -1
   }
  },
  {
   "id": "consejo",
   "v": "a",
   "ap": 2,
   "img": "ac-consejo",
   "name": "Zaharren kontseilua",
   "d": "Zuhurrenek konstituzioari begiratzen diote: +1 harmonia eta −1 gertaeren kalteari 2 txandatan.",
   "cita": "«Konstituzio oro aldatzen da boterea dutenen eraginez, haien artean bertan liskarra sortzen denean.»",
   "loc": "Errepublika VIII, 545d-e",
   "nota": "Endekatu aurretik «denbora erosten» gehien duen karta. Sinplifikatua: «hurrengo trantsizioaren atalasean +1» kalteen indargetzaile gisa; demokrazian +1 AP gabe.",
   "ef": {
    "arm": 1,
    "dura": {
     "k": "menos",
     "n": 1,
     "turnos": 2
    }
   }
  },
  {
   "id": "zanganos",
   "v": "a",
   "ap": 1,
   "img": "ac-zanganos",
   "name": "Erlamandoaren erbestea",
   "d": "Gainerakoen kontura bizi den alferra kanporatzen da: +1 harmonia; oligarkian edo okerrago, hurrengo estatu-kolpeak ez du kalterik egiten.",
   "cita": "«Erlamando eztenduna hiria astintzen du, ziztarik ez duenak erlauntza nahasten duen bezala.» (parafrasia)",
   "loc": "Errepublika VIII, 552c-e; 564b-e",
   "nota": "Erlauntza: astintzen duen alferra demagogoaren lehengaia da. Sinplifikatua: «kolpearen probabilitatean −1» txanda bateko ezkutu gisa. Parafrasia;",
   "ef": {
    "arm": 1,
    "si": {
     "req": "reg>=2",
     "ef": {
      "escudo": {
       "tags": [
        "golpe"
       ],
       "turnos": 1
      }
     }
    }
   }
  },
  {
   "id": "a_fundar_colonia",
   "img": "ac-fundar-colonia",
   "v": "a",
   "ap": 2,
   "name": "Koloniak sortu",
   "d": "Jendearen zati batek beste hiri bat sortzen du, eta zureak neurria gordetzen du: txanda honetan «Hiri txikitua» ez zaizu kalterik egiten.",
   "cita": "«Hiria hazi dadila bat izaten jarraitu nahi duen bitartean, eta ez gehiago.» (parafrasia)",
   "loc": "Errepublika IV, 423b-c",
   "nota": "Neurri zuzena (to métrion): ez hain txikia, bere buruarekin aski ez izateko, ez hain handia, bat izateari uzteko. Sinplifikatua: «+6 biztanleria eraginkor, 30eko atalasearen aurrean» gertaeraren aurkako ezkutu gisa.",
   "ef": {
    "escudo": {
     "tags": [
      "menguada"
     ],
     "turnos": 1
    }
   }
  }
 ],
 "eventos": [
  {
   "id": "a_ev_dos_pueblos",
   "img": "ev-dos-pueblos",
   "v": "a",
   "name": "Bi herriak",
   "loc": "Errepublika VIII, 551d",
   "cita": "«Halako hiria ez da bat, bi baizik: pobreena eta aberatsena, leku berean bizi direnak eta etengabe elkarren aurka konspiratzen dutenak.»",
   "threat": "Oligarkian hiria aberatsetan eta pobreetan zatitzen da; defendatzaileak baino ekoizle askoz gehiago badaude, gatazka lehertzen da.",
   "req": "defensa",
   "si": {
    "ef": {
     "arm": -2
    },
    "msg": "Hiria bitan zatitzen da, baina defendatzaileek talka eusten dute: −2."
   },
   "no": {
    "ef": {
     "arm": -2,
     "kill": [
      "E",
      2
     ]
    },
    "msg": "Aberatsen eta pobreen arteko borroka lehertzen da: −2 eta 2 ekoizle hiltzen dira."
   },
   "aparece": "reg>=2",
   "nota": "Desberdintasuna ez da oligarkiaren alboko akats bat: bere funtsa da, eta gerra zibila, bere amaiera. Sinplifikatua: «E > 3 × G» «!defentsa» gisa eta ⌊E/10⌋ hildako 2 gisa."
  },
  {
   "id": "a_ev_libertad_extrema",
   "img": "ev-libertad-extrema",
   "v": "a",
   "name": "Esklabotasun bihurtzen den askatasuna",
   "loc": "Errepublika VIII, 563e-564a",
   "cita": "«Gehiegizko askatasunak ez du ematen gehiegizko esklabotasun bihurtzen denik besterik, ez norbanakoarentzat, ez hiriarentzat.»",
   "threat": "Hiria demokrazia denean, askatasun gehiegiak kontrako muturrera bultzatzen du.",
   "req": "reg>=3",
   "si": {
    "ef": {
     "arm": -2
    },
    "msg": "Hiria, ertzean, tiraniarako urrats bat ematen du: −2."
   },
   "no": {
    "ef": {
     "arm": 0
    },
    "msg": "Oraindik tarte bat dago: abisu bat baino ez."
   },
   "aparece": "reg>=2",
   "nota": "Muturrak bere kontrakoa sortzen du. Eztabaida irekia: erdiko neurriak galarazten al du, ala boterea mugatzen duten erakundeek (Popper)? Sinplifikatua: «ertzean» = demokrazian egotea; tiraniaren atalasean −1 gabe."
  },
  {
   "id": "a_ev_escolta_tirano",
   "img": "ev-escolta-tirano",
   "v": "a",
   "name": "Tiranoak eskolta eskatzen du",
   "loc": "Errepublika VIII, 565d-566d",
   "cita": "«Herriaren babeslea, salbatzaile gisa agurtua, guardia bat eskatzen du zuek defendatzeko; guardiarekin babesle izateari uzten dio eta tirano bihurtzen da.» (parafrasia)",
   "threat": "Demokraziaren amaieran, herriaren babesleak guardia bat eskatzen du; lehenago eman izan badiozu, hiria erortzen da.",
   "req": "semilla",
   "si": {
    "ef": {
     "arm": -3
    },
    "msg": "Bazuen jada bere guardia: babesle tirano bihurtzen da (−3)."
   },
   "no": {
    "ef": {
     "arm": -1
    },
    "msg": "Guardia eskatzen du eta hiriak zalantza egiten du: −1. Oraindik erabaki dezakezu."
   },
   "aparece": "reg>=3",
   "nota": "Tiranoaren jaiotza herriaren onespenetik, Platonen arabera; azaldu egiten da, ez da epaitzen. Parafrasia. Sinplifikatua: tiraniarako trantsizio zuzenik gabe (harmoniak erabakitzen du)."
  }
 ],
 "dialogos": [
  {
   "id": "a_sicilia",
   "emoji": "⛵",
   "quien": "Jeneral zahar bat",
   "loc": "Errepublika VIII, 547e-548a",
   "situacion": "Batzarra, gogotsu, urruneko irla aberats bat konkistatzea bozkatzen ari da. Gazteek ospeaz amesten dute; jeneral zahar batek hitza eskatzen du kontra hitz egiteko.",
   "cita": "«Denboraren zatirik handiena gerran emango du.»",
   "griego": "",
   "pregunta": "Zer erabakitzen du zure hiriak?",
   "opts": [
    {
     "t": "Itsasoratu: ospea ausartzen denarena da.",
     "razon": "Ausartzen ez den hiria ez da hazten.",
     "ef": {
      "arm": -2,
      "ap": 2,
      "mov": [
       "E",
       "G",
       1
      ]
     },
     "r": "Hiria gogoz eta soldaduz betetzen da (+2 AP, ekoizle bat izena ematen du), baina duena apustu bakar batean jokatzen du (−2 harmonia)."
    },
    {
     "t": "Jeneral zuhurrari entzun eta ez joan.",
     "razon": "Ekimena neurtu behar da hasi aurretik.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Zure zaindariek badakite ekimena neurtzen: hiria geratzen da eta bere horretan irauten du (+1 harmonia)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Inork ez daki zuhurtzia defendatzen, eta batzarrak koldar deitzen dizu (−1 harmonia)."
     }
    },
    {
     "t": "Flota txiki batekin bakarrik joan, betetzeko.",
     "razon": "Ez guztia, ez ezer.",
     "ef": {
      "ap": -1
     },
     "r": "Ez ospea, ez hondamendia; hiriak gastatu egiten du eta ezer irabazi gabe geratzen da (−1 AP)."
    }
   ],
   "platon": {
    "txt": "Ohorearen erregimenak «denboraren zatirik handiena gerran emango du», borrokatzeko balio dutenak jakintsuak baino gehiago estimatzen dituelako (parafrasia).",
    "loc": "Errepublika VIII, 547e-548a"
   },
   "critica": {
    "autor": "Tuzidides",
    "txt": "Hondamendia barne-zatiketei eta agintaritza-akatsei egozten die, ospearen nahiari beraren aldean gehiago (parafrasia).",
    "loc": "Peloponesoko Gerraren Historia II 65, 11"
   },
   "glo": [
    "g-timocracia",
    "g-alma-irascible"
   ],
   "fase": 1,
   "nota": "*Thymós* neurririk gabe (*philonikía*, garaipenaren maitasuna). Historikoki Atenas demokratikoak bozkatu zuen: ohorearen gehiegizkoa erregimen jakin baten ezaugarria al da, ala edozeinena?"
  },
  {
   "id": "a_leon",
   "emoji": "⚖️",
   "quien": "Hogeita Hamarrak",
   "loc": "Apologia 32c-d",
   "situacion": "Hiria gobernatzen duten Hogeita Hamarrek hiritar batzuei agintzen diete Leon Salaminakoa atxilotzeko, errugabea, bere ondasunak hartzeko. Guztiek eskuak zikintzea nahi dute.",
   "cita": "«Gobernu hark, hain boteretsua izanik, ez ninduen ikaratu ezer bidegabea egiteraino.»",
   "griego": "",
   "pregunta": "Zer egiten dute zure zaindariek?",
   "opts": [
    {
     "t": "Obeditu: aginduak aginduak dira.",
     "razon": "Agintzen duenak agintzen duenaren erantzule da.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "Leon hil egiten da eta bere ondasunek kutxak betetzen dituzte (+2 AP). Hiriak ikasten du inor ez dagoela salbu (−2 harmonia)."
    },
    {
     "t": "Etxera joan, haietako batek egin zuen bezala.",
     "razon": "Badira betetzen ez diren aginduak.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Zure zaindariek harrabotsik gabe uko egiten diote; Hogeita Hamarrek ohartzen dira (+1 harmonia, −1 AP jasaten duten zaintzagatik)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Bakar batek uko egiten dio; gainerakoek obeditzen dute (−1 harmonia)."
     }
    },
    {
     "t": "Agindua agoran salatu.",
     "razon": "Isildutako bidegabekeria errepikatu egiten da.",
     "ef": {
      "arm": 2,
      "ap": -2,
      "zsj": -1
     },
     "r": "Hiria esnatzen da (+2 harmonia), baina Hogeita Hamarrek hitz egin zutenak jazartzen dituzte (−2 AP) eta zure zaindariek beldurrez bizi dira (−1 jakinduria bakoitzak)."
    }
   ],
   "platon": {
    "txt": "«Gobernu hark, hain boteretsua izanik, ez ninduen ikaratu ezer bidegabea egiteraino. Atera ginenean, beste lauak Salaminara joan ziren eta Leon ekarri zuten, eta ni etxera joan nintzen.» (Sokrates, bere defentsan.) Zazpigarren Gutunean, Platonek Hogeita Hamarrekin izandako etsipena kontatzen du (parafrasia; egiletza eztabaidagarria).",
    "loc": "Apologia 32c-d; Zazpigarren Gutuna 324d-325a"
   },
   "critica": {
    "autor": "Kritias",
    "txt": "Platonen osaba eta Hogeita Hamarren burua, bere gobernua demokraziaren gehiegikerien aurkako sendabide gisa aurkezten zuen (tradizioaren parafrasia).",
    "loc": "Xenofonte, Helenikak II 3, 24-34"
   },
   "glo": [
    "g-justicia"
   ],
   "fase": 2,
   "nota": "Platonek hurbiletik ikusi zuen oligarkia erreala; Sokratesen desobedientzia, obedientziaren muga gisa. (Apologia); Zazpigarren Gutuna parafrasi gisa (egiletza eztabaidagarria)."
  },
  {
   "id": "a_deudas",
   "emoji": "🪙",
   "quien": "Zorpetutako nekazariak",
   "loc": "Errepublika VIII, 555c-556a",
   "situacion": "Zorrek itota, nekazariek zorrak barka daitezela eskatzen dute. Hartzekodunak dira gobernatzen dutenak.",
   "cita": "«Zorrak ezabatu eta lurra banatu.»",
   "griego": "χρεῶν ἀποκοπὰς καὶ γῆς ἀναδασμόν (*khreôn apokopàs kaì gês anadasmón*): «zorren ezeztapena eta lurren banaketa».",
   "pregunta": "Zer egiten du zure hiriak?",
   "opts": [
    {
     "t": "Azken obolora arte kobratu.",
     "razon": "Hitzartutakoa bete egiten da.",
     "ef": {
      "arm": -2,
      "ap": 1
     },
     "r": "Kutxak betetzen dira (+1 AP); zorpetuak galtzeko ezer ez duten erlamando bihurtzen dira (−2 harmonia)."
    },
    {
     "t": "Zati bat legez barkatu, Solonek bezala.",
     "razon": "Bidearen erdiko lege batek haustura saihesten du.",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Aberatsak ere eta pobreak ere ez dira guztiz konforme geratzen (+1 harmonia, −1 AP)."
    },
    {
     "t": "Herriaren babesle batek zor guztiak ezabatzea agintzea.",
     "razon": "Herriari eskatzen duena eman behar zaio.",
     "ef": {
      "arm": 2,
      "escolta": true
     },
     "r": "Herriak txalotu egiten du (+2 harmonia). Platonek esango luke horrela hasten dela tiranoa."
    }
   ],
   "platon": {
    "txt": "Oligarkian gobernatzen dutenek, dirua maileguan emanez, «hirian erlamandoak eta eskaleak ugaltzen dituzte» (parafrasia); eta tirano izateko asmoa duenak herria irabazten du «zorrak ezabatu eta lurra banatzea» aginduz.",
    "loc": "Errepublika VIII, 555e eta 565e-566a"
   },
   "critica": {
    "autor": "Aristoteles",
    "txt": "Solonen *seisákhtheia* («zamen astindua») tiraniarik ekarri ez zuen, saihestu zuen, sendabide gisa kontatzen du (parafrasia).",
    "loc": "Atenastarren Konstituzioa 6 eta 11-12"
   },
   "glo": [
    "g-alma-concupiscible"
   ],
   "fase": 2,
   "nota": "Neurri bera, erreforma edo demagogia gisa irakurria: eztabaida irekia zorraz eta boterez. Fasea: oligarkia → demokrazia."
  },
  {
   "id": "a_stasis",
   "emoji": "🔥",
   "quien": "Bi alderdiak",
   "loc": "Errepublika VIII, 556e-557a",
   "situacion": "Aberatsak eta pobreak kaleetan hiltzen ari dira; alderdi bakoitzak kanpoko aliatuak deitzen ditu laguntzera. Biek eskatzen diete zure zaindariei aukeratzeko.",
   "cita": "«Demokrazia sortzen da, uste dut, pobreek garaitzen dutenean.»",
   "griego": "στάσις (*stásis*): «liskarra, gerra zibila».",
   "pregunta": "Norekin doa zure hiria?",
   "opts": [
    {
     "t": "Aberatsekin: ordena gorde behar da.",
     "razon": "Ordenarik gabe ez dago hiririk.",
     "req": "ejercito",
     "si": {
      "ef": {
       "arm": -1,
       "ap": 1
      },
      "r": "Zure armadak matxinada zapaltzen du (+1 AP), baina zauria irekita geratzen da (−1 harmonia)."
     },
     "no": {
      "ef": {
       "arm": -3
      },
      "r": "Aberatsek galtzen dute; garaileek ez dute barkatzen (−3 harmonia)."
     }
    },
    {
     "t": "Pobreekin: gehiengoa dira.",
     "razon": "Hiria gehien direnena da.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "Pobreek irabazten dute eta kargu guztiak banatzen dituzte (+2 AP). Hiria maila bat jaisten da askatasunerantz (−2 harmonia)."
    },
    {
     "t": "Bi aldeen artean bitartekari aritu.",
     "razon": "Zatitutako hiria ez da hiria.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 2
      },
      "r": "Zure zaindariek su-etena lortzen dute (+2 harmonia)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "zsj": -1
      },
      "r": "Bi alderdiek traidore leporatzen dizute (−1 harmonia eta −1 jakinduria bakoitzak)."
     }
    }
   ],
   "platon": {
    "txt": "«Demokrazia sortzen da, uste dut, pobreek garaitzen dutenean: batzuk hil egiten dituzte, besteak erbesteratu, eta geratzen direnekin gobernua eta kargu guztiak berdintasunez banatzen dituzte.»",
    "loc": "Errepublika VIII, 556e-557a"
   },
   "critica": {
    "autor": "Aristoteles",
    "txt": "Gerra zibilak berdintasunaren ideia kontrajarrietatik sortzen dira: batzuek uste dute guztian berdinak izan behar direla zerbaitetan berdinak direlako, besteek guztian desberdinak zerbaitetan desberdinak direlako (parafrasia).",
    "loc": "Politika V 1, 1301a25-b4"
   },
   "glo": [
    "g-la-ciudad-justa"
   ],
   "fase": 2,
   "nota": "*Stásis* erregimen-aldaketaren motor gisa; Platonentzat, liskarra da beti erorketaren hasiera. Fasea: oligarkia → demokrazia."
  },
  {
   "id": "a_arginusas",
   "emoji": "🌊",
   "quien": "Batzarra",
   "loc": "Apologia 32b-c",
   "situacion": "Hiriak itsas gudu bat irabazi zuen, baina ekaitz batek hondoratuak erreskatatzea eragotzi zuen. Batzarrak, amorratuta, jeneral guztiak bozketa bakar batean kondenatu nahi ditu. Legeak debekatzen du.",
   "cita": "«Legearekin eta zuzenarekin arriskatu behar nuela uste izan nuen.»",
   "griego": "",
   "pregunta": "Zer egiten du batzarra zuzentzen duenak?",
   "opts": [
    {
     "t": "Bozkatu: herria subiranoa da.",
     "razon": "Batzarrak erabakitzen duena lege da.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "Batzarrak indartsu sentitzen da (+2 AP). Jeneralak hil egiten dituzte eta hurrengo urtean hiriak damu du (−2 harmonia)."
    },
    {
     "t": "Legez kanpoko zerbait bozkatzeari uko egin.",
     "razon": "Herria ere ez dago legearen gainetik.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Zure zaindariek legeari eusten diote traidore deitu arren (+1 harmonia, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Bakar batek uko egiten dio eta kanporatu egiten dute (−1 harmonia)."
     }
    },
    {
     "t": "Bereizitako epaiketak proposatu.",
     "razon": "Bakoitzak bere epaiketa merezi du.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Batzarra lasaitzen duzu… egun batez (+1 harmonia)."
     },
     "no": {
      "ef": {
       "ap": -1
      },
      "r": "Inork ez dizu entzuten (−1 AP)."
     }
    }
   ],
   "platon": {
    "txt": "«Atenasko magistratuen, *prytáneis*, artean bakarra izan nintzen legearen aurka ezer egitearen aurka egon zena, eta kontra bozkatu nuen; eta hizlariak salatzeko eta atxilotzeko prest zeuden arren, legearekin eta zuzenarekin arriskatu behar nuela uste izan nuen.»",
    "loc": "Apologia 32b-c; cf. Errepublika VIII, 557b eta 562d"
   },
   "critica": {
    "autor": "Aristoteles",
    "txt": "Askok, elkarturik, hobeto epai dezakete aditu gutxi batzuek baino, denen artean ordaindutako otordu bat bakar batena baino hobea den bezala (parafrasia). Arginusetako akatsa demokraziarena izan al zen, ala bere legeak urratzearena?",
    "loc": "Politika III 11, 1281a42-b10"
   },
   "glo": [
    "g-justicia"
   ],
   "fase": 3,
   "nota": "Batzarra legearen gainetik; kontuz, demokraziaren kondena soil gisa ez irakurtzeko: eragozpenak eztabaida irekitzen du. (Apologia)."
  },
  {
   "id": "a_demagogo",
   "emoji": "📣",
   "quien": "Hizlari bat",
   "loc": "Errepublika VIII, 565c-d",
   "situacion": "Hiria goseak dago. Hizlari batek gari merkea agintzen die guztiei agintea ematen badiozue; ez dago garirik hura betetzeko.",
   "cita": "«Erro horretatik, eta ez beste ezetik, sortzen da tiranoa.»",
   "griego": "προστάτης (*prostátes*): «babeslea, buru jartzen dena».",
   "pregunta": "Zer egiten du batzarrak?",
   "opts": [
    {
     "t": "Agintea eman: behar duguna agintzen du.",
     "razon": "Goseak daudela ez da itxaroten.",
     "ef": {
      "arm": 1,
      "ap": 2,
      "escolta": true
     },
     "r": "Txalotu egiten zaituzte (+1 harmonia, +2 AP). Garia iristen ez denean, kanpoko etsai bat bilatuko du goseaz ahaztu dadin."
    },
    {
     "t": "Egia esaten duenari entzun: gerrikoa estutu beharko da.",
     "razon": "Ezinezko promesa gezurra da.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Hiriak sakrifizioa onartzen du zergatia ulertzen duelako (+1 harmonia, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Inork ez daki azaltzen eta goseak amorru bihurtzen dira (−2 harmonia)."
     }
    },
    {
     "t": "Dagoena prezio zuzenean banatu.",
     "razon": "Gutxi hori, banatuta, guztientzat aski da.",
     "ef": {
      "ap": -2
     },
     "r": "Inor ez da aberasten eta inor ez da goseak hiltzen (−2 AP)."
    }
   ],
   "platon": {
    "txt": "Herriak ohi du «bat buru jarri bere babesle gisa, eta elikatu eta handitu»; eta «erro horretatik, eta ez beste ezetik, sortzen da tiranoa». Gero, herriak buruzagi bat behar izan dezan, «beti gerraren bat eragiten ari da».",
    "loc": "Errepublika VIII, 565c-d eta 566e-567a"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "«Nork gobernatu behar du?» galderaren ordez «nola galarazi gobernari txarrek gehiegi kalte egitea?» jartzea proposatzen du (parafrasia).",
    "loc": "Gizarte irekia eta bere etsaiak, I, 7. kap. (1945)"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 3,
   "nota": "Demokraziatik tiraniarako igarotzea Platonen arabera; jokoak azaldu egiten du eta sendabideei buruzko galdera irekita uzten du."
  },
  {
   "id": "a_golpe",
   "emoji": "🏯",
   "quien": "Herriaren babeslea",
   "loc": "Errepublika VIII, 565d-566b",
   "situacion": "Herriaren babeslea zauriturik itzultzen da eta bere etsaiek eraso eginziotela dio. Guardia pertsonal bat eskatzen du; bere jarraitzaileek, gainera, gau honetan Akropolia hartzea eskaintzen diote.",
   "cita": "«Tiranoen eskaera ospetsua.»",
   "griego": "",
   "pregunta": "Zer egiten du zure hiriak?",
   "opts": [
    {
     "t": "Guardia eman: babestu egin behar da.",
     "razon": "Zerbait gertatzen bazaio, nork defendatuko du herria?",
     "req": "semilla",
     "si": {
      "ef": {
       "arm": -3
      },
      "r": "Bidea prestatua zuen: hiria nagusi batekin esnatzen da (−3 harmonia)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "escolta": true
      },
      "r": "Guardia txiki bat jasotzen du. Lehen urratsa da (−1 harmonia)."
     }
    },
    {
     "t": "Ukatu eta Kontseiluari abisatu.",
     "razon": "Bere hiritarren aurka armak eskatzen dituenak aukeratu du jada.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 2,
       "ap": -1
      },
      "r": "Kolpea desarmatzen da (+2 harmonia, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Inor ez da ukatzera ausartzen (−2 harmonia)."
     }
    },
    {
     "t": "Bere jarraitzaileek eskatzen dutena entzun, baina legeen bidez.",
     "razon": "Arrazoiren bat izango dute hainbeste badira.",
     "ef": {
      "arm": 1,
      "ap": -2
     },
     "r": "Batzuk konformatzen dira eta beste batzuek bigun deitzen dizute (+1 harmonia, −2 AP)."
    }
   ],
   "platon": {
    "txt": "Babeslea arriskuan ikusten denean, herriari guardia pertsonal bat eskatzen dio, «tiranoen eskaera ospetsua», eta herriak ematen dio, haren beldur eta bere buruan konfiantzaz.",
    "loc": "Errepublika VIII, 565d-566b (adibide historikoa Pisistrato da; Herodoto I 59)"
   },
   "critica": {
    "autor": "Aristoteles",
    "txt": "Pisistratoren gobernua neurritsua eta herrikoia izan zen, «tiranoarena baino hiritarrarena gehiago», eta askok urrezko aro gisa gogoratzen zuten (parafrasia).",
    "loc": "Atenastarren Konstituzioa 16"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 3,
   "nota": "Nola sortzen den tirano bat herriaren onespenetik; eragozpenak galarazten du arazoa «txarretara» eta «onetara» murriztea. Fasea: demokrazia → tirania."
  },
  {
   "id": "a_conjura",
   "emoji": "🗡️",
   "quien": "Tiranoa",
   "loc": "Errepublika VIII, 567b-c",
   "situacion": "Hiria urteak daramatza tirano baten eskuetan. Hurrengo prozesioan hiltzeko konspirazio baten zurrumurrua dabil.",
   "cita": "«Medikuenaren kontrako garbiketa bat.»",
   "griego": "",
   "pregunta": "Zer egiten du tiranoak?",
   "opts": [
    {
     "t": "Guardia gehiago eta prebentziozko exekuzioak.",
     "razon": "Hobe prebenitzea erortzea baino.",
     "ef": {
      "arm": -2,
      "ap": 1,
      "zsj": -1
     },
     "r": "Bizirik irauten du (+1 AP), baina onenak ezabatzen ditu (−2 harmonia eta −1 jakinduria zaindari bakoitzari)."
    },
    {
     "t": "Legeak itzuli eta uko egin.",
     "razon": "Beldurrarekin bakarrik eusten den botereak ez du merezi.",
     "ef": {
      "arm": 3,
      "ap": -3
     },
     "r": "Tiranoek gutxik egin zuten. Hiriak arnasa hartzen du (+3 harmonia) eta zerotik hasten da (−3 AP)."
    },
    {
     "t": "Kasurik ez egin: inor ez da ausartuko.",
     "razon": "Guztien beldur denak galdu du jada.",
     "req": "defensa",
     "si": {
      "ef": {
       "arm": -1
      },
      "r": "Oraingoan ez da ezer gertatzen… oraingoz (−1 harmonia)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "kill": [
        "Z",
        1
       ]
      },
      "r": "Konspirazioak erdizka garaitzen du: zure zaindarietako bat erortzen da (−1 harmonia)."
     }
    }
   ],
   "platon": {
    "txt": "Tiranoak zerbait balio duen guztiaz libratu behar du, «medikuenaren kontrako garbiketa bat: haiek txarrena kentzen dute eta onena uzten, eta hark alderantziz». Eta «kartzela batean bezala giltzapean» bizi da, hirian bidaiatzera irten ezin duen bakarra eta gainerakoek ikusten dutena ikusi ezin duena.",
    "loc": "Errepublika VIII, 567b-c; IX, 579b-c"
   },
   "critica": {
    "autor": "Tuzidides",
    "txt": "Atenasek estatua bat jarri zien tiranizida Harmodiori eta Aristogitoni; Tuzididesek kondaira zuzentzen du: tiranoaren anaia hil zuten, eta kexa pribatu batengatik, ez askatasunagatik (parafrasia).",
    "loc": "Peloponesoko Gerraren Historia VI 54-59"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 4,
   "nota": "Tiranoaren arima ekintzan: gehien egin dezakeena da preso gehien dagoena. Sinplifikatua: zaindari baten heriotza «0,4ko probabilitatearekin» «defentsaren» menpe geratzen da. (Err. VIII-IX)."
  },
  {
   "id": "a_siracusa",
   "emoji": "🏛️",
   "quien": "Siziliako tirano bat",
   "loc": "Zazpigarren Gutuna 328b-c",
   "situacion": "Beste hiri bateko tirano batek zure zaindari onenak bere gortera gonbidatzen ditu: gobernari filosofo bihur dezaten nahi du.",
   "cita": "«Hitzen gizon hutsa, lan batean eskua jartzera inoiz ausartzen ez dena.» (parafrasia)",
   "griego": "",
   "pregunta": "Joaten uzten al dituzu?",
   "opts": [
    {
     "t": "Joan daitezela eta benetan hezten saia daitezela.",
     "razon": "Filosofoak ekiten ez badu, zertarako balio du?",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Tiranoak lege bat bigunagotzen du. Gutxi da, baina ez da ezer ez (+1 harmonia, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "ap": -2
      },
      "r": "Haiekin nekatzen da eta esklabo saltzen ditu; erreskatea ordaintzen duzu (−1 harmonia, −2 AP)."
     }
    },
    {
     "t": "Eragina eta dirua bila joan daitezela.",
     "razon": "Lagun boteretsu batek beti laguntzen du.",
     "ef": {
      "ap": 2,
      "zsj": -1
     },
     "r": "Aberats eta ez hain jakintsu itzultzen dira (+2 AP, −1 jakinduria bakoitzak)."
    },
    {
     "t": "Ez daitezela joan: tirano batekin ez da itunik egiten.",
     "razon": "Ikasi nahi ez duena ez da hezten.",
     "ef": {},
     "r": "Sirakusak lehen bezala jarraitzen du, eta zure hiriak ere bai."
    }
   ],
   "platon": {
    "txt": "Sirakusara joan zen batez ere bere buruaren lotsagatik, ez zedin ager «hitzen gizon hutsa, lan batean eskua jartzera inoiz ausartzen ez dena» (parafrasia; egiletza eztabaidagarria).",
    "loc": "Zazpigarren Gutuna 328b-c; cf. Errepublika V, 473c-d"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "Bidaia hauek Platonek tirano otzan bat bilatzen zuenaren froga gisa irakurtzen ditu; beste irakurle batzuek, filosofiak ikasi nahi ez duena gobernatu ezin duenaren froga gisa (parafrasia).",
    "loc": "Gizarte irekia eta bere etsaiak, I (1945)"
   },
   "glo": [
    "g-sabiduria",
    "g-tirania"
   ],
   "fase": 4,
   "nota": "Errege-filosofoaren proposamena historian probatua; Erren mitorako zubia. Zazpigarren Gutuna parafrasi gisa (egiletza eztabaidagarria)."
  },
  {
   "id": "a_amnistia",
   "emoji": "🕊️",
   "quien": "Sufritu zutenak",
   "loc": "Zazpigarren Gutuna 325b-c",
   "situacion": "Hainbeste jende jazarri zuen gobernua erori da. Haren kolaboratzaileak hirian jarraitzen dute. Sufritu zutenek zigorra eskatzen dute.",
   "cita": "«Orduan itzuli zirenek neurritasun handia erabili zuten.» (parafrasia)",
   "griego": "ἀμνηστία (*amnestía*): iraganeko gaitzen «ahaztea».",
   "pregunta": "Zer egiten du hiriak?",
   "opts": [
    {
     "t": "Mendekua: guztiek ordain dezatela.",
     "razon": "Zigorrik gabe ez dago justiziarik.",
     "ef": {
      "arm": -2,
      "ap": 1
     },
     "r": "Haien ondasunak konfiskatzen dira (+1 AP); hiria berriro zatitzen da (−2 harmonia)."
    },
    {
     "t": "Amnistia orokorra: debekatuta dago iraganeko gaitzak gogoratzea.",
     "razon": "Hiriak berriro bat izan behar du.",
     "ef": {
      "arm": 2,
      "ap": -1
     },
     "r": "Hiriak arnasa hartzen du (+2 harmonia), nahiz eta errudun asko zigorrik gabe geratu (−1 AP)."
    },
    {
     "t": "Epaiketa beren eskuekin hil zutenentzat bakarrik.",
     "razon": "Ez mendekurik ez ahanzturarik: justizia.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Justizia zaila, baina justizia (+1 harmonia)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Epaiketak kontu-garbiketa bihurtzen dira (−1 harmonia)."
     }
    }
   ],
   "platon": {
    "txt": "Hogeita Hamarrak erorita, «orduan itzuli zirenek neurritasun handia erabili zuten» (parafrasia; egiletza eztabaidagarria); hala ere, demokrazia berrezarri hark berak epaitu zuen Sokrates.",
    "loc": "Zazpigarren Gutuna 325b-c; cf. Errepublika VIII, 545d"
   },
   "critica": {
    "autor": "Aristoteles",
    "txt": "Adiskidetze hau ezagutzen duen noblerena eta politikoena dela goraipatzen du (parafrasia).",
    "loc": "Atenastarren Konstituzioa 40, 2-3"
   },
   "glo": [
    "g-justicia",
    "g-la-ciudad-justa"
   ],
   "fase": 1,
   "nota": "Bankuko erorketa behetik geldiarazten duen karta bakarra: hiria ez da erregimenez gora igotzen (546a), baina berreskuratutako harmoniak hurrengo jaitsiera atzeratzen du. Erregimen-jaitsiera baten ondoren ateratzen da (1. fasea edo okerragoa). Zazpigarren Gutuna parafrasi gisa (egiletza eztabaidagarria)."
  }
 ],
 "almas": [
  {
   "id": "alma_razon",
   "name": "Arima aristokratikoa (arrazoiak gobernatzen du)",
   "lema": "Zati bakoitzak berea egiten du arimaren barruan ere.",
   "txt": "Arrazoiak (*logistikón*) agintzen du, gogo suminkorrak (*thymós*) defendatzen du eta gutiziak (*epithymía*) obeditzen du. Justizia ez da politikoa bakarrik: arimaren hiru zatien barne-ordena da.",
   "loc": "Errepublika IV, 441c-442d; IX, 580d-581a"
  },
  {
   "id": "alma_thymos",
   "name": "Arima timokratikoa (gogo suminkorrak gobernatzen du)",
   "lema": "Ohorea eta boterea maite ditu jakintza baino gehiago.",
   "txt": "Gizon timokratikoak bere barruko agintea elementu haserrekorrari eta garaipenaren zaleari ematen dio. *Thymós* zati haserrekorra edo biziona da; bere gehiegizkoa anbizioa da (*philotimía*).",
   "loc": "Errepublika VIII, 548d-550b"
  },
  {
   "id": "alma_epithymia_nec",
   "name": "Arima oligarkikoa (beharrezko gutiziak gobernatzen du)",
   "lema": "Aurrezten du, gastatzeko beldur da, eta irabazirik ematen ez duen desio oro asetu gabe uzten du.",
   "txt": "Gizon oligarkikoak tronuan jartzen du gutizia-elementua, diruaren zalea. *Epithymía* gutiziazko zatia da; hemen bere forma «beharrezkoa» nagusitzen da, diruarena.",
   "loc": "Errepublika VIII, 553a-554e"
  },
  {
   "id": "alma_epithymia_libre",
   "name": "Arima demokratikoa (gutizi berdinek gobernatzen dute)",
   "lema": "Lotsagabekeriari ausardia deitzen dio, eta anarkiari, askatasuna.",
   "txt": "Egunero bidean aurkitzen duen desioari amore emanez bizi da: gaur edaten du eta musika entzuten du, bihar baraurik egiten du, etzi politikan ibiltzen da. Agintzen duen zatirik gabe, ez dago ordenarik ez barnean ez kanpoan: neurririk gabeko askatasunak beharrezkoa eta soberakoa berdintzen ditu.",
   "loc": "Errepublika VIII, 561a-561e"
  },
  {
   "id": "alma_eros_tirano",
   "name": "Arima tiranikoa (eztendun desioak gobernatzen du: Eros)",
   "lema": "Kanpoan dena egin dezakeena da barruan esklaboena.",
   "txt": "Tiranoaren arimaren barruan agintari den desio batek, zizta baten gisa, gainerakoak gobernatzen ditu; benetan esklabo da agintzen duen arren, beldurrez betea, lagunik gabe, nahi duena egiteko ezgai: gizonen artean zorigaiztokoena. Platonen argudioa azaltzen da, ez edozein erregimen errealen gaineko iritzirik.",
   "loc": "Errepublika IX, 571a-580a"
  }
 ],
 "tabla": [
  {
   "name": "Aristokrazia",
   "alma": "arrazoia (*logistikón*)",
   "causa": "gobernatzen dutenen arteko liskarra",
   "cita": "«Bakoitzak berea egitea… da justizia.»",
   "loc": "Errepublika IV, 433a"
  },
  {
   "name": "Timokrazia",
   "alma": "gogo suminkorra (*thymós*)",
   "causa": "diruaren maitasunak ohorea ordezkatzen du",
   "cita": "«Konstituzio oro aldatzen da… liskarra sortzen denean.»",
   "loc": "Errepublika VIII, 545d"
  },
  {
   "name": "Oligarkia",
   "alma": "beharrezko gutizia (dirua)",
   "causa": "pobreek aberatsak garaitzen dituzte; hiria zatitzen da",
   "cita": "«Zenbat eta gehiago estimatzen duten aberastasuna, orduan eta gutxiago estimatzen dute bertutea.»",
   "loc": "Errepublika VIII, 550e"
  },
  {
   "name": "Demokrazia",
   "alma": "gutizi berdinak (askatasuna)",
   "causa": "askatasun gehiegiak babesle bat eskatzen du",
   "cita": "«Bakoitzak nahi duena egin dezake.»",
   "loc": "Errepublika VIII, 557b"
  },
  {
   "name": "Tirania",
   "alma": "desio-erregea (Eros)",
   "causa": "eskaileraren hondoa: kolapsoa",
   "cita": "«Gehiegizko askatasuna… gehiegizko esklabotasunean.»",
   "loc": "Errepublika VIII, 564a"
  }
 ]
};
