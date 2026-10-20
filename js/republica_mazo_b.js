// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/republica_mazo_b.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const REP_MAZO_B = {
 "acciones": [
  {
   "id": "oficio",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Pertsona bakoitzak lanbide bat",
   "d": "Bakoitzak gauza bakar bat egiten du, berea: +6 ekoizpen eta, ekoizleek hiria gainezka egiten ez badute, +1 harmonia.",
   "cita": "«Gutako bakoitza ez da besteen berdina jaiotzen, naturaz desberdina baizik, lan desberdin baterako gai. Eta gehiago, hobeto eta errazago egiten da norbaitek gauza bakar bat egiten duenean, berea, bere garaian, besteak utzita.»",
   "loc": "Errepublika II, 370a-c; IV, 433a-b",
   "nota": "Lanaren banaketa da hiriaren jatorria eta justiziaren sustraia: berea egitea. Horregatik karta honek irekitzen du sorta. Sinplifikatuta: «klaserik gainezka ez egotea» honela neurtzen da: «ekoizleak ez dira gehiengo gehiegizkoa».",
   "ef": {
    "prod": 6,
    "si": {
     "req": "!mayoriaE",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_mercado",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Merkatua eta moneta",
   "d": "Hiria erosotasunean hazten da, ez justizian: +10 ekoizpen, harmoniarik gabe. «Hiri puztua» gertaerari atea irekitzen dio.",
   "cita": "«Merkatariak, merkatu bat eta moneta bat beharko dira, trukearen ikurra. Horrela hiria hazten da. Baina luxua bilatzen badugu, ez dugu hiri osasuntsu bat sortzen, hiri sukartsu bat baizik, beharrezkoak ez diren gauzez puztua.»",
   "loc": "Errepublika II, 371a-d; 372e-373a",
   "nota": "Platonek pólis «osasuntsua» eta «puztua» bereizten ditu, φλεγμαίνουσα (*phlegmaínousa*). Ongizate materiala ez da, berez, justizia: hazkundeari eta mugei buruz eztabaidatzeko baliagarria.",
   "ef": {
    "prod": 10
   }
  },
  {
   "id": "b_labranza",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Lurren eta lanen banaketa",
   "d": "+8 ekoizpen. Ekoizleek biztanleria osoa elikatzen badute, +1 harmonia gehiago.",
   "cita": "«Nekazariak ez du berak egingo goldea ez aitzurra: errementariak egingo dizkio. Eta horrela, lanbide bakoitzak besteei zerbitzatzen die, eta askoren beharretatik sortzen da hiria.»",
   "loc": "Errepublika II, 369b-370a",
   "nota": "Ekoizle-klasea ez da mespretxagarria: oinarria da. Haren neurritasunik eta lanik gabe, ez gobernua ez defentsa ez dira eusten.",
   "ef": {
    "prod": 8,
    "si": {
     "req": "alimenta",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_frugalidad",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Hiri osasuntsua, ez puztua",
   "d": "Luxuari uko egitea: +1 harmonia eta txanda honetan «Hiri puztua» gertaerak ez du kalterik egiten, baina −4 ekoizpen.",
   "cita": "«Nahi duzu lehenik hiri osasuntsu bat aztertzea? Ogia eta ardoa jango dute, gatza, oliba eta gazta izango dituzte; tipulak eta barazkiak egosiko dituzte. Eta bakean eta osasunez igaroko dute bizitza, eta zahartuta hilko dira, seme-alabei bizitza bera utziz.»",
   "loc": "Errepublika II, 372a-d",
   "nota": "Lehen hiriaren austeritatea. Glaukonek «txerrien hiria» deitzen dio; beharraren eta gutiziaren arteko eztabaida irekita geratzen da, erabakirik gabe.",
   "ef": {
    "arm": 1,
    "prod": -4,
    "escudo": {
     "tags": [
      "b_ev_hinchada"
     ],
     "turnos": 1
    }
   }
  },
  {
   "id": "musica",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Hezkuntza: musika (μουσική, *mousiké*)",
   "d": "Erritmoak eta harmoniak arima moldatzen dute: +1 ausardia eta +1 neurritasuna zaindari laguntzaile bakoitzari. «Zaindari moldatua» prestatzen du.",
   "cita": "«Musikaren bidezko hezkuntza da nagusia, erritmoa eta harmonia arimaren barrenera sartzen direlako eta, ondo hezten bada, dotore egiten dutelako; eta gaizki bada, kontrakoa.»",
   "loc": "Errepublika III, 401d-402a; II, 376e-377a",
   "nota": "Platonentzat «musika»k hitza, kontakizuna eta melodia hartzen ditu: izaera moldatzen du arrazoitu aurretik. Hezitzea arima moldatzea da.",
   "ef": {
    "gv": 1,
    "et": 1
   }
  },
  {
   "id": "b_gimnasia",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Hezkuntza: gimnasia (γυμναστική, *gymnastiké*)",
   "d": "+1 ausardia zaindari laguntzaile bakoitzari. Lehenago «Musika» jokatu bada, +1 harmonia lortutako oreka dela eta.",
   "cita": "«Ez da gorputz onak arima ona egiten duena, alderantziz baizik: arima onak, bere bertuteaz, gorputza ahalik eta onena egiten du. Gimnasia eta musika ez dira bata gorputzerako eta bestea arimarako: biek, batez ere, arima hezten dute.»",
   "loc": "Errepublika III, 403c-404e; 410b-c",
   "nota": "Musikarik gabeko gimnasiak abereki bihurtzen du; gimnasiarik gabeko musikak biguntzen du. Sinplifikatuta: Musikarik gabe ez dago zigor propiorik (sortak zaindari «amorratu» bat aipatzen zuen bereekin ere).",
   "ef": {
    "gv": 1,
    "si": {
     "req": "flag:musica",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_equilibrio_guardian",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Zaindari moldatua",
   "d": "Musikaren eta gimnasiaren ondoren: +2 harmonia. Zaindaria amorratua da etsaiarekin eta otzana bereekin: «Lurraldearen aldeko gerra»k kalte erdia egiten du.",
   "cita": "«Musika eta gimnasia neurri zuzenenean nahasten dituena eta arimari proportzioz aplikatzen dizkiona, hura deituko dugu hezienik eta harmoniatsuena, hari-afinatzailea baino askoz gehiago.»",
   "loc": "Errepublika III, 410c-412a",
   "nota": "Nahasketa zuzena, μετριότης (*metriótes*): gogo ondo hezia arrazoiaren aliatua da (440e-441a). Sinplifikatuta: gimnasia eskatzen da eta +2 Musika ere egon bada soilik dator; kalte erdia gertaerak aplikatzen du.",
   "req": "flag:b_gimnasia",
   "ef": {
    "si": {
     "req": "flag:musica",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "pruebas",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Zaindarien probak",
   "d": "Laguntzaileak hezita badaude, onena gobernari bihurtzen da (laguntzaile 1etik gobernari 1era). Ez badago, behar ez zena igotzen da: −1 harmonia.",
   "cita": "«Adin guztietan behatu behar zaie, printzipio hori gordetzen duten ikusteko, eta ez daitezela liluratu ez behartu, hiriarentzat onena egin behar dela dioen iritzia ahaztu arte. Probatik garbi aterako dena, suan probatutako urrea bezala, buru eta zaindari jarriko dugu.»",
   "loc": "Errepublika III, 413c-414a",
   "nota": "Gobernariak zaindarien artetik ateratzen dira, merezimendu frogatuagatik, ez jaiotzagatik (415b-c). Sinplifikatuta: hezkuntza jokatutako Gimnasiarekin bakarrik egiaztatzen da (sortak Musika eta Gimnasia eskatzen zituen).",
   "ef": {
    "arm": -1,
    "si": {
     "req": "flag:b_gimnasia",
     "ef": {
      "arm": 1,
      "mov": [
       "G",
       "Z",
       1
      ]
     }
    }
   }
  },
  {
   "id": "mito",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Metalen mitoa",
   "d": "Partekatutako kontakizun batek pólisa kohesionatzen du: +2 harmonia eta, 2 txandatan, «Desberdintasunaren matxinada»k ez du kalterik egiten.",
   "cita": "«Esango dugu: anaiak zarete, baina jainkoak, zuek moldatzean, urrea nahastu zuen agintzeko gai direnengan, zilarra laguntzaileengan, eta burdina eta brontzea nekazarietan eta eskulangileengan. Eta jainkoak agintzen duen lehen eta garrantzitsuena da seme bakoitzaren arimak zer metal daraman zaintzea.»",
   "loc": "Errepublika III, 414b-415c",
   "nota": "«Gezur noblea», γενναῖον ψεῦδος (*gennaîon pseûdos*). Hiri justu bat sor al daiteke hitzez hitz egia ez den kontakizun batean oinarrituta? Popperrek propaganda ikusten du; beste batzuek, fundazio-mitoa. Sinplifikatuta: «egia / ikur» aukerarik gabe.",
   "ef": {
    "arm": 2,
    "escudo": {
     "tags": [
      "b_ev_desigualdad"
     ],
     "turnos": 2
    }
   }
  },
  {
   "id": "b_hijo_bronce",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Brontzezko seme bat urrezko etxean",
   "d": "Mitoaren ondoren: bakoitza bere arimaren klasera, ez bere familiarenera. Arima urrezko ekoizle bat gobernari bihurtzen da; +1 harmonia hiria oreka egoeran geratzen bada.",
   "cita": "«Haiengandik arimaren barruan brontzea edo burdina duen seme bat jaiotzen bada, ez dezatela inolaz errukirik izan: eman iezaiozue bere naturak merezi duen maila eta bultza ezazue eskulangileen edo nekazarien artera. Eta hauengandik urrea edo zilarra duen bat jaiotzen bada, ohoratu eta gora eraman ezazue.»",
   "loc": "Errepublika III, 415a-c",
   "nota": "Mitoaren kontrapartida zuzena: klasea arimaren naturari zor zaio, ez herentziari. Sinplifikatuta: mugimendua beti ekoizletik gobernarira da (sortak kontrakoa ere onartzen zuen).",
   "req": "flag:mito",
   "ef": {
    "mov": [
     "E",
     "Z",
     1
    ],
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "comun",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Jabetzarik gabeko zaindariak",
   "d": "Etxerik, lurrik eta urrerik gabe: +2 harmonia eta gobernuan ez da fakziorik izango, baina −6 ekoizpen. «Zoriontsuak al dira zaindariak?» eztabaida irekitzen du.",
   "cita": "«Inork ez du etxerik, lurrik ez ondasun propiorik izango. Besteengandik jasoko dute mantenua, beren zaintzaren soldata gisa, eta komunean gastatuko dute. Haiei bakarrik debekatuta dago urrea eta zilarra ukitzea, ez bada beren ondasunak izanda denen ona zaintzeari utziko diotelako.»",
   "loc": "Errepublika III, 416d-417b",
   "nota": "Zaindarien ondasun-komunitatea. Aristotelesek hau da hain zuzen kritikatzen duena (Politika II, 1261a-1264b): komuna zaindu gabe geratzen da. Eztabaida irekia.",
   "ef": {
    "arm": 2,
    "prod": -6
   }
  },
  {
   "id": "rey",
   "v": "b",
   "fase": 2,
   "ap": 3,
   "name": "Errege filosofoa",
   "d": "Jakinduria osoko gobernari bat badago bakarrik: +3 harmonia. Hura gabe, karta blokeatuta dago.",
   "cita": "«Filosofoek hirietan erreinatzen ez badute, edo gaur egun errege deitzen direnek benetan eta indarrez filosofatzen ez badute, eta botere politikoa eta filosofia bat ez badatoz, ez dago atsedenik hirien gaitzentzat, ezta, uste dut, giza arrazarenentzat ere.»",
   "loc": "Errepublika V, 473c-d",
   "nota": "Tesirik famatuena eta eztabaidatuena: Popperrek autoritarismoaren sustraitzat jotzen du; beste batzuek «agin dezala dakienak, ez nahi duenak» gisa irakurtzen dute. Sinplifikatuta: ez ditu jakinduria-kartak bikoizten.",
   "req": "sabios",
   "ef": {
    "arm": 3
   }
  },
  {
   "id": "bajar",
   "v": "b",
   "fase": 2,
   "ap": 2,
   "name": "Kobazulora itzuli",
   "d": "Errege filosofoaren ondoren: gobernari jakintsuak badaude eta gobernatzera jaisten badira, +2 harmonia hurrengo 2 txandetako bakoitzaren hasieran.",
   "cita": "«Jaitsiko zarete, bakoitza bere txandan, besteen bizilekura, eta iluntasunean begiratzen ohituko zarete. Ederraren, zuzenaren eta onaren egia ikusi izango duzuelako; eta horrela hiria esna gobernatuko da, ez ametsetan, gaur egungoak bezala, itzalengatik borrokatzen direnak.»",
   "loc": "Errepublika VII, 519c-520d",
   "nota": "Filosofoa ez da goian geratzen: bere justizia gobernatzera itzultzea da. Sinplifikatuta: efektuak 2 txandatan irauten du (ez partidaren gainerakoan) eta ez da eteten gobernariak desagertzen badira.",
   "req": "flag:rey",
   "ef": {
    "si": {
     "req": "sabios",
     "ef": {
      "dura": {
       "k": "arm",
       "n": 2,
       "turnos": 2
      }
     }
    }
   }
  },
  {
   "id": "b_consejo",
   "v": "b",
   "fase": 2,
   "ap": 1,
   "name": "Kontseilu deliberatzailea",
   "d": "Gobernariek osoari buruz deliberatzen dute: +1 jakinduria gobernari bakoitzari eta +1 harmonia.",
   "cita": "«Naturaren arabera sortutako hiria osorik jakintsua litzateke buru den eta agintzen duen zati hari esker, txikiena den horri; eta hari dagokio, antza denez, beste guztien artean bakarrik σοφία (*sophía*) deitu behar zaion zientziaz jabetzea.»",
   "loc": "Errepublika IV, 428c-429a",
   "nota": "Hiriaren jakinduria osoari buruz deliberatzen jakitean datza, ez jakintza teknikoen batuketan. Sinplifikatuta: +1 jakinduria gobernariko (sortak +2 esaten zuen).",
   "ef": {
    "zsj": 1,
    "arm": 1
   }
  },
  {
   "id": "b_unidad",
   "v": "b",
   "fase": 2,
   "ap": 2,
   "name": "Hiri bakar bat",
   "d": "+1 harmonia, edo +2 hiru funtzioak betetzen badira. Hurrengo txandan, «Fakzioa gobernuan» gertaerak ez du kalterik egiten.",
   "cita": "«Ba al dago hiri batentzat hura desegiten duena eta bat izan beharrean askotan bihurtzen duena baino gaitz handiagorik? Eta hura batzen duena eta bat egiten duena baino on handiagorik? Hiritarren artean plazera eta mina komunak direnean —guztiak gauza beraz pozten eta atsekabetzen direnean—, partekatze horixe da hiria lotzen duena.»",
   "loc": "Errepublika V, 462a-e; IV, 423c-d",
   "nota": "Batasuna da Platonen helburu politikoa; Aristotelesek eragozten du gehiegi bat den hiria hiri izateari uzten diola (Politika II, 1261a). Sinplifikatuta: fakzioa txanda batez baliogabetzen du, bere kaltea erdira murriztu beharrean.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 1
     }
    },
    "escudo": {
     "tags": [
      "b_ev_faccion"
     ],
     "turnos": 1
    }
   }
  },
  {
   "id": "b_tamano",
   "v": "b",
   "fase": 2,
   "ap": 1,
   "name": "Ez handia ez txikia",
   "d": "Hiria bat izaten jarraitzen duen bitartean bakarrik hazten da: 30 biztanle baino gutxiago badu, +1 harmonia tamainagatiko zigorra konpentsatzeko.",
   "cita": "«Hiriak bat izanik hazi nahi duen neurrira, hazi dadila; baina ez harantzago. Ez bedi izan itxuraz ez txikia ez handia, bat baizik eta aski.»",
   "loc": "Errepublika IV, 423b-d",
   "nota": "Tamainaren irizpidea ez da handitasuna, batasuna eta buruaskitasuna baizik, αὐτάρκεια (*autárkeia*). Sinplifikatuta: +1 harmonia 30 biztanle baino gutxiagorekin; ez du gehiegizko hazkundea geldiarazten.",
   "ef": {
    "si": {
     "req": "pequena",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_cada_cual_lo_suyo",
   "v": "b",
   "fase": 3,
   "ap": 2,
   "name": "Bakoitza berean",
   "d": "Justizia jokoan: +3 harmonia jakinduria, defentsa eta elikagaia batera betetzen badira; bestela, +1. Inoiz ez du kentzen.",
   "cita": "«Hasieratik esaten ari ginen hau —bakoitzak berea egitea— justizia dela ematen du, edo haren forma bat. Berea egitea eta askoren gauzetan ez sartzea: hori da zuzena.»",
   "loc": "Errepublika IV, 433a-b; 443c-d",
   "nota": "Justiziaren definizio operatiboa, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*). Sinplifikatuta: bi maila (+3 edo +1), huts egiten duen klase bakoitzeko 1 kendu beharrean.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "b_armonia_alma",
   "v": "b",
   "fase": 3,
   "ap": 2,
   "name": "Hiria eta arima",
   "d": "+2 harmonia. Arrazoiak agintzen badu (gobernari jakintsuak badaude), 2 txandatan gertaera negatibo bakoitzak 1 gutxiago kentzen du.",
   "cita": "«Hirian hiru klase dauden bezala, hala bakoitzaren arimak hiru zati ditu: arrazoitzen duena, sutan jartzen dena eta desiratzen duena. Zuzena da zati bakoitzak berea egiten duena, eta arrazoiak agintzen du, eta gogoak aliatu gisa obeditzen dio.»",
   "loc": "Errepublika IV, 439d-441c; 441d-442d",
   "nota": "Arima-hiria paralelismoa, USEn gehien galdetzen dena: barne-justiziak politikoaren egitura bera du. Sinplifikatuta: babesa karta jokatzean erabakitzen da.",
   "ef": {
    "arm": 2,
    "si": {
     "req": "sabios",
     "ef": {
      "dura": {
       "k": "menos",
       "n": 1,
       "turnos": 2
      }
     }
    }
   }
  },
  {
   "id": "b_salud_alma",
   "v": "b",
   "fase": 3,
   "ap": 1,
   "name": "Arimaren osasuna",
   "d": "Berrantolatu inor kanporatu gabe: +1 harmonia, eta +1 gehiago hiriaren funtzioren batek huts egiten badu.",
   "cita": "«Justizia sortzea arimaren zatiak bere ordena naturalean jartzea da, batzuek agin dezaten eta besteek obeditu; injustizia sortzea batzuen besteen aurkako matxinada da. Justizia da, beraz, arimaren osasuna; injustizia, bere gaixotasuna.»",
   "loc": "Errepublika IV, 443c-444e",
   "nota": "Justizia = osasuna; injustizia = arimaren gaixotasuna: Glaukoni erantzuten dio (merezi al du zuzena izateak?). Sinplifikatuta: «desordena garbitzea» +1 harmonia bihurtzen da oreka falta denean.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "!equilibrio",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_reparto_virtud",
   "v": "b",
   "fase": 3,
   "ap": 1,
   "name": "Klase bakoitza ohoratu",
   "d": "Klaserik ez dago soberan: +1 harmonia eta +1 jakinduria gobernari bakoitzari, +1 ausardia laguntzaile bakoitzari eta +1 neurritasuna ekoizle bakoitzari.",
   "cita": "«Ez dugu hiria sortzen klase bakar bat bereziki zoriontsu izan dadin, hiri osoa ahalik eta zoriontsuena izan dadin baizik. Izan ere, hiri horretan espero genuen justizia aurkitzea.»",
   "loc": "Errepublika IV, 420b-421c",
   "nota": "Adimantori erantzuna: osoaren zoriontasuna zati batenaren aurretik. Gobernari zuzenak ez du aberasten; zerbitzatzen du. Gainera, «Desberdintasunaren matxinada» saihesten du.",
   "ef": {
    "arm": 1,
    "zsj": 1,
    "gv": 1,
    "et": 1
   }
  }
 ],
 "eventos": [
  {
   "id": "b_ev_entrometimiento",
   "v": "b",
   "name": "Zapatariak gobernatu nahi du",
   "loc": "Errepublika IV, 434a-c",
   "cita": "«Arotzak zapatari izan nahi badu, edo zapatariak arotz, tresnak eta ohoreak trukatuz, ez du hiriari kalte handirik egiten. Baina naturaz eskulangile denak, ausartuta, gerlari-klasean sartzen bada, edo gerlariak gobernatzen dutenen klasean merezi gabe: truke hori da hiriaren hondamena.»",
   "threat": "Klase bakoitza bere lekuan dagoen frogatzen du: jakinduria goian, defentsa nahikoa eta denentzako elikagaia.",
   "req": "equilibrio",
   "si": {
    "ef": {
     "arm": 1
    },
    "msg": "Bakoitza berean dago: +1 harmonia."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "Klaseren bat besteenean sartzen da, πολυπραγμοσύνη (*polypragmosýne*): −2 harmonia."
   },
   "nota": "Injustizia definituta: besteenean sartzea. «Bakoitza berean»en alderantzizko zehatza da."
  },
  {
   "id": "b_ev_hinchada",
   "v": "b",
   "name": "Hiri puztua",
   "loc": "Errepublika II, 372e-373e",
   "cita": "«Hirian justizia eta injustizia nola sortzen diren ikusi nahi badugu, begira dezagun beharrezkoak ez diren gauzez betetzen den hiria: ehiztariak, artistak, sukaldariak, medikuak halako gehiegikeriarako. Lurraldea, lehen aski zena, txiki gelditzen da; eta auzokoena moztu beharko da. Eta hortik, gerra.»",
   "threat": "Merkatuaren ondoren, ekoizleak gehiengo handia badira, luxuak hiria gainezka egiten du.",
   "aparece": "flag:b_mercado",
   "req": "!mayoriaE",
   "si": {
    "ef": {},
    "msg": "Hiriak osasuntsu jarraitzen du: luxuak ez du gainezka egiten."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "Hiria beharrezkoak ez diren gauzez puzten da eta auzokoaren lurraldera begiratzen du: −2 harmonia."
   },
   "nota": "Platonek gerra gutiziaren gehiegikeriatik ondorioztatzen du, ez naturatik. Kontsumoari eta gatazkari buruzko eztabaida irekia, moralejarik gabe. Sinplifikatuta: «pilatutako luxua» ekoizleen gehiengo gisa neurtzen da; ez du gerrarekin katearik egiten."
  },
  {
   "id": "b_ev_desigualdad",
   "v": "b",
   "name": "Desberdintasunaren matxinada",
   "loc": "Errepublika IV, 422e-423a",
   "cita": "«Hiri oro, txikia izanda ere, egiazki bi hiri etsai da: pobreena eta aberatsena; eta bakoitzaren barruan, beste asko. Bakar bat bezala tratatzen badituzu, zeure burua engainatzen duzu.»",
   "threat": "Inork kohesiorik eraiki ez badu (ez metalen mitoak ez klase bakoitza ohoratzeak), klase bat iraindua sentitzen da.",
   "req": "flag:mito",
   "si": {
    "ef": {},
    "msg": "Kontakizun komunak kohesioari eusten dio: inor ez da matxinatzen."
   },
   "no": {
    "ef": {
     "arm": -2,
     "si": {
      "req": "flag:b_reparto_virtud",
      "ef": {
       "arm": 2
      }
     }
    },
    "msg": "Kontakizun komunik gabe, hiria bitan banatzen da: −2 harmonia (ezer ez, klase bakoitza ohoratu baduzu)."
   },
   "nota": "Kohesioa ez da aurrez emandakotzat hartzen: eraiki egin behar da (kontakizun partekatua, aitorpena). Desberdintasunaren kritikarekin lotzen da. Sinplifikatuta: pólisa ez da banatzen."
  },
  {
   "id": "b_ev_faccion",
   "v": "b",
   "name": "Fakzioa gobernuan (στάσις, *stásis*)",
   "loc": "Errepublika III, 417a-b",
   "cita": "«Lur, etxe eta diru propioak izanda, zaindari izatetik nagusi eta nekazari bihurtuko dira; gainerako hiritarren aliatu izatetik, gorroto dutenak eta gorrotatuak diren jaun. Eta bizitza barrukoei kanpoko etsaiei baino gehiago beldurtuz igaroko dute, ordurako, haiek eta hiria, galbidera lasterka.»",
   "threat": "Zaindariek jabetza pribatua badute, beren gauzengatik borrokatzen dira.",
   "req": "flag:comun",
   "si": {
    "ef": {},
    "msg": "Jabetzarik gabe, ez dago goian borrokatzeko ezer."
   },
   "no": {
    "ef": {
     "arm": -2,
     "si": {
      "req": "!justos",
      "ef": {
       "kill": [
        "Z",
        1
       ]
      }
     }
    },
    "msg": "Gobernariak beren ondasunengatik borrokatzen dira: −2 harmonia eta, zuzenak ez badira, bat erortzen da."
   },
   "nota": "Zergatik kentzen dien Platonek jabetza zaindariei: goian fakziorik ez egoteko. Aristotelesen eragozpena «Jabetzarik gabeko zaindariak»en zain dago. Sinplifikatuta: larriagotzea «zuzenak»ekin neurtzen da; ez da begiratzen asko diren."
  },
  {
   "id": "b_ev_sofistas",
   "v": "b",
   "name": "Piztiari lausengu egiten dion maisua",
   "loc": "Errepublika VI, 493a-c",
   "cita": "«Norbaitek animalia handi eta indartsu bat hazita bere umoreak eta gogoak ikasiko balitu bezala da: noiz otzantzen den eta noiz haserretzen den, zer ahotsek lasaitzen duten; eta hori, hura tratatzearen indarrez ikasia, jakinduria deituko balu. Baina ez luke jakingo animaliaren gusto horietatik zein den ederra edo itsusia, zuzena edo bidegabea: piztiak uste duen bezala bakarrik izendatzen ditu.»",
   "threat": "Goian jakinduria falta bada, erlatibismoak gazteria limurtzen du.",
   "req": "sabios",
   "si": {
    "ef": {
     "arm": 1
    },
    "msg": "Argudioak ezeztatzen dira: +1 harmonia."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "Erlatibismoak gazteria limurtzen du: −2 harmonia."
   },
   "nota": "Platonen sofistaren kritika: masari lausengu egitea jakitearekin nahasten du. Erretorikari, iritzi publikoari eta egiari buruzko eztabaida irekia."
  },
  {
   "id": "b_ev_defensa",
   "v": "b",
   "name": "Lurraldearen aldeko gerra",
   "loc": "Errepublika II, 374a-e",
   "cita": "«Gerra edonori utziko diogu? Edo hau ere lanbide bat da? Zapatariak aldi berean nekazari, ehule eta igeltsero izan ezin badu, nola izango litzateke gerran ona beste lanbide bat duena? Hiria zaintzeak beste edozein lanak baino ardura gehiago eskatzen du, eta denbora gehiago, eta trebezia, eta dedikazioa.»",
   "threat": "Zaindari laguntzaileak ez badira aski biztanleria defendatzeko, etsaia sartzen da.",
   "req": "defensa",
   "si": {
    "ef": {},
    "msg": "Zaindariek hiria defendatzen dute: etsaiak ez du pasatzen."
   },
   "no": {
    "ef": {
     "arm": -2,
     "kill": [
      "E",
      2
     ],
     "si": {
      "req": "flag:b_equilibrio_guardian",
      "ef": {
       "arm": 1
      }
     }
    },
    "msg": "Etsaia sartzen da: −2 harmonia eta 2 ekoizle hiltzen dira (−1 harmonia zure zaindariak moldatuak badaude)."
   },
   "nota": "Defentsa lanbide espezializatua da: hortik sortzen dira zaindariak. Sinplifikatuta: «Zaindari moldatua»k harmoniaren galera erdira murrizten du, ez heriotzak."
  },
  {
   "id": "b_ev_adimanto",
   "v": "b",
   "name": "Zoriontsuak al dira zaindariak?",
   "loc": "Errepublika IV, 419a-421c",
   "aparece": "flag:comun",
   "nota": "Adimantoren eragozpena eta Sokratesen erantzuna. Galdera bizia: eska al daiteke batzuek ondasun komunaren alde uko egitea? Sinplifikatuta: B aukerak ez du fakzio-arriskurik gehitzen.",
   "elige": {
    "id": "b_ev_adimanto",
    "emoji": "🏠",
    "quien": "Adimanto",
    "loc": "Errepublika IV, 419a-421c",
    "situacion": "Zure zaindariek jabetzarik gabe bizi dira. Adimantok protesta egiten du: hirian agintzen dute, baina ez dute gozatzen.",
    "cita": "«Norbaitek esango du ez dituzula oso zoriontsu egiten, eta hori zure errua dela: hiriaren jabe izanda, ez dute hartaz gozatzen; ez lurrik, ez etxe ederrik, ez urrerik. — Ez dugu hiria sortu klase baten zorionerako, osoarenerako baizik; ondo gobernatutako osoan justizia aurkitzea espero dugu.»",
    "griego": "",
    "pregunta": "Zer erantzuten diozu?",
    "opts": [
     {
      "t": "Zoriontasuna osoarena da, ez zati batena.",
      "razon": "Hiria ez da klase bakar bat zoriontsu izan dadin sortzen.",
      "ef": {
       "arm": 1
      },
      "r": "Hiriak batuta jarraitzen du (+1 harmonia). Galdera irekita geratzen da: horrela zoriontsu izan al daitezke?"
     },
     {
      "t": "Ondasunen bat eman behar zaie, edo joango dira.",
      "razon": "Inork ez dio luzaz eusten sari gabeko uko egiteari.",
      "ef": {
       "prod": 4
      },
      "r": "Zaindariak pozik geratzen dira eta hiriak errendimendu handiagoa du (+4 ekoizpen), baina «nirea» berriro agertzen da."
     }
    ],
    "platon": {
     "txt": "«Ez dugu hiria sortu klase bakar bat bereziki zoriontsu izateari begira, hiri osoa ahalik eta zoriontsuena izateari begira baizik.»",
     "loc": "Errepublika IV, 420b"
    },
    "critica": {
     "autor": "Aristoteles",
     "txt": "«Ezinezkoa da osoa zoriontsu izatea, bere zatien gehiengoa, edo zati guztiak, edo zenbait zoriontsu ez badira.»",
     "loc": "Politika II 5, 1264b17-19"
    },
    "glo": [
     "g-la-ciudad-justa"
    ]
   }
  },
  {
   "id": "b_ev_tres_olas",
   "v": "b",
   "name": "Hiru olatuak",
   "loc": "Errepublika V, 457b-c; 472b-473c",
   "cita": "«Hiru olatu ari zaizkigu mehatxu egiten, barre egin eta hondoratzeko: gizonen eta emakumeen komunitatea, seme-alaben komunitatea, eta denetan handiena, filosofoek erreinatzea. Baina esan beharko da hiri hau izan daitekeen ala ez, eta nola. Zeren eta onenaren eredua marrazten duena ez da txarragoa ematerik dagoela erakusten ez duelako.»",
   "threat": "Azken froga: jakinduria, defentsa eta elikagaia batera betetzen al dira?",
   "req": "equilibrio",
   "si": {
    "ef": {
     "arm": 3
    },
    "msg": "Hiria posible da: +3 harmonia."
   },
   "no": {
    "ef": {
     "arm": -1,
     "si": {
      "req": "!defensa",
      "ef": {
       "arm": -1
      }
     }
    },
    "msg": "Funtzioren batek huts egiten du: −1 harmonia (−2 defentsa ere falta bada)."
   },
   "nota": "B bertsioaren arkuaren itxiera: posible al da hiri justua, ala eredu bat besterik ez da geure burua neurtzeko? Platonek onartzen du agian ez dela gauzatuko eta hala ere patroi gisa balio duela. Sinplifikatuta: −1 edo −2, huts egiten duen funtzio bakoitza zenbatu beharrean."
  }
 ],
 "clases": [
  {
   "id": "b_gobernantes",
   "name": "Gobernariak — σοφία (*sophía*)",
   "txt": "Naturaz gutxi dira eta jakinduria ekartzen dute. Gutxienez batek jakinduria osora iristen bada, hiriak «argia ikusten du»: Errege filosofoa jokatu daiteke eta lehen funtzioa betetzen da.",
   "cita": "«Hiria jakintsua da bere zatirik txikienari esker, hirian agintzen eta deliberatzen duenari; eta osoaren gainean zaintzen duen zientzia horri, ez gai solteren batenari, zuzen deitzen diogu σοφία (*sophía*).»",
   "loc": "Errepublika IV, 428c-429a; 441e-442c",
   "nota": "Jakinduria ez da asko jakitea, multzoa gobernatzen jakitea baizik; horregatik gutxik aski dute. Hiriaren arimaren arrazoia da, λόγος (*lógos*)."
  },
  {
   "id": "b_guardianes",
   "name": "Zaindari laguntzaileak — ἀνδρεία (*andreía*)",
   "txt": "Ausardia ekartzen dute: pólisa defendatzen dute eta gobernuak erabakitzen duena exekutatzen dute. Haien balioa hezkuntzak grabatutako beldurgarriari buruzko iritzi zuzena gordetzea da.",
   "cita": "«Ausardia deitzen diot gordetze jakin bati: legeak hezkuntzaren bidez sortutako iritziarena, zer gauzaren eta nolako beldur izan behar den. Hori mina eta plazeretan, beldurretan eta gutizietan gordetzea da ἀνδρεία (*andreía*).»",
   "loc": "Errepublika IV, 429a-430c; II, 374e-375c",
   "nota": "Platonen ausardia ez da ausarkeria, hezitako sendotasuna baizik: arrazoiari obeditzen dion gogoa, θυμός (*thymós*). Zaindaria «amorratua da etsaiarekin eta otzana bereekin», txakur on bat bezala (375e)."
  },
  {
   "id": "b_productores",
   "name": "Ekoizleak — σωφροσύνη (*sophrosýne*)",
   "txt": "Pólisaren ekoizpena sortzen dute eta neurritasuna gorpuzten dute, hemen adostasuna dena: nork agintzen duen onartzea. Beste bertuteek ez bezala, neurritasuna hiru klaseetan zehar dago.",
   "cita": "«Neurritasuna harmonia baten antzekoa da: nork agindu behar duen adostasuna da, hiri osoan zehar doana, goitik behera, ahulenak, indartsuenak eta erdikoak aho batez kantarazten dituena.»",
   "loc": "Errepublika IV, 430d-432b; III, 389d-e",
   "nota": "σωφροσύνη (*sophrosýne*) ez da «gutxi jatea» bakarrik: norberaren jabetza eta adostasuna da. Horregatik denek daramate, ez herriak bakarrik. Ordenatzen uzten den gutizia da, ἐπιθυμία (*epithymía*)."
  },
  {
   "id": "b_justicia",
   "name": "Justizia — δικαιοσύνη (*dikaiosýne*)",
   "txt": "Ez da klase bat, hirurren arteko erlazioa baizik: klase bakoitzak berea eta berea bakarrik egiten duenean ematen da, eta besteenean sartzean galtzen da. Jokoan hiriaren harmonia da.",
   "cita": "«Justizia berea egitea da eta gauza askotan ez sartzea. Hirian ekoizten duenak, laguntzen duenak eta gobernatzen duenak bakoitzak berea egiten dutenean, hori da zuzena eta horrek egiten du hiria justua.»",
   "loc": "Errepublika IV, 433a-434c; 443c-444a",
   "nota": "Justizia ez da klase baten bertutea, osoaren harmonia baizik, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*). Gauza bera arimarentzat ere balio du (441d-442d): zuzena da zati bakoitzak bere funtzioa betetzen duen arima."
  }
 ],
 "tabla": [
  {
   "name": "Gobernariak, ἄρχοντες (*árchontes*)",
   "alma": "Arrazoia, λόγος (*lógos*)",
   "virtud": "σοφία (*sophía*): osoaren onari buruz deliberatzea",
   "cumple": "Hiriak «ikusten du»: deliberazio zuzena; oreka areagotzen du.",
   "desborda": "Jakintzaren tirania, adostasunik gabeko gobernua: tentsioa beste klaseekin.",
   "falta": "Hiri itsua: masak edo indarrak erabakitzen dute eta dena iritzi hutsean geratzen da, δόξα (*dóxa*)."
  },
  {
   "name": "Zaindari laguntzaileak, ἐπίκουροι (*epíkouroi*)",
   "alma": "Gogoa, θυμός (*thymós*)",
   "virtud": "ἀνδρεία (*andreía*): erabakitakoa defendatzea eta exekutatzea",
   "cumple": "Amorratuak kanpoan, otzanak barruan: defentsa sendoa; oreka areagotzen du.",
   "desborda": "Estatu-kolpe militarra, ohorea arrazoiaren gainetik: timokrazia (A bertsiorako zubia).",
   "falta": "Hiri babesgabea: kanpoaren edo matxinadaren aurrean erortzen da."
  },
  {
   "name": "Ekoizleak, δημιουργοί (*demiourgoí*)",
   "alma": "Gutizia, ἐπιθυμία (*epithymía*)",
   "virtud": "σωφροσύνη (*sophrosýne*), beste klaseekin batera: ekoiztea eta nork agintzen duen adostea",
   "cumple": "Pólis elikatua eta adostua; oreka areagotzen du.",
   "desborda": "Luxua, hiri «puztua», aberastasunaren aldeko matxinada: oligarkia edo demokrazia.",
   "falta": "Gosea: oinarri materialak ez ditu beste bi klaseak eusten."
  },
  {
   "name": "Justizia, δικαιοσύνη (*dikaiosýne*)",
   "alma": "Arima osoa ordenan",
   "virtud": "Bakoitza berean, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*)",
   "cumple": "Hiru klaseek betetzen dute: pólisa bat da, osasuntsua eta justua.",
   "desborda": "Sartze-nahasketa: klaseek lekua trukatzen dute; injustizia, ἀδικία (*adikía*).",
   "falta": "Desegitea: hiria «askotan» bihurtzen da eta bere buruarekin gerran dago."
  }
 ]
};
