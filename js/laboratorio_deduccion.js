// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/laboratorio_deduccion.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const DED = {
 "t": {
  "dnLede": "Taularik egin gabe frogatzea: premisetatik abiatzen da eta lerro bat gehitzen da aldiko, jada dauden lerroei araua aplikatuz. Ondorioa lortzen baduzu, arrazoiketa baliozkoa da. Aukeratu lerroak (sakatzeko hurrenkera berdin da), aukeratu araua eta sakatu «Aplikatu»: mahaiak egiaztatzen du arauak balio duen lerro horientzat eta, emaitza bat baino gehiago ematen badu, aukeratzen uzten dizu.",
  "dnEjercicios": "Ariketak",
  "dnEsc": "{n}. koska",
  "dnEj": "{n}. ariketa:",
  "dnComo": "1. Sakatu erabiliko dituzun lerroen zenbakiak. 2. Aukeratu arau bat. 3. Sakatu «Aplikatu».",
  "dnReglas": "Arauak",
  "dnUsar": "Erabili lerro hau",
  "dnPremisa": "premisa",
  "dnSupuesto": "suposizioa",
  "dnAbiertos": "Suposizio irekiak: {n}. Itxi itzazu PC edo RA erabiliz amaitu aurretik: suposizio baten mende dagoenak ez du balio hartatik kanpo.",
  "dnExtraSup": "Behin-behineko suposizioa (suposatzen duzun formula):",
  "dnExtraAd": "«Edo»-rekin gehitzen duzun formula:",
  "dnAplicar": "Aplikatu",
  "dnDeshacer": "Desegin",
  "dnReiniciar": "Berriro hasi",
  "dnNoSe": "Ezin da eratorri",
  "dnSiguiente": "Hurrengo ariketa",
  "dnPista": "Pista bat",
  "dnPistaN": "{n}. pista.",
  "dnSol": "Ikusi eratorpen osoa",
  "dnOcultar": "Ezkutatu eratorpena",
  "dnElige": "Aukeratu lehenik arau bat.",
  "dnVarias": "Arauak emaitza bat baino gehiago ematen du: aukeratu zein gehitu nahi duzun.",
  "dnHecho": "Frogatuta! Ondoriora iritsi zara suposizio irekirik gabe: arrazoibidea baliozkoa da.",
  "dnTrampaBien": "Ondo ikusia: ezin da eratorri. Taulako kontraadibidea: {fila}. Balio horiekin premisak egiazkoak dira eta ondorioa faltsua.",
  "dnTrampaMal": "Bai, eratorri daiteke: taulan ez dago premisak egiazkoak eta ondorioa faltsua dituen errenkadarik. Jarraitu arauak bilatzen.",
  "dnErrRegla": "Ez dut arau hori ezagutzen.",
  "dnErrExtra": "Idatzi arauak eskatzen duen formula.",
  "dnErrFormula": "Ez dut formula ulertzen: {m}",
  "dnErrAcceso": "Aukeratutako lerroetako bat jada itxitako suposizio baten barruan dago: ezin da gehiago erabili.",
  "dnErrSinSup": "Ez dago ixteko suposizio irekirik. Ireki bat «Sup» erabiliz.",
  "dnErrNum": "Arau hau {n} lerrori aplikatzen zaio: aukeratu adina lerro.",
  "dnErrContra": "Absurdora eramateko, aukeratu elkarri kontraesaten dioten bi lerro: formula bat eta haren ezeztapena.",
  "dnErrNoAplica": "Araua ez zaie lerro horiei aplikatzen. Begiratu haren forma arauen taulan.",
  "dnNivel": "{n} suposizioren barruan.",
  "dnCerrada": "Itxitako suposizio bateko lerroa: ezin da erabili.",
  "dnReglasTit": "Arauak eta zergatik balio duten",
  "dnReglasIntro": "Arau bakoitza egia-taulako tautologia bat da (3. maila): horregatik, premisa egiazkoetatik ez du inoiz ondorio faltsu batera eramaten. Arau bakoitza «Egia-taulak» atalean egiazta dezakezu.",
  "dnColRegla": "Araua",
  "dnColForma": "Forma",
  "dnColTaut": "Justifikatzen duen tautologia",
  "dnSinTaut": "suposizio bat irekitzen edo ixten du: justifikatzen duena da A → B egiazkoa dela, A suposatuta, B-ra iristen den guztietan",
  "dnLimiteTit": "Noraino iristen den",
  "dnLimite": "Egia-taulak eta dedukzioak gauza bera lortzen dute bide desberdinetatik: mahaiko bost konektiboekin (¬, ∧, ∨, → eta ↔), taulak baliozkotzat ematen duen guztia arau hauekin eratorri daiteke, eta eratortzen den guztia baliozkoa da taulan (enuntziatuen logika zuzena eta osoa da). Dedukzioak lerro gutxiago behar ditu, baina biek esaldi osoak soilik aztertzen dituzte, ez barruan dagoena. «Gizaki guztiak hilkorrak dira; Sokrates gizakia da; beraz Sokrates hilkorra da» ezin da horrela frogatu: esaldien barrura begiratu behar da, «guztiak» eta «batzuk» erabiliz. 6. maila da."
 },
 "esc": [
  "1. koska: oinarrizko arauak, ia beti urrats bakarrean.",
  "2. koska: bi edo hiru urrats.",
  "3. koska: eratorpen luzeagoak.",
  "4. koska: behin-behineko suposizioak (baldintzazko froga eta absurdora eramatea).",
  "5. koska: konbinatzea, premisarik gabe frogatzea, eratorri ezin dena ezagutzea eta bibaldintzazkoa erabiltzea."
 ],
 "reglas": {
  "mp": {
   "nom": "Modus ponens",
   "dice": "Baldintzazko batetik eta haren aurrekaritik atzekaria ondorioztatzen da."
  },
  "mt": {
   "nom": "Modus tollens",
   "dice": "Baldintzazko batetik eta haren atzekariaren ezeztapenetik aurrekariaren ezeztapena ondorioztatzen da."
  },
  "sh": {
   "nom": "Silogismo hipotetikoa",
   "dice": "Kateatutako bi baldintzazkok baldintzazko bat ematen dute."
  },
  "sd": {
   "nom": "Silogismo disjuntiboa",
   "dice": "Disjuntzio batetik eta zati baten ezeztapenetik beste zatia ondorioztatzen da."
  },
  "ci": {
   "nom": "Konjuntzioaren sarrera",
   "dice": "Bi lerro «eta»-rekin lot daitezke."
  },
  "ce": {
   "nom": "Konjuntzioaren ezabatzea (sinplifikazioa)",
   "dice": "Konjuntzio batetik haren zati bakoitza ondorioztatzen da."
  },
  "ad": {
   "nom": "Gehitzea",
   "dice": "Lerro batetik lerro hori «edo» beste edozein formula ondorioztatzen da: «edo» inklusiboak zati bat egiazkoa izatea baino ez du eskatzen."
  },
  "dc": {
   "nom": "Dilema eraikitzailea",
   "dice": "Bi bidek gauza berera eramaten badute eta bietako bat betetzen bada, hartara iristen da."
  },
  "dn": {
   "nom": "Ezeztapen bikoitza",
   "dice": "¬¬A eta A elkarren ordez jar daitezke. Lerro osoari aplikatzen zaio, ez zati bati."
  },
  "dm": {
   "nom": "De Morgan",
   "dice": "Konjuntzio bat ezeztatzea ezeztapenen disjuntzioa baieztatzea da, eta disjuntzio bat ezeztatzea, ezeztapenen konjuntzioa. Lerro osoari aplikatzen zaio, ez zati bati."
  },
  "cp": {
   "nom": "Kontrapositzioa",
   "dice": "Baldintzazko bat bere kontrako alderantzizkoaren baliokidea da. Lerro osoari aplikatzen zaio, ez zati bati."
  },
  "bie": {
   "nom": "Bibaldintzazkoaren ezabapena",
   "dice": "A ↔ B-tik A → B ondorioztatzen da, eta baita B → A ere: aukeratu zein nahi duzun."
  },
  "bii": {
   "nom": "Bibaldintzazkoaren sarrera",
   "dice": "A → B eta B → A ere badituzu, A ↔ B idatz dezakezu."
  },
  "rep": {
   "nom": "Errepikapena",
   "dice": "Oraindik erabil daitekeen lerro bat kopiatzen du (suposizio baten barrura ekartzeko)."
  },
  "sup": {
   "nom": "Behin-behineko suposizioa",
   "dice": "Suposatu edozein formula, hartatik zer ondorioztatzen den ikusteko. Eratortzen duzun guztia suposizioaren barruan geratzen da, hura itxi arte."
  },
  "pc": {
   "nom": "Baldintzazko froga",
   "dice": "A suposatuta B-ra iritsi bazara, itxi suposizioa eta idatzi A → B."
  },
  "ra": {
   "nom": "Absurdora eramatea",
   "dice": "A suposatuta kontraesan batera iritsi bazara (B eta ¬B), itxi suposizioa eta idatzi ¬A."
  }
 },
 "ej": {
  "d01": {
   "pistas": [
    "Baldintzazko bat eta haren aurrekaria dituzu.",
    "Aukeratu 1. eta 2. lerroak eta MP araua."
   ]
  },
  "d02": {
   "pistas": [
    "Baldintzazko bat eta haren atzekariaren ezeztapena dituzu.",
    "Aukeratu 1. eta 2. lerroak eta MT araua."
   ]
  },
  "d03": {
   "pistas": [
    "Lehenik, bereizi konjuntzioa E∧ erabiliz: bi aldiz, zati bakoitzeko behin.",
    "Gero elkartu I∧-rekin: mahaiak p ∧ q eta q ∧ p artean aukeratzen uzten dizu."
   ]
  },
  "d04": {
   "pistas": [
    "Disjuntzio bat eta haren zatietako baten ezeztapena.",
    "1. eta 2. lerroak, SD araua."
   ]
  },
  "d05": {
   "pistas": [
    "Bi baldintzazkoak q-ren bidez kateatzen dira.",
    "1. eta 2. lerroak, SH araua."
   ]
  },
  "d06": {
   "pistas": [
    "Hasi aurrekaria jada duzun baldintzazkoarekin.",
    "q eskuan duzula, bigarren baldintzazkoak r ematen du."
   ]
  },
  "d07": {
   "pistas": [
    "p → r erabiltzeko, p bakarrik behar duzu.",
    "Atera p konjuntziotik E∧ erabiliz eta aplikatu MP."
   ]
  },
  "d08": {
   "pistas": [
    "Baldintzazkoak p eskatzen du, eta ¬¬p duzu.",
    "Kendu ezeztapen bikoitza DN erabiliz eta aplikatu MP."
   ]
  },
  "d09": {
   "pistas": [
    "¬(p ∨ q) esaldiak dio bietako bat ere ez dela gertatzen.",
    "De Morganek ¬p ∧ ¬q bihurtzen du; ondoren, E∧."
   ]
  },
  "d10": {
   "pistas": [
    "De Morganek ¬(p ∧ q) ¬p ∨ ¬q bihurtzen du.",
    "Silogismo disjuntiborako ¬p ukatu behar duzu: jarri ¬¬p, p-tik abiatuta, DN erabiliz.",
    "Orain SD, ¬p ∨ ¬q eta ¬¬p erabiliz."
   ]
  },
  "d11": {
   "pistas": [
    "Lehen premisaren atzekaria beste baldintzazko bat da.",
    "MP 1 eta 2rekin: q → r; MP berriro q-rekin."
   ]
  },
  "d12": {
   "pistas": [
    "Baldintzazkoak p ∨ q eskatzen du, eta p bakarrik duzu.",
    "Gehitzeak p-tik p ∨ q-ra igarotzea ahalbidetzen du (idatzi q laukian)."
   ]
  },
  "d13": {
   "pistas": [
    "Lehen hiru premisek dilema eraikitzailearen forma dute.",
    "DC 1, 2 eta 3rekin: r; gero MP laugarrenarekin."
   ]
  },
  "d14": {
   "pistas": [
    "r → p modus tollens-ekin erabiltzeko ¬p behar duzu.",
    "¬(p ∨ q)-k ¬p ∧ ¬q ematen du De Morganen bidez; atera ¬p E∧ erabiliz."
   ]
  },
  "d15": {
   "pistas": [
    "Bereizi lehen premisaren konjuntzioa.",
    "q ∨ r eta ¬q izanda, SD-k r ematen du. Lotu p-ri I∧ erabiliz."
   ]
  },
  "d16": {
   "pistas": [
    "Ondorioa baldintzazko bat da: suposatu haren aurrekaria, p ∧ r.",
    "Suposizioaren barruan atera p, aplikatu MP eta itxi PC erabiliz, q-ren lerroa aukeratuta."
   ]
  },
  "d17": {
   "pistas": [
    "Suposatu p.",
    "Ekarri q suposizioaren barrura R (errepikapena) erabiliz eta itxi PC erabiliz."
   ]
  },
  "d18": {
   "pistas": [
    "Silogismo hipotetikoa da, baina hura erabili gabe: froga ezazu.",
    "Suposatu p, aplikatu MP bi aldiz eta itxi PC erabiliz."
   ]
  },
  "d19": {
   "pistas": [
    "Suposatu nahi duzunaren kontrakoa: p.",
    "p-rekin q eta ¬q ateratzen dira: kontraesana. Itxi RA erabiliz, bi lerro horiek aukeratuta."
   ]
  },
  "d20": {
   "pistas": [
    "Suposatu ¬p.",
    "¬p-rekin q ateratzen da, eta ¬q-rekin talka egiten du. RA-k ¬¬p ematen du, eta DN-k, p."
   ]
  },
  "d21": {
   "pistas": [
    "Suposatu p.",
    "MP-k q ∧ r ematen du; atera r E∧ erabiliz eta itxi PC erabiliz."
   ]
  },
  "d22": {
   "pistas": [
    "Atera bi baldintzazkoak E∧ erabiliz.",
    "Suposatu p, atera q eta r, lotu I∧ erabiliz eta itxi PC erabiliz."
   ]
  },
  "d23": {
   "pistas": [
    "Premisarik gabe, suposatzea baino ez da geratzen. Suposatu, hain zuzen, ukatu nahi duzuna.",
    "p ∧ ¬p-tik p eta ¬p ateratzen dira: RA."
   ]
  },
  "d24": {
   "pistas": [
    "Probatu taularekin: ba al dago errenkadaren bat p → q eta q egiazkoak eta p faltsua dituena?",
    "Baldin badago, sakatu «Ezin da eratorri»."
   ],
   "contra": "Atzekaria baieztatzearen falazia da: p faltsua eta q egiazkoa izanda, bi premisak egiazkoak dira eta ondorioa faltsua. Arau baliodunen ezein konbinaziok ezin du hartara eraman."
  },
  "d25": {
   "pistas": [
    "Gogoratu logikako «edo» inklusiboa dela.",
    "Egiazkoak izan al daitezke p eta q aldi berean?"
   ],
   "contra": "Disjuntu bat baieztatzearen falazia da: p eta q egiazkoak izanda, premisak egiazkoak dira eta ¬q faltsua da. ¬q ondorioztatzeko «edo» esklusiboa beharko litzateke."
  },
  "d26": {
   "pistas": [
    "Alderatu 24. ariketarekin: hemen premisa bibaldintzazko bat da, bi norabideetan doana.",
    "E↔ 1. lerroarekin q → p ematen du; ondoren, MP q-rekin."
   ]
  },
  "d27": {
   "pistas": [
    "Bibaldintzazko batera iristeko, froga itzazu bi baldintzazkoak eta elkartu I↔-rekin.",
    "Suposatu p ∧ q, atera bi zatiak, elkartu alderantziz eta itxi PC-rekin; egin gauza bera q ∧ p-tik hasita."
   ]
  }
 }
};
