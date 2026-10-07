// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/juego_aristoteles.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const JUEGO_ARIS = {
 "meta": {
  "imgBase": "media/juegos/aristoteles/",
  "etapas": [
   {
    "id": "j",
    "label": "Gaztaroa",
    "rondas": 3
   },
   {
    "id": "m",
    "label": "Heldutasuna",
    "rondas": 6,
    "paso": {
     "hac": 3,
     "t": "Urteak igarotzen dira: zure lurrek eta zure lanak etekina ematen dute."
    }
   },
   {
    "id": "v",
    "label": "Zahartzaroa",
    "rondas": 3,
    "paso": {
     "hac": 1,
     "sal": -1,
     "t": "Zahartzaroa iristen da: errenta aurreztuak, baina gorputzak sufritu egiten du."
    }
   }
  ]
 },
 "stats": [
  {
   "k": "sal",
   "em": "🏋️",
   "label": "Osasuna",
   "niveles": [
    [
     2,
     "mugan"
    ],
    [
     4,
     "hauskorra"
    ],
    [
     7,
     "ona"
    ],
    [
     99,
     "sendoa"
    ]
   ]
  },
  {
   "k": "hac",
   "em": "💰",
   "label": "Ondasunak",
   "niveles": [
    [
     2,
     "porrotaren atarian"
    ],
    [
     4,
     "urria"
    ],
    [
     7,
     "oparoa"
    ],
    [
     99,
     "aberatsa"
    ]
   ]
  },
  {
   "k": "car",
   "em": "🧠",
   "label": "Izaera",
   "niveles": [
    [
     2,
     "hondatua"
    ],
    [
     4,
     "zalantzakorra"
    ],
    [
     7,
     "irmoa"
    ],
    [
     99,
     "eredugarria"
    ]
   ]
  },
  {
   "k": "rep",
   "em": "🏛️",
   "label": "Ospea",
   "niveles": [
    [
     2,
     "mespretxatua"
    ],
    [
     4,
     "apala"
    ],
    [
     7,
     "errespetatua"
    ],
    [
     99,
     "ospetsua"
    ]
   ]
  },
  {
   "k": "ene",
   "em": "⚔️",
   "label": "Etsaiak",
   "niveles": [
    [
     1,
     "bat ere ez"
    ],
    [
     3,
     "batzuk"
    ],
    [
     5,
     "asko"
    ],
    [
     7,
     "boteretsuak"
    ],
    [
     99,
     "hilda nahi zaituzte"
    ]
   ]
  },
  {
   "k": "phr",
   "em": "🧭",
   "label": "Zuhurtzia",
   "niveles": [
    [
     3,
     "oldarkorra"
    ],
    [
     6,
     "zentzuduna"
    ],
    [
     99,
     "oso zuhurra"
    ]
   ]
  }
 ],
 "chars": [
  {
   "id": "socrates",
   "name": "Sokrates",
   "orient": "Kontenplatiboa",
   "sal": 8,
   "hac": 4,
   "car": 8,
   "rep": 4,
   "ene": 2,
   "phr": 8,
   "virtud": "Borondatezko pobrezia",
   "virtudT": "Diruak ez dio askorik axola: diruak kostatzen dionean, ohi denaren erdia galtzen du.",
   "debilidad": "Gaizki ulertua",
   "debilidadT": "Jendaurrean esandako egia bakoitzak besteei baino etsai gehiago ekartzen dizkio.",
   "mods": {
    "verdad": {
     "ene": 1
    }
   },
   "mult": {
    "hac": {
     "down": 0.5
    }
   },
   "perfil": "Pobrea, soldadu bat bezain osasuntsua eta oso zuhurra; hiriak jakintsutzat baino gogaikarritzat ezagutzen du gehiago.",
   "frase": "Ez dakidala besterik ez dakit.",
   "destino": "K.a. 399an zikuta edatera kondenatu zuten, erlijiogabekeriaz eta gazteak ustelteaz salatuta; kartzelatik ihes egiteari uko egin zion."
  },
  {
   "id": "hipatia",
   "name": "Hipatia",
   "orient": "Kontenplatiboa",
   "sal": 6,
   "hac": 6,
   "car": 8,
   "rep": 7,
   "ene": 2,
   "phr": 7,
   "virtud": "Prestigioa",
   "virtudT": "Ikasleek errespetatu egiten dute: errazago irabazten du ospea.",
   "debilidad": "Gizarte-mesfidantza",
   "debilidadT": "Denen aurrean egiten duen guztiak etsaiak ekartzen dizkio.",
   "mods": {
    "publico": {
     "ene": 1
    }
   },
   "mult": {
    "rep": {
     "up": 1.5
    }
   },
   "perfil": "Familia dirudun bateko irakasle errespetatua; ospeak babestu egiten du… eta agerian uzten.",
   "frase": "Ezagutza da nire indarra.",
   "destino": "415ean kristau-jendetza batek hil zuen Alexandrian, Zirilo apezpikuaren eta Orestes prefektuaren arteko liskarraren erdian."
  },
  {
   "id": "platon",
   "name": "Platon",
   "orient": "Kontenplatiboa",
   "sal": 7,
   "hac": 8,
   "car": 7,
   "rep": 6,
   "ene": 1,
   "phr": 7,
   "virtud": "Idealismoa",
   "virtudT": "Zuzentasunez jokatzeak besteei baino gehiago sendotzen dio izaera.",
   "debilidad": "Zurruntasuna",
   "debilidadT": "Itunek eta tratuek izaera higatzen diote.",
   "mods": {
    "justo": {
     "car": 1
    },
    "pacto": {
     "car": -1
    }
   },
   "perfil": "Aristokrata aberatsa eta harreman onekoa, etsai gutxirekin eta egitasmo batekin: jakintsuek gobernatzea.",
   "frase": "Jakinduria maite duenak gobernatu dezala.",
   "destino": "Hiru aldiz bidaiatu zuen Sirakusara bertako tiranoak hezteko, eta, tradizioaren arabera, bidaia horietako batean esklabo gisa saldu zuten. Zahartuta hil zen Atenasen, Akademiaren buru."
  },
  {
   "id": "protagoras",
   "name": "Protagoras",
   "orient": "Diskurtsiboa",
   "sal": 6,
   "hac": 8,
   "car": 6,
   "rep": 8,
   "ene": 2,
   "phr": 6,
   "sinImg": true,
   "virtud": "Erretorika-maisua",
   "virtudT": "Garesti kobratzen du irakasteagatik: denen aurrean egiten duen guztiak dirua ematen dio.",
   "debilidad": "Agnostikoa",
   "debilidadT": "Jainkoei buruz esaten duenak eskandalua sortzen du: egia deseroso bakoitzak etsai gehiago ekartzen dizkio.",
   "mods": {
    "publico": {
     "hac": 1
    },
    "verdad": {
     "ene": 1
    }
   },
   "perfil": "Greziako sofistarik ospetsuena eta ordainduena; Periklesen laguna eta debotoentzat susmagarria.",
   "frase": "Gizakia da gauza guztien neurria.",
   "destino": "Periklesek Turioi koloniaren legeak idazteko eskatu zion. Tradizioaren arabera, erlijiogabekeriaz salatu zuten «Jainkoei buruz» liburuagatik, haren liburuak agoran erre zituzten eta itsasontzi-hondamendi batean hil zen Atenasetik ihesi zihoala."
  },
  {
   "id": "diogenes",
   "name": "Diogenes",
   "orient": "Kontenplatiboa",
   "sal": 8,
   "hac": 2,
   "car": 7,
   "rep": 4,
   "ene": 2,
   "phr": 6,
   "sinImg": true,
   "noRuina": true,
   "virtud": "Autarkia",
   "virtudT": "Ia ezer ez du behar: dirurik gabe geratzeak ez du jokotik kanpo uzten, eta besteek galtzen dutenaren erdia galtzen du.",
   "debilidad": "Lotsagabekeria (anaídeia)",
   "debilidadT": "Denei egiten die burla: jendaurrean esandako egia bakoitzak etsaiak ekartzen dizkio eta ospea kentzen dio.",
   "mods": {
    "verdad": {
     "ene": 1,
     "rep": -1
    }
   },
   "mult": {
    "hac": {
     "down": 0.5
    }
   },
   "perfil": "Tina batean bizi da, limosna eskatzen du eta ohiturei barre egiten die. Osasuntsua eta askea da, eta ia ez du ezer galtzeko.",
   "frase": "Kendu hortik, eguzkia kentzen didazu eta.",
   "destino": "Atenasen eta Korinton bizi izan zen, pobre bere aukeraz eta ohiturei burla eginez. Oso zahartuta hil zen Korinton, K.a. 323 inguruan; tradizioaren arabera, Alexandroren urte berean."
  },
  {
   "id": "aspasia",
   "name": "Aspasia",
   "orient": "Diskurtsiboa",
   "sal": 6,
   "hac": 6,
   "car": 6,
   "rep": 5,
   "ene": 2,
   "phr": 6,
   "virtud": "Elokuentzia",
   "virtudT": "Haren hitzaldiek konbentzitu egiten dute: errazago irabazten du ospea.",
   "debilidad": "Mendekotasuna",
   "debilidadT": "Atzerritarra eta emakumea izanik, babesleen mende dago: ospea galtzen duenean, bikoitza galtzen du.",
   "mult": {
    "rep": {
     "up": 1.5,
     "down": 2
    }
   },
   "perfil": "Atzerritar jantzia eta hizlari trebea, emakumeei bozkatzen uzten ez dien hiri batean; haren egoera besteen mende dago.",
   "frase": "Hitzek ere badute boterea.",
   "destino": "Periklesen bikotekidea. Plutarkoren arabera, erlijiogabekeriaz salatu zuten, eta Periklesek negar egin zuen epaimahaiaren aurrean hura salbatzeko."
  },
  {
   "id": "aristofanes",
   "name": "Aristofanes",
   "orient": "Diskurtsiboa",
   "sal": 6,
   "hac": 6,
   "car": 5,
   "rep": 6,
   "ene": 2,
   "phr": 5,
   "virtud": "Asmamena eta satira",
   "virtudT": "Jendaurrean egiak esateak ospea ematen dio…",
   "debilidad": "Mihi zorrotza",
   "debilidadT": "…baita etsaiak ere.",
   "mods": {
    "verdad": {
     "rep": 1,
     "ene": 1
    }
   },
   "perfil": "Arrakastako komedia-idazlea, ez aberatsa ez pobrea, hiriak txalotzen duen eta boteretsuek beldur dioten mihiarekin.",
   "frase": "Barreak ere egia esaten du.",
   "destino": "Kleonek salatu zuen Atenas atzerritarren aurrean barregarri uzteagatik; zahartu arte komediak idazten jarraitu zuen."
  },
  {
   "id": "pericles",
   "name": "Perikles",
   "orient": "Politika",
   "sal": 7,
   "hac": 8,
   "car": 6,
   "rep": 9,
   "ene": 4,
   "phr": 7,
   "sinImg": true,
   "riesgo": 0.1,
   "virtud": "Zuhurtzia politikoa",
   "virtudT": "Aristotelesek gizon zuhurraren eredutzat jartzen du: haren erabaki arriskutsuak maizago ateratzen dira ondo.",
   "debilidad": "Arerioen jomuga",
   "debilidadT": "Harekin ezin dutenez, bereei erasotzen diete: jendaurrean egiten duen guztiak etsaiak ekartzen dizkio.",
   "mods": {
    "publico": {
     "ene": 1
    }
   },
   "perfil": "Aristokrata aberatsa, urtez urte jeneral hautatua; Atenasko politikaririk boteretsuena, lagunez inguratua… eta haien aurkako salaketez.",
   "frase": "Edertasuna maite dugu soiltasunez eta jakintza, bigunkeriarik gabe.",
   "destino": "Hogeita hamar bat urtez zuzendu zuen Atenas, «Periklesen mendea» deritzena. Haren arerioek Fidias, Anaxagoras eta Aspasia salatu zituzten. K.a. 429an hil zen izurriteak jota, Peloponesoko gerraren hasieran."
  },
  {
   "id": "aristides",
   "name": "Aristides",
   "orient": "Politika",
   "sal": 7,
   "hac": 6,
   "car": 9,
   "rep": 7,
   "ene": 3,
   "phr": 6,
   "sinImg": true,
   "ostracismo": 0.7,
   "virtud": "Zuzena",
   "virtudT": "Zuzentasunez jokatzeak ospea ematen dio, eta bidegabeki jokatzeak inori baino gehiago pisatzen dio.",
   "debilidad": "Amore ematen ez duen justizia",
   "debilidadT": "Egintza zuzen bakoitzak etsaiak ekartzen dizkio, eta hiria nekatu egiten da «Zuzena» deitzen entzuteaz: ospe handia badu, ostrazismoak bikoitz mehatxatzen du.",
   "mods": {
    "justo": {
     "rep": 1,
     "ene": 1
    },
    "injusto": {
     "car": -1
    }
   },
   "perfil": "Ondasun xumeko aristokrata eta jenerala Maratonen. Atenas osoak «Zuzena» deitzen dio, eta batzuei hori gogaikarria egiten zaie jada.",
   "frase": "Ezer ez litzateke onuragarriagoa… ezta bidegabeagoa ere.",
   "destino": "K.a. 482an ostrazismora kondenatu zuten. Plutarkoren arabera, idazten ez zekien nekazari batek «Aristides» bera grabatzeko eskatu zion ostrakonean, «Zuzena» deitzen entzuteaz aspertuta zegoelako. 480an itzuli zen Salaminan eta Plataian borrokatzeko, Delosko Ligaren zerga ekitatez ezarri zuen eta hain pobre hil zen, ezen hiriak ezkonsaria eman baitzien alabei."
  },
  {
   "id": "alcibiades",
   "name": "Altzibiades",
   "orient": "Politika",
   "sal": 8,
   "hac": 9,
   "car": 4,
   "rep": 8,
   "ene": 3,
   "phr": 3,
   "virtud": "Karisma eta ausardia",
   "virtudT": "Inork baino errazago irabazten du ospea.",
   "debilidad": "Hedonismoa",
   "debilidadT": "Plazerek kalte handiagoa egiten diote izaerari eta osasunari.",
   "mods": {
    "placer": {
     "car": -1,
     "sal": -1
    }
   },
   "mult": {
    "rep": {
     "up": 1.5
    }
   },
   "perfil": "Gaztea, aberatsa, ederra eta ospetsua; ez oso zuhurra eta inbidiaz inguratua.",
   "frase": "Nire distirak gidatuko ditu besteak.",
   "destino": "Sakrilegioaz salatuta, Espartara igaro zen, gero Persiara, eta Atenasera itzuli zen; Frigian hil zuten, K.a. 404an."
  },
  {
   "id": "cleon",
   "name": "Kleon",
   "orient": "Politika",
   "sal": 6,
   "hac": 7,
   "car": 3,
   "rep": 7,
   "ene": 3,
   "phr": 3,
   "virtud": "Herri-oratoria",
   "virtudT": "Ospea irabazten duenean, bikoitza irabazten du…",
   "debilidad": "Demagogia",
   "debilidadT": "…eta galtzen duenean ere bikoitza galtzen du.",
   "mult": {
    "rep": {
     "up": 2,
     "down": 2
    }
   },
   "perfil": "Aberastutako merkataria, batzarrean oihuka agintzen duena; izaera gutxi eta handinahi handia.",
   "frase": "Herriak irmotasuna nahi du.",
   "destino": "K.a. 422an hil zen Anfipoliseko guduan, Atenasko armadaren buru."
  },
  {
   "id": "critias",
   "name": "Kritias",
   "orient": "Politika",
   "sal": 6,
   "hac": 8,
   "car": 3,
   "rep": 5,
   "ene": 3,
   "phr": 4,
   "virtud": "Maltzurkeria politikoa",
   "virtudT": "Indarrez nagusitzeak diru gehiago ematen dio…",
   "debilidad": "Tirania",
   "debilidadT": "…baina etsai gehiago sortzen dizkio.",
   "mods": {
    "fuerza": {
     "hac": 1,
     "ene": 1
    }
   },
   "perfil": "Aristokrata aberatsa, jantzia eta demokraziaren aurka erresumindua.",
   "frase": "Ordenak nagusitu behar du.",
   "destino": "Hogeita Hamar Tiranoen burua K.a. 404an; hurrengo urtean hil zen Munikian demokraten aurka borrokan."
  },
  {
   "id": "trasimaco",
   "name": "Trasimako",
   "orient": "Politika",
   "sal": 6,
   "hac": 7,
   "car": 4,
   "rep": 5,
   "ene": 2,
   "phr": 3,
   "virtud": "Maltzurkeria",
   "virtudT": "Erraz irabazten du dirua joko zikina egiten duenean…",
   "debilidad": "Zinismo morala",
   "debilidadT": "…baina, justizian sinesten ez duenez, ondo jokatzeak erdia baino ez dio sendotzen.",
   "mods": {
    "injusto": {
     "hac": 1
    }
   },
   "mult": {
    "car": {
     "up": 0.5
    }
   },
   "perfil": "Arrakastako sofista, garesti kobratzen duena; justizia indartsuenari komeni zaiona dela uste du.",
   "frase": "Justizia boteretsuaren zerbitzura dago.",
   "destino": "Kaltzedoniako sofista, batez ere Platonen Errepublikagatik ezaguna; ia ez dakigu nola amaitu zuen bere bizitza."
  },
  {
   "id": "alejandro",
   "name": "Alexandro Handia",
   "orient": "Politika",
   "sal": 9,
   "hac": 10,
   "car": 4,
   "rep": 8,
   "ene": 4,
   "phr": 4,
   "virtud": "Handinahia eta agintea",
   "virtudT": "Indarrez nagusitzeak ospea ematen dio.",
   "debilidad": "Neurrigabekeria",
   "debilidadT": "Ez da gai besteek babesleku gisa hartzen dituzten erdiko aukerak hautatzeko.",
   "mods": {
    "fuerza": {
     "rep": 1
    }
   },
   "bloquea": [
    "medida"
   ],
   "perfil": "Erresuma baten oinordekoa, oso aberatsa, indartsua eta ospetsua, sehaskatik etsaiekin.",
   "frase": "Mundua ez da nahikoa.",
   "destino": "Indiaraino iristen zen inperio bat konkistatu zuen eta Babilonian hil zen K.a. 323an, 32 urterekin."
  }
 ],
 "dilemmas": [
  {
   "id": "efebo",
   "etapa": "j",
   "virtue": "Ausardia (andreía)",
   "sit": "Hemezortzi urte dituzu eta efebo gisa hasten zara zerbitzuan: bi urteko zaintza Atikako mugetan.",
   "opts": [
    {
     "t": "Gogor entrenatu eta goarnizioan lagunak egin.",
     "sal": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Indartsu itzultzen zara, defendatuko zaituzten lagunekin."
    },
    {
     "t": "Zure familiaren harremanei esker toki eroso bat lortu.",
     "rep": -1,
     "car": -1,
     "hac": 1,
     "r": "Hotza eta martxak aurrezten dituzu, baina besteek badakite."
    },
    {
     "t": "Zure ausardia erakutsi mugako artzainekin liskarrak bilatuz.",
     "sal": -2,
     "rep": 1,
     "ene": 1,
     "car": -1,
     "tags": [
      "fuerza"
     ],
     "r": "Ausartaren ospea irabazten duzu… eta alferrikako orbainen bat."
    },
    {
     "t": "Gaueko zaintzak aprobetxatu beste efebo batzuekin irakurri eta eztabaidatzeko.",
     "phr": 2,
     "car": 1,
     "sal": -1,
     "r": "Gutxi lo egiten duzu, baina ekin aurretik pentsatzen ikasten duzu."
    }
   ]
  },
  {
   "id": "maestro",
   "etapa": "j",
   "virtue": "Zuhurtzia (phrónesis)",
   "sit": "Zeure burua hezi nahi duzu. Agoran, sofista batek garesti kobratzen du auziak irabazten irakasteagatik; filosofo batek ez du kobratzen, baina boteretsuak deseroso jartzen dituzten galderak egiten ditu.",
   "hist": "Protagorasek 100 mina kobratu izan zituen ikastaro bategatik; Sokratesek harro esaten zuen ez zuela inoiz kobratzen.",
   "opts": [
    {
     "t": "Sofistari ordaindu: erretorikak ate guztiak irekitzen ditu.",
     "hac": -3,
     "rep": 2,
     "phr": 1,
     "r": "Edonor konbentzitzen ikasten duzu. Zure poltsak nabaritzen du."
    },
    {
     "t": "Filosofoari jarraitu, gaizki ikusita dagoen norbaitekin ikusten bazaituzte ere.",
     "car": 1,
     "phr": 2,
     "ene": 1,
     "tags": [
      "verdad"
     ],
     "r": "Zeure burua aztertzen ikasten duzu; guraso batzuek ez dute nahi beren seme-alabek zurekin harremanik izatea."
    },
    {
     "t": "Ez bata ez bestea: zure familiaren ofizioa ikasi.",
     "hac": 2,
     "phr": 1,
     "rep": -1,
     "r": "Dirua eta ofizioa irabazten dituzu, baina agoran inork ez daki nor zaren."
    },
    {
     "t": "Biak batera, egunez lan eginez sofistari ordaintzeko.",
     "hac": -2,
     "sal": -2,
     "phr": 2,
     "rep": 1,
     "r": "Dena ikasten duzu… eta lehertuta amaitzen duzu."
    }
   ]
  },
  {
   "id": "simposio",
   "etapa": "j",
   "virtue": "Neurritasuna (sophrosýne)",
   "sit": "Aberats baten etxeko sinposio batean, ardoa urarekin nahastu gabe dabil eta egunsentira arte edateko erronka botatzen dizute.",
   "hist": "Grekoek basatitzat jotzen zuten ardoa nahastu gabe edatea; Platonen Oturuntzan, Sokratesek gau osoa ematen du edaten, mozkortu gabe.",
   "opts": [
    {
     "t": "Erronka onartu eta irabazi.",
     "sal": -2,
     "rep": 2,
     "car": -1,
     "tags": [
      "placer"
     ],
     "r": "Gaueko kondaira zara; zure gibelak ez du gauza bera uste."
    },
    {
     "t": "Gutxi edan eta elkarrizketan geratu.",
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Burua argi duzula irteten zara, bi lagun berrirekin."
    },
    {
     "t": "Joan, ozen esanez zer pentsatzen duzun jai horiei buruz.",
     "rep": -2,
     "ene": 1,
     "car": -1,
     "r": "Aristotelesek ere bizio deituko lioke sentikortasun-falta horri: garratz batentzat hartzen zaituzte."
    },
    {
     "t": "Sinposiarka izatea eskatu eta zuk erabaki ardoa zenbat nahasten den.",
     "phr": 1,
     "risk": true,
     "win": {
      "rep": 2,
      "car": 1,
      "r": "Grazia handiz zuzentzen duzu gaua: denek nahi dute berriro gonbidatu."
     },
     "lose": {
      "rep": -2,
      "r": "Pedante batentzat hartzen zaituzte eta txistuka hartzen."
     }
    }
   ]
  },
  {
   "id": "herencia",
   "etapa": "j",
   "virtue": "Eskuzabaltasuna (eleutheriótes)",
   "sit": "Zure aita hiltzen da. Olibondo batzuk uzten dizkizu Atikan eta zorrak hainbat bizilagunekin.",
   "opts": [
    {
     "t": "Zor guztiak ordaindu lehenik, gutxirekin geratzen bazara ere.",
     "hac": -2,
     "car": 2,
     "rep": 1,
     "tags": [
      "justo"
     ],
     "r": "Diru gutxirekin geratzen zara, baina hitza beteta."
    },
    {
     "t": "Olibondoak saldu eta hirian errentetatik bizi.",
     "hac": 1,
     "rep": 1,
     "phr": -1,
     "r": "Bizitza erosoa hirian; hartzekodunek itxaron beharko dute."
    },
    {
     "t": "Mailegu gehiago eskatu merkataritza-ontzi bat erosteko.",
     "risk": true,
     "win": {
      "hac": 5,
      "r": "Ontzia Itsaso Beltzeko gariz beteta itzultzen da."
     },
     "lose": {
      "hac": -4,
      "r": "Ontzia Eubearen parean hondoratzen da, zama osoarekin."
     }
    },
    {
     "t": "Bizilagun pobreenei ez ordaindu: ezin dizute auzirik jarri.",
     "hac": 2,
     "car": -3,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "Drakma batzuk irabazten dituzu eta bizilagunak galtzen."
    }
   ]
  },
  {
   "id": "aval",
   "etapa": "j",
   "virtue": "Adiskidetasuna (philía)",
   "sit": "Haurtzaroko lagun batek bere itsas negozioarentzako mailegu izugarri baten abala emateko eskatzen dizu.",
   "opts": [
    {
     "t": "Oso-osorik abalatu: lagunek dena dute komunean.",
     "car": 1,
     "risk": true,
     "win": {
      "rep": 1,
      "hac": 1,
      "r": "Negozioa ondo ateratzen da eta zure lagunak bizitza osoan eskertzen dizu."
     },
     "lose": {
      "hac": -5,
      "r": "Negozioak porrot egiten du eta hartzekoduna zure bila dator."
     }
    },
    {
     "t": "Uko egin: adiskidetasuna ez da diruarekin nahastu behar.",
     "car": -1,
     "rep": -1,
     "r": "Zure lagunak ulertzen du… erdizka."
    },
    {
     "t": "Hondatu gabe gal dezakezuna baino ez utzi.",
     "hac": -2,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Ez duzu guztiz salbatzen, baina ez diozu huts egiten."
    },
    {
     "t": "Abalatu, negozioaren erdia zuretzat geratzearen truke.",
     "car": -1,
     "risk": true,
     "win": {
      "hac": 3,
      "r": "Negozio ona… nahiz eta adiskidetasuna jada ez den berdina."
     },
     "lose": {
      "hac": -4,
      "r": "Porrot egiten du, eta gainera zure lagunak herra dizu."
     }
    }
   ]
  },
  {
   "id": "delion",
   "etapa": "j",
   "virtue": "Ausardia (andreía)",
   "sit": "Lehen gudua hoplita gisa. Falangea amore ematen hasten da eta ezkerrean zenuen gizona zauritua erortzen da.",
   "hist": "Delioneko guduan (K.a. 424), Altzibiadesek Oturuntzan kontatzen duenez, Sokrates lasaitasuna galdu gabe erretiratu zen eta bere kideak babestu zituen.",
   "opts": [
    {
     "t": "Ezkutua bota eta korrika egin.",
     "rep": -3,
     "car": -2,
     "r": "Bizia salbatzen duzu, baina Atenasen ez dago ezkutua galtzea baino lotsa handiagorik."
    },
    {
     "t": "Zu bakarrik oldartu etsaiaren aurka.",
     "tags": [
      "fuerza"
     ],
     "muerte": 0.12,
     "muerteT": "Lantza teban batek zeharkatuta erortzen zara.",
     "risk": true,
     "win": {
      "rep": 3,
      "car": 1,
      "r": "Etsaiaren lerroa hausten duzu eta denek zure izena kantatzen dute."
     },
     "lose": {
      "sal": -4,
      "r": "Inguratu egiten zaituzte; mirariz ateratzen zara bizirik."
     }
    },
    {
     "t": "Ordenan erretiratu, zauritua babestuz.",
     "sal": -1,
     "car": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Zauritua salbu eramaten duzu. Horrela, eta ez beste inola, da norbait ausarta."
    },
    {
     "t": "Geldirik geratu ezkutua jasota, iristen ez diren aginduen zain.",
     "sal": -2,
     "r": "Aintzarik gabe bizirik irauten duzu, besoan zauri batekin."
    }
   ]
  },
  {
   "id": "olimpia",
   "etapa": "j",
   "virtue": "Neurritasuna (sophrosýne)",
   "sit": "Olinpian lehiatzeko hautatzen zaituzte. Entrenatzaile batek dieta muturrekoa proposatzen dizu; beste batek, epaileei ordaintzea.",
   "hist": "Tranpatiei jarritako isunekin Zeusen estatuak jasotzen ziren Olinpian, Zanes izenekoak, tranpatiaren izena grabatuta.",
   "opts": [
    {
     "t": "Gogor entrenatu, baina atsedenarekin.",
     "sal": 1,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Ez duzu irabazten, baina paper ona egiten duzu."
    },
    {
     "t": "Dieta muturrekoa eta atsedenik gabeko entrenamendua.",
     "risk": true,
     "win": {
      "rep": 3,
      "r": "Olibondo-koroa! Zure hiriak doan emango dizu jaten bizitza osoan."
     },
     "lose": {
      "sal": -3,
      "r": "Finalaren aurretik lesionatzen zara."
     }
    },
    {
     "t": "Epaileak erosi.",
     "car": -2,
     "tags": [
      "injusto"
     ],
     "risk": true,
     "win": {
      "rep": 3,
      "hac": -2,
      "r": "Irabazi egiten duzu… eta badakizu nola."
     },
     "lose": {
      "rep": -4,
      "hac": -3,
      "ene": 1,
      "r": "Harrapatu egiten zaituzte: zure izena lotsaren estatua batean grabatuta geratzen da."
     }
    },
    {
     "t": "Utzi, ikasketetan aritzeko.",
     "phr": 1,
     "rep": -1,
     "r": "Zure familiak ez du ulertzen."
    }
   ]
  },
  {
   "id": "arginusas",
   "etapa": "m",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Zozketaz egokitu zaizu batzarra zuzentzea. Jendetzak eskatzen du, aldi berean eta bozketa bakar batean, itsasoan galdutakoak erreskatatu ez zituzten jeneralak epaitzea. Legez kontrakoa da.",
   "hist": "Arginusak, K.a. 406: egun hartan batzarra zuzentzen zuen Sokratesek uko egin zion bozkatzera eramateari. Jeneralak exekutatu zituzten hala ere.",
   "opts": [
    {
     "t": "Bozkatzera eraman: herria burujabea da.",
     "rep": 1,
     "car": -3,
     "r": "Jeneralak exekutatzen dituzte. Hurrengo urtean, hiria damutu egiten da."
    },
    {
     "t": "Legez kontrakoa dena bozkatzeari uko egin, mehatxatzen bazaituzte ere.",
     "car": 3,
     "ene": 3,
     "rep": -1,
     "tags": [
      "justo",
      "publico"
     ],
     "r": "Traidore oihukatzen dizute. Ez duzu amore ematen."
    },
    {
     "t": "Gaixo zaudela itxura egin eta beste bati utzi zuzentzen.",
     "car": -1,
     "rep": -1,
     "r": "Nahasmenetik salbatzen zara, baina ez zure kontzientziatik."
    },
    {
     "t": "Epaiketa bereiziak proposatu argudio legalekin.",
     "phr": 1,
     "tags": [
      "justo"
     ],
     "risk": true,
     "win": {
      "car": 2,
      "rep": 2,
      "ene": 1,
      "r": "Batzarra lasaitzea lortzen duzu… egun baterako."
     },
     "lose": {
      "ene": 2,
      "rep": -1,
      "r": "Inork ez dizu kasurik egiten eta susmagarrien zerrendan apuntatzen zaituzte."
     }
    }
   ]
  },
  {
   "id": "leon",
   "etapa": "m",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Gobernu oligarkikoak Salaminako Leon atxilotzeko agintzen dizu, errugabe bat, haren ondasunak bereganatzeko. Zure eskuak zikindu nahi ditu.",
   "hist": "K.a. 404an Hogeita Hamarrek agindu hori eman zieten Sokratesi eta beste lau lagunei. Besteak joan ziren; Sokrates etxera joan zen.",
   "opts": [
    {
     "t": "Obeditu: aginduak aginduak dira.",
     "hac": 2,
     "car": -3,
     "set": "colaborador",
     "r": "Leon hil egiten da. Haren ondasunen zati batekin ordaintzen dizute."
    },
    {
     "t": "Etxera joan ezer esan gabe.",
     "car": 2,
     "ene": 3,
     "rep": -1,
     "tags": [
      "justo"
     ],
     "r": "Ez duzu inor atxilotzen. Hogeita Hamarrek zure izena apuntatzen dute."
    },
    {
     "t": "Leoni ezkutuan abisatu ihes egin dezan.",
     "car": 2,
     "ene": 1,
     "risk": true,
     "win": {
      "r": "Leonek ihes egiten du eta inork ez daki zu izan zinenik."
     },
     "lose": {
      "ene": 3,
      "r": "Morroi batek ikusi zaitu. Orain zelatatu egiten zaituzte."
     }
    },
    {
     "t": "Agindua salatu agoran denen aurrean.",
     "car": 3,
     "ene": 5,
     "rep": 2,
     "tags": [
      "justo",
      "publico",
      "verdad"
     ],
     "muerte": 0.12,
     "muerteT": "Gau horretan bertan, Hogeita Hamarren gizonak zure bila datoz.",
     "r": "Hiriak ahopeka miresten zaitu. Hogeita Hamarrek, ozen, gorroto zaituzte."
    }
   ]
  },
  {
   "id": "jurado",
   "etapa": "m",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Auzi bateko epaimahaikide zara. Merkatari boteretsu batek dirua eskaintzen dizu baliabiderik gabeko meteko baten aurka bozkatzeagatik.",
   "opts": [
    {
     "t": "Dirua onartu.",
     "hac": 3,
     "car": -3,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "Metekoak dena galtzen du. Zuk sekretu bat irabazten duzu."
    },
    {
     "t": "Uko egin eta kontzientziaz bozkatu.",
     "car": 1,
     "ene": 1,
     "tags": [
      "justo"
     ],
     "r": "Merkatariak ez du ahazten."
    },
    {
     "t": "Uko egin eta eroskeria auzitegiaren aurrean salatu.",
     "car": 2,
     "rep": 1,
     "ene": 3,
     "tags": [
      "justo",
      "publico"
     ],
     "r": "Merkatariari isuna jartzen diote eta mendeku hartuko duela zin egiten du."
    },
    {
     "t": "Dirua onartu eta, hala ere, kontzientziaz bozkatu.",
     "hac": 3,
     "car": -1,
     "ene": 3,
     "phr": -1,
     "r": "Gizon boteretsu bat engainatu duzu. Hori ordaindu egiten da."
    }
   ]
  },
  {
   "id": "trierarca",
   "etapa": "m",
   "virtue": "Handitasuna (megaloprépeia)",
   "sit": "Hiriak trierarka izendatzen zaitu: urtebetez gerrako trirreme bat ordaindu eta agindu behar duzu.",
   "hist": "Liturgiak aberatsek ordaintzen zituzten zerbitzu publikoak ziren. Antidosiarekin beste bati erronka bota zeniezaiokeen hura bere gain har zezan… edo bere ondasunak zureekin truka zitzan.",
   "opts": [
    {
     "t": "Beharrezkoa ordaindu eta ondo bete.",
     "hac": -2,
     "rep": 1,
     "car": 1,
     "tags": [
      "medida"
     ],
     "r": "Ontzi ona eta betebeharra beteta."
    },
    {
     "t": "Fortuna bat gastatu flotako ontzirik onena izateko.",
     "hac": -5,
     "rep": 3,
     "r": "Zure trirremea Pireoaren inbidia da. Zure administratzaileak negar egiten du."
    },
    {
     "t": "Antidosira jo: beste aberatsago batek ordain dezala.",
     "ene": 2,
     "risk": true,
     "win": {
      "r": "Besteak ordaintzea onartzen du. Libratu zara, eta etsai bat irabazi duzu."
     },
     "lose": {
      "hac": -3,
      "rep": -1,
      "r": "Auzitegiak arrazoia ematen dizu erdizka: berdin ordaintzen duzu, eta gainera kostuak."
     }
    },
    {
     "t": "Arraunlarietan eta beletan aurreztu.",
     "hac": -1,
     "rep": -2,
     "risk": true,
     "win": {
      "r": "Ontziak urtean zehar eusten dio."
     },
     "lose": {
      "sal": -3,
      "rep": -2,
      "r": "Ekaitz batek gaizki hornitutako ontzia hondoratzen du: igerian iristen zara kostaraino."
     }
    }
   ]
  },
  {
   "id": "sicilia",
   "etapa": "m",
   "virtue": "Ausardia (andreía)",
   "sit": "Batzarrak, gogotsu, Sizilia inbaditzea bozkatzen du. Flotaren zati baten agintea eskaintzen dizute.",
   "hist": "Siziliarako espedizioa (K.a. 415-413) hondamendian amaitu zen: gehienak hil ziren edo Sirakusako harrobietan amaitu zuten. Niziasek aurka hitz egin zuen.",
   "opts": [
    {
     "t": "Agintea eta aintza onartu.",
     "rep": 3,
     "hac": 2,
     "ene": 2,
     "tags": [
      "fuerza"
     ],
     "muerte": 0.15,
     "muerteT": "Sirakusako harrobietan hiltzen zara, beste atenastar asko bezala.",
     "risk": true,
     "win": {
      "rep": 2,
      "r": "Itzultzen diren gutxien artean zaude, ohoreekin."
     },
     "lose": {
      "sal": -4,
      "hac": -2,
      "r": "Garaituta, gaixorik eta ezer gabe itzultzen zara."
     }
    },
    {
     "t": "Aurka hitz egin, koldar deitzen badizute ere.",
     "car": 2,
     "rep": -2,
     "ene": 2,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Bozketa galtzen duzu. Arrazoia zenuen, baina horrek ez du inor kontsolatzen."
    },
    {
     "t": "Alde bozkatu, baina etxean geratu.",
     "car": -1,
     "r": "Ez aintzarik ez arriskurik."
    },
    {
     "t": "Hornikuntzaz arduratu eta zati bat zuretzat gorde.",
     "hac": 4,
     "car": -3,
     "ene": 1,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "Flota behar baino gari gutxiagorekin irteten da."
    }
   ]
  },
  {
   "id": "peste",
   "etapa": "m",
   "virtue": "Eskuzabaltasuna (eleutheriótes)",
   "sit": "Izurritea zabaltzen da Atenasen. Gari- eta sendagai-biltegiak dituzu.",
   "hist": "K.a. 430eko izurriteak atenastarren herena hil zuen agian, haien artean Perikles. Tuzididesek jasan eta deskribatu zuen.",
   "opts": [
    {
     "t": "Garesti saldu: ez du inoiz horrenbeste balioko.",
     "hac": 4,
     "car": -3,
     "ene": 2,
     "rep": -2,
     "tags": [
      "injusto"
     ],
     "r": "Aberasten zara hiriak bere hildakoak lurperatzen dituen bitartean."
    },
    {
     "t": "Zuk zeuk doan banatu.",
     "hac": -4,
     "car": 3,
     "rep": 2,
     "risk": true,
     "win": {
      "r": "Gaixoen artetik onik ateratzen zara."
     },
     "lose": {
      "sal": -4,
      "r": "Kutsatu egiten zara."
     }
    },
    {
     "t": "Landara ihes egin zure familiarekin.",
     "rep": -2,
     "car": -1,
     "sal": 1,
     "r": "Salbatu egiten zara. Inork ez du ahazten alde egin zenuenik."
    },
    {
     "t": "Beste batzuekin batera prezio zuzeneko banaketa bat antolatu.",
     "hac": -1,
     "car": 2,
     "rep": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "risk": true,
     "win": {
      "r": "Sistemak funtzionatzen du eta salbatu egiten zara."
     },
     "lose": {
      "sal": -2,
      "r": "Gaixotu egiten zara, baina bizirik irauten duzu."
     }
    }
   ]
  },
  {
   "id": "tirano",
   "etapa": "m",
   "virtue": "Zuhurtzia (phrónesis)",
   "sit": "Sirakusako tiranoak bere gortera gonbidatzen zaitu: gobernari filosofo bihurtzea nahi du.",
   "hist": "Platon hiru aldiz joan zen Sirakusara Dionisio I.a eta Dionisio II.a hezteko. Hiruetan porrot egin zuen.",
   "opts": [
    {
     "t": "Onartu, eraginagatik eta diruagatik.",
     "hac": 3,
     "car": -2,
     "set": "colaborador",
     "r": "Jauregi batean bizi zara eta kasurik egiten ez dizun gizon bati aholkatzen diozu."
    },
    {
     "t": "Gonbidapena baztertu.",
     "car": 1,
     "r": "Etxean geratzen zara. Sirakusak berdin jarraitzen du."
    },
    {
     "t": "Joan eta benetan hezten saiatu.",
     "car": 1,
     "risk": true,
     "win": {
      "car": 1,
      "rep": 2,
      "r": "Tiranoak legeren bat leuntzen du. Gutxi da, baina ez da ezer ez."
     },
     "lose": {
      "hac": -4,
      "ene": 2,
      "sal": -1,
      "r": "Zutaz nekatu eta esklabo gisa saltzen zaitu; lagun batzuek zure erreskatea ordaintzen dute."
     }
    },
    {
     "t": "Joan eta haren etsaiei informazioa pasatu.",
     "car": -1,
     "ene": 2,
     "hac": 1,
     "risk": true,
     "win": {
      "rep": 1,
      "r": "Sirakusako demokratek eskertu egiten dizute."
     },
     "lose": {
      "sal": -3,
      "ene": 3,
      "r": "Harrapatu egiten zaituzte. Gauez ihes egiten duzu arrantzale-ontzi batean."
     }
    }
   ]
  },
  {
   "id": "impiedad",
   "etapa": "m",
   "virtue": "Adiskidetasuna (philía)",
   "sit": "Zure maisu ohia erlijiogabekeriaz salatzen dute eguzkia harri gori bat dela esateagatik.",
   "hist": "Anaxagoras horregatik bertatik salatu zuten erlijiogabekeriaz, K.a. 430 inguruan; Periklesek Atenasetik irteten lagundu zion.",
   "opts": [
    {
     "t": "Haren alde lekukotza eman.",
     "car": 2,
     "ene": 3,
     "rep": -1,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Zure maisuak besarkatu egiten zaitu. Salaketak zure izena apuntatzen du."
    },
    {
     "t": "Isilik geratu.",
     "car": -1,
     "r": "Kondenatu egiten dute. Inork ez dizu ezer galdetzen."
    },
    {
     "t": "Gauez ihes egiten lagundu.",
     "car": 1,
     "ene": 2,
     "hac": -1,
     "risk": true,
     "win": {
      "r": "Salbu iristen da Lampsakora."
     },
     "lose": {
      "ene": 2,
      "rep": -2,
      "r": "Portuan harrapatzen zaituzte."
     }
    },
    {
     "t": "Haren aurka lekukotza eman zeure burua salbatzeko.",
     "car": -4,
     "ene": -2,
     "rep": 1,
     "set": "delator",
     "r": "Salatzaileek beretakotzat hartzen zaituzte."
    }
   ]
  },
  {
   "id": "deudas",
   "etapa": "m",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Nekazariek, zorrek itota, haiek barkatzeko eskatzen dute. Askok dirua zor dizute zuri.",
   "hist": "Solonek (K.a. 594) seisákhtheia egin zuen, «zamen astindua»: zorrak ezeztatu eta zorrengatiko esklabotza debekatu zuen.",
   "opts": [
    {
     "t": "Azken oboloraino ordaintzeko exijitu.",
     "hac": 2,
     "ene": 2,
     "rep": -2,
     "car": -1,
     "r": "Kobratu egiten duzu. Nekazariek ez dute ahazten."
    },
    {
     "t": "Zuk lehenik barkatu zor dizkizuten zorrak.",
     "hac": -4,
     "car": 2,
     "rep": 2,
     "r": "Asko galtzen duzu, eta eskualde oso bat irabazten."
    },
    {
     "t": "Zati bat barkatzen duen lege bat proposatu, Solonek bezala.",
     "hac": -2,
     "car": 2,
     "rep": 1,
     "ene": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "r": "Ez aberatsak ez pobreak ez dira guztiz pozik geratzen. Seinale ona."
    },
    {
     "t": "Zorrak usurari bati saldu, legea onartu aurretik.",
     "hac": 1,
     "car": -2,
     "rep": -1,
     "tags": [
      "injusto"
     ],
     "r": "Arazotik libratzen zara, eta besteei pasatzen diezu."
    }
   ]
  },
  {
   "id": "mitilene",
   "etapa": "m",
   "virtue": "Otzantasuna (praótes)",
   "sit": "Hiri aliatu bat matxinatu da. Herriak, amorruz, haren gizon guztiak hil nahi ditu. Batzarrean hitz egitea egokitzen zaizu.",
   "hist": "Mitilene, K.a. 427: Kleonek sarraskia eskatu zuen; Diodotok hurrengo egunean konbentzitu zuen batzarra, eta bigarren trirreme bat garaiz iritsi zen hura saihesteko.",
   "opts": [
    {
     "t": "Sarraskia eskatu: herriak eskertuko dizu.",
     "rep": 3,
     "car": -3,
     "ene": 1,
     "tags": [
      "fuerza"
     ],
     "r": "Txalotu egiten zaituzte. Mila pertsona hilko dira."
    },
    {
     "t": "Errudunak bakarrik zigortzeko eskatu.",
     "car": 2,
     "rep": -1,
     "risk": true,
     "win": {
      "rep": 2,
      "r": "Batzarra konbentzitzen duzu. Trirreme bat presaka irteten da sarraskia geldiarazteko."
     },
     "lose": {
      "ene": 2,
      "r": "Matxinoek erosita zaudela salatzen zaituzte."
     }
    },
    {
     "t": "Ez hitz egin.",
     "car": -1,
     "rep": -1,
     "r": "Beste batzuek erabakitzen dute zure ordez."
    },
    {
     "t": "Jendaurrean zigorrik gogorrena eskatu eta ezkutuan aurka bozkatu.",
     "car": -1,
     "phr": -1,
     "ene": 1,
     "r": "Zuk zeuk ere ez dakizu jada zer pentsatzen duzun."
    }
   ]
  },
  {
   "id": "rumor",
   "etapa": "m",
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Zuri buruzko zurrumurru faltsu bat dabil. Zure arerioak hasi zuela froga dezakezu, baina horretarako lagun baten sekretu bat agerian utzi beharko zenuke.",
   "opts": [
    {
     "t": "Zure lagunaren sekretua agerian utzi.",
     "rep": 2,
     "car": -2,
     "ene": 1,
     "r": "Zure ospea salbatzen da. Zure adiskidetasuna, ez."
    },
    {
     "t": "Zurrumurrua isilik jasan.",
     "rep": -3,
     "car": 1,
     "r": "Ospea galtzen duzu. Zure lagunak ez du inoiz jakingo zer egin zenuen haren alde."
    },
    {
     "t": "Zuk zabaldu zure arerioari buruzko zurrumurru okerrago bat.",
     "rep": 1,
     "car": -2,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "Berdinketa lokatzetan."
    },
    {
     "t": "Zure arerioarekin pribatuan hitz egin eta negoziatu.",
     "phr": 1,
     "tags": [
      "pacto"
     ],
     "risk": true,
     "win": {
      "rep": 1,
      "ene": -1,
      "r": "Akordio batera iristen zarete: hark ezeztatu egiten du eta zuk ahaztu."
     },
     "lose": {
      "rep": -2,
      "r": "Elkarrizketa zure aurka erabiltzen du."
     }
    }
   ]
  },
  {
   "id": "prestamo",
   "etapa": "m",
   "virtue": "Eskuzabaltasuna (eleutheriótes)",
   "sit": "Itsas mailegu bat proposatzen dizute: ontzia Itsaso Beltzetik itzultzen bada, zure dirua bikoizten duzu; hondoratzen bada, galdu egiten duzu.",
   "hist": "Aristotelesek bereizi egiten zituen etxearen administrazioa, beharrezkoa bilatzen duena, eta krematistika, dirua mugarik gabe metatzea bilatzen duena.",
   "opts": [
    {
     "t": "Zure fortuna osoa inbertitu.",
     "risk": true,
     "win": {
      "hac": 6,
      "r": "Ontzia itzultzen da. Aberatsa zara."
     },
     "lose": {
      "hac": -7,
      "r": "Ontzia ez da itzultzen."
     }
    },
    {
     "t": "Zati bat inbertitu.",
     "risk": true,
     "win": {
      "hac": 2,
      "r": "Irabazi ona."
     },
     "lose": {
      "hac": -2,
      "r": "Inbertitutakoa galtzen duzu."
     }
    },
    {
     "t": "Ez inbertitu: behar duzuna baduzu.",
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Lasai egiten duzu lo."
    },
    {
     "t": "Inbertitu eta kapitainari ordaindu ur arriskutsuetatik pasa ez dadin.",
     "hac": -1,
     "car": -1,
     "risk": true,
     "win": {
      "hac": 3,
      "r": "Ontzia itzultzen da."
     },
     "lose": {
      "hac": -3,
      "r": "Kapitainak zure dirua hartu eta desagertu egiten da."
     }
    }
   ]
  },
  {
   "id": "stasis",
   "etapa": "m",
   "virtue": "Ausardia (andreía)",
   "sit": "Gerra zibila hirian: demokratak eta oligarkak kaleetan hiltzen ari dira elkar, eta bi aldeek aukeratzeko exijitzen dizute.",
   "hist": "Soloni egotzitako lege batek eskubideak kentzen zizkion gerra zibil batean alderdirik hartzen ez zuen herritarrari. Tuzididesek Korzirako stásis-a moral ororen amaiera bezala deskribatzen du.",
   "opts": [
    {
     "t": "Oligarkekin bat egin.",
     "hac": 2,
     "ene": 3,
     "tags": [
      "fuerza"
     ],
     "set": "oligarca",
     "r": "Zure aldeak irabazten du… oraingoz."
    },
    {
     "t": "Demokratekin bat egin.",
     "rep": 1,
     "ene": 3,
     "r": "Pireoan borrokatzen zara arraunlari eta artisauekin."
    },
    {
     "t": "Etxean itxita geratu igaro arte.",
     "rep": -2,
     "ene": 1,
     "car": -1,
     "r": "Bi aldeek mespretxatzen zaituzte."
    },
    {
     "t": "Bi aldeen artean bitartekari aritu.",
     "phr": 1,
     "muerte": 0.08,
     "muerteT": "Amorratu batek negoziazioaren erdian hiltzen zaitu.",
     "risk": true,
     "win": {
      "car": 2,
      "rep": 3,
      "ene": -2,
      "r": "Su-eten bat lortzen duzu. Bakea zor dizute."
     },
     "lose": {
      "ene": 3,
      "sal": -2,
      "r": "Bi aldeek traidoretzat salatzen zaituzte."
     }
    }
   ]
  },
  {
   "id": "ostrakon",
   "etapa": "m",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Ostrazismo bat bozkatzen da. Arerio batek zuen jarraitzaileak batzea proposatzen dizu hirugarren bat erbesteratu eta haren boterea banatzeko.",
   "hist": "K.a. 416an, Altzibiades eta Nizias ados jarri ziren Hiperbolo erbesteratua izan zedin. Atenasko azken ostrazismoa izan zen.",
   "opts": [
    {
     "t": "Ituna onartu.",
     "rep": 2,
     "ene": 2,
     "car": -2,
     "tags": [
      "pacto"
     ],
     "r": "Hirugarrena hamar urterako joaten da. Zure arerioak eta zuk elkar zelatatzen duzue."
    },
    {
     "t": "Uko egin eta benetan arriskutsutzat duzuna bozkatu.",
     "car": 1,
     "ene": 1,
     "r": "Zure kontzientziaren arabera bozkatzen duzu; zure arerioak gaizki hartzen du."
    },
    {
     "t": "Konplotaren biktimari abisatu.",
     "car": 1,
     "ene": 2,
     "rep": 1,
     "r": "Konplotak porrot egiten du. Badakizu orain nork gorroto zaituen."
    },
    {
     "t": "Ez bozkatu.",
     "rep": -1,
     "r": "Beste batzuek erabakitzen dute."
    }
   ]
  },
  {
   "id": "mina",
   "etapa": "m",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Laurioneko zilar-meategietako emakida bat errentan hartzea eskaintzen dizute. Oso errentagarria da, esklaboek galerietan nola lan egiten duten axola ez bazaizu.",
   "opts": [
    {
     "t": "Errentan hartu eta ahalik eta gehien estutu.",
     "hac": 4,
     "car": -3,
     "tags": [
      "injusto"
     ],
     "r": "Zilarra isurtzen da. Hobe ez jaitsi nola den ikustera."
    },
    {
     "t": "Errentan hartu, baina txanda eta janari duinekin.",
     "hac": 2,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Beste batzuek baino gutxiago irabazten duzu, baina irabazi egiten duzu."
    },
    {
     "t": "Negozio horretan ez sartu.",
     "car": 1,
     "r": "Beste batek hartzen du errentan zure ordez."
    },
    {
     "t": "Errentan hartu eta zorpetu galeria gehiago irekitzeko.",
     "car": -2,
     "risk": true,
     "win": {
      "hac": 6,
      "r": "Zain oso aberats bat aurkitzen duzu."
     },
     "lose": {
      "hac": -5,
      "sal": -1,
      "r": "Galeria erori egiten da."
     }
    }
   ]
  },
  {
   "id": "libro",
   "etapa": "m",
   "orient": [
    "Kontenplatiboa",
    "Diskurtsiboa"
   ],
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Zure liburuak dio jainkoei buruz ezin dela jakin existitzen diren ala ez. Lagun batek ez argitaratzeko aholkatzen dizu.",
   "hist": "Protagorasek horrela hasi zuen bere «Jainkoei buruz» lana; tradizioaren arabera, haren liburuak agoran erre zituzten.",
   "opts": [
    {
     "t": "Dagoen bezala argitaratu.",
     "car": 1,
     "rep": 2,
     "ene": 4,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Grezia osoan irakurtzen da. Baita tenpluetan ere."
    },
    {
     "t": "Hizkera zuhurrago batekin argitaratu.",
     "phr": 1,
     "rep": 1,
     "ene": 1,
     "tags": [
      "medida"
     ],
     "r": "Gauza bera dio, baina irakurtzen jakin behar da."
    },
    {
     "t": "Zure ikasleei bakarrik irakurri.",
     "phr": 1,
     "r": "Zure ideiak ahopeka zabaltzen dira."
    },
    {
     "t": "Zuk zeuk erre.",
     "car": -2,
     "phr": -1,
     "r": "Inork ez zaitu ezertaz salatuko. Inork ez du jakingo zer pentsatzen zenuen."
    }
   ]
  },
  {
   "id": "escuela",
   "etapa": "m",
   "orient": [
    "Kontenplatiboa"
   ],
   "virtue": "Eskuzabaltasuna (eleutheriótes)",
   "sit": "Eskola bat sortzen duzu. Nola mantenduko duzu?",
   "opts": [
    {
     "t": "Asko kobratu, sofistek bezala.",
     "hac": 4,
     "rep": 1,
     "car": -1,
     "r": "Eskola aberatsa da; ikasleak ere bai."
    },
    {
     "t": "Ez kobratu eta dohaintzetatik bizi.",
     "hac": -2,
     "car": 1,
     "rep": 1,
     "r": "Behar adina baino ez duzu bizitzeko, ikasi nahi duen jendez inguratuta."
    },
    {
     "t": "Bakoitzari ordain dezakeenaren arabera kobratu.",
     "hac": 1,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida",
      "justo"
     ],
     "r": "Aberatsek ordaintzen dute pobreen ordez, eta denek ikasten dute."
    },
    {
     "t": "Familia boteretsuetako seme-alabak bakarrik onartu.",
     "hac": 2,
     "rep": 2,
     "ene": 1,
     "car": -1,
     "r": "Zure ikasleek gobernatuko dute hiria. Besteek herra dizute."
    }
   ]
  },
  {
   "id": "alejandria",
   "etapa": "m",
   "orient": [
    "Kontenplatiboa"
   ],
   "virtue": "Zuhurtzia (phrónesis)",
   "sit": "Hiriko apezpikua eta prefektua liskarrean daude; zure eskoletara bi aldeetako ikasleak datoz.",
   "hist": "Alexandria, 415: Hipatia Orestes prefektuaren laguna eta aholkularia zen. Hura hil zuen jendetzak adiskidetzea eragozteaz errudun jotzen zuen.",
   "opts": [
    {
     "t": "Prefektua jendaurrean babestu: arrazoia du.",
     "rep": 1,
     "ene": 4,
     "tags": [
      "publico"
     ],
     "muerte": 0.1,
     "muerteT": "Jendetza batek kaleetan zehar arrastaka eramaten zaitu.",
     "r": "Prefektuak eskertu egiten dizu. Apezpikuaren aldekoek seinalatu egiten zaituzte."
    },
    {
     "t": "Betiko moduan irakasten jarraitu, iritzirik eman gabe.",
     "ene": 1,
     "r": "Zure isiltasuna ere interpretatu egiten da."
    },
    {
     "t": "Denboraldi batez jendaurrean irakasteari utzi.",
     "rep": -2,
     "ene": -2,
     "hac": -1,
     "r": "Pixka bat ahazten zaituzte. Hobe horrela."
    },
    {
     "t": "Biak adiskidetzen saiatu.",
     "phr": 1,
     "risk": true,
     "win": {
      "rep": 2,
      "car": 2,
      "ene": -1,
      "r": "Su-eten hauskorra, baina su-etena."
     },
     "lose": {
      "ene": 3,
      "r": "Alde bakoitzak uste du bestearentzat lan egiten duzula."
     }
    }
   ]
  },
  {
   "id": "alumno",
   "etapa": "m",
   "orient": [
    "Kontenplatiboa"
   ],
   "virtue": "Adiskidetasuna (philía)",
   "sit": "Gazte distiratsu, aberats eta harro batek zure ikasle izan nahi du gobernatzen ikasteko.",
   "hist": "Altzibiades Sokratesen ikaslea eta laguna izan zen. K.a. 399ko epaiketan, askok gogoratzen zuten.",
   "opts": [
    {
     "t": "Irakatsi, aldatzen ez bada ere.",
     "rep": 1,
     "set": "alumno",
     "r": "Entzun egiten dizu, miretsi egiten zaitu… eta nahi duena egiten du."
    },
    {
     "t": "Baztertu.",
     "rep": -1,
     "r": "Beste maisu bat bilatzen du, hain zorrotza ez dena."
    },
    {
     "t": "Irakatsi eta jendaurrean kritikatu oker dabilenean.",
     "car": 1,
     "ene": 1,
     "tags": [
      "verdad"
     ],
     "set": "alumno",
     "r": "Inor baino gehiago errespetatzen zaitu; haren familiak, gutxiago."
    },
    {
     "t": "Eragina irabazteko erabili.",
     "hac": 2,
     "rep": 2,
     "car": -2,
     "set": "alumno",
     "r": "Etxerik onenetako ateak irekitzen dizkizu."
    }
   ]
  },
  {
   "id": "comedia",
   "etapa": "m",
   "orient": [
    "Diskurtsiboa"
   ],
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Hiriko politikaririk boteretsuena barregarri uzten duen obra bat prestatzen ari zara.",
   "hist": "K.a. 426an, Kleonek Kontseiluaren aurrera eraman zuen Aristofanes «Babiloniarrak» obragatik; bi urte geroago, Aristofanesek berriro barregarri utzi zuen «Zaldunak» lanean.",
   "opts": [
    {
     "t": "Dagoen bezala estreinatu.",
     "rep": 3,
     "ene": 4,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Antzoki osoa barrez ari da. Hura ez."
    },
    {
     "t": "Leundu.",
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Harrera ona. Inor ez da gehiegi mintzen."
    },
    {
     "t": "Hobe boterorik ez duen filosofo bat barregarri utzi.",
     "rep": 2,
     "car": -2,
     "r": "Arrakasta erraza. Urte batzuk geroago, publikoak zure karikatura gogoratuko du epaiketa batean."
    },
    {
     "t": "Tiradera batean gorde.",
     "rep": -2,
     "r": "Aurten ez duzu estreinatzen."
    }
   ]
  },
  {
   "id": "logografo",
   "etapa": "m",
   "orient": [
    "Diskurtsiboa"
   ],
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Gizon aberats batek ordaintzen dizu bere defentsa-hitzaldia idazteko. Badakizu errudun dela.",
   "opts": [
    {
     "t": "Ahalik eta hitzaldirik onena idatzi diru askoren truke.",
     "hac": 3,
     "car": -1,
     "rep": 1,
     "r": "Absolbitu egiten dute. Logografo gisa duzun ospea igo egiten da."
    },
    {
     "t": "Enkargua baztertu.",
     "car": 1,
     "r": "Beste batek idatziko du zure ordez."
    },
    {
     "t": "Idatzi, baina ezertan gezurrik esan gabe.",
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Hitzaldi zintzoa kausa zalantzagarri baterako."
    },
    {
     "t": "Idatzi eta egia akusazioari pasatu.",
     "hac": 2,
     "car": -1,
     "ene": 2,
     "r": "Kondenatu egiten dute. Zure bezeroak zutaz susmatzen du."
    }
   ]
  },
  {
   "id": "acusacion",
   "etapa": "m",
   "orient": [
    "Diskurtsiboa"
   ],
   "virtue": "Ausardia (andreía)",
   "sit": "Zure babesle politikoari erasotzeko, zu salatzen zaituzte erlijiogabekeriaz.",
   "hist": "Plutarkoren arabera, Hermipo komedia-idazleak salatu zuen Aspasia erlijiogabekeriaz, eta Periklesek negar egin zuen epaimahaiaren aurrean hura salbatzeko.",
   "opts": [
    {
     "t": "Zeure burua defendatu auzitegiaren aurrean.",
     "tags": [
      "publico"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "ene": -2,
      "r": "Zure defentsa hain da ona, ezen urteetan zehar aipatzen baitute."
     },
     "lose": {
      "ene": 2,
      "rep": -2,
      "hac": -2,
      "r": "Isun izugarri batera kondenatzen zaituzte."
     }
    },
    {
     "t": "Zure babesleari zure alde hitz egiteko eskatu.",
     "rep": -1,
     "ene": -1,
     "r": "Salbatu egiten zaitu, baina orain bizia zor diozu."
    },
    {
     "t": "Hiritik ihes egin.",
     "hac": -3,
     "rep": -2,
     "ene": -3,
     "r": "Hutsetik hasten zara beste nonbait."
    },
    {
     "t": "Kontraeraso egin zure salatzaileak salatuz.",
     "ene": 3,
     "rep": 1,
     "tags": [
      "fuerza"
     ],
     "r": "Gerra irekia auzitegietan."
    }
   ]
  },
  {
   "id": "golpe",
   "etapa": "m",
   "orient": [
    "Politika"
   ],
   "virtue": "Neurritasuna (sophrosýne)",
   "sit": "Zure jarraitzaileek gaur gauean Akropolia hartu eta zu tirano aldarrikatzea eskaintzen dizute.",
   "hist": "Pisistrato hiru aldiz saiatu zen K.a. VI. mendean, eta hirugarrenean boterean geratu zen. Zilonek, haren aurretik, porrot egin zuen eta haren jarraitzaileak hil zituzten.",
   "opts": [
    {
     "t": "Kolpea eman.",
     "car": -3,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "muerte": 0.2,
     "muerteT": "Kolpeak porrot egiten du: Akropolian hiltzen zaituzte.",
     "risk": true,
     "win": {
      "rep": 3,
      "hac": 4,
      "ene": 5,
      "set": "tirano",
      "r": "Hiriaren jabe zarela esnatzen zara."
     },
     "lose": {
      "ene": 4,
      "hac": -3,
      "r": "Porrot egiten du. Mirariz egiten duzu ihes."
     }
    },
    {
     "t": "Uko egin eta Kontseiluari abisatu.",
     "car": 2,
     "ene": 3,
     "rep": 1,
     "tags": [
      "justo"
     ],
     "r": "Kolpea desegiten da. Zure jarraitzaile ohiek gorroto zaituzte."
    },
    {
     "t": "Isilik uko egin.",
     "car": 1,
     "ene": 1,
     "r": "Inork ez daki ezer. Oraingoz."
    },
    {
     "t": "Eskatzen dutenerako lege-erreformak proposatu.",
     "phr": 1,
     "car": 1,
     "rep": 1,
     "ene": 1,
     "tags": [
      "medida"
     ],
     "r": "Batzuk konformatzen dira; beste batzuek bigun deitzen dizute."
    }
   ]
  },
  {
   "id": "melos",
   "etapa": "m",
   "orient": [
    "Politika"
   ],
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Jeneral gisa, uharte neutral txiki bat menderatu duzu. Batzarrak galdetzen dizu zer egin garaituekin.",
   "hist": "Melos, K.a. 416: Atenasek gizonak hil eta emakumeak eta haurrak esklabo bihurtu zituen. Tuzididesek «meliarren elkarrizketan» kontatzen du.",
   "opts": [
    {
     "t": "Gizonak hil eta gainerakoak esklabo bihurtu, ikasgai gisa.",
     "hac": 3,
     "rep": 1,
     "car": -4,
     "ene": 1,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "r": "Beste inor ez da neutral izatera ausartuko."
    },
    {
     "t": "Errukia eskatu.",
     "car": 2,
     "rep": -2,
     "ene": 1,
     "r": "Bigun izatea leporatzen dizute."
    },
    {
     "t": "Kolonoak ezarri eta zerga kobratu, sarraskirik gabe.",
     "car": 1,
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Konkista bat, baina alferrikako odolik gabe."
    },
    {
     "t": "Harrapakina zuretzat gorde agindua iritsi aurretik.",
     "hac": 4,
     "car": -3,
     "ene": 2,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "Inork ez zituen anforak ondo zenbatu."
    }
   ]
  },
  {
   "id": "hermes",
   "etapa": "m",
   "orient": [
    "Politika"
   ],
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Zure espedizioaren bezperan, hiriko Hermesen estatuak moztuta agertzen dira. Zure arerioek sakrilegioa leporatzen dizute.",
   "hist": "K.a. 415ean Altzibiades salatu zuten. Itsasoratu aurretik epaitua izatea eskatu zuen; ez zioten utzi. Bertan ez zegoela kondenatu zuten, eta Espartara igaro zen.",
   "opts": [
    {
     "t": "Orain epaitzeko exijitu, itsasoratu aurretik.",
     "tags": [
      "publico"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "ene": -2,
      "r": "Absolbitu egiten zaituzte eta garbi itsasoratzen zara."
     },
     "lose": {
      "ene": 3,
      "r": "Epaiketa atzeratzen dute: zu ez zaudenean epaituko zaituzte."
     }
    },
    {
     "t": "Itsasoratu eta zu gabe epaitzen utzi.",
     "ene": 4,
     "rep": -1,
     "r": "Bertan ez zaudela heriotzara kondenatzen zaituzte."
    },
    {
     "t": "Lekukoak erosi.",
     "hac": -3,
     "car": -2,
     "risk": true,
     "win": {
      "ene": -1,
      "r": "Lekukoek atzera egiten dute."
     },
     "lose": {
      "ene": 4,
      "rep": -2,
      "r": "Haietako batek dena kontatzen du."
     }
    },
    {
     "t": "Etsaiarengana igaro atxilotu aurretik.",
     "car": -3,
     "rep": -3,
     "ene": 3,
     "hac": 2,
     "set": "traidor",
     "r": "Espartak beso zabalik hartzen zaitu. Atenasek, heriotza-zigor batekin."
    }
   ]
  },
  {
   "id": "flota",
   "etapa": "m",
   "orient": [
    "Politika"
   ],
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Zure arerioak bere plana kontatzen dizu ezkutuan: portuan ainguratuta dagoen aliatuen flota erretzea. Atenasek itsasoa menderatuko luke lehiakiderik gabe. Batzarrak hura epaitzeko eskatzen dizu.",
   "hist": "Plutarkoren arabera, Temistoklesek horrelako zerbait proposatu zuen eta batzarrak Aristidesi eskatu zion aztertzeko. Aristidesek esan zuen ezer ez litzatekeela onuragarriagoa ezta bidegabeagoa ere, eta atenastarrek baztertu egin zuten ezagutu gabe.",
   "opts": [
    {
     "t": "Babestu: Atenasi komeni zaiona da zuzena.",
     "hac": 2,
     "rep": 1,
     "car": -3,
     "ene": 1,
     "tags": [
      "injusto",
      "fuerza"
     ],
     "r": "Flota aliatua sutan dago. Atenasek agintzen du itsasoan, eta inork ez du berriro harengan konfiantzarik."
    },
    {
     "t": "Batzarrari esan oso onuragarria dela… eta oso bidegabea.",
     "car": 2,
     "ene": 2,
     "tags": [
      "justo",
      "publico",
      "verdad"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "r": "Batzarrak baztertu egiten du xehetasunik eskatu gabe. Zure arerioak ez dizu barkatzen."
     },
     "lose": {
      "rep": -1,
      "ene": 1,
      "r": "Morala aberriaren aurretik jartzea leporatzen dizute."
     }
    },
    {
     "t": "Aliatuei ezkutuan abisatu.",
     "car": 1,
     "ene": 3,
     "rep": -2,
     "r": "Aliatuak salbatzen dira. Atenasen, norbait zutaz susmatzen hasten da."
    },
    {
     "t": "Horren ordez, aliatuekin liga bat eta zerga zuzen bat proposatu.",
     "car": 1,
     "rep": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "r": "Aliatuek zuregan konfiantza dute hiri bakoitzak zer ordaintzen duen finkatzeko."
    }
   ]
  },
  {
   "id": "hifasis",
   "etapa": "m",
   "orient": [
    "Politika"
   ],
   "virtue": "Neurritasuna (sophrosýne)",
   "sit": "Zure armada lehertuta dago urteetako kanpainaren ondoren eta etxera itzuli nahi du. Zuk munduaren amaieraraino jarraitu nahi duzu.",
   "hist": "Hifasis ibaiaren ertzean (K.a. 326), Alexandroren soldaduek uko egin zioten aurrera jarraitzeari. Itzuli egin zen, baina Gedrosiako basamortutik, eta milaka hil ziren.",
   "opts": [
    {
     "t": "Aurrera jarraitzeko agindu.",
     "rep": 1,
     "sal": -2,
     "ene": 3,
     "car": -1,
     "tags": [
      "fuerza"
     ],
     "r": "Gogoz kontra obeditzen dizute."
    },
    {
     "t": "Etxera itzuli.",
     "rep": -1,
     "car": 1,
     "tags": [
      "medida"
     ],
     "r": "Zure soldaduek bedeinkatu egiten zaituzte."
    },
    {
     "t": "Protesta egiten dutenak exekutatu.",
     "ene": 4,
     "car": -3,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "r": "Isiltasuna nagusitzen da. Isiltasun arriskutsua."
    },
    {
     "t": "Basamortu gogorrenetik itzuli, zure ausardia erakusteko.",
     "sal": -4,
     "rep": 1,
     "car": -1,
     "r": "Iristen zara. Asko ez."
    }
   ]
  },
  {
   "id": "demagogo",
   "etapa": "m",
   "orient": [
    "Politika",
    "Diskurtsiboa"
   ],
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Hiria gosez dago. Jeneral-hauteskundeak irabaz ditzakezu lortu ezin izango duzun gari merkea aginduz.",
   "opts": [
    {
     "t": "Dena agindu.",
     "rep": 3,
     "car": -2,
     "set": "promesa",
     "r": "Gehiengo erabatekoarekin irabazten duzu."
    },
    {
     "t": "Egia esan: gerrikoa estutu beharko da.",
     "car": 2,
     "rep": -2,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Galdu egiten duzu. Baina inork ezin izango dizu ezer leporatu."
    },
    {
     "t": "Benetan bete dezakezuna agindu.",
     "rep": 1,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Gutxigatik irabazten duzu."
    },
    {
     "t": "Gosearen errua metekoei bota.",
     "rep": 2,
     "car": -3,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "Funtzionatzen du. Beti funtzionatzen du."
    }
   ]
  },
  {
   "id": "juicio",
   "etapa": "v",
   "cond": {
    "ene": 5
   },
   "virtue": "Ausardia (andreía)",
   "sit": "Zahartuta, gazteak usteltea eta hiriko jainkoetan ez sinestea leporatzen dizute. 501 herritarrek osatzen dute epaimahaia.",
   "hist": "Horrelakoa izan zen Sokratesen epaiketa (K.a. 399), Platonen Apologiaren arabera. «Zigor» gisa Pritaneoan doan jatea eskatu zuen, eta heriotzara kondenatu zuten.",
   "opts": [
    {
     "t": "Negar egin eta epaimahaiari erregutu.",
     "car": -3,
     "ene": -2,
     "rep": -1,
     "r": "Errukiz absolbitzen zaituzte. Zuk badakizu zer egin duzun."
    },
    {
     "t": "Zure bizitza harrotasunez defendatu, errukirik eskatu gabe.",
     "car": 3,
     "tags": [
      "verdad",
      "publico"
     ],
     "risk": true,
     "pBase": 0,
     "win": {
      "rep": 2,
      "r": "Boto gutxirengatik absolbitzen zaituzte. Gogoratzen den defentsarik onena izan da."
     },
     "lose": {
      "set": "preso",
      "r": "Heriotzara kondenatzen zaituzte. Kartzelara eramaten zaituzte exekuzioaren zain."
     }
    },
    {
     "t": "Zuk zeuk proposatu erbestea zigor gisa.",
     "hac": -3,
     "rep": -2,
     "ene": -3,
     "r": "Onartu egiten dute. Hiritik urrun amaituko dituzu zure egunak."
    },
    {
     "t": "Epaiketaren aurretik ihes egin.",
     "hac": -2,
     "rep": -2,
     "ene": -2,
     "car": -1,
     "r": "Epaitu aurretik joaten zara. Batzuek koldar deitzen dizute."
    }
   ]
  },
  {
   "id": "carcel",
   "etapa": "v",
   "req": "preso",
   "urgente": true,
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Kartzelan zaude exekuzioaren zain. Zure lagunek zaindaria erosi dute: gaur gauean ihes egin dezakezu.",
   "hist": "Platonen «Kriton» elkarrizketan, Sokratesek ihes egiteari uko egiten dio: legeei bidegabekeria bidegabekeriaz ordaintzea litzateke.",
   "opts": [
    {
     "t": "Ihes egin: kondena bidegabea da.",
     "car": -1,
     "hac": -2,
     "rep": -1,
     "r": "Bizi zara, erbesteratuta eta denen ahotan."
    },
    {
     "t": "Geratu: bidegabekeria bati ez zaio beste batekin erantzuten.",
     "car": 3,
     "muerte": 1,
     "muerteT": "Epaia betetzen duzu. Zure ikasleek ez diote utziko zutaz hitz egiteari."
    },
    {
     "t": "Ihes egin eta atzerritik irakasten jarraitu.",
     "hac": -2,
     "rep": 1,
     "ene": 1,
     "r": "Beste hiri batean irakasten jarraitzen duzu."
    }
   ]
  },
  {
   "id": "testamento",
   "etapa": "v",
   "virtue": "Eskuzabaltasuna (eleutheriótes)",
   "sit": "Testamentua egiteko ordua iristen da.",
   "hist": "Aristotelesek testamentuan bere esklabo batzuk askatzea xedatu zuen, Diogenes Laertzioren arabera.",
   "opts": [
    {
     "t": "Dena zure seme-alabei utzi.",
     "r": "Zure familia babestuta geratzen da."
    },
    {
     "t": "Zure ondasunekin liburutegi edo eskola bat sortu.",
     "hac": -4,
     "rep": 2,
     "car": 1,
     "r": "Zure izenak atean jarraituko du mendeetan zehar."
    },
    {
     "t": "Zure esklaboak askatu eta zati bat haien artean banatu.",
     "hac": -2,
     "car": 2,
     "tags": [
      "justo"
     ],
     "r": "Bizilagun batzuek erokeriatzat jotzen dute."
    },
    {
     "t": "Bizirik zaudela, dena oturuntzetan gastatu.",
     "sal": -2,
     "hac": -3,
     "car": -1,
     "tags": [
      "placer"
     ],
     "r": "Oinordekoek ordain dezatela."
    }
   ]
  },
  {
   "id": "retiro",
   "etapa": "v",
   "virtue": "Zuhurtzia (phrónesis)",
   "sit": "Medikuak bizitza publikoa utzi eta landara erretiratzeko aholkatzen dizu.",
   "opts": [
    {
     "t": "Batzarrean jarraitu azkenera arte.",
     "rep": 1,
     "sal": -2,
     "ene": 1,
     "r": "Errespetatu egiten zaituzte, eta agortu egiten zara."
    },
    {
     "t": "Landara erretiratu.",
     "sal": 2,
     "rep": -1,
     "ene": -2,
     "tags": [
      "medida"
     ],
     "r": "Zure etsaiek ahaztu egiten zaituzte. Zure olibondoek, ez."
    },
    {
     "t": "Erretiratu eta zure oroitzapenak idatzi.",
     "sal": 1,
     "phr": 1,
     "rep": 1,
     "r": "Ordenaz gogoratzea ere pentsatzea da."
    },
    {
     "t": "Petrikilo ospetsu bati ordaindu sendabide miragarri baten truke.",
     "hac": -3,
     "risk": true,
     "win": {
      "sal": 2,
      "r": "Kasualitatez edo ez, hobeto sentitzen zara."
     },
     "lose": {
      "sal": -2,
      "r": "Sendabidea gaixotasuna bera baino okerragoa zen."
     }
    }
   ]
  },
  {
   "id": "estatua",
   "etapa": "v",
   "virtue": "Arima-handitasuna (megalopsykhía)",
   "sit": "Hiriak estatua bat jaso nahi dizu agoran.",
   "hist": "Aristotelesentzat, arima handikoak badaki ohore handien merezimendua duela eta onartu egiten ditu irrikaz nahi izan gabe; harroak bilatu egiten ditu merezi gabe.",
   "opts": [
    {
     "t": "Onartu eta zuk ordaindu.",
     "hac": -3,
     "rep": 2,
     "r": "Estatua duin bat."
    },
    {
     "t": "Apaltasun faltsuz baztertu.",
     "car": -1,
     "r": "Denek dakite irrikaz zeundela."
    },
    {
     "t": "Onartu eta soberan dagoen dirua gerrako umezurtzentzat izatea eskatu.",
     "car": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "Estatua txikia da, eta keinua, handia."
    },
    {
     "t": "Zure arerioarena baino handiagoa izatea exijitu.",
     "rep": 1,
     "ene": 2,
     "car": -1,
     "r": "Orain elkarri hitz egiten ez dioten bi estatua daude."
    }
   ]
  },
  {
   "id": "amnistia",
   "etapa": "v",
   "virtue": "Otzantasuna (praótes)",
   "sit": "Jazarri zintuztenak erori dira. Orain zuri dagokizu haiekin zer egin erabakitzea.",
   "hist": "K.a. 403an, Hogeita Hamarrak erori ondoren, Atenasek amnistia bat bozkatu zuen: debekatuta «iraganeko gaiztakeriak gogoratzea». Historiako lehenetako bat da.",
   "opts": [
    {
     "t": "Mendeku hartu: egin zutena ordain dezatela.",
     "ene": 3,
     "hac": 2,
     "car": -2,
     "tags": [
      "fuerza"
     ],
     "r": "Justizia, diote batzuek. Mendekua, beste batzuek."
    },
    {
     "t": "Amnistia orokor bat babestu.",
     "car": 2,
     "rep": 2,
     "ene": -3,
     "tags": [
      "justo"
     ],
     "r": "Hiriak arnasa hartzen du."
    },
    {
     "t": "Hil zutenentzat bakarrik eskatu epaiketa.",
     "car": 1,
     "ene": -1,
     "phr": 1,
     "tags": [
      "medida",
      "justo"
     ],
     "r": "Justizia zaila, baina justizia."
    },
    {
     "t": "Hiritik joan: ez dituzu ikusi nahi.",
     "rep": -1,
     "ene": -2,
     "r": "Herrak aurrezten dituzu."
    }
   ]
  },
  {
   "id": "herederos",
   "etapa": "v",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Zure seme-alabak familiako negozioagatik liskarrean ari dira. Batek bere langileak tratu txarrez hartzeagatik ezaguna den erosle bati saldu nahi dio.",
   "opts": [
    {
     "t": "Eskaintzarik onena egiten duenari saldu.",
     "hac": 3,
     "car": -2,
     "r": "Diru azkarra. Hobe ez galdetu."
    },
    {
     "t": "Ez saldu eta zure seme-alaben artean banatu.",
     "hac": -1,
     "car": 1,
     "r": "Berdin liskarrean ibiliko dira, baina saldu gabe."
    },
    {
     "t": "Saldu, baina kontratuan baldintzak jarriz.",
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "Erosleak gogoz kontra onartzen ditu."
    },
    {
     "t": "Zuretzat gorde eta zuk estutu langileak.",
     "hac": 3,
     "car": -3,
     "ene": 1,
     "tags": [
      "injusto"
     ],
     "r": "Norbait estutu behar bada, irabazia zurea izan dadila."
    }
   ]
  },
  {
   "id": "c-colaborador",
   "etapa": [
    "m",
    "v"
   ],
   "req": "colaborador",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Zerbitzatu zenuen gobernua erori da. Orain harekin lankidetzan aritzeagatik epaitzen zaituzte.",
   "opts": [
    {
     "t": "Errua besteei bota.",
     "car": -2,
     "risk": true,
     "win": {
      "ene": -2,
      "r": "Sinetsi egiten dizute."
     },
     "lose": {
      "ene": 3,
      "rep": -2,
      "r": "Besteek zu salatzen zaituzte frogekin."
     }
    },
    {
     "t": "Zure zatia onartu eta amnistiari heldu.",
     "car": 2,
     "rep": -1,
     "hac": -2,
     "ene": -1,
     "r": "Isun bat ordaintzen duzu. Zure bizilagunei aurpegira begira diezaiekezu."
    },
    {
     "t": "Eraman dezakezunarekin ihes egin.",
     "hac": -3,
     "rep": -3,
     "ene": -2,
     "r": "Bizitza berri bat, urrun eta izenik gabe."
    },
    {
     "t": "Lekukoak erosi.",
     "hac": -4,
     "car": -2,
     "risk": true,
     "win": {
      "ene": -2,
      "r": "Absolbitu egiten zaituzte."
     },
     "lose": {
      "ene": 4,
      "rep": -3,
      "r": "Erosketa agerian geratzen da."
     }
    }
   ]
  },
  {
   "id": "c-corrupto",
   "etapa": [
    "m",
    "v"
   ],
   "req": "corrupto",
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Konplize ohi batek zure ustelkeria kontatuko duela mehatxatzen du ordaintzen ez badiozu.",
   "opts": [
    {
     "t": "Ordaindu.",
     "hac": -3,
     "r": "Berriro eskatuko du."
    },
    {
     "t": "Zuk lehenik aitortu eta hartutakoa itzuli.",
     "rep": -3,
     "car": 3,
     "hac": -3,
     "r": "Eskandalua, isuna… eta lasaitasuna."
    },
    {
     "t": "Zuk mehatxatu hura.",
     "ene": 3,
     "car": -1,
     "r": "Orain sekretu bat eta gorroto bat dituzue komunean."
    },
    {
     "t": "Betiko isilarazi.",
     "car": -5,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "risk": true,
     "win": {
      "r": "Ez duzu inoiz berriro haren berri izango."
     },
     "lose": {
      "ene": 5,
      "rep": -3,
      "r": "Hiltzaile kontratatuak hitz egiten du."
     }
    }
   ]
  },
  {
   "id": "c-tirano",
   "etapa": [
    "m",
    "v"
   ],
   "req": "tirano",
   "virtue": "Neurritasuna (sophrosýne)",
   "sit": "Urteak daramatzazu tirano gisa gobernatzen. Hurrengo prozesioan zu hiltzeko konspirazio baten zurrumurrua iristen zaizu.",
   "hist": "Harmodiok eta Aristogitonek Hiparko hil zuten, Pisistratoren semea, K.a. 514ko Panatenaietan; Atenasek estatua bat jaso zien tiranohiltzaile gisa.",
   "opts": [
    {
     "t": "Bizkartzainak eta exekuzio prebentiboak.",
     "ene": 2,
     "car": -3,
     "hac": -2,
     "tags": [
      "fuerza"
     ],
     "r": "Bizirik irauten duzu. Hiriak inoiz baino beldur handiagoa dizu."
    },
    {
     "t": "Botereari uko egin eta legeak itzuli.",
     "car": 3,
     "rep": 2,
     "ene": -4,
     "hac": -2,
     "r": "Tirano gutxik egin zuten hori. Horregatik gogoratuko zaituzte."
    },
    {
     "t": "Konspiratzaileekin ezkutuan negoziatu.",
     "phr": 1,
     "risk": true,
     "win": {
      "ene": -3,
      "r": "Akordio batera iristen zarete."
     },
     "lose": {
      "ene": 2,
      "sal": -3,
      "r": "Tranpa bat zen: prozesioan zauritu egiten zaituzte."
     }
    },
    {
     "t": "Kasurik ez egin: inor ez da ausartuko.",
     "muerte": 0.4,
     "muerteT": "Konspiratzaileek prozesioan sastakatzen zaituzte.",
     "r": "Ez da ezer gertatzen. Oraingoan."
    }
   ]
  },
  {
   "id": "c-alumno",
   "etapa": [
    "m",
    "v"
   ],
   "req": "alumno",
   "virtue": "Adiskidetasuna (philía)",
   "sit": "Zure ikasle ohia etsaiarengana igaro da, eta hiriak hura usteltzearen errua botatzen dizu.",
   "opts": [
    {
     "t": "Zeure burua defendatu benetan zer irakatsi zenion azalduz.",
     "phr": 1,
     "tags": [
      "verdad",
      "publico"
     ],
     "risk": true,
     "win": {
      "ene": -2,
      "r": "Batzuek ulertzen dute."
     },
     "lose": {
      "ene": 3,
      "r": "Inork ez du ñabardurarik entzun nahi."
     }
    },
    {
     "t": "Jendaurrean hari uko egin.",
     "car": -1,
     "ene": -1,
     "r": "Erdizka salbatzen zara. Hark jakin egiten du."
    },
    {
     "t": "Isilik geratu.",
     "ene": 2,
     "r": "Isilik dagoenak baietz dio, esaten dute."
    },
    {
     "t": "Denboraldi batez hiritik joan.",
     "hac": -2,
     "ene": -3,
     "rep": -1,
     "r": "Itzultzen zarenean, beste errudun bat egongo da."
    }
   ]
  },
  {
   "id": "c-delator",
   "etapa": [
    "m",
    "v"
   ],
   "req": "delator",
   "virtue": "Adiskidetasuna (philía)",
   "sit": "Haren aurka lekukotza eman zenuen maisua erbestean hil da. Haren ikasleek kalean seinalatzen zaituzte.",
   "opts": [
    {
     "t": "Jendaurrean barkamena eskatu.",
     "car": 2,
     "rep": -1,
     "r": "Batzuek barkatu egiten dizute; zuk, ez."
    },
    {
     "t": "Zeure burua justifikatu: egin beharrekoa egin zenuen.",
     "car": -1,
     "ene": 2,
     "r": "Inork ez dizu sinesten, ezta zuk zeuk ere."
    },
    {
     "t": "Haren ikasle pobreen hezkuntza ordaindu.",
     "hac": -3,
     "car": 2,
     "rep": 1,
     "r": "Ez du ezer ezabatzen, baina zerbait konpontzen du."
    },
    {
     "t": "Haren ikasleak ere salatu.",
     "car": -3,
     "ene": 3,
     "tags": [
      "injusto"
     ],
     "r": "Ez dago atzera bueltarik."
    }
   ]
  },
  {
   "id": "c-oligarca",
   "etapa": [
    "m",
    "v"
   ],
   "req": "oligarca",
   "virtue": "Justizia (dikaiosýne)",
   "sit": "Demokratek hiria berreskuratu dute. Zure aldeak galdu du.",
   "opts": [
    {
     "t": "Eleusisen eutsi azken oligarkekin.",
     "ene": 3,
     "tags": [
      "fuerza"
     ],
     "muerte": 0.15,
     "muerteT": "Azken liskarrean erortzen zara.",
     "r": "Kausa galdua, baina zurea."
    },
    {
     "t": "Amnistiari heldu.",
     "ene": -3,
     "rep": -1,
     "r": "Berriro herritar bat gehiago zara."
    },
    {
     "t": "Zure kide ohiak salatu barkamenaren truke.",
     "car": -3,
     "ene": -2,
     "r": "Barkatu egiten dizute. Haiek, ez."
    },
    {
     "t": "Zure fortunarekin erbesteratu.",
     "hac": -2,
     "rep": -2,
     "ene": -2,
     "r": "Bizitza erosoa erbestean."
    }
   ]
  },
  {
   "id": "c-traidor",
   "etapa": [
    "m",
    "v"
   ],
   "req": "traidor",
   "virtue": "Adiskidetasuna (philía)",
   "sit": "Urteak daramatzazu etsaia zerbitzatzen, eta han ere ez dute zuregan konfiantzarik. Atenasek itzultzea eskaintzen dizu garaipen bat ekartzen badiozu.",
   "hist": "Altzibiades K.a. 407an itzuli zen Atenasera, heroi gisa txalotuta; hurrengo urtean, bere ordezkoaren porrot baten ondoren, kargutik kendu zuten.",
   "opts": [
    {
     "t": "Garaipenarekin itzuli.",
     "risk": true,
     "win": {
      "rep": 4,
      "ene": -2,
      "r": "Heroi gisa itzultzen zara."
     },
     "lose": {
      "ene": 3,
      "sal": -2,
      "r": "Gudua gaizki ateratzen da eta orain bi aldeetan gorroto zaituzte."
     }
    },
    {
     "t": "Zauden lekuan geratu.",
     "ene": 1,
     "r": "Atzerritarra leku guztietan."
    },
    {
     "t": "Persiara joan eta zure ospetik bizi.",
     "hac": 1,
     "rep": -1,
     "ene": 1,
     "r": "Satrapa batek hartu egiten zaitu, oraingoz."
    },
    {
     "t": "Zure gizonekin gotorleku batera erretiratu.",
     "hac": -2,
     "ene": -1,
     "r": "Bakarrik, baina salbu."
    }
   ]
  },
  {
   "id": "c-promesa",
   "etapa": [
    "m",
    "v"
   ],
   "req": "promesa",
   "virtue": "Egiazkotasuna (alétheia)",
   "sit": "Agindu zenuen gari merkea ez da iritsi. Herria zure izena oihukatzen hasi da, eta ez txalotzeko.",
   "opts": [
    {
     "t": "Zure poltsikotik ordaindu.",
     "hac": -5,
     "rep": 2,
     "r": "Betetzen duzu, hondatzen bazara ere."
    },
    {
     "t": "Aberatsei errua bota eta garia konfiskatu.",
     "ene": 4,
     "rep": 1,
     "tags": [
      "fuerza"
     ],
     "r": "Herriak jaten du. Aberatsek konspiratu egiten dute."
    },
    {
     "t": "Ezinezkoa agindu zenuela onartu.",
     "car": 2,
     "rep": -3,
     "r": "Zintzoa, berandu eta garesti."
    },
    {
     "t": "Kanpoko etsai bat asmatu.",
     "car": -3,
     "rep": 1,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "Gerrak gosea ahazten du… denbora batez."
    }
   ]
  }
 ],
 "chance": [
  {
   "t": "Herriaren babesa",
   "d": "Herria zure alde jartzen da.",
   "rep": 2,
   "ene": -1,
   "img": "azar-apoyo"
  },
  {
   "t": "Hitzaldi fina",
   "d": "Zure hitzek oreka miragarria lortzen dute.",
   "rep": 1,
   "phr": 1,
   "img": "azar-sutil"
  },
  {
   "t": "Erreforma arrakastatsua",
   "d": "Zure neurri bat ondo ateratzen da.",
   "rep": 1,
   "hac": 1,
   "img": "azar-reforma"
  },
  {
   "t": "Inspirazioa",
   "d": "Zure iritzia ordenatzen duen argitasun bat aurkitzen duzu.",
   "phr": 2,
   "img": "azar-inspiracion"
  },
  {
   "t": "Bake-ituna",
   "d": "Bakea sinatzen da eta hiriak arnasa hartzen du.",
   "sal": 1,
   "hac": 1,
   "ene": -1,
   "img": "azar-paz"
  },
  {
   "t": "Zorte-ukaldia",
   "d": "Fortunak irribarre egiten du behingoz.",
   "hac": 3,
   "img": "azar-suerte"
  },
  {
   "t": "Eliteen erresistentzia",
   "d": "Boteretsuek zure ekimena blokeatzen dute.",
   "hac": -2,
   "ene": 2,
   "img": "azar-elites",
   "bad": true
  },
  {
   "t": "Fanatikoen erreakzioa",
   "d": "Erantzun bortitza jasotzen duzu.",
   "sal": -2,
   "ene": 1,
   "img": "azar-fanaticos",
   "bad": true
  },
  {
   "t": "Izurritea",
   "d": "Epidemia batek hiria suntsitzen du.",
   "sal": -3,
   "img": "azar-peste",
   "bad": true
  },
  {
   "t": "Hondamendi ekonomikoa",
   "d": "Inbertsio txar batek baliabiderik gabe uzten zaitu.",
   "hac": -3,
   "img": "azar-ruina",
   "bad": true
  },
  {
   "t": "Traizioa",
   "d": "Konfiantzako norbaitek saldu egiten zaitu.",
   "rep": -2,
   "ene": 2,
   "hac": -1,
   "img": "azar-traicion",
   "bad": true
  },
  {
   "t": "Gerra zibila",
   "d": "Barne-gatazkak dena irensten du.",
   "sal": -2,
   "hac": -2,
   "img": "azar-guerra",
   "bad": true
  },
  {
   "t": "Eskandalu publikoa",
   "d": "Zure izena lokatzetan arrastaka dabil.",
   "rep": -3,
   "img": "azar-escandalo",
   "bad": true
  }
 ],
 "chanceProb": 0.35,
 "peligro": {
  "umbral": 4,
  "porPunto": 0.06,
  "max": 0.5,
  "juicio": {
   "t": "Epaiketara eramaten zaituzte",
   "img": null,
   "em": "⚖️",
   "salidas": [
    {
     "min": 0.7,
     "t": "Absolbitua",
     "d": "Epaimahaiak boto gutxirengatik absolbitzen zaitu.",
     "ene": -2
    },
    {
     "min": 0.45,
     "t": "Isuna eta kartzela",
     "d": "Osorik ordaindu ezin duzun isun batera kondenatzen zaituzte: hilabete batzuk kartzelan.",
     "hac": -2,
     "sal": -1,
     "ene": -2
    },
    {
     "min": 0.22,
     "t": "Erbestea",
     "d": "Erbestera kondenatzen zaituzte: etxea, lagunak eta ondasunak galtzen dituzu.",
     "hac": -2,
     "rep": -2,
     "ene": -4,
     "img": "azar-destierro"
    },
    {
     "min": -99,
     "t": "Heriotza-zigorra",
     "d": "Epaimahaiak heriotzara kondenatzen zaitu.",
     "muerte": true
    }
   ]
  },
  "ostracismo": {
   "t": "Ostrazismoa",
   "d": "Batzarrak zure izena idazten du ostraketan: hamar urte hiritik kanpo, nahiz eta zure ondasunak gordetzen dituzun.",
   "rep": -3,
   "hac": -1,
   "ene": -4,
   "img": "azar-destierro"
  },
  "atentado": {
   "t": "Atentatua",
   "img": "azar-fanaticos",
   "salidas": [
    {
     "min": 0.15,
     "t": "Atentatu batetik bizirik ateratzen zara",
     "d": "Gauez erasotzen zaituzte; zaurituta ateratzen zara.",
     "sal": -3,
     "ene": -1
    },
    {
     "min": -99,
     "t": "Erailda",
     "d": "Gauez erasotzen zaituzte Zeramikoko kale batean.",
     "muerte": true
    }
   ]
  }
 },
 "finales": {
  "muerte_noble": {
   "emoji": "🕯️",
   "label": "Bizitza noble etena",
   "texto": "Zeure buruari leial hiltzen zara. Aristotelesek zure izaera miretsiko luke, baina ez zintuzke zoriontsu deituko: eudaimonia bizitza oso lortu bat da, eta zurea moztu egin da."
  },
  "muerte": {
   "emoji": "💀",
   "label": "Bizitza alferrik galdua",
   "texto": "Izan zintezkeena izatera iritsi gabe hiltzen zara. Ez bertuteak ez fortunak ez zaituzte lagundu."
  },
  "ruina_noble": {
   "emoji": "🥀",
   "label": "Bertutetsua miserian",
   "texto": "Izaera gordetzen duzu, baina ezer gabe geratu zara. Aristotelesentzat, bertutea bakarrik ez da nahikoa: ondasunik gabe ezin da ondo jokatu ezta ondo bizi ere."
  },
  "ruina": {
   "emoji": "🪨",
   "label": "Hondatua",
   "texto": "Dena galdu duzu, eta harekin batera hiriko bizitzan parte hartzeko aukera."
  },
  "prospero": {
   "emoji": "🪙",
   "label": "Oparoa baina ez zoriontsua",
   "texto": "Aberastasuna eta ospea dituzu, baina izaera hondatua. Aristotelesentzat, kanpoko ondasunak bitartekoak dira: bertuterik gabe ez dago eudaimoniarik."
  }
 },
 "bands": [
  {
   "min": 46,
   "emoji": "🌿",
   "label": "Bizitza zoriontsu eta bikaina"
  },
  {
   "min": 38,
   "emoji": "⚖️",
   "label": "Bizitza orekatua"
  },
  {
   "min": 28,
   "emoji": "⚠️",
   "label": "Bizitza gatazkatsua"
  },
  {
   "min": -999,
   "emoji": "🥀",
   "label": "Porrotaren ertzeko bizitza"
  }
 ],
 "reflect": [
  "Zure pertsonaia bertutetsu izanik hil bada, zoriontsua izan al zen? Zer esango luke Aristotelesek, Priamo inork ez duela zoriontsu deitzen gogorarazten duenak?",
  "Zerk pisatu du gehiago zure bizitzan: zure izaerak, zure ondasunek ala fortunak?",
  "Aristotelesek dio bertutea «guri dagokigun» erdibide bat dela. Beste pertsonaiei bezainbeste kostatu zaizu ondo jokatzea?",
  "Merezi al du ustelezina izatea horrek bizia kosta badiezazuke?",
  "Zerk bereizten ditu bizitza politikoa, diskurtsiboa eta kontenplatiboa? Zein da, Aristotelesen arabera, zoriontsuena?",
  "Zergatik da hain garrantzitsua phrónesis (zuhurtzia) ondo bizitzeko?"
 ]
};
