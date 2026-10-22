// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/logica_ejercicios.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const LOGX = {
 "t": {
  "puentesEjTit": "Ariketa: lege bera bost hizkuntzatan",
  "puentesEjIntro": "Lege bakoitza bost hizkuntzetako batean ematen da. Idatzi beste lauretan, eta gero zabaldu soluzioa. Egiaztatzeko, pasa ezazu egia-taulatik (Egia-taulak) edo egin kalkuluak 0rekin eta 1ekin. Hamarretako bat tranpa da.",
  "puentesDada": "«{l}» hizkuntzan emana:",
  "puentesVer": "Ikusi legea bost hizkuntzatan",
  "silEjTit": "Ariketa: silogismotik Vennen diagramara, urratsez urrats",
  "silEjIntro": "Silogismo bakoitzean: premisa bakoitzak zer eremu margotzen dituen grisez (lehenik unibertsalak), non doan ✕ ikurra eta ondorioa dagoeneko marraztuta dagoen ala ez. Egin paperean edo goiko diagraman, eta gero begiratu soluzioa. Horietako bat Eulerrek engainatzen duen eta Vennek ez duen kasu bat da.",
  "silCargar": "Ikusi diagraman",
  "silSol": "Soluzioa urratsez urrats",
  "silMayor": "Premisa nagusia:",
  "silMenor": "Premisa txikia:",
  "silCruz": "✕ ikurra:",
  "silConcl": "Ondorioa:",
  "silEuler": "Euler eta Venn:",
  "silValido": "Baliozkoa",
  "silNoValido": "Ez da baliozkoa",
  "silTrad": "Baliozkoa, erdiko terminoak dioena existitzen bada bakarrik",
  "nomTit": "Falazia ez-formalak: Txokoko zerrenda",
  "nomIntro": "Arrazoibidearen forman ez, edukian dauden tranpak: zer esaten den, norengatik eta zertarako. Izen bakoitzak glosategiko bere sarrerara eramaten du, han definitzen baitira; hemen beste izen batzuk, adibide bat eta nola geldiarazi daude.",
  "nomOtros": "Beste izen batzuk:",
  "nomEj": "Adibidea:",
  "nomParar": "Nola geldiarazi:",
  "qfTit": "Ariketa: zer falazia da?",
  "qfIntro": "Hogei kasu. Horietako hirutan ez dago falaziarik: argudio on bat ezagutzen ere jakin behar da.",
  "qfNo": "Ez da falazia bat",
  "qfBien": "Ondo.",
  "qfMal": "Ez: «{x}» da.",
  "qfCuenta": "Asmatutakoak: {a} / {n}"
 },
 "lenguajes": [
  "Enuntziatuak",
  "Multzoak",
  "Booleren aljebra",
  "Betiko zenbakiak (0 eta 1ekin)",
  "Ateak"
 ],
 "puentes": [
  {
   "ley": "Ezeztapen bikoitza",
   "dada": 0,
   "v": [
    "¬¬p ↔ p",
    "(Aᶜ)ᶜ = A",
    "x″ = x",
    "1 − (1 − x) = x",
    "NOT-aren NOT = kable zuzena"
   ]
  },
  {
   "ley": "Konjuntzioaren trukatze-legea",
   "dada": 1,
   "v": [
    "p ∧ q ↔ q ∧ p",
    "A ∩ B = B ∩ A",
    "x · y = y · x",
    "x · y = y · x",
    "Sarrerak lekuz aldatuta dituen AND = AND bera"
   ]
  },
  {
   "ley": "Disjuntzioaren idenpotentzia",
   "dada": 2,
   "v": [
    "p ∨ p ↔ p",
    "A ∪ A = A",
    "x + x = x",
    "x + x − x · x = x",
    "Bi sarrerak lotuta dituen OR = kable zuzena"
   ]
  },
  {
   "ley": "Xurgapena",
   "dada": 3,
   "v": [
    "p ∧ (p ∨ q) ↔ p",
    "A ∩ (A ∪ B) = A",
    "x · (x + y) = x",
    "x · (x + y − x · y) = x",
    "x-ren eta (x OR y)-ren AND = x"
   ]
  },
  {
   "ley": "Hirugarren baztertua",
   "dada": 4,
   "v": [
    "p ∨ ¬p (tautologia)",
    "A ∪ Aᶜ = U",
    "x + x′ = 1",
    "x + (1 − x) − x · (1 − x) = 1",
    "x OR (NOT x): beti piztuta dagoen lanpara"
   ]
  },
  {
   "ley": "Ez-kontraesana",
   "dada": 0,
   "v": [
    "¬(p ∧ ¬p) (tautologia: p ∧ ¬p beti da faltsua)",
    "A ∩ Aᶜ = ∅",
    "x · x′ = 0",
    "x · (1 − x) = 0",
    "x AND (NOT x): beti itzalita dagoen lanpara"
   ]
  },
  {
   "ley": "De Morgan, disjuntziorako",
   "dada": 1,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∧ ¬q",
    "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ",
    "(x + y)′ = x′ · y′",
    "1 − (x + y − x · y) = (1 − x) · (1 − y)",
    "NOR = bi NOT-en AND"
   ]
  },
  {
   "ley": "Konjuntzioaren banatze-legea disjuntzioarekiko",
   "dada": 2,
   "v": [
    "p ∧ (q ∨ r) ↔ (p ∧ q) ∨ (p ∧ r)",
    "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
    "x · (y + z) = x · y + x · z",
    "x · (y + z − y · z) = x · y + x · z − x · y · z",
    "x AND (y OR z) = (x AND y) OR (x AND z)"
   ]
  },
  {
   "ley": "Konjuntzioaren elementu neutroa",
   "dada": 3,
   "v": [
    "p ∧ (q ∨ ¬q) ↔ p",
    "A ∩ U = A",
    "x · 1 = x",
    "x · 1 = x",
    "Sarrera bat beti 1ean duen AND = kable zuzena"
   ]
  },
  {
   "ley": "Tranpa-kasua: «lege» bat, legea ez dena",
   "dada": 2,
   "trampa": true,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∨ ¬q: faltsua, p egiazkoa eta q faltsua direnean",
    "(A ∪ B)ᶜ = Aᶜ ∪ Bᶜ: faltsua, A-n zerbait badago eta B-n ez",
    "(x + y)′ = x′ + y′: x = 1 eta y = 0 direnean, 0 = 1 ematen du",
    "1 − (x + y − x · y) = (1 − x) + (1 − y) − (1 − x) · (1 − y): x = 1 eta y = 0 direnean, 0 = 1 ematen du",
    "NOR = bi NOT-en OR: ez; NOR bi NOT-en AND da, eta bi NOT-en OR NAND da"
   ],
   "nota": "Boole-ren hizkuntzan lege bat balitz bezala ematen da, baina ez da: ezeztapena eragiketa aldatu gabe banatzearen akatsa da. Taulako errenkada bat (edo 0rekin eta 1ekin egindako kalkulu bat) nahikoa da hura gezurtatzeko. Benetako legea goiko De Morganena da."
  }
 ],
 "silogismos": [
  {
   "code": "AAA-1",
   "S": "txakur",
   "P": "ornodun",
   "M": "ugaztun",
   "tipo": "si",
   "mayor": "«Ugaztun guztiak ornodunak dira»: margotu grisez «ugaztun» zirkuluaren zatia, «ornodun» zirkulutik kanpo geratzen dena (bere bi eremuak: «txakur» zirkuluaren barruan dagoena eta kanpoan dagoena).",
   "menor": "«Txakur guztiak ugaztunak dira»: margotu grisez «txakur» zirkuluaren zatia, «ugaztun» zirkulutik kanpo geratzen dena (bi eremu).",
   "cruz": "Ez dago bat ere: bi premisak unibertsalak dira.",
   "concl": "«Txakur guztiak ornodunak dira» esateko, «txakur» zirkuluaren zatia, «ornodun» zirkulutik kanpo dagoena, hutsik egon behar da. Bere bi eremuak grisean daude jada, premisa bakoitzak bat: ondorioa dagoeneko marraztuta dago. Barbara da."
  },
  {
   "code": "EAE-1",
   "S": "musker",
   "P": "animalia iletsu",
   "M": "narrasti",
   "tipo": "si",
   "mayor": "«Narrasti bat ere ez da animalia iletsua»: margotu grisez «narrasti» eta «animalia iletsu» zirkuluen ebakidura (bi eremu).",
   "menor": "«Musker guztiak narrastiak dira»: margotu grisez «musker» zirkuluaren zatia, «narrasti» zirkulutik kanpo dagoena (bi eremu).",
   "cruz": "Ez dago bat ere.",
   "concl": "«Musker bat ere ez da animalia iletsua» esateko, «musker» eta «animalia iletsu» zirkuluen ebakidurak hutsik egon behar du. Bere eremuetako bat premisa nagusiak margotu du grisez, eta bestea txikiak: dagoeneko marraztuta dago. Celarent da."
  },
  {
   "code": "AII-1",
   "S": "mahaiko objektu",
   "P": "eroale",
   "M": "metal",
   "tipo": "si",
   "mayor": "«Metal guztiak eroaleak dira»: margotu grisez «metal» zirkuluaren zatia, «eroale» zirkulutik kanpo dagoena (bi eremu). Lehenik egiten da, unibertsala delako.",
   "menor": "«Mahaiko objektu batzuk metalezkoak dira»: ✕ bat behar du «mahaiko objektu» eta «metal» zirkuluen ebakiduran.",
   "cruz": "Ebakidura horrek bi eremu ditu, baina «eroale» zirkulutik kanpo geratzen dena grisean dago jada: ✕ ikurra bestean doa, hiru zirkuluen barruan.",
   "concl": "«Mahaiko objektu batzuk eroaleak dira» esateko, ✕ bat behar da «mahaiko objektu» eta «eroale» zirkuluen ebakiduran: badago jada. Darii da."
  },
  {
   "code": "EIO-1",
   "S": "zerrendako zenbaki",
   "P": "zenbaki bikoiti",
   "M": "2 baino handiagoko zenbaki lehen",
   "tipo": "si",
   "mayor": "«2 baino handiagoko zenbaki lehen bat ere ez da zenbaki bikoitia»: margotu grisez «2 baino handiagoko zenbaki lehen» eta «zenbaki bikoiti» zirkuluen ebakidura (bi eremu).",
   "menor": "«Zerrendako zenbaki batzuk 2 baino handiagoko zenbaki lehenak dira»: ✕ bat behar du «zerrendako zenbaki» eta «2 baino handiagoko zenbaki lehen» zirkuluen ebakiduran.",
   "cruz": "Bere bi eremuetatik, «zenbaki bikoiti» zirkuluaren barruan dagoena grisean dago jada: ✕ ikurra bestean doa, «zenbaki bikoiti» zirkulutik kanpo.",
   "concl": "«Zerrendako zenbaki batzuk ez dira zenbaki bikoitiak» esateko, ✕ bat behar da «zerrendako zenbaki» zirkuluan, «zenbaki bikoiti» zirkulutik kanpo: badago jada. Ferio da."
  },
  {
   "code": "AAA-2",
   "S": "txakur",
   "P": "katu",
   "M": "ugaztun",
   "tipo": "no",
   "mayor": "«Katu guztiak ugaztunak dira»: margotu grisez «katu» zirkuluaren zatia, «ugaztun» zirkulutik kanpo dagoena.",
   "menor": "«Txakur guztiak ugaztunak dira»: margotu grisez «txakur» zirkuluaren zatia, «ugaztun» zirkulutik kanpo dagoena.",
   "cruz": "Ez dago bat ere.",
   "concl": "«Txakur guztiak katuak dira» esateko, «txakur» zirkuluaren zatia, «katu» zirkulutik kanpo dagoena, hutsik egon beharko litzateke. Bere eremuetako bat, «ugaztun» zirkuluaren barruan dagoena, zuri dago oraindik: ondorioa ez dago marraztuta. Ez da baliozkoa: erdiko terminoa («ugaztun») ez da bere hedadura osoan hartzen premisa batean ere."
  },
  {
   "code": "AII-2",
   "S": "zientzialari",
   "P": "poeta",
   "M": "ameslari",
   "tipo": "no",
   "mayor": "«Poeta guztiak ameslariak dira»: margotu grisez «poeta» zirkuluaren zatia, «ameslari» zirkulutik kanpo dagoena.",
   "menor": "«Zientzialari batzuk ameslariak dira»: ✕ bat behar du «zientzialari» eta «ameslari» zirkuluen ebakiduran.",
   "cruz": "Ebakidura horrek bi eremu ditu, bat «poeta» zirkuluaren barruan eta bestea kanpoan, eta biak zuri daude oraindik: ez dakigu zientzialari hori zeinetan dagoen. ✕ ikurra bi eremuak bereizten dituen marraren gainean doa.",
   "concl": "«Zientzialari batzuk poetak dira» esateko, ✕ bat behar litzateke argi eta garbi «zientzialari» eta «poeta» zirkuluen ebakiduraren barruan. ✕ ikurra marraren gainean dago: ez dago marraztuta. Ez da baliozkoa.",
   "euler": "Eulerrek engainatzen duen kasua: erraza da «zientzialari» marraztea «poeta» ebakitzen, «ameslari» zirkuluaren barruan, eta orduan badirudi zientzialari batzuk poetak direla. Baina bada premisekiko hain leiala den beste marrazki bat, non zientzialari ameslariak poetetatik kanpo geratzen diren. Eulerrek marrazki bat aukeratzera behartzen du; Vennek ez du aukeratzen: ✕ ikurra marraren gainean jartzen du."
  },
  {
   "code": "AAI-3",
   "S": "zaldi",
   "P": "zuri",
   "M": "adarbakar",
   "tipo": "trad",
   "mayor": "«Adarbakar guztiak zuriak dira»: margotu grisez «adarbakar» zirkuluaren zatia, «zuri» zirkulutik kanpo dagoena.",
   "menor": "«Adarbakar guztiak zaldiak dira»: margotu grisez «adarbakar» zirkuluaren zatia, «zaldi» zirkulutik kanpo dagoena.",
   "cruz": "Ez dago bat ere: bi premisak unibertsalak dira.",
   "concl": "«Zenbait zaldi zuria da»-k ✕ bat eskatzen du, eta ez dago bat ere: ondorioa ez dago marraztuta, egia izan arren. Darapti da: Aristotelesek baliozkotzat ematen zuen terminoak hutsak ez direla suposatzen zuelako; «unikornio»-rekin suposizio hori huts egiten du. «Badago unikornio bat» premisarekin (✕ bat «unikornio»-ren zuri geratzen den eremu bakarrean) bai ateratzen da."
  },
  {
   "code": "OAO-3",
   "S": "pentsalari",
   "P": "liburu-egile",
   "M": "filosofo",
   "tipo": "si",
   "mayor": "«Filosofo batzuk ez dira liburu-egileak»: ✕ bat behar du «filosofo» zirkuluan, «liburu-egile» zirkulutik kanpo. Premisa txikiaren zain geratzen da, unibertsala baita.",
   "menor": "«Filosofo guztiak pentsalariak dira»: margotu grisez «filosofo» zirkuluaren zatia, «pentsalari» zirkulutik kanpo dagoena (bi eremu).",
   "cruz": "«Filosofo» zirkuluaren eremuak, «liburu-egile» zirkulutik kanpo, bi zati ditu; «pentsalari» zirkulutik kanpo geratzen dena grisean dago jada. ✕ ikurra bestean doa: libururik idatzi ez zuen pentsalari filosofo bat (Sokrates, adibidez).",
   "concl": "«Pentsalari batzuk ez dira liburu-egileak» esateko, ✕ bat behar da «pentsalari» zirkuluan, «liburu-egile» zirkulutik kanpo: badago jada. Bocardo da."
  }
 ],
 "falacias": [
  {
   "g": "g-fil-ad-hominem",
   "nom": "Ad hominem",
   "otros": "Pertsonaren aurkako erasoa; putzua pozoitzea; tu quoque aldaera bat da",
   "ej": "«Ez egin kasurik: zientzietakoa delako esaten du.»",
   "parar": "Pertsona eta arrazoia bereiztea: «Eta zer du txarra esaten duenak?»"
  },
  {
   "g": "g-fil-tu-quoque",
   "nom": "Tu quoque",
   "otros": "Zu ere bai; hipokresiari deia",
   "ej": "«Ez erretzeko esaten didazu? Zuk ere erretzen zenuen nire adinean.»",
   "parar": "Bestea koherentziarik gabea izateak ez du kritika faltsu bihurtzen: «Agian bai, baina arrazoi dut ala ez?»"
  },
  {
   "g": "g-fil-hombre-de-paja",
   "nom": "Lastozko gizona",
   "otros": "Lastozko panpina; argudioaren karikatura",
   "ej": "«Etxeko lan gutxiago nahi ditu: hau da, inoiz ez ikastea.»",
   "parar": "Tesia zehazki errepikatzea: «Nik ez dut hori esan; esan dudana da…»"
  },
  {
   "g": "g-fil-apelacion-a-la-autoridad",
   "nom": "Autoritateari deia",
   "otros": "Ad verecundiam; autoritate faltsua",
   "ej": "«Xanpu hau da onena: futbolari batek dio.»",
   "parar": "Galdetzea ea horretan aditua den eta adituak ados dauden."
  },
  {
   "g": "g-fil-apelacion-a-la-mayoria",
   "nom": "Gehiengoarengana jo",
   "otros": "Ad populum; arraste-efektua",
   "ej": "«Mundu guztiak partekatzen badu, egia izango da.»",
   "parar": "Jende askok sinesteak ez du arrazoi bat ematen: «Zergatik sinesten dute?»"
  },
  {
   "g": "g-fil-apelacion-a-la-emocion",
   "nom": "Emozioari deia",
   "otros": "Ad misericordiam (penari); ad baculum (beldurrari edo mehatxuari)",
   "ej": "«Suspentsoa jartzen badidazu, gurasoek uda osoan zigortuko naute.»",
   "parar": "Emozioa aitortu eta galderara itzultzea: «Eta azterketa ondo dago ala ez?»"
  },
  {
   "g": "g-fil-apelacion-a-la-ignorancia",
   "nom": "Ezjakintasunera jo",
   "otros": "Ad ignorantiam",
   "ej": "«Inork ez du frogatu mamuak existitzen ez direnik; beraz, existitzen dira.»",
   "parar": "Frogatzeko zama baieztatzen duenak du: ezetz ez jakitea ez da baietz jakitea."
  },
  {
   "g": "g-fil-falso-dilema",
   "nom": "Dilema faltsua",
   "otros": "Disjuntzio faltsua; edo zuria edo beltza",
   "ej": "«Edo nirekin zaude edo nire aurka.»",
   "parar": "Hirugarren aukera bilatzea: «Eta bietako bat ere ez bada?»"
  },
  {
   "g": "g-fil-pendiente-resbaladiza",
   "nom": "Aldapa irristakorra",
   "otros": "Elur-bola",
   "ej": "«Gaur hamaikak arte ateratzen uzten badizut, bihar hiruretan itzuli nahiko duzu.»",
   "parar": "Katearen urrats bakoitza justifikatzeko eskatzea."
  },
  {
   "g": "g-fil-generalizacion-apresurada",
   "nom": "Orokorpen presatua",
   "otros": "Lagin urria edo alboratua",
   "ej": "«Nire lehengusua Burgoskoa da eta oso serioa da: burgostarrak serioak dira.»",
   "parar": "Galdetzea zenbat kasu diren eta adierazgarriak diren."
  },
  {
   "g": "g-fil-causa-falsa",
   "nom": "Kausa faltsua",
   "otros": "Post hoc, ergo propter hoc; cum hoc (korrelazioa ez da kausalitatea)",
   "ej": "«Eskumuturreko hau daramadanetik, gainditu egiten dut: eskumuturrekoak zortea ematen dit.»",
   "parar": "Beste kausa batzuk, kasualitatea edo kausa komun bat bilatzea."
  },
  {
   "g": "g-fil-falsa-analogia",
   "nom": "Analogia faltsua",
   "otros": "Analogia ahula",
   "ej": "«Eskola bat enpresa bat bezalakoa da: errendimendurik ematen ez duten ikasleak kaleratu behar dira.»",
   "parar": "Bi gauzen artean axola duen desberdintasuna bilatzea."
  },
  {
   "g": "g-fil-peticion-de-principio",
   "nom": "Printzipio-eskea",
   "otros": "Petitio principii; arrazoibide zirkularra",
   "ej": "«Liburu honek egia dio, liburuak berak hala dioelako.»",
   "parar": "Premisak ondorioa dagoeneko barnean duela adieraztea."
  },
  {
   "g": "g-fil-equivoco",
   "nom": "Ekibokoa",
   "otros": "Anfibologia (zentzu bikoitza esaldiarena bada); homonimia",
   "ej": "«Banku bat esertzeko da; Espainiako Bankua banku bat da; beraz, esertzeko da.»",
   "parar": "Galdetzea zer esan nahi duen hitzak premisa bakoitzean."
  },
  {
   "g": "g-fil-pregunta-compleja",
   "nom": "Galdera konplexua",
   "otros": "Galdera maltzurra; galdera kargatua",
   "ej": "«Zergatik jarraitzen duzu gezurretan?»",
   "parar": "Aldez aurretiko ustea baztertzea erantzun aurretik: «Ez dut onartzen gezurretan ari naizenik.»"
  },
  {
   "g": "g-fil-pista-falsa",
   "nom": "Arrasto faltsua",
   "otros": "Red herring; gaiz aldatzea",
   "ej": "«Nik hautsi dut loreontzia? Eta nork utzi zuen leihoa irekita?»",
   "parar": "Gaira itzultzea: «Hori beste kontu bat da; gu … buruz ari ginen.»"
  }
 ],
 "qf": [
  {
   "txt": "«Ez egin kasurik ministroak ekonomiaz esaten duenari: bi aldiz dibortziatu da.»",
   "tipo": "g-fil-ad-hominem",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "Hitz egiten duenaren bizitza pribatua erasotzen du, eta horrek ez du zerikusirik ekonomiaz esaten duenarekin."
  },
  {
   "txt": "«Berandu iristeagatik errieta egiten didazu? Zu ere berandu iritsi zinen astelehenean!»",
   "tipo": "g-fil-tu-quoque",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-hombre-de-paja",
    "g-fil-causa-falsa"
   ],
   "por": "Bestea ere berandu iritsi izanak ez du faltsu bihurtzen berandu iristea gaizki dagoela."
  },
  {
   "txt": "—Institutuan gehiago birziklatu beharko genuke. —Noski, eta plastikoak, autoak eta argi elektrikoa debekatu.",
   "tipo": "g-fil-hombre-de-paja",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-hombre-de-paja",
    "g-fil-falso-dilema"
   ],
   "por": "Proposamena barregarri bihurtzeraino puzten du eta karikatura hori erasotzen du. «Birziklatzen badugu, autoak debekatzen amaituko dugu» esango balu, aldapa irristakorra litzateke."
  },
  {
   "txt": "«Telesaileko dentistak jogurt hau gomendatzen du bihotzerako.»",
   "tipo": "g-fil-apelacion-a-la-autoridad",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-falsa-analogia"
   ],
   "por": "Aktore bat da, eta, gainera, bihotza ez da bere arloa telesailean ere: bere eremutik kanpoko autoritate bat."
  },
  {
   "txt": "«Hamar milioi pertsona ezin dira oker egon: bideo honek egia dio.»",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-apelacion-a-la-autoridad"
   ],
   "por": "Ikustaldiek ospea neurtzen dute, ez egia."
  },
  {
   "txt": "«Irakasle, onartu nazazu, mesedez: aste izugarria izan dut eta oso triste nago.»",
   "tipo": "g-fil-apelacion-a-la-emocion",
   "o": [
    "g-fil-apelacion-a-la-emocion",
    "g-fil-pendiente-resbaladiza",
    "g-fil-falso-dilema"
   ],
   "por": "Errukia bilatzen du, azterketak gaindiketa merezi duela arrazoitu beharrean: pena benetakoa izan daiteke, baina ez du ezer esaten azterketaren balioaz."
  },
  {
   "txt": "«Inork ez du frogatu osagarri honek funtzionatzen ez duenik; beraz, funtzionatzen du.»",
   "tipo": "g-fil-apelacion-a-la-ignorancia",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "g-fil-peticion-de-principio"
   ],
   "por": "Zerbait faltsua dela ez jakiteak ez du frogatzen egiazkoa denik: funtzionatzen duela baieztatzen duenak frogatu behar du."
  },
  {
   "txt": "«Edo ekainean dena gainditzen duzu, edo ez duzu ikasteko balio.»",
   "tipo": "g-fil-falso-dilema",
   "o": [
    "g-fil-falso-dilema",
    "g-fil-generalizacion-apresurada",
    "g-fil-pregunta-compleja"
   ],
   "por": "Aukera askoz gehiago daude: irailean gainditzea, metodoz aldatzea, urte txar bat izatea."
  },
  {
   "txt": "«Jolasaldian mugikorra erabiltzen uzten badugu, gero klasean erabiliko dute, ondoren azterketetan, eta azkenean inork ez du ezer ikasiko.»",
   "tipo": "g-fil-pendiente-resbaladiza",
   "o": [
    "g-fil-hombre-de-paja",
    "g-fil-pendiente-resbaladiza",
    "g-fil-causa-falsa"
   ],
   "por": "Gero eta ondorio okerragoak kateatzen ditu, urratsetako bat ere justifikatu gabe."
  },
  {
   "txt": "«Bi frantziar ezagutu ditut eta biak ziren atsegingaitzak: frantziarrak atsegingaitzak dira.»",
   "tipo": "g-fil-generalizacion-apresurada",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-falsa-analogia",
    "g-fil-ad-hominem"
   ],
   "por": "Bi kasu ez dira nahikoa milioika pertsonari buruz hitz egiteko."
  },
  {
   "txt": "«Farola berria jarri dutenetik, lapurreta gutxiago dago. Argiak beldurra ematen die lapurrei.»",
   "tipo": "g-fil-causa-falsa",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "no-es-falacia"
   ],
   "por": "Izan daiteke, baina gauza bat beste baten ondoren etortzeak ez du frogatzen hark eragiten duenik: agian zaintza gehiago egon zen edo kasualitatea izan zen. Alderatu egin beharko litzateke. Tranpa-kasua: ondorioa egiazkoa izan liteke; falazia da frogatutzat ematea."
  },
  {
   "txt": "«Ikasleak denda bateko bezeroak bezalakoak dira: arrazoi dute beti.»",
   "tipo": "g-fil-falsa-analogia",
   "o": [
    "g-fil-falsa-analogia",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-hombre-de-paja"
   ],
   "por": "Ikasle batek ez du produktu bat erosten: oraindik ez dakiena ikastera doa, eta hor dago axola duen desberdintasuna."
  },
  {
   "txt": "«Jainkoa existitzen da Bibliak hala dioelako, eta Bibliak egia dio Jainkoaren hitza delako.»",
   "tipo": "g-fil-peticion-de-principio",
   "o": [
    "g-fil-peticion-de-principio",
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-ignorancia"
   ],
   "por": "Argudioak frogatu nahi duena erabiltzen du premisa gisa. Kontuz: logikak arrazoibide hau epaitzen du, ez Jainkoaren existentzia, filosofian galdera irekia baita."
  },
  {
   "txt": "«Bizitzaren helmuga heriotza da. Zerbaiten helmuga haren perfekzioa da. Beraz, bizitzaren perfekzioa heriotza da.»",
   "tipo": "g-fil-equivoco",
   "o": [
    "g-fil-equivoco",
    "g-fil-pista-falsa",
    "g-fil-falso-dilema"
   ],
   "por": "«Helmuga» hitzak «amaiera» esan nahi du lehen premisan eta «helburua» bigarrenean: arrazoibidea baliozkoa dirudi soilik hitz bera erabiltzen duelako."
  },
  {
   "txt": "«Utzi al diozu jada azterketetan kopiatzeari?»",
   "tipo": "g-fil-pregunta-compleja",
   "o": [
    "g-fil-pregunta-compleja",
    "g-fil-ad-hominem",
    "g-fil-falso-dilema"
   ],
   "por": "«Bai» edo «ez» erantzun, kopiatzen zenuela onartzen duzu. Aldez aurretiko ustea baztertu behar da erantzun aurretik."
  },
  {
   "txt": "—Zergatik ez dituzu etxeko lanak egin? —Eta zergatik ez du inork hitz egiten berogailuak zein gaizki funtzionatzen duen?",
   "tipo": "g-fil-pista-falsa",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "Gaiz aldatzen du ez erantzuteko. Ez da tu quoque, ez baitio besteari gauza bera egitea leporatzen."
  },
  {
   "txt": "«Munduko klimatologo gehienak bat datoz, hamarkadetako datuen ondoren, planeta giza jardueragatik berotzen ari dela. Zentzuzkoa da hori onartzea, kontrako frogarik ez dagoen bitartean.»",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "no-es-falacia"
   ],
   "por": "Tranpa-kasua: ez da falazia. Bere arloko adituen adostasunean oinarritzea, datuetan oinarritzen dena eta berrikusteko irekita dagoena, arrazoi zilegia da, frogapen bat ez bada ere."
  },
  {
   "txt": "«Ez fidatu lekuko horrek istripuari buruz esaten duenaz: atzo onartu zuen istripu horri buruz gezurra esan zuela.»",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-tu-quoque",
    "no-es-falacia"
   ],
   "por": "Tranpa-kasua: ez da ad hominem falazia bat. Lekuko batek kontatzen duen gauza berari buruz gezurra esan izana garrantzitsua da zenbateraino sinetsi erabakitzeko. Falazia da pertsona erasotzea esaten duenarekin zerikusirik ez duen zerbaitengatik."
  },
  {
   "txt": "«Matrikula 30a baino lehen ordaintzen ez baduzu, plaza galtzen duzu; plaza galtzen baduzu, ezingo duzu ikastaroa urte honetan egin. Beraz, 30a baino lehen ordaintzen ez baduzu, ezingo duzu ikastaroa urte honetan egin.»",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-apelacion-a-la-emocion",
    "no-es-falacia"
   ],
   "por": "Tranpa-kasua: ez da aldapa irristakorra. Urrats bakoitza arau ezagun batek justifikatzen du, eta ondorioa silogismo hipotetikoaz ateratzen da (p → q, q → r; beraz p → r; 4. maila). Aldapa irristakorrak soilik posible edo probableak diren urratsak kateatzen ditu."
  },
  {
   "txt": "«Horoskopoan sinetsi behar da: milioika lagunek irakurtzen dute.»",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-generalizacion-apresurada",
    "no-es-falacia"
   ],
   "por": "Jende askok irakurtzeak ez du egiazko egiten: ospea ez da froga. («Nire izebari bi aldiz asmatu zion, beraz asmatzen du» esango balu, orokortze presatua litzateke.)"
  }
 ]
};
