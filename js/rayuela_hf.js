// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/rayuela_hf.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const RAYUELA_HF = {
 "inicio": "1",
 "lineas": [
  {
   "id": "l-inicio",
   "nombre": "Irteera",
   "color": "#9b4a4f"
  },
  {
   "id": "l-felicidad",
   "nombre": "Zoriontasunaren linea",
   "color": "#d99a00"
  },
  {
   "id": "l-ciudad",
   "nombre": "Hiriaren linea",
   "color": "#5b6770"
  },
  {
   "id": "l-conocimiento",
   "nombre": "Ezagutzaren linea",
   "color": "#2f6db5"
  },
  {
   "id": "l-alma",
   "nombre": "Arimaren linea",
   "color": "#2e9b5b"
  },
  {
   "id": "l-dios",
   "nombre": "Jainkoaren linea",
   "color": "#7d4fb5"
  },
  {
   "id": "l-cosmos",
   "nombre": "Kosmosaren linea",
   "color": "#e0701b"
  },
  {
   "id": "l-contradiccion",
   "nombre": "Kontraesanak",
   "color": "#d23a2b"
  }
 ],
 "redes": [
  {
   "n": 1,
   "nombre": "1. sarea · Sokratesetik Descartesera",
   "abre": "2026-09-01"
  }
 ],
 "estaciones": {
  "1": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-inicio",
   "xy": [
    5.8,
    14.4
   ],
   "titulo": "Hasiera",
   "texto": "Irteerako nasan zaude. Trenera igo aurretik, norbaitek Grezian filosofia hasi zuen galdera egiten dizu: ba al dago guztientzat balio duen zerbait, ala bakoitzak bere egia du?",
   "pregunta": "Ba al daude Ongi eta Egia objektiboak, guztientzat berdinak?",
   "opciones": [
    {
     "t": "Bai: badaude, aurkitzea kostatzen bada ere.",
     "to": "2",
     "marca": "m-verdad-objetiva"
    },
    {
     "t": "Ez dakit; garrantzitsuena ondo sentitzea eta mina saihestea da.",
     "to": "3",
     "marca": "m-bienestar"
    },
    {
     "t": "Ez dut uste: egiazkoa funtzionatzen duena da.",
     "to": "4",
     "marca": "m-utilidad"
    }
   ],
   "temas": [
    "hf-mito",
    "hf-sofistas"
   ],
   "autores": [
    {
     "id": "socrates"
    }
   ]
  },
  "2": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-felicidad",
   "xy": [
    3,
    12.6
   ],
   "titulo": "Bertutea eta zoriontasuna",
   "texto": "Ongia badago, ondo bizitzea hartara hurbiltzea izango da. Greziarrek eudaimonia deitzen zioten: bizitza betea, ez poz-une bat.",
   "pregunta": "Zertan datza zuretzat zoriontasuna?",
   "opciones": [
    {
     "t": "Arima ordenan edukitzean: ongia ezagutzean eta zuzentasunez jokatzean.",
     "to": "7",
     "marca": "m-alma-orden"
    },
    {
     "t": "Ohitura onak lantzean eta besteekin batera haztean, komunitatean.",
     "to": "7",
     "marca": "m-habitos"
    },
    {
     "t": "Jainkoarengan: Hura gabe ez dago zoriontasun iraunkorrik.",
     "to": "6",
     "marca": "m-felicidad-dios"
    }
   ],
   "temas": [
    "hf-etica"
   ],
   "autores": [
    {
     "id": "platon"
    },
    {
     "id": "aristoteles"
    }
   ]
  },
  "3": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-felicidad",
   "xy": [
    5.8,
    12.6
   ],
   "titulo": "Plazerra eta mina",
   "texto": "Garrantzitsuena ondo sentitzea dela esan duzu. Baina ongizateak forma asko ditu: ajearekin amaitzen den festa, lagunekin arratsalde lasaia, zure esku ez dagoena onartzen duenaren lasaitasuna.",
   "pregunta": "Zer plazer motak konbentzitzen zaitu gehien?",
   "opciones": [
    {
     "t": "Plazer lasai bat, ezustekorik gabe: jan sinplea, pentsatu, lagunekin egon.",
     "to": "48",
     "marca": "m-placer-tranquilo"
    },
    {
     "t": "Plazer bizi bat, arriskuak ekarri arren.",
     "to": "90",
     "marca": "m-placer-intenso"
    },
    {
     "t": "Bat ere ez berez: plazerrak mundua gobernatzen duen arrazoiari men egin behar dio.",
     "to": "8",
     "marca": "m-logos"
    }
   ],
   "temas": [
    "hf-helenismo"
   ],
   "autores": [
    {
     "id": "epicuro"
    }
   ]
  },
  "4": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [
    8.6,
    12.6
   ],
   "titulo": "Zalantza eta erabilgarritasuna",
   "texto": "Guztientzako egiarik ez badago, zerekin geratzen zara? Greziar batzuek ezer ez baieztatzea erabaki zuten; mende batzuk geroago, Descartesek zalantzan jarri zuen dena, zerbait ziurra aurkitzeko.",
   "pregunta": "Zer egiten duzu zalantzarekin?",
   "opciones": [
    {
     "t": "Iritzia eteten dut: nahiago dut ezer ez baieztatu.",
     "to": "9",
     "marca": "m-suspender"
    },
    {
     "t": "Bada zerbait zalantzan jarri ezin dudana: existitzen naizela eta pentsatzen dudala.",
     "to": "5",
     "marca": "m-cogito"
    },
    {
     "t": "Egia berdin zait: elkarrekin bizitzean funtzionatzen duena da garrantzitsua.",
     "to": "7",
     "marca": "m-utilidad-politica"
    }
   ],
   "temas": [
    "hf-sofistas",
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "pirron"
    },
    {
     "id": "descartes"
    }
   ]
  },
  "5": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-alma",
   "xy": [
    8,
    10.6
   ],
   "titulo": "Arima eta gorputza",
   "texto": "Ziur zaude existitzen zarela. Baina zer da existitzen den hori: gorputz bat, gorputz bat baino zerbait gehiago, biak batera?",
   "pregunta": "Zer zara?",
   "opciones": [
    {
     "t": "Gorputz bat erabiltzen duen arima bat, pilotu batek bere ontzia bezala.",
     "to": "10",
     "marca": "m-alma-separada"
    },
    {
     "t": "Batasun bat: arima gorputz bizidunaren forma da.",
     "to": "10",
     "marca": "m-alma-forma"
    },
    {
     "t": "Gorputz bat besterik ez: ondo antolatutako materia.",
     "to": "94",
     "marca": "m-solo-cuerpo"
    }
   ],
   "temas": [
    "hf-antropologia",
    "hf-metafisica"
   ],
   "autores": [
    {
     "id": "platon"
    },
    {
     "id": "aristoteles"
    },
    {
     "id": "descartes"
    }
   ]
  },
  "6": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-dios",
   "xy": [
    3.4,
    10
   ],
   "titulo": "Jainkoa eta gaitza",
   "texto": "Jainkoa ona eta ahalguztiduna bada, nondik dator gaitza? Pentsalari kristauak mendeetan zehar lorik egin gabe utzi zituen galdera da.",
   "pregunta": "Zergatik dago gaitza?",
   "opciones": [
    {
     "t": "Gaitza ez da gauza bat: ongiaren falta da, hartatik urruntzea.",
     "to": "44",
     "marca": "m-mal-privacion"
    },
    {
     "t": "Badago ordena arrazional jainkotiar bat, osorik ikusten ez badugu ere.",
     "to": "8",
     "marca": "m-orden-divino"
    },
    {
     "t": "Agian Jainkoa ez da hain ona: engainatzen egon liteke.",
     "to": "92",
     "marca": "m-dios-engana"
    }
   ],
   "temas": [
    "hf-fe-razon"
   ],
   "autores": [
    {
     "id": "agustin"
    },
    {
     "id": "tomas"
    }
   ]
  },
  "7": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [
    1.2,
    10.6
   ],
   "titulo": "Hiria",
   "texto": "Hiriko ateetara iritsi zara. Barruan batzarrean eztabaidatzen da, epaitu egiten da eta legeak egiten dira. Kanpoan, landa eta isiltasuna.",
   "pregunta": "Zer egiten duzu hiriarekin?",
   "opciones": [
    {
     "t": "Sartu egiten naiz: legeak hobetzeko parte hartzea ondo bizitzearen zati da.",
     "to": "40",
     "marca": "m-participar"
    },
    {
     "t": "Hiritik eta haren ohituretatik aldentzen naiz: gutxirekin aski dut.",
     "to": "43",
     "marca": "m-apartarse"
    },
    {
     "t": "Sartu egiten naiz, baina badakit politika boterearen aldeko borroka besterik ez dela.",
     "to": "93",
     "marca": "m-solo-poder"
    }
   ],
   "temas": [
    "hf-politica"
   ],
   "autores": [
    {
     "id": "socrates"
    },
    {
     "id": "platon"
    },
    {
     "id": "aristoteles"
    }
   ]
  },
  "8": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-cosmos",
   "xy": [
    5.6,
    9
   ],
   "titulo": "Munduaren ordena",
   "texto": "Gaua da eta zerura begiratzen duzu: izarrek erregulartasun harrigarriz egiten dute bira. Baina tximistak ere erortzen dira, lurrikarak daude eta izaki itxuragabeak jaiotzen dira.",
   "pregunta": "Ba al dago ordenarik kosmosean?",
   "opciones": [
    {
     "t": "Bai: gauza orok ditu bere kausak eta helburu baterantz jotzen du.",
     "to": "41",
     "marca": "m-fines"
    },
    {
     "t": "Bai: arrazoi unibertsal batek, logosak, gobernatzen du dena.",
     "to": "42",
     "marca": "m-logos"
    },
    {
     "t": "Ez: dena zoriaren eta atomoen talkaren ondorioa da.",
     "to": "91",
     "marca": "m-azar"
    }
   ],
   "temas": [
    "hf-preso",
    "hf-helenismo"
   ],
   "autores": [
    {
     "id": "aristoteles"
    },
    {
     "id": "democrito"
    },
    {
     "id": "zenon"
    }
   ]
  },
  "9": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [
    10.4,
    10.6
   ],
   "titulo": "Arrazoia eta zentzumenak",
   "texto": "Zentzumenek diotsute eguzkia txikia dela eta uretan sartutako makila hautsita dagoela. Arrazoiak beste zerbait diotsu.",
   "pregunta": "Zertaz fidatzen zara ezagutzeko?",
   "opciones": [
    {
     "t": "Arrazoiaz, matematiketan bezala: argi eta bereizia denaz.",
     "to": "46",
     "marca": "m-razon"
    },
    {
     "t": "Zentzumenez, baina arrazoiak antolatuta.",
     "to": "41",
     "marca": "m-sentidos-razon"
    },
    {
     "t": "Ez batez ez besteaz: fedeak bakarrik ematen du ziurtasuna.",
     "to": "45",
     "marca": "m-solo-fe"
    }
   ],
   "temas": [
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "descartes"
    },
    {
     "id": "aristoteles"
    },
    {
     "id": "hume"
    }
   ]
  },
  "10": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-alma",
   "xy": [
    5.8,
    5.4
   ],
   "titulo": "Heriotza eta hilezkortasuna",
   "texto": "Linea askoren amaieran geltoki bera dago zain. Sokratesek zioen filosofatzea hiltzen ikastea dela.",
   "pregunta": "Zer gertatzen da heriotzaren ondoren?",
   "opciones": [
    {
     "t": "Arima hilezkorra da: heriotza bizitza egiazkoago baterako igarobidea da.",
     "to": "FA",
     "marca": "m-inmortal"
    },
    {
     "t": "Ez dakit; garrantzitsuena bitartean lasaitasunez bizitzea da.",
     "to": "FB",
     "marca": "m-serenidad"
    },
    {
     "t": "Ez dago ezer… baina, badaezpada, beldurra ematen dit.",
     "to": "90",
     "marca": "m-nada-miedo"
    }
   ],
   "temas": [
    "hf-antropologia",
    "hf-helenismo"
   ],
   "autores": [
    {
     "id": "socrates"
    },
    {
     "id": "platon"
    },
    {
     "id": "epicuro"
    }
   ]
  },
  "40": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [
    0.8,
    8.2
   ],
   "titulo": "Sokrates kartzelan",
   "texto": "Atenas, K.a. 399. Sokrates heriotzara kondenatu dute «gazteak ustelduta». Kriton lagunak zaindariak erosi ditu: gau honetan ihes egin dezake. Sokratesek ezetz dio: ihes egitea bizitza osoan babestu duten legeekin egindako ituna haustea litzateke.",
   "pregunta": "Zer egingo zenuke zuk haren lekuan?",
   "opciones": [
    {
     "t": "Geratu egingo nintzateke: legeei men egitea, oker daudenean ere, zuzena izatearen zati da.",
     "to": "8",
     "marca": "m-obedecer"
    },
    {
     "t": "Ihes egingo nuke legea bidegabea bada: batzuetan desobeditzea da zuzena.",
     "to": "9",
     "marca": "m-desobedecer"
    },
    {
     "t": "Zalantzarik gabe egingo nuke ihes: zentzugabea da hiri batengatik hiltzea.",
     "to": "93",
     "marca": "m-escapar"
    }
   ],
   "temas": [
    "hf-sofistas",
    "hf-etica"
   ],
   "autores": [
    {
     "id": "socrates"
    },
    {
     "id": "platon"
    }
   ]
  },
  "41": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-cosmos",
   "xy": [
    7.6,
    7.4
   ],
   "titulo": "Aristoteles eta intsektuak",
   "texto": "Lesbos uhartea, K.a. 345 inguruan. Aristotelesek egun osoak ematen ditu arrainak irekitzen, olagarroak behatzen eta intsektuen hegoak marrazten. Organo bakoitza zertarako den jakin nahi du: ziur dago naturak ez duela ezer alferrik egiten.",
   "pregunta": "Zer iruditzen zaizu haren lana?",
   "opciones": [
    {
     "t": "Arrazoi du: mundua ulertzea haren kausak eta helburuak aurkitzea da.",
     "to": "5",
     "marca": "m-fines"
    },
    {
     "t": "Oso ondo behatzen du, baina agian naturak ez du helbururik bilatzen.",
     "to": "91",
     "marca": "m-sin-fines"
    },
    {
     "t": "Denbora galtzen ari da: egia ez dago ikusten denean, pentsatzen denean baizik.",
     "to": "46",
     "marca": "m-razon"
    }
   ],
   "temas": [
    "hf-antropologia",
    "hf-platon"
   ],
   "autores": [
    {
     "id": "aristoteles"
    }
   ]
  },
  "42": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-alma",
   "xy": [
    4.2,
    7.4
   ],
   "titulo": "Seneka lasai",
   "texto": "Erroma, 65. urtea. Neronek Seneka, bere irakasle ohia, bere buruaz beste egiteko agintzen dio. Senekak lagunak kontsolatzen ditu, azken hitzak diktatzen ditu eta heriotzaren zain dago bainu bero batean, lasaitasuna galdu gabe: gure esku ez dagoena onartu behar da.",
   "pregunta": "Zer iruditzen zaizu haren lasaitasuna?",
   "opciones": [
    {
     "t": "Miresgarria: bakea jarreraren araberakoa da, ez gertatzen zaigunaren araberakoa.",
     "to": "10",
     "marca": "m-estoico"
    },
    {
     "t": "Ez dakit hainbesteko lasaitasunak zentzurik duen: ez ote dago bere burua engainatzen?",
     "to": "5",
     "marca": "m-duda-serenidad"
    },
    {
     "t": "Akats bat: heriotza edozein preziotan saihestu behar da.",
     "to": "90",
     "marca": "m-evitar-muerte"
    }
   ],
   "temas": [
    "hf-helenismo"
   ],
   "autores": [
    {
     "id": "seneca"
    },
    {
     "id": "zenon"
    }
   ]
  },
  "43": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [
    2.2,
    7.4
   ],
   "titulo": "Diogenes eta itzala",
   "texto": "Korinto, K.a. 336. Diogenes tinaja batean bizi da eta eguzkitan dago. Alexandro Handia, munduko gizonik boteretsuena, haren aurrean jarri eta nahi duena eskaintzen dio. «Kendu hortik, eguzkia estaltzen didazu», erantzuten dio.",
   "pregunta": "Zer iruditzen zaizu Diogenes?",
   "opciones": [
    {
     "t": "Benetan librea da: askatasuna gutxi behar izatean datza.",
     "to": "FC",
     "marca": "m-autarquia"
    },
    {
     "t": "Arrazoi pixka bat badu, baina besteak gabe ezin da ondo bizi.",
     "to": "40",
     "marca": "m-desapego-limites"
    },
    {
     "t": "Hezigabe bat da, besteen kontura bizi dena.",
     "to": "93",
     "marca": "m-desprecio-cinico"
    }
   ],
   "temas": [
    "hf-helenismo"
   ],
   "autores": [
    {
     "id": "diogenes"
    }
   ]
  },
  "44": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-dios",
   "xy": [
    3,
    5.8
   ],
   "titulo": "Agustin lorategian",
   "texto": "Milan, 386. urtea. Agustinek urteak daramatza egia bilatzen plazeretan, ospean eta hainbat filosofiatan. Lorategi batean negarrez, haur-ahots bat entzuten du kantuan: «Hartu eta irakurri». San Paulen gutunak ireki, eta sentitzen du egia ez zegoela kanpoan, bere barruan baizik.",
   "pregunta": "Nola interpretatzen duzu?",
   "opciones": [
    {
     "t": "Egia barruan dago: norbere baitara sartu behar da.",
     "to": "10",
     "marca": "m-interioridad"
    },
    {
     "t": "Barnetasuna ondo dago, baina arrazoia ere behar da.",
     "to": "9",
     "marca": "m-interioridad-razon"
    },
    {
     "t": "Iradokizuna izan zen: nekatuta zegoen eta entzun nahi zuena entzun zuen.",
     "to": "92",
     "marca": "m-sugestion"
    }
   ],
   "temas": [
    "hf-fe-razon",
    "hf-medieval"
   ],
   "autores": [
    {
     "id": "agustin"
    }
   ]
  },
  "45": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-dios",
   "xy": [
    9,
    8.6
   ],
   "titulo": "Tomas eta lastoa",
   "texto": "Napoles, 1273. Tomas Akinokoak milaka orrialde idatzi ditu fedea eta arrazoia kontraesanean ez daudela erakusteko. Egun batean, mezatan esperientzia mistiko bat izan ondoren, idazteari uzten dio: «Idatzi dudan guztia lastoa iruditzen zait».",
   "pregunta": "Zer ondorioztatzen duzu?",
   "opciones": [
    {
     "t": "Fedea arrazoia baino urrunago iristen dela.",
     "to": "10",
     "marca": "m-fe-supera"
    },
    {
     "t": "Haren lanak balio duela oraindik: arrazoia iristen den lekuraino iristen da.",
     "to": "46",
     "marca": "m-razon-valida"
    },
    {
     "t": "Arrazoiak ez duela ezertarako balio.",
     "to": "93",
     "marca": "m-razon-inutil"
    }
   ],
   "temas": [
    "hf-fe-razon"
   ],
   "autores": [
    {
     "id": "tomas"
    }
   ]
  },
  "46": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [
    10.8,
    8.2
   ],
   "titulo": "Descartes eta izaki perfektua",
   "texto": "Holanda, 1641. Descartesek zientzia ziurtasunen gainean eraiki nahi du. Izaki perfektu baten ideia du buruan, eta honela arrazoitzen du: izaki perfektu bati ezin zaio ezer falta, ezta existentzia ere; beraz, Jainkoa existitzen da. San Anselmok XI. mendean proposatu zuen argudio ia bera da.",
   "pregunta": "Konbentzitzen zaitu?",
   "opciones": [
    {
     "t": "Bai: haren esentzia perfektua bada, existitu egin behar du.",
     "to": "10",
     "marca": "m-ontologico"
    },
    {
     "t": "Susmagarria iruditzen zait: eskolastikoak kritikatzen ditu eta Erdi Aroko argudio bat erabiltzen du… eta arrazoiak engainatzen banau?",
     "to": "47",
     "marca": "m-sospecha"
    },
    {
     "t": "Ez: ideia batetik ez dator zerbait existitzen denik.",
     "to": "FD",
     "marca": "m-idea-no-prueba"
    }
   ],
   "temas": [
    "hf-racionalismo",
    "hf-fe-razon"
   ],
   "autores": [
    {
     "id": "descartes"
    },
    {
     "id": "anselmo"
    }
   ]
  },
  "47": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [
    10.8,
    5.8
   ],
   "titulo": "Descartes eta jeinu gaiztoa",
   "texto": "Descartesek muturreraino eramaten du zalantza: eta jeinu gaizto oso boteretsu batek engainatuko balu, bi eta hiru batzen dituenean ere? Ziurtasun bakarra geratzen da zutik: engainatzen banau, pentsatzen dudalako da; beraz, banaiz. Baina bere buruaz kanpora irten eta munduaz fidatzeko zerbait gehiago behar du.",
   "pregunta": "Nola irteten zara zalantzatik?",
   "opciones": [
    {
     "t": "Engainatzen ez naizela bermatuko duen Jainko zintzo bat behar dut.",
     "to": "FE",
     "marca": "m-dios-veraz"
    },
    {
     "t": "Hain zalantza erradikala antzua da: nahiago dut ezer ziurrik ez baieztatu.",
     "to": "FD",
     "marca": "m-duda-esteril"
    },
    {
     "t": "Ziurtasunak izan ditzaket Jainkorik gabe: arrazoiarekin aski dut.",
     "to": "92",
     "marca": "m-certeza-sin-dios"
    }
   ],
   "temas": [
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "descartes"
    }
   ]
  },
  "48": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-felicidad",
   "xy": [
    4.4,
    11.2
   ],
   "titulo": "Epikuro Lorategian",
   "texto": "Atenas, K.a. 306. Epikurok baratze bat erosten du hiri-kanpoan eta han sortzen du bere eskola, emakumeentzat eta esklaboentzat ere irekia. Ogia, ura eta gazta pixka bat jatera gonbidatzen zaitu bere lagunekin: ez da gehiagorik behar zoriontsu izateko, dio, jainkoei eta heriotzari beldurrik ez badiezu.",
   "pregunta": "Lorategian geratzen zara?",
   "opciones": [
    {
     "t": "Bai: adiskidetasuna eta beldurrik gabe bizitzea nahikoak dira.",
     "to": "FF",
     "marca": "m-ataraxia"
    },
    {
     "t": "Denbora batez; baina agian elkarrekin bizitzeak ere badu garrantzia.",
     "to": "7",
     "marca": "m-retiro-politica"
    },
    {
     "t": "Ez: politikatik aparteko bizitza alferrikakoa da.",
     "to": "93",
     "marca": "m-politica-necesaria"
    }
   ],
   "temas": [
    "hf-helenismo"
   ],
   "autores": [
    {
     "id": "epicuro"
    }
   ]
  },
  "90": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [
    4.2,
    3.8
   ],
   "titulo": "Kontraesana: plazerra eta beldurra",
   "texto": "Plazerra bilatzen duzu, edo heriotzaren ondoren ezer ez dagoela diozu… eta, hala ere, beldurra duzu. Epikurok esango luke nahasketa hori zorigaiztoaren errezeta dela: heriotza ezer ez bada guretzat, ez dago zergatik beldurtu.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Lasaitasuna bilatzen dut, bizitasunaren ordez.",
     "to": "FF"
    },
    {
     "t": "Beldurra onartzen dut, baina bertutez bizi naiz.",
     "to": "FB"
    },
    {
     "t": "Kontraesana ez dut aintzat hartzen.",
     "to": "FG"
    }
   ],
   "choque": [
    "m-placer-intenso",
    "m-nada-miedo",
    "m-evitar-muerte",
    "m-bienestar"
   ],
   "temas": [
    "hf-helenismo"
   ],
   "autores": [
    {
     "id": "epicuro"
    }
   ]
  },
  "91": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [
    7.6,
    3.8
   ],
   "titulo": "Kontraesana: helburuak ala zoria",
   "texto": "Ordenak eta zoriak kontrako norabideetara tiratzen dizute. Dena helburu baterantz badoa, zoria itxura besterik ez da; dena zoria bada, helburuak guk jartzen ditugu. Aristotelesek eta atomistek ezin dute aldi berean arrazoia izan.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Ordena eta helburuak badaudela diot.",
     "to": "5"
    },
    {
     "t": "Zoria onartzen dut azkeneraino.",
     "to": "FD"
    },
    {
     "t": "Ordena eta zoria bateratzen saiatzen naiz.",
     "to": "FH"
    }
   ],
   "choque": [
    "m-fines",
    "m-logos",
    "m-orden-divino",
    "m-azar",
    "m-sin-fines"
   ],
   "temas": [
    "hf-preso",
    "hf-antropologia"
   ],
   "autores": [
    {
     "id": "aristoteles"
    },
    {
     "id": "democrito"
    }
   ]
  },
  "92": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [
    9.6,
    3.8
   ],
   "titulo": "Kontraesana: Jainko engainatzailea",
   "texto": "Jainko on batez edo ziurtasun sendoez hitz egin duzu eta, aldi berean, engaina zintzakeen Jainko batez edo iradokizun hutsa litzatekeen fede batez. Bi gauzak ezin dira batera eutsi, besterik gabe.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Ongia den Jainko batengana itzultzen naiz.",
     "to": "10"
    },
    {
     "t": "Onartzen dut ez dagoela bermerik.",
     "to": "FD"
    },
    {
     "t": "Bi gauzak batera eusten ditut.",
     "to": "FI"
    }
   ],
   "choque": [
    "m-felicidad-dios",
    "m-mal-privacion",
    "m-orden-divino",
    "m-dios-engana",
    "m-sugestion",
    "m-certeza-sin-dios",
    "m-ontologico",
    "m-interioridad"
   ],
   "temas": [
    "hf-fe-razon",
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "descartes"
    },
    {
     "id": "agustin"
    }
   ]
  },
  "93": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [
    1.6,
    4.4
   ],
   "titulo": "Kontraesana: zuzentasuna ala boterea",
   "texto": "Alde batetik, zuzentasuna, bertutea edo arrazoia defendatzen dituzu; bestetik, boterea bakarrik dela kontuan hartzekoa, arrazoiak ez duela balio edo arauek ez dutela ezer balio. Trasimakok zioen zuzentasuna indartsuenari komeni zaiona dela; Sokratesek bizitza osoa eman zuen hori ezeztatzen.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Zuzentzen dut: zuzentasuna garrantzitsua da.",
     "to": "10"
    },
    {
     "t": "Zinismoarekin geratzen naiz: konbentzio guztiak mespretxatzen ditut.",
     "to": "FC"
    },
    {
     "t": "Horri eusten diot: boterea da kontatzen duen bakarra.",
     "to": "FJ"
    }
   ],
   "choque": [
    "m-alma-orden",
    "m-habitos",
    "m-participar",
    "m-obedecer",
    "m-solo-poder",
    "m-escapar",
    "m-razon-inutil",
    "m-politica-necesaria",
    "m-desprecio-cinico",
    "m-utilidad-politica"
   ],
   "temas": [
    "hf-politica",
    "hf-sofistas"
   ],
   "autores": [
    {
     "id": "socrates"
    },
    {
     "id": "platon"
    }
   ]
  },
  "94": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [
    10.2,
    12.4
   ],
   "titulo": "Kontraesana: materia ala arima",
   "texto": "Gorputz hutsa zarela diozu. Baina orduan, zer da pentsatzen duen, zalantza egiten duen eta hiltzean zer gertatuko zaion galdetzen dion hori? Dena materia bada, kontzientzia ere azaldu behar da.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Materialismoari eusten diot azkeneraino.",
     "to": "FK"
    },
    {
     "t": "Onartzen dut badagoela zerbait gehiago: arima bat.",
     "to": "10"
    },
    {
     "t": "Ez dut erabakitzen.",
     "to": "FD"
    }
   ],
   "choque": [
    "m-solo-cuerpo",
    "m-cogito",
    "m-inmortal",
    "m-alma-separada",
    "m-alma-forma"
   ],
   "temas": [
    "hf-metafisica",
    "hf-antropologia"
   ],
   "autores": [
    {
     "id": "democrito"
    },
    {
     "id": "descartes"
    }
   ]
  }
 },
 "terminales": {
  "A": {
   "xy": [
    4.8,
    0.9
   ],
   "titulo": "Bizitza egiazkoagoa",
   "texto": "Uste duzu badaudela gure mende ez dauden Ongi eta Egia bat, arimak gorputzak baino gehiago balio duela eta bizitza honek beste bat, benetakoagoa, duela jomuga. Platonetik San Agustin, Tomas Akinokoa eta Descartesenganaino doan linea handia da.",
   "abierto": "Nola ezagut dezakegu ikusten ez den zerbait? Eta zer balio geratzen zaio orduan zentzumenen munduari?",
   "reflexion": "Egon al daitezke gure iritziaren eta gure kulturaren mende ez dauden egiak? Arrazoitu zure erantzuna.",
   "autores": [
    {
     "id": "platon"
    },
    {
     "id": "agustin"
    },
    {
     "id": "tomas"
    },
    {
     "id": "descartes"
    }
   ],
   "temas": [
    "hf-platon",
    "hf-fe-razon"
   ]
  },
  "B": {
   "xy": [
    5.8,
    0.9
   ],
   "titulo": "Lasaitasun filosofikoa",
   "texto": "Barne-bakea bilatzen duzu: zure esku ez dagoena onartzea eta beldurrik gabe bizitzea. Estoikoek, epikurearrek eta eszeptikoek partekatu zuten ideala da, bakoitzak bere erara.",
   "abierto": "Lasaitasuna jakinduria da, ala etsipena? Bidegabekeriak ere onartu behar al dira?",
   "reflexion": "Posible al da zoriontsu izatea gertatzen zaigun guztia onartuz?",
   "autores": [
    {
     "id": "seneca"
    },
    {
     "id": "zenon"
    },
    {
     "id": "epicuro"
    },
    {
     "id": "pirron"
    }
   ],
   "temas": [
    "hf-helenismo"
   ]
  },
  "C": {
   "xy": [
    0.8,
    0.9
   ],
   "titulo": "Bide zinikoa",
   "texto": "Gutxirekin aski duzu, eta ez zara fidatzen arauez, ohorez eta diruaz. Diogenesek bezala, uste duzu askatasuna ezeren eta inoren mende ez egotea dela, eta naturak konbentzioek baino gehiago balio duela.",
   "abierto": "Bizi al daiteke gizartearen bazterrean, hartaz baliatu gabe?",
   "reflexion": "Gutxiago izateak libreago egiten gaitu?",
   "autores": [
    {
     "id": "diogenes"
    }
   ],
   "temas": [
    "hf-helenismo"
   ]
  },
  "D": {
   "xy": [
    8.8,
    0.9
   ],
   "titulo": "Eszeptiko arrazionala",
   "texto": "Ez duzu uste ziurtasun behin betikoak lor ditzakegunik. Nahiago duzu iritzia eten eta baieztapen bakoitza aztertu: zalantza da zure metodoa. Pirronek eta, mende batzuk geroago, Humek egiten dizute lagun.",
   "abierto": "Ezer ziurra ez bada, nola erabakitzen dugu zer egin?",
   "reflexion": "Zalantza ezagutzaren hasiera da, ala amaiera?",
   "autores": [
    {
     "id": "pirron"
    },
    {
     "id": "hume"
    }
   ],
   "temas": [
    "hf-helenismo",
    "hf-racionalismo"
   ]
  },
  "E": {
   "xy": [
    10.8,
    0.9
   ],
   "titulo": "Jainko zintzoa",
   "texto": "Descartesek bezala, uste duzu arrazoiak ziurtasunak lor ditzakeela, baina berme bat behar duela: engainatzen ez duen eta ezagutzen dugun mundua benetakoa dela ziurtatzen duen Jainko bat.",
   "abierto": "Arrazoiaz fidatzeko Jainkoa behar bada, baina arrazoia bada Jainkoa existitzen dela frogatzen duena, ez al gaude zirkulu batean? («Zirkulu kartesiarra» deritzona da.)",
   "reflexion": "Oinarri absolutu bat behar al du ezagutzak?",
   "autores": [
    {
     "id": "descartes"
    }
   ],
   "temas": [
    "hf-racionalismo",
    "hf-fe-razon"
   ]
  },
  "F": {
   "xy": [
    2.8,
    0.9
   ],
   "titulo": "Ataraxia",
   "texto": "Epikurok bezala, uste duzu zoriontasuna gorputzean minik eta arimean ezinegonik ez izatea dela: plazer gutxi eta ondo aukeratuak, lagunak eta jainkoei eta heriotzari beldurrik ez.",
   "abierto": "Berekoia al da lorategira erretiratzea hiriak arazoak dituen bitartean?",
   "reflexion": "Plazerra al da giza bizitzaren helburua?",
   "autores": [
    {
     "id": "epicuro"
    }
   ],
   "temas": [
    "hf-helenismo"
   ]
  },
  "G": {
   "xy": [
    3.8,
    0.9
   ],
   "titulo": "Hedonista inkoherentea",
   "texto": "Plazer bizia nahi duzu eta, aldi berean, beldurrik gabe bizi; baina bi gauzek elkar oztopatzen dute: gehiegikeriak mina dakar eta beldurra ez da desagertzen. Nahiago izan duzu kontraesana ez konpondu.",
   "abierto": "Zergatik ez dute plazer biziek zoriontasun iraunkorrik ematen normalean?",
   "reflexion": "Zoriontsua izan al daiteke bizitza inkoherente bat?",
   "autores": [
    {
     "id": "epicuro"
    }
   ],
   "temas": [
    "hf-helenismo",
    "hf-etica"
   ]
  },
  "H": {
   "xy": [
    7.8,
    0.9
   ],
   "titulo": "Kosmos paradoxikoa",
   "texto": "Munduan ordena eta zoria ikusten dituzu batera, eta ez diozu inori uko egin nahi. Ez da intuizio txarra: zientzia modernoak legeez eta probabilitateez hitz egiten du; zaila da azaltzea nola egiten duten bat.",
   "abierto": "Egon al daiteke helbururik zoria ere badagoen natura batean?",
   "reflexion": "Ba al du naturak zentzurik edo xederik?",
   "autores": [
    {
     "id": "aristoteles"
    },
    {
     "id": "democrito"
    }
   ],
   "temas": [
    "hf-preso",
    "hf-modernidad"
   ]
  },
  "I": {
   "xy": [
    9.8,
    0.9
   ],
   "titulo": "Teismo kontraesankorra",
   "texto": "Aldi berean eusten diezu Jainko on bati eta engaina zaitzakeen aukerari, edo fede sendo bati eta iradokizuna delako susmoari. Benetako tentsioa da, Erdi Aroko filosofia eta Descartes konpontzen saiatu zirena.",
   "abierto": "Bateratu al daitezke Jainkoaren ontasuna eta gaitzaren edo engainuaren existentzia?",
   "reflexion": "Frogatu al dezake arrazoiak Jainkoaren existentzia?",
   "autores": [
    {
     "id": "agustin"
    },
    {
     "id": "descartes"
    }
   ],
   "temas": [
    "hf-fe-razon"
   ]
  },
  "J": {
   "xy": [
    1.8,
    0.9
   ],
   "titulo": "Nihilismo praktikoa",
   "texto": "Zuretzat zuzentasuna hitz polit bat da: mundua mugitzen duena boterea da. Trasimakoren tesia da Platonen Errepublikan eta, mende batzuk geroago, Makiavelok politikari buruz zuen begirada.",
   "abierto": "Zuzentasuna indartsuenari komeni zaiona besterik ez bada, zer eskubidez kritikatzen dugu tirano bat?",
   "reflexion": "Zuzentasuna indartsuenaren legea baino zerbait gehiago al da?",
   "autores": [
    {
     "id": "platon"
    },
    {
     "id": "maquiavelo"
    }
   ],
   "temas": [
    "hf-politica",
    "hf-contrato"
   ]
  },
  "K": {
   "xy": [
    6.8,
    0.9
   ],
   "titulo": "Materialista koherentea",
   "texto": "Materia zara eta ez besterik, eta azkeneraino eusten diozu: arima gorputzaren funtzio bat da eta heriotza amaiera da. Demokritoren eta Epikuroren linea da eta, Aro Modernoan, Hobbesena.",
   "abierto": "Materia besterik ez bagara, zer da kontzientzia? Eta askatasuna?",
   "reflexion": "Gure gorputza besterik ez al gara?",
   "autores": [
    {
     "id": "democrito"
    },
    {
     "id": "epicuro"
    },
    {
     "id": "hobbes"
    }
   ],
   "temas": [
    "hf-preso",
    "hf-metafisica"
   ]
  }
 }
};
