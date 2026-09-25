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
   "id": "l-igualdad",
   "nombre": "Berdintasunaren linea",
   "color": "#c2185b"
  },
  {
   "id": "l-siglo21",
   "nombre": "XXI. mendearen linea",
   "color": "#0f8b8d"
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
  },
  {
   "n": 2,
   "nombre": "2. sarea · Modernoak: Galileotik Millera",
   "abre": "2026-09-25"
  },
  {
   "n": 3,
   "nombre": "3. sarea · Garaikideak: Kantetik Beauvoirrera",
   "abre": "2026-09-25"
  },
  {
   "n": 4,
   "nombre": "4. sarea · XXI. mendea: gaur egungo erronkak",
   "abre": "2026-09-25"
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
    },
    {
     "t": "Jakin nahi dut nola erlaziona daitezkeen arima eta gorputza, hain desberdinak badira.",
     "to": "52",
     "marca": "m-problema-union",
     "red": 2
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
    },
    {
     "t": "Eta Jainkoa hil bada, eta gaitzak ez badu azalpenik behar?",
     "to": "21",
     "marca": "m-muerte-dios",
     "red": 3
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
    },
    {
     "t": "Boterea den bezala ulertu nahi dut, ez izan beharko lukeen bezala.",
     "to": "56",
     "marca": "m-poder-real",
     "red": 2
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
    },
    {
     "t": "Ezeri fidatu aurretik, jakin nahi dut nondik datozen gure ideiak.",
     "to": "11",
     "marca": "m-origen-ideas",
     "red": 2
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
    },
    {
     "t": "Eta garrantzitsuena ez bada ondoren zer dagoen, baizik eta dudan bizitzarekin zer egiten dudan?",
     "to": "23",
     "marca": "m-que-hago",
     "red": 3
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
  "11": {
   "tipo": "pregunta",
   "red": 2,
   "linea": "l-conocimiento",
   "xy": [
    13.6,
    12.8
   ],
   "titulo": "Ideien jatorria",
   "texto": "XVII. mendea. Galileoren eta Newtonen zientzia berriak munduaren irudia aldatzen du, eta filosofoak galdetzen dute nondik datorren dakiguna. Descartes arrazoiaz fidatzen da; Lockek dio jaiotzean adimena orri zuri bat dela.",
   "pregunta": "Nondik datoz gure ideiak?",
   "opciones": [
    {
     "t": "Batzuk gurekin jaiotzen dira: arrazoiak bere baitan aurkitzen ditu.",
     "to": "13",
     "marca": "m-innatismo"
    },
    {
     "t": "Denak esperientziatik datoz: adimena orri zuri bat da.",
     "to": "12",
     "marca": "m-tabula-rasa"
    },
    {
     "t": "Berdin zait nondik datozen: garrantzitsuena esperimentuekin egiaztatzea da.",
     "to": "50",
     "marca": "m-experimento"
    }
   ],
   "temas": [
    "hf-modernidad",
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "descartes"
    },
    {
     "id": "locke"
    },
    {
     "id": "galileo"
    }
   ]
  },
  "12": {
   "tipo": "pregunta",
   "red": 2,
   "linea": "l-conocimiento",
   "xy": [
    13.2,
    10.4
   ],
   "titulo": "Kausa eta ondorioa",
   "texto": "Billar-bola batek beste bat jotzen du, eta bigarrena mugitu egiten da. Mila aldiz ikusi duzu. Baina ikusi al duzu inoiz kausa, bigarren bola mugiarazten duen indar hori? Ala gauza bat bestearen ondoren datorrela bakarrik ikusi duzu?",
   "pregunta": "Zer ikusten duzu kausa bat ikusten duzunean?",
   "opciones": [
    {
     "t": "Lotura bera: kausak ondorioa sortzen du nahitaez.",
     "to": "97",
     "marca": "m-causa-necesaria"
    },
    {
     "t": "Gauza bat bestearen ondoren datorrela bakarrik; beharrezkotasuna nire ohiturak jartzen du.",
     "to": "51",
     "marca": "m-habito"
    },
    {
     "t": "Ez dakit, baina zientziak funtzionatzen du, eta horrekin aski dut.",
     "to": "16",
     "marca": "m-funciona"
    },
    {
     "t": "Eta kausen beharrezkotasuna ez badu ohiturak jartzen, baizik eta gure adimenak berak?",
     "to": "19",
     "marca": "m-a-priori",
     "red": 3
    }
   ],
   "temas": [
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "hume"
    }
   ]
  },
  "13": {
   "tipo": "pregunta",
   "red": 2,
   "linea": "l-alma",
   "xy": [
    16.8,
    12.8
   ],
   "titulo": "Substantzia",
   "texto": "Arrazoiak mundua nolakoa den ezagut badezake, hurrengo galdera da zerez egina dagoen. Modernoek substantzia deitu zioten: bere kabuz existitzen dena, beste ezeren mende egon gabe.",
   "pregunta": "Zerez dago egina existitzen den guztia?",
   "opciones": [
    {
     "t": "Bi gauza desberdinez: pentsatzen duen adimenaz eta lekua hartzen duen materiaz.",
     "to": "52",
     "marca": "m-dualismo"
    },
    {
     "t": "Substantzia infinitu bakar batez: Jainkoa edo, gauza bera dena, Natura.",
     "to": "53",
     "marca": "m-monismo"
    },
    {
     "t": "Mugimenduan dagoen materiaz bakarrik: pentsamendua ere bai.",
     "to": "14",
     "marca": "m-materialismo"
    }
   ],
   "temas": [
    "hf-metafisica"
   ],
   "autores": [
    {
     "id": "descartes"
    },
    {
     "id": "spinoza"
    },
    {
     "id": "hobbes"
    }
   ]
  },
  "14": {
   "tipo": "pregunta",
   "red": 2,
   "linea": "l-ciudad",
   "xy": [
    14,
    6.2
   ],
   "titulo": "Naturazko egoera",
   "texto": "Imajinatu bihar Estatua, polizia eta legeak desagertzen direla. Hobbesek, Lockek eta Rousseauk pentsamendu-esperimentu bera egin zuten, gobernu bati zergatik obeditzen diogun azaltzeko.",
   "pregunta": "Nolakoa litzateke bizitza Estaturik gabe?",
   "opciones": [
    {
     "t": "Denen aurkako denen gerra: bizitza bakartia, pobrea, basatia eta laburra.",
     "to": "15",
     "marca": "m-guerra-todos"
    },
    {
     "t": "Eskubide naturalak izango genituzke —bizitza, askatasuna, jabetza—, baina inork ez lituzke babestuko.",
     "to": "15",
     "marca": "m-derechos-naturales"
    },
    {
     "t": "Libreagoak eta zoriontsuagoak izango ginateke: gizarteak usteltzen gaitu.",
     "to": "54",
     "marca": "m-bondad-natural"
    }
   ],
   "temas": [
    "hf-contrato"
   ],
   "autores": [
    {
     "id": "hobbes"
    },
    {
     "id": "locke"
    },
    {
     "id": "rousseau"
    }
   ]
  },
  "15": {
   "tipo": "pregunta",
   "red": 2,
   "linea": "l-ciudad",
   "xy": [
    14.6,
    4.2
   ],
   "titulo": "Gizarte-kontratua",
   "texto": "Naturazko egoeratik irteteko, pertsonek itun bat egiten dute: zerbait uzten dute bakean bizitzearen truke. Kontua da zer uzten duten eta nori.",
   "pregunta": "Zer botere izan behar du gobernuak?",
   "opciones": [
    {
     "t": "Botere osoa, subirano baten eskuetan: hobe nagusi bat kaosa baino.",
     "to": "96",
     "marca": "m-absolutismo"
    },
    {
     "t": "Botere mugatu eta banatu bat, gure eskubideak errespetatzen dituena.",
     "to": "FO",
     "marca": "m-poder-limitado"
    },
    {
     "t": "Boterea herriarena da: legeek borondate orokorra adierazi behar dute.",
     "to": "FP",
     "marca": "m-voluntad-general"
    },
    {
     "t": "Eta benetako boterea ez badago gobernuan, dirua duenarengan baizik?",
     "to": "20",
     "marca": "m-poder-economico",
     "red": 3
    }
   ],
   "temas": [
    "hf-contrato"
   ],
   "autores": [
    {
     "id": "hobbes"
    },
    {
     "id": "locke"
    },
    {
     "id": "rousseau"
    }
   ]
  },
  "16": {
   "tipo": "pregunta",
   "red": 2,
   "linea": "l-felicidad",
   "xy": [
    16.8,
    5
   ],
   "titulo": "Tranbia",
   "texto": "Balaztarik gabeko tranbia bat zuzen doa trenbidera lotuta dauden bost pertsonaren aurka. Zu palanka baten ondoan zaude: eragiten badiozu, tranbia beste trenbide batera desbideratzen da, eta han pertsona bakarra dago.",
   "pregunta": "Palankari eragiten diozu?",
   "opciones": [
    {
     "t": "Bai: zuzena da gehiengoarentzat zoriontasun handiena sortzen duena.",
     "to": "55",
     "marca": "m-mayor-numero"
    },
    {
     "t": "Ez: badira inori egiten ez zaizkion gauzak, kontuek ematen badute ere.",
     "to": "FO",
     "marca": "m-derechos"
    },
    {
     "t": "Araberakoa: plazer guztiak eta bizitza guztiak ez dira berdin neurtzen.",
     "to": "55",
     "marca": "m-calidad"
    },
    {
     "t": "Guztientzat balio duen arau bat bilatzen dut, kontuak egin gabe.",
     "to": "18",
     "marca": "m-regla-universal",
     "red": 3
    }
   ],
   "temas": [
    "hf-utilitarismo"
   ],
   "autores": [
    {
     "id": "bentham"
    },
    {
     "id": "mill"
    }
   ]
  },
  "17": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-conocimiento",
   "xy": [
    20.2,
    12.8
   ],
   "titulo": "Ausartu pentsatzera!",
   "texto": "Königsberg, 1784. Kantek Ilustrazioa definitzen du gizakia bere adingabetasunetik irtetea bezala: besteren gidaritzarik gabe bere adimena erabiltzeko ezintasunetik. Haren lema «Sapere aude» da: ausartu pentsatzera.",
   "pregunta": "Ausartzen zara zeure kabuz pentsatzera?",
   "opciones": [
    {
     "t": "Bai: arrazoia bera da guztientzat, eta tutorerik gabe erabil dezaket.",
     "to": "19",
     "marca": "m-autonomia"
    },
    {
     "t": "Kontuz: arrazoi ilustratuak natura eta pertsonak menderatzeko ere balio izan du.",
     "to": "20",
     "marca": "m-razon-dominio"
    },
    {
     "t": "Zer arrazoi? Garai eta kultura bakoitzak berea du.",
     "to": "21",
     "marca": "m-perspectivismo"
    }
   ],
   "temas": [
    "hf-ilustracion"
   ],
   "autores": [
    {
     "id": "kant"
    },
    {
     "id": "adorno"
    }
   ]
  },
  "18": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-felicidad",
   "xy": [
    25.4,
    10.6
   ],
   "titulo": "Betebeharra",
   "texto": "Lagun bati sekretu bat gordetzea agindu diozu. Orain kontatzea oso ondo etorriko litzaizuke: inor ez litzateke jabetuko zu izan zarela.",
   "pregunta": "Zer egiten duzu?",
   "opciones": [
    {
     "t": "Gordetzen dut: guztientzat balio dezakeen arau baten arabera bakarrik jokatzen dut.",
     "to": "FR",
     "marca": "m-imperativo"
    },
    {
     "t": "Kontatzen dut, horrela jende gehiago zoriontsuagoa bada.",
     "to": "55",
     "marca": "m-consecuencias"
    },
    {
     "t": "Ez betebeharra, ez kalkulua: balioak nik erabakitzen ditut.",
     "to": "21",
     "marca": "m-valores-propios"
    },
    {
     "t": "Ba al dugu betebeharrik planetarekin eta oraindik jaio ez direnekin?",
     "to": "28",
     "marca": "m-generaciones",
     "red": 4
    }
   ],
   "temas": [
    "hf-etica-deber"
   ],
   "autores": [
    {
     "id": "kant"
    },
    {
     "id": "mill"
    }
   ]
  },
  "19": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-conocimiento",
   "xy": [
    22.2,
    12.8
   ],
   "titulo": "Arrazoiaren mugak",
   "texto": "Kantek galdetzen du zer ezagut dezakeen arrazoiak eta non dauden haren mugak. Haren erantzunak filosofia aldatzen du: ez da ezagutza gauzetara egokitzen, gauzak baizik gure ezagutzeko moduari.",
   "pregunta": "Mundua den bezala ezagutzen dugu?",
   "opciones": [
    {
     "t": "Agertzen zaigun bezala bakarrik: gure adimenak jartzen ditu espazioa, denbora eta kausak.",
     "to": "60",
     "marca": "m-fenomeno"
    },
    {
     "t": "Bai, eta gero eta hobeto: zientziak mundua den bezala ematen digu, eta gainerakoa berriketa da.",
     "to": "22",
     "marca": "m-cientificismo"
    },
    {
     "t": "Ez dago gertakaririk, interpretazioak baizik.",
     "to": "21",
     "marca": "m-interpretaciones"
    }
   ],
   "temas": [
    "hf-kant"
   ],
   "autores": [
    {
     "id": "kant"
    },
    {
     "id": "nietzsche"
    }
   ]
  },
  "20": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-ciudad",
   "xy": [
    19.4,
    10.8
   ],
   "titulo": "Lantegia",
   "texto": "Manchester, 1845. Egunean hamalau ordu egiten dituzu lan ehun-lantegi batean, zure seme-alaba txikiek bezala, eta goseak ez hiltzeko adina kobratzen duzu. Lantegiaren jabea urtero aberatsagoa da.",
   "pregunta": "Zer ari da gertatzen?",
   "opciones": [
    {
     "t": "Esplotazioa: batzuk bizi dira beste batzuek kobratzen ez duten lanetik.",
     "to": "61",
     "marca": "m-explotacion"
    },
    {
     "t": "Merkatua da: bere kapitala arriskatzen duenak merezi du irabazia.",
     "to": "FO",
     "marca": "m-mercado"
    },
    {
     "t": "Bidegabekeria bat, konponduko litzatekeena edonork onartuko lukeen banaketa batekin, zein toki egokituko zitzaion jakin gabe.",
     "to": "FX",
     "marca": "m-velo"
    },
    {
     "t": "Eta gaur? Lantegia mundu osoa da, eta markak erosten ditugu, ez gauzak.",
     "to": "26",
     "marca": "m-global",
     "red": 4
    }
   ],
   "temas": [
    "hf-capitalismo",
    "hf-sospecha"
   ],
   "autores": [
    {
     "id": "marx"
    },
    {
     "id": "rawls"
    }
   ]
  },
  "21": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-dios",
   "xy": [
    21.6,
    9.4
   ],
   "titulo": "Jainkoa hil da",
   "texto": "«Jainkoa hil da, eta guk hil dugu», idazten du Nietzschek 1882an. Ez du erlijioaz hitz egiten, zerbait larriagoaz baizik: jada ez dago oinarri ziurrik —Jainkoa, arrazoia, egia— zerk balio duen eta zerk ez esateko.",
   "pregunta": "Eta orain zer?",
   "opciones": [
    {
     "t": "Nire balioak sortu eta bizitzari baietz esan, min ematen duenari ere bai.",
     "to": "62",
     "marca": "m-crear-valores"
    },
    {
     "t": "Ezerk oinarririk ez badu, ezerk ez du merezi.",
     "to": "95",
     "marca": "m-nada-vale"
    },
    {
     "t": "Jainkorik gabe, guztion arteko elkarrizketa arrazionalak arau komunak eman diezazkiguke.",
     "to": "FW",
     "marca": "m-dialogo"
    }
   ],
   "temas": [
    "hf-sospecha",
    "hf-posmodernidad"
   ],
   "autores": [
    {
     "id": "nietzsche"
    },
    {
     "id": "habermas"
    }
   ]
  },
  "22": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-conocimiento",
   "xy": [
    23.2,
    10.6
   ],
   "titulo": "Hizkuntza",
   "texto": "XX. mendearen hasieran, filosofo askok susmo bat dute: agian filosofiaren arazo asko ez dira munduaren arazoak, hizkuntzaren gaizkiulertuak baizik.",
   "pregunta": "Zer pentsatzen duzu hizkuntzaz?",
   "opciones": [
    {
     "t": "Argi esan ezin dena, hobe isiltzea.",
     "to": "63",
     "marca": "m-callar"
    },
    {
     "t": "Hitz baten esanahia bere erabilera dela: hizkuntza-jokoetan jolastuz ikasten dugu hitz egiten.",
     "to": "FW",
     "marca": "m-uso"
    },
    {
     "t": "Ez dela neutrala: batzuk araua bezala izendatzen ditu, eta beste batzuk «bestea» bezala.",
     "to": "24",
     "marca": "m-lenguaje-poder"
    }
   ],
   "temas": [
    "hf-analitica"
   ],
   "autores": [
    {
     "id": "wittgenstein"
    }
   ]
  },
  "23": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-alma",
   "xy": [
    23.4,
    6.6
   ],
   "titulo": "Existentzia",
   "texto": "Inork ez dizu galdetu jaio nahi zenuen. Hemen zaude, aukeratu ez zenituen garai eta leku batean, eta zure bizitzarekin zer egin erabaki behar duzu, inork jarraibide-eskuliburua eman gabe.",
   "pregunta": "Zer egiten duzu zure existentziarekin?",
   "opciones": [
    {
     "t": "Libre izatera kondenatuta nago: egiten dudana naiz.",
     "to": "64",
     "marca": "m-condenado-libre"
    },
    {
     "t": "Bizitza absurdoa da, eta, hala ere, matxinadaz bizi behar da.",
     "to": "FU",
     "marca": "m-absurdo"
    },
    {
     "t": "Nire zirkunstantziatik ulertzen dut, eta sentitzen dudana ere entzuten duen arrazoi batekin.",
     "to": "66",
     "marca": "m-circunstancia"
    },
    {
     "t": "Eta gaur egun bizitza lapurtzen didana mugikorra eta nekea badira?",
     "to": "25",
     "marca": "m-cansancio",
     "red": 4
    }
   ],
   "temas": [
    "hf-existencialismo"
   ],
   "autores": [
    {
     "id": "sartre"
    },
    {
     "id": "camus"
    },
    {
     "id": "ortega"
    }
   ]
  },
  "24": {
   "tipo": "pregunta",
   "red": 3,
   "linea": "l-igualdad",
   "xy": [
    22.6,
    4.6
   ],
   "titulo": "Ez da emakume jaiotzen",
   "texto": "«Ez da emakume jaiotzen: emakume egiten da», idazten du Simone de Beauvoirrek 1949an. Esaldia feminismo garaikidearen abiapuntuetako bat bihurtzen da.",
   "pregunta": "Zer esan nahi du?",
   "opciones": [
    {
     "t": "Femeninoa eraikuntza soziala dela, ez patu biologikoa.",
     "to": "65",
     "marca": "m-construccion"
    },
    {
     "t": "Gizonak eta emakumeak eskubidetan berdinak direla, eta legeetan aitortu behar dela.",
     "to": "67",
     "marca": "m-derechos-todas"
    },
    {
     "t": "Gehiegikeria dela: sexu bakoitzak bere izaera eta bere zeregina ditu.",
     "to": "100",
     "marca": "m-naturaleza-sexo"
    },
    {
     "t": "Eta generoa? Hori ere ikasten al da?",
     "to": "27",
     "marca": "m-genero",
     "red": 4
    }
   ],
   "temas": [
    "hf-beauvoir"
   ],
   "autores": [
    {
     "id": "beauvoir"
    },
    {
     "id": "wollstonecraft"
    }
   ]
  },
  "25": {
   "tipo": "pregunta",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    28.2,
    12.8
   ],
   "titulo": "Goizaldeko ordu biak",
   "texto": "Goizaldeko ordu biak dira eta mugikorrarekin jarraitzen duzu: bideo bat gehiago, jakinarazpen bat gehiago, erantzun beharreko mezu bat. Bihar azterketa duzu eta lehertuta zaude, baina inork ez zaitu jarraitzera behartzen.",
   "pregunta": "Zer ari da gertatzen?",
   "opciones": [
    {
     "t": "Nire burua esplotatzen dut libre naizela sinetsita: inork ez nau behartzen, eta, hala ere, ez naiz gelditzen.",
     "to": "68",
     "marca": "m-autoexplotacion"
    },
    {
     "t": "Plataformak harrapatzeko diseinatuta daudela: errua diseinatzen dituenarena da.",
     "to": "26",
     "marca": "m-plataformas"
    },
    {
     "t": "Ezer larririk ez: teknologia neutrala da; bakoitzak nola erabiltzen duen, horren araberakoa da.",
     "to": "101",
     "marca": "m-tecnologia-neutra"
    }
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "han"
    }
   ]
  },
  "26": {
   "tipo": "pregunta",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    27.6,
    10.2
   ],
   "titulo": "Bizitza likidoa",
   "texto": "Bi urtez behin aldatzen duzu mugikorra, hilabete gutxiro lana, eta sare sozial bakoitzean nortasuna. Markek ez dizkizute zapatilak saltzen, bizimodu bat baizik. Ezerk ez du asko irauten.",
   "pregunta": "Nola bizi duzu?",
   "opciones": [
    {
     "t": "Askatasun gisa: ezerk ez nau lotzen, eta nahi dudanean asma dezaket neure burua berriro.",
     "to": "27",
     "marca": "m-nada-me-ata"
    },
    {
     "t": "Prekarietate gisa: erabili eta botatzeko loturak, lanak eta nortasunak.",
     "to": "69",
     "marca": "m-precariedad"
    },
    {
     "t": "Negozio gisa: merkatuak kontsumitzaile nahi gaitu, ez hiritar.",
     "to": "28",
     "marca": "m-consumidores"
    }
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "bauman"
    },
    {
     "id": "klein"
    },
    {
     "id": "chomsky"
    }
   ]
  },
  "27": {
   "tipo": "pregunta",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    30.4,
    8.8
   ],
   "titulo": "Generoa",
   "texto": "Jaiotzen zarenetik esaten dizute nola jantzi, nola mugitu, zertara jolastu eta zer gustatu behar zaizun zure sexuaren arabera. Judith Butlerrek dio generoa keinu horiek errepikatuz ikasten dela, paper bat bezala.",
   "pregunta": "Zer da generoa?",
   "opciones": [
    {
     "t": "Keinuak errepikatuz ikasten den papera, eta horregatik alda daitekeena.",
     "to": "70",
     "marca": "m-performatividad"
    },
    {
     "t": "Gertakari biologiko bat: gorputzarekin batera ematen da.",
     "to": "100",
     "marca": "m-genero-biologico"
    },
    {
     "t": "Boterea banatzeko balio duen eraikuntza soziala.",
     "to": "FV",
     "marca": "m-genero-poder"
    }
   ],
   "temas": [
    "hf-siglo21",
    "hf-beauvoir"
   ],
   "autores": [
    {
     "id": "butler"
    },
    {
     "id": "preciado"
    }
   ]
  },
  "28": {
   "tipo": "pregunta",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    29.2,
    6.4
   ],
   "titulo": "Planeta",
   "texto": "Termometroa igotzen ari da, ibaiak lehortzen dira eta uda bakoitzean baso gehiago erretzen da. Bitartean, ekonomiak urtero hazi behar du. Yayo Herrerok gogorarazten du ekomendekoak garela (naturatik bizi gara) eta elkarren mendekoak (besteen zaintzatik bizi gara).",
   "pregunta": "Zer egiten dugu?",
   "opciones": [
    {
     "t": "Norabidea aldatu: bizitza eta zaintzak erdigunean jarri, ez dirua.",
     "to": "FZ",
     "marca": "m-cuidar-vida"
    },
    {
     "t": "Teknologian konfiantza izan: zientziak aurkituko du irtenbidea, gure bizimodua aldatu gabe.",
     "to": "102",
     "marca": "m-tecno-solucion"
    },
    {
     "t": "Bakoitzak bere zatia egin dezala: birziklatu eta pixka bat gutxiago kontsumitu.",
     "to": "29",
     "marca": "m-cada-uno"
    }
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "herrero"
    }
   ]
  },
  "29": {
   "tipo": "pregunta",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    28.2,
    4.2
   ],
   "titulo": "Zer da herrialde justu bat?",
   "texto": "Bi herrialdek aberastasun bera dute biztanleko. Batean, neskak ez dira eskolara joaten, ez dago ospitalerik gertu eta inork ez du denbora librerik. Bestean, bai.",
   "pregunta": "Nola neurtzen da justizia?",
   "opciones": [
    {
     "t": "Jendeak benetan egin eta izan dezakeenaren arabera: osasuna, hezkuntza, maitasuna, jolasa, ahotsa.",
     "to": "FAA",
     "marca": "m-capacidades"
    },
    {
     "t": "Aberastasun eta zoriontasun osoaren arabera, nola banatzen diren kontuan hartu gabe.",
     "to": "FQ",
     "marca": "m-riqueza-total"
    },
    {
     "t": "Bakoitzak bere bizitza aukeratzeko duen askatasunaren arabera.",
     "to": "FO",
     "marca": "m-libertad-elegir"
    }
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "nussbaum"
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
  "50": {
   "tipo": "vida",
   "red": 2,
   "linea": "l-cosmos",
   "xy": [
    15.6,
    11.8
   ],
   "titulo": "Galileo Inkisizioaren aurrean",
   "texto": "Erroma, 1633. Galileok ia hirurogeita hamar urte ditu. Teleskopioarekin egindako behaketek diote Lurrak Eguzkiaren inguruan biratzen duela, eta Inkisizioak belauniko jarri eta hori ukatzera behartzen du. Uko egiten dio eta bizitza osoa etxean giltzapetuta ematen du. Kondairak dio, altxatzean, xuxurlatu zuela: «Eta, hala ere, mugitu egiten da».",
   "pregunta": "Zer egingo zenukeen zuk?",
   "opciones": [
    {
     "t": "Uko egin: bizitza salbatu eta isilean ikertzen jarraitu.",
     "to": "56",
     "marca": "m-prudencia"
    },
    {
     "t": "Tinko eutsi: zientziaren egia ez da negoziatzen.",
     "to": "12",
     "marca": "m-verdad-ciencia"
    },
    {
     "t": "Obeditu: agintariak du zer irakasten den erabakitzeko eskubidea.",
     "to": "96",
     "marca": "m-autoridad"
    }
   ],
   "temas": [
    "hf-modernidad"
   ],
   "autores": [
    {
     "id": "galileo"
    }
   ]
  },
  "51": {
   "tipo": "vida",
   "red": 2,
   "linea": "l-conocimiento",
   "xy": [
    12.8,
    7.8
   ],
   "titulo": "Hume eta backgammona",
   "texto": "Edinburgo, 1739. Humek hain urrun eraman du zalantza, ezen jada ez dakien ezertaz fidatu daitekeen: ez kausez, ez munduaz, ez bere niaz. Aitortzen du orduan afaldu egiten duela, backgammon partida bat jokatzen duela eta lagunekin hizketan aritzen dela, eta hiruzpalau orduren buruan bere espekulazioak hotzak eta barregarriak iruditzen zaizkiola.",
   "pregunta": "Zer iruditzen zaizu?",
   "opciones": [
    {
     "t": "Zentzuzkoa: naturak sinestera eramaten gaitu, arrazoiak frogatu ezin badu ere.",
     "to": "FL",
     "marca": "m-naturalismo"
    },
    {
     "t": "Tranpatia: ezer frogatu ezin badu, ez dezala ezer baieztatu.",
     "to": "FD",
     "marca": "m-escepticismo-total"
    },
    {
     "t": "Elkarrekin nola bizi garen interesatzen zait gehiago, zer jakin dezakegun baino.",
     "to": "14",
     "marca": "m-vida-comun"
    }
   ],
   "temas": [
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "hume"
    }
   ]
  },
  "52": {
   "tipo": "vida",
   "red": 2,
   "linea": "l-alma",
   "xy": [
    17.8,
    10.6
   ],
   "titulo": "Isabel Bohemiakoak Descartesi idazten dio",
   "texto": "Haga, 1643. Isabel Bohemiakoak, hogeita lau urteko printzesa erbesteratu batek, galdera bat idazten dio Descartesi, eta hark ez daki ondo erantzuten: arimak lekurik hartzen ez badu eta hedadurarik ez badu, nola mugi dezake gorputza? Descartesek guruin pinealaz hitz egiten du; bera ez da konbentzitzen.",
   "pregunta": "Nork du arrazoia?",
   "opciones": [
    {
     "t": "Isabelek: zerbaitek huts egiten du arima eta gorputza hain substantzia desberdinak badira.",
     "to": "53",
     "marca": "m-critica-dualismo"
    },
    {
     "t": "Descartesek: bi substantzia dira, nola batzen diren ez badakigu ere.",
     "to": "10",
     "marca": "m-dualismo-firme"
    },
    {
     "t": "Inork ez: arimak ezer azaltzen ez badu, materia bakarrik geratzen da.",
     "to": "14",
     "marca": "m-materialismo"
    }
   ],
   "temas": [
    "hf-metafisica",
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "isabel"
    },
    {
     "id": "descartes"
    }
   ]
  },
  "53": {
   "tipo": "vida",
   "red": 2,
   "linea": "l-dios",
   "xy": [
    16.2,
    9
   ],
   "titulo": "Spinoza lenteak leuntzen",
   "texto": "Amsterdam, 1656. Komunitate juduak Spinoza kanporatzen du, hogeita hiru urterekin, Jainkoari buruzko ideiengatik. Mikroskopio eta teleskopioetarako lenteak leunduz irabazten du bizimodua. 1673an Heidelbergen katedra bat eskaintzen diote, eta ezetz dio: filosofatzeko askatasuna galtzeko beldur da.",
   "pregunta": "Zer iruditzen zaizu haren aukera?",
   "opciones": [
    {
     "t": "Ulertzen dut: librea izatea gauzak zergatik gertatzen diren ulertzea da, ez kargu bat izatea.",
     "to": "FM",
     "marca": "m-libertad-necesidad"
    },
    {
     "t": "Pentsatzeko duen askatasuna miresten dut: denentzako tolerantzia defendatuko nuke.",
     "to": "15",
     "marca": "m-tolerancia"
    },
    {
     "t": "Dena beharrez gertatzen bada, inor ez da ezeren erantzule.",
     "to": "16",
     "marca": "m-determinismo"
    }
   ],
   "temas": [
    "hf-metafisica"
   ],
   "autores": [
    {
     "id": "spinoza"
    }
   ]
  },
  "54": {
   "tipo": "vida",
   "red": 2,
   "linea": "l-ciudad",
   "xy": [
    15.6,
    7.2
   ],
   "titulo": "Rousseau Vincennesko bidean",
   "texto": "Parisko inguruak, 1749. Rousseau oinez doa Diderot bere laguna ikustera, Vincennesen kartzelatuta baitago. Bidean, egunkari batean lehiaketa baten galdera irakurtzen du: hobetu al dituzte zientziek eta arteek ohiturak? Zuhaitz baten azpian eseri behar du, hunkituta: gizakia berez ona da, eta gizarteak usteltzen du.",
   "pregunta": "Zer ateratzen duzu haren intuiziotik?",
   "opciones": [
    {
     "t": "Gizartea denen borondatetik berriz sortu behar dela.",
     "to": "15",
     "marca": "m-refundar"
    },
    {
     "t": "Gehiegikeria dela: zientziek eta arteek hobeak ere egin gaituzte.",
     "to": "16",
     "marca": "m-progreso"
    },
    {
     "t": "Gizarteak usteltzen badu, hobe dela aparte bizitzea.",
     "to": "FC",
     "marca": "m-aparte"
    },
    {
     "t": "Jakin nahi dut zer den norbere kabuz pentsatzera ausartzea, Ilustrazioak eskatzen zuen bezala.",
     "to": "17",
     "marca": "m-ilustracion",
     "red": 3
    }
   ],
   "temas": [
    "hf-contrato",
    "hf-ilustracion"
   ],
   "autores": [
    {
     "id": "rousseau"
    }
   ]
  },
  "55": {
   "tipo": "vida",
   "red": 2,
   "linea": "l-felicidad",
   "xy": [
    17.8,
    7.2
   ],
   "titulo": "Millen krisia",
   "texto": "Londres, 1826. John Stuart Millek hogei urte ditu. Aitak eta Benthamek txikitatik hezi dute gehiengoarentzako zoriontasun handiena kalkulatzeko. Egun batean bere buruari galdetzen dio: nahi dituzun erreforma guztiak orain bertan beteko balira, zoriontsu izango zinateke? Eta erantzuna ezetz da. Depresio batean erortzen da, eta Wordsworthen poesiak ateratzen du hortik.",
   "pregunta": "Zer ikasten du Millek?",
   "opciones": [
    {
     "t": "Zoriontasunak irizpidea izaten jarraitzen duela, baina badirela beste batzuk baino plazer handiagoak.",
     "to": "FQ",
     "marca": "m-placeres-superiores"
    },
    {
     "t": "Gehiengoaren zoriontasunaren alde edonor sakrifika daitekeela.",
     "to": "98",
     "marca": "m-sacrificio"
    },
    {
     "t": "Bakoitzaren askatasunak zoriontasun-batura edozeinek baino gehiago balio duela.",
     "to": "FO",
     "marca": "m-libertad-individual"
    }
   ],
   "temas": [
    "hf-utilitarismo"
   ],
   "autores": [
    {
     "id": "mill"
    },
    {
     "id": "bentham"
    }
   ]
  },
  "56": {
   "tipo": "vida",
   "red": 2,
   "linea": "l-ciudad",
   "xy": [
    12.6,
    5
   ],
   "titulo": "Makiavelo erbestean",
   "texto": "San Casciano, Florentziatik gertu, 1513. Makiavelok kargua galdu du, torturatu egin dute eta erbestean bizi da. Egunez tabernan eztabaidatzen du; gauez jantzi dotoreak janzten ditu eta antzinakoekin hitz egiten du haien liburuetan. Horrela idazten du Printzea: gobernari bati komeni zaio maitatua baino beldurtua izatea.",
   "pregunta": "Zer iruditzen zaizu haren aholkua?",
   "opciones": [
    {
     "t": "Arrazoi du: politikan emaitzak du garrantzia, ez moralak.",
     "to": "14",
     "marca": "m-realismo-politico"
    },
    {
     "t": "Ondo deskribatzen du boterea, baina mugak jarri behar zaizkio.",
     "to": "15",
     "marca": "m-limites"
    },
    {
     "t": "Inmorala da: gobernari batek zuzena izan behar du eraginkorra izan aurretik.",
     "to": "16",
     "marca": "m-moral-politica"
    }
   ],
   "temas": [
    "hf-contrato"
   ],
   "autores": [
    {
     "id": "maquiavelo"
    }
   ]
  },
  "60": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-conocimiento",
   "xy": [
    24.2,
    12.2
   ],
   "titulo": "Kanten ibilaldia",
   "texto": "Königsberg, 1780 inguruan. Kant ez da inoiz bere hiritik irteten. Bostetan jaikitzen da, klaseak ematen ditu, idazten du eta, arratsaldero, ordu berean ateratzen da paseatzera etorbide beretik; bizilagunek, diotenez, erlojua ordu jartzen zuten hura pasatzen ikustean. Behin bakarrik utzi zion paseoari: etxean geratu zen Rousseauren Emilio irakurtzen.",
   "pregunta": "Zer iruditzen zaizu hain bizitza erregularra?",
   "opciones": [
    {
     "t": "Koherentea: librea izatea norberari legea ematea eta hura betetzea da.",
     "to": "18",
     "marca": "m-autonomia"
    },
    {
     "t": "Zintzoa: mugak jartzen dizkio arrazoiari; Jainkoaz edo arimaz ezin dugu ezer jakin.",
     "to": "21",
     "marca": "m-limites-razon"
    },
    {
     "t": "Ordena gehiegi: bizitza ez da arauetan sartzen.",
     "to": "23",
     "marca": "m-vida-sin-reglas"
    }
   ],
   "temas": [
    "hf-kant",
    "hf-etica-deber"
   ],
   "autores": [
    {
     "id": "kant"
    }
   ]
  },
  "61": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-ciudad",
   "xy": [
    19.2,
    8.6
   ],
   "titulo": "Marx Museo Britainiarrean",
   "texto": "Londres, 1850eko hamarkada. Marx erbestean eta pobrezian bizi da; bere hiru seme-alaba txikitan hiltzen zaizkio. Egunero Museo Britainiarreko irakurketa-aretora joaten da ekonomia ikastera, Kapitala idazteko. Idatzita utzia zuen jada: filosofoek mundua interpretatu besterik ez dute egin; kontua hura eraldatzea da.",
   "pregunta": "Zer iruditzen zaizu haren tesia?",
   "opciones": [
    {
     "t": "Arrazoi du: mundua aldatu behar da, ez pentsatu bakarrik.",
     "to": "FS",
     "marca": "m-transformar"
    },
    {
     "t": "Eraldatu, bai, baina inoiz ez bakoitzaren askatasunaren kontura.",
     "to": "99",
     "marca": "m-libertad-primero"
    },
    {
     "t": "Susmoa urrunago irits daiteke: morala eta arrazoia ere interesak ezkutatzen dituzte.",
     "to": "21",
     "marca": "m-sospecha"
    }
   ],
   "temas": [
    "hf-capitalismo",
    "hf-sospecha"
   ],
   "autores": [
    {
     "id": "marx"
    }
   ]
  },
  "62": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-dios",
   "xy": [
    22.6,
    8
   ],
   "titulo": "Nietzsche Turinen",
   "texto": "Turin, 1889ko urtarrila. Nietzschek ikusten du gurdizain batek bere zaldia zigortzen duela plazan. Animaliarengana korrika joan, haren lepoari negarrez besarkatu eta erori egiten da. Ez du berriro zentzua berreskuratuko. Errukia kritikatu zuen filosofoak zaldi bati besarkatuta amaitzen ditu bere egun argiak.",
   "pregunta": "Zer ikusten duzu eszenan?",
   "opciones": [
    {
     "t": "Bizitza osoari baietz esan nahi izan zion gizona, minari ere bai.",
     "to": "FT",
     "marca": "m-si-a-la-vida"
    },
    {
     "t": "Jainkorik gabe dena hondoratzen dela erakusten duen froga.",
     "to": "95",
     "marca": "m-todo-se-hunde"
    },
    {
     "t": "Kritikatzen zuen errukia bere barruan zegoela.",
     "to": "23",
     "marca": "m-compasion"
    }
   ],
   "temas": [
    "hf-sospecha",
    "hf-posmodernidad"
   ],
   "autores": [
    {
     "id": "nietzsche"
    }
   ]
  },
  "63": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-conocimiento",
   "xy": [
    24.6,
    8.8
   ],
   "titulo": "Wittgenstein lubakian",
   "texto": "Ekialdeko frontea, 1916. Wittgensteinek, Europako familia aberatsenetako baten semeak, soldadu soil gisa izena eman du. Posturik arriskutsuenak eskatzen ditu eta, borroka baten eta bestearen artean, koaderno batean Tractatus idazten du. Gerratik itzultzean, bere fortuna osoa oparitzen du eta herri-eskola bateko maisu egiten da.",
   "pregunta": "Zer pentsatzen duzu?",
   "opciones": [
    {
     "t": "Garrantzitsuena —etika, bizitzaren zentzua— ez dela esaten: bizitzean erakusten da.",
     "to": "23",
     "marca": "m-mostrar"
    },
    {
     "t": "Garrantzitsu guztia esan ezina bada, filosofiak ez duela ezertarako balio.",
     "to": "FD",
     "marca": "m-filosofia-inutil"
    },
    {
     "t": "Ondo egin zuela bizitza eta, geroago, ideiak aldatzean: pentsatzea norbere burua zuzentzea da.",
     "to": "FW",
     "marca": "m-corregirse"
    }
   ],
   "temas": [
    "hf-analitica"
   ],
   "autores": [
    {
     "id": "wittgenstein"
    }
   ]
  },
  "64": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-alma",
   "xy": [
    24.8,
    6.8
   ],
   "titulo": "Sartrek Nobela baztertzen du",
   "texto": "Paris, 1964. Suediako Akademiak Literaturako Nobel Saria ematen dio Jean-Paul Sartreri. Hark ezetz dio: idazle batek ez du bere burua erakunde bihurtzen utzi behar. Saria borondatez baztertzen duen lehena da.",
   "pregunta": "Zer iruditzen zaizu haren keinua?",
   "opciones": [
    {
     "t": "Koherentea: inork ezin nau definitu, nire egintzek izan ezik.",
     "to": "FU",
     "marca": "m-actos"
    },
    {
     "t": "Ondo, baina nire askatasuna besteenaren araberakoa ere bada, Beauvoirrek zioen bezala.",
     "to": "24",
     "marca": "m-libertad-otros"
    },
    {
     "t": "Nahiago dut arrazoi apalago bat, bizi duenak ukitzen uzten diona.",
     "to": "66",
     "marca": "m-razon-humilde"
    }
   ],
   "temas": [
    "hf-existencialismo"
   ],
   "autores": [
    {
     "id": "sartre"
    }
   ]
  },
  "65": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-igualdad",
   "xy": [
    21.2,
    3.6
   ],
   "titulo": "Beauvoir Indizean",
   "texto": "Paris, 1949. Simone de Beauvoirrek Bigarren sexua argitaratzen du. Hogeita bi mila ale saltzen ditu aste batean, irainak eta gutun sutsuak jasotzen ditu, eta Vatikanoak liburu debekatuen Indizean sartzen du. Gaur egun mundu osoan irakurtzen da.",
   "pregunta": "Zer zegoen jokoan liburu horrekin?",
   "opciones": [
    {
     "t": "Emakumeen askatasuna: inork ez ditu kanpotik definitu behar.",
     "to": "FV",
     "marca": "m-libertad-mujeres"
    },
    {
     "t": "Denon askatasuna: pertsona batzuen zapalkuntzak besteen askatasuna mugatzen du.",
     "to": "FU",
     "marca": "m-libertad-todos"
    },
    {
     "t": "Gaur egun garrantzirik ez duen ezer: arazo konpondua da.",
     "to": "100",
     "marca": "m-resuelto"
    }
   ],
   "temas": [
    "hf-beauvoir"
   ],
   "autores": [
    {
     "id": "beauvoir"
    }
   ]
  },
  "66": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-alma",
   "xy": [
    25.6,
    5.2
   ],
   "titulo": "Zambrano mugaz bestaldera",
   "texto": "Pirinioak, 1939ko urtarrila. María Zambranok, Ortegaren ikasleak, oinez igarotzen du muga bere amarekin, Gerra Zibiletik ihesi doan jendetzaren artean. Berrogeita bost urteko erbestea hasten du Mexikon, Kuban, Italian eta Suitzan. Han «arrazoi poetiko» bat pentsatzen du: sentitzen dena mespretxatzen ez duen arrazoia.",
   "pregunta": "Zer ikasten duzu harengandik?",
   "opciones": [
    {
     "t": "Arrazoiak poetiko bihurtu behar duela, eta sentitzen dugunari eta esaten ez dakigunari ireki.",
     "to": "FY",
     "marca": "m-razon-poetica"
    },
    {
     "t": "Ni neu eta nire zirkunstantzia naizela: norbere bizitzatik pentsatu behar da, Ortegak zioen bezala.",
     "to": "FY",
     "marca": "m-razon-vital"
    },
    {
     "t": "Politikak erabakitzen dituela gure bizitzak: konprometitu egin behar da.",
     "to": "FU",
     "marca": "m-compromiso"
    }
   ],
   "temas": [
    "hf-existencialismo"
   ],
   "autores": [
    {
     "id": "zambrano"
    },
    {
     "id": "ortega"
    }
   ]
  },
  "67": {
   "tipo": "vida",
   "red": 3,
   "linea": "l-igualdad",
   "xy": [
    23.8,
    3.4
   ],
   "titulo": "Olympe de Gouges",
   "texto": "Paris, 1791. Iraultzak gizonaren eta herritarraren eskubideak aldarrikatu ditu. Olympe de Gougesek Emakumearen eta Herritar Emakumearen Eskubideen Adierazpenarekin erantzuten du: «Emakumeak eskubidea du urkamendira igotzeko; tribunara igotzekoa ere izan behar du». 1793an gillotinatu egiten dute.",
   "pregunta": "Zer ondorioztatzen duzu?",
   "opciones": [
    {
     "t": "Arrazoi zuela: eskubideak pertsona guztienak dira, edo ez dira eskubideak.",
     "to": "FV",
     "marca": "m-universalidad"
    },
    {
     "t": "Legearen aurreko berdintasuna ez dela nahikoa desberdintasunak jarraitzen badu ekonomian eta etxean.",
     "to": "FS",
     "marca": "m-igualdad-real"
    },
    {
     "t": "Adierazpenek ez dutela balio eskubideak babesten dituzten erakunderik gabe.",
     "to": "FO",
     "marca": "m-instituciones"
    }
   ],
   "temas": [
    "hf-ilustracion",
    "hf-beauvoir"
   ],
   "autores": [
    {
     "id": "gouges"
    },
    {
     "id": "wollstonecraft"
    }
   ]
  },
  "68": {
   "tipo": "vida",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    30.2,
    12.2
   ],
   "titulo": "Byung-Chul Hanen lorategia",
   "texto": "Berlin, 2016 inguruan. Byung-Chul Hanek, nekearen gizarteaz hitz egiten duen filosofoak, hiru udaberri ematen ditu lorategi bat zaintzen: loreen izenak ikasten ditu, kimatu arte itxaroten du, eskuak zikintzen ditu. Lurraren laudorioa liburuan kontatzen du: lurrak pantailak ezagutzen ez duen denbora motel bat irakasten du.",
   "pregunta": "Zer iruditzen zaizu?",
   "opciones": [
    {
     "t": "Arrazoi duela: denbora motela, isiltasuna eta errealitatearekiko kontaktua berreskuratu behar dira.",
     "to": "FAB",
     "marca": "m-tiempo-lento"
    },
    {
     "t": "Pribilegio bat dela: ez dago edonoren esku deskonektatzea.",
     "to": "26",
     "marca": "m-privilegio"
    },
    {
     "t": "Gehiegikeria dela: teknologiak ere lotzen gaitu eta libreago egiten gaitu.",
     "to": "101",
     "marca": "m-tecno-libera"
    }
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "han"
    }
   ]
  },
  "69": {
   "tipo": "vida",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    28.4,
    8.6
   ],
   "titulo": "Baumanen erbestea",
   "texto": "Varsovia, 1968. Erregimen komunistaren kanpaina antisemita batean, Zygmunt Baumanek unibertsitateko katedra galtzen du eta Polonia utzi behar du. Gaztetan ere naziengandik ihes egin behar izan zuen. Leedsen amaitzen du, Ingalaterran, eta bere bizitza ematen du ezer sendoa ez den mundu bat pentsatzen: ez lanpostuak, ez loturak, ez nortasunak.",
   "pregunta": "Zer ikasten duzu harengandik?",
   "opciones": [
    {
     "t": "Mundu likido batean lotura sendoak behar direla: elkar zaintzea.",
     "to": "28",
     "marca": "m-vinculos"
    },
    {
     "t": "Merkatuarentzat baliagarria ez dena «giza hondakin» bihurtzen dela: sistema aldatu behar da.",
     "to": "FS",
     "marca": "m-residuo"
    },
    {
     "t": "Ezeren parte ez izatea ere askatasun modu bat dela.",
     "to": "27",
     "marca": "m-no-pertenecer"
    }
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "bauman"
    }
   ]
  },
  "70": {
   "tipo": "vida",
   "red": 4,
   "linea": "l-siglo21",
   "xy": [
    31.6,
    7.2
   ],
   "titulo": "Butler São Paulon",
   "texto": "São Paulo, 2017ko azaroa. Judith Butler demokraziari buruzko biltzar batera iristen da. Kalean, manifestari talde batek bere aurpegia duen panpina bat erretzen du, sorginez jantzita, «genero-ideologia» deitzen dutenaren aurka. Gero, artikulu batean, Butlerrek erantzuten du kontua dela pertsona guztiek indarkeriarik gabe bizi ahal izatea.",
   "pregunta": "Zer esaten dizu eszenak?",
   "opciones": [
    {
     "t": "Gorputzari buruzko arauak politikoak direla: eztabaidatu eta alda daitezke.",
     "to": "FV",
     "marca": "m-cuerpo-politico"
    },
    {
     "t": "Gaiak beldurra ematen duela intimoena ukitzen duelako: arrazoiekin eta errespetuz hitz egin behar da.",
     "to": "FW",
     "marca": "m-hablar-respeto"
    },
    {
     "t": "Denon gorputzak babestu behar direla, ahulenetatik hasita.",
     "to": "28",
     "marca": "m-vulnerables"
    }
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "butler"
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
  },
  "95": {
   "tipo": "contradiccion",
   "red": 3,
   "linea": "l-contradiccion",
   "xy": [
    21.4,
    5.8
   ],
   "titulo": "Kontraesana: ezerk ez du balio, baina aukeratzen duzu",
   "texto": "Ezerk ez duela merezi diozu, baina aukeratzen, eztabaidatzen eta gauzak nahi izaten jarraitzen duzu: aukera bakoitzarekin esaten duzu zerbaitek beste zerbaitek baino gehiago balio duela. Nietzschek nihilismo pasiboa deitzen zion jarrera horri, eta gainditu nahi zuen.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Nire balioak sortzen ditut.",
     "to": "FT"
    },
    {
     "t": "Zentzua bilatzen dut nire bizitzarekin egiten dudanean.",
     "to": "23"
    },
    {
     "t": "Horri eusten diot: ezerk ez du ezer balio.",
     "to": "FJ"
    }
   ],
   "choque": [
    "m-nada-vale",
    "m-todo-se-hunde",
    "m-valores-propios",
    "m-crear-valores",
    "m-autonomia",
    "m-imperativo"
   ],
   "temas": [
    "hf-posmodernidad"
   ],
   "autores": [
    {
     "id": "nietzsche"
    }
   ]
  },
  "96": {
   "tipo": "contradiccion",
   "red": 2,
   "linea": "l-contradiccion",
   "xy": [
    13,
    2.8
   ],
   "titulo": "Kontraesana: askatasuna ala subirano absolutua",
   "texto": "Askatasuna, eskubideak edo gizakiaren berezko ontasuna defendatzen dituzu eta, aldi berean, mugarik gabeko botere bat. Lockek hori leporatzen zion Hobbesi: subiranoak nahi duena egin badezake, zertatik babesten gaitu kontratuak? Azerietatik ihes egin eta lehoiaren gordelekuan babestea bezala litzateke.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Zuzentzen dut: boterea mugatuta egon behar da.",
     "to": "FO"
    },
    {
     "t": "Ordena askatasunaren aurretik doala diot.",
     "to": "FN"
    },
    {
     "t": "Herri osoa izan dadila subiranoa.",
     "to": "FP"
    }
   ],
   "choque": [
    "m-derechos-naturales",
    "m-bondad-natural",
    "m-refundar",
    "m-absolutismo",
    "m-autoridad",
    "m-limites",
    "m-tolerancia"
   ],
   "temas": [
    "hf-contrato"
   ],
   "autores": [
    {
     "id": "hobbes"
    },
    {
     "id": "locke"
    }
   ]
  },
  "97": {
   "tipo": "contradiccion",
   "red": 2,
   "linea": "l-contradiccion",
   "xy": [
    14.8,
    9.2
   ],
   "titulo": "Kontraesana: esperientzia eta beharrezkotasuna",
   "texto": "Dakizun guztia esperientziatik datorrela diozu, baina kausen beharrezkotasuna ikusten duzula ere bai. Humek adierazi zuen: esperientziak gauza bat bestearen ondoren datorrela bakarrik erakusten du, inoiz ez horrela etorri behar duela. Edo beharrezkotasuna ez dator esperientziatik, edo ez dugu ikusten.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Onartzen dut beharrezkotasuna ohiturak jartzen duela.",
     "to": "51"
    },
    {
     "t": "Onartzen dut ideia batzuk ez datozela esperientziatik.",
     "to": "13"
    },
    {
     "t": "Ziurtasunik gabe geratzen naiz: ezin dut ezer ziurrik jakin.",
     "to": "FD"
    }
   ],
   "choque": [
    "m-tabula-rasa",
    "m-causa-necesaria",
    "m-verdad-ciencia"
   ],
   "temas": [
    "hf-racionalismo"
   ],
   "autores": [
    {
     "id": "hume"
    },
    {
     "id": "locke"
    }
   ]
  },
  "98": {
   "tipo": "contradiccion",
   "red": 2,
   "linea": "l-contradiccion",
   "xy": [
    17.4,
    2.8
   ],
   "titulo": "Kontraesana: gehiengoa ala eskubideak",
   "texto": "Eskubideez, askatasunaz edo tolerantziaz hitz egiten duzu eta, aldi berean, edonor sakrifikatzea onartzen duzu gehiengoak irabazten badu. Millek bateratzen saiatu zen Askatasunari buruz lanean: norbaiten askatasuna mugatu daiteke bakarrik besteei kalte egin ez diezaien.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Millen printzipioa onartzen dut: askatasuna, besteei kalte egiten ez badie.",
     "to": "FQ"
    },
    {
     "t": "Eskubideak edozein kalkuluren aurretik jartzen ditut.",
     "to": "FO"
    },
    {
     "t": "Zoriontasun-batura bakarrik dela kontuan hartzekoa diot.",
     "to": "FQ"
    }
   ],
   "choque": [
    "m-sacrificio",
    "m-mayor-numero",
    "m-derechos-naturales",
    "m-poder-limitado",
    "m-tolerancia",
    "m-libertad-individual",
    "m-derechos"
   ],
   "temas": [
    "hf-utilitarismo"
   ],
   "autores": [
    {
     "id": "mill"
    }
   ]
  },
  "99": {
   "tipo": "contradiccion",
   "red": 3,
   "linea": "l-contradiccion",
   "xy": [
    20.4,
    7.2
   ],
   "titulo": "Kontraesana: berdintasuna ala jabetza",
   "texto": "Esplotazioa salatzen duzu eta, aldi berean, jabetza eta merkatua ukiezinak direla defendatzen duzu; edo dena eraldatu nahi duzu inork ezer galdu gabe. Marxek eta Lockek ezin dute aldi berean arrazoia izan jabetzari buruz.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Berdintasuna doa lehenengo.",
     "to": "FS"
    },
    {
     "t": "Askatasuna doa lehenengo.",
     "to": "FO"
    },
    {
     "t": "Mundu guztiak onar dezakeen banaketa bat bilatzen dut.",
     "to": "FX"
    }
   ],
   "choque": [
    "m-explotacion",
    "m-transformar",
    "m-libertad-primero",
    "m-mercado",
    "m-derechos-naturales",
    "m-poder-limitado",
    "m-libertad-individual",
    "m-poder-economico"
   ],
   "temas": [
    "hf-capitalismo"
   ],
   "autores": [
    {
     "id": "marx"
    },
    {
     "id": "locke"
    },
    {
     "id": "rawls"
    }
   ]
  },
  "100": {
   "tipo": "contradiccion",
   "red": 3,
   "linea": "l-contradiccion",
   "xy": [
    25,
    2.8
   ],
   "titulo": "Kontraesana: askatasuna ala patua",
   "texto": "Libreak garela defendatu duzu, eskubideak denonak direla edo bakoitzak bere burua egiten duela; eta orain, sexuak patu bat markatzen duela, edo desberdintasunik ez dagoela jada. Beauvoirrek galdetuko luke: libreak denok, ala batzuk bakarrik?",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Zuzentzen dut: inor ez da patu idatzi batekin jaiotzen.",
     "to": "FV"
    },
    {
     "t": "Onartzen dut libreak garela, biologiak ere badu bere eragina.",
     "to": "FU"
    },
    {
     "t": "Horri eusten diot: sexu bakoitzak bere patu naturala du.",
     "to": "FK"
    }
   ],
   "choque": [
    "m-naturaleza-sexo",
    "m-resuelto",
    "m-condenado-libre",
    "m-autonomia",
    "m-derechos-todas",
    "m-libertad-otros",
    "m-actos",
    "m-derechos-naturales"
   ],
   "temas": [
    "hf-beauvoir",
    "hf-existencialismo"
   ],
   "autores": [
    {
     "id": "beauvoir"
    }
   ]
  },
  "101": {
   "tipo": "contradiccion",
   "red": 4,
   "linea": "l-contradiccion",
   "xy": [
    29.2,
    10.8
   ],
   "titulo": "Kontraesana: askatasun konektatua",
   "texto": "Teknologia neutrala dela edo libre egiten zaituela diozu, baina baita ezin duzula mugikorra utzi edo plataformek harrapatzen zaituztela ere. Tresna batek erabakitzen badu zenbat denbora ematen duzun hura erabiltzen, tresna bat besterik ez al da?",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Onartzen dut ez dela neutrala: ni ere aldatzen nau.",
     "to": "26"
    },
    {
     "t": "Denbora batez deskonektatzen dut egiaztatzeko.",
     "to": "FAB"
    },
    {
     "t": "Tresna bat besterik ez dela diot, eta gainerakoa ere konponduko duela uste dut.",
     "to": "28"
    }
   ],
   "choque": [
    "m-tecnologia-neutra",
    "m-tecno-libera",
    "m-autoexplotacion",
    "m-plataformas",
    "m-cansancio"
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "han"
    }
   ]
  },
  "102": {
   "tipo": "contradiccion",
   "red": 4,
   "linea": "l-contradiccion",
   "xy": [
    30.8,
    4.8
   ],
   "titulo": "Kontraesana: mugarik gabe hazi",
   "texto": "Planeta zaindu nahi duzu eta, aldi berean, ekonomiak amaierarik gabe haztea edo teknikak dena konpontzea, gure bizitzan ezer aldatu gabe. Baina baliabide mugatuak dituen planeta batean ezin da betiko hazi.",
   "pregunta": "Nola irteten zara hemendik?",
   "opciones": [
    {
     "t": "Onartzen dut mugak daudela: soberan dagoenean hazteari utzi behar zaio.",
     "to": "FZ"
    },
    {
     "t": "Merkatuak eta teknikak konponduko dutela diot.",
     "to": "FO"
    },
    {
     "t": "Galdetzen diot neure buruari zer behar duen benetan jendeak ondo bizitzeko.",
     "to": "29"
    }
   ],
   "choque": [
    "m-tecno-solucion",
    "m-tecnologia-neutra",
    "m-consumidores",
    "m-vinculos",
    "m-vulnerables",
    "m-generaciones",
    "m-cuidar-vida"
   ],
   "temas": [
    "hf-siglo21"
   ],
   "autores": [
    {
     "id": "herrero"
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
  },
  "L": {
   "xy": [
    12.8,
    0.9
   ],
   "titulo": "Enpirista",
   "texto": "Dakizun guztia esperientziatik dator, eta esperientziak ez du ziurtasun absoluturik ematen: kausalitatea ohitura bat da, eta nia, pertzepzio-sorta bat. Lockek hasi zuen bidea; Humek azkeneraino eraman zuen.",
   "abierto": "Zientzia ohituran oinarritzen bada, zergatik funtzionatzen du hain ondo?",
   "reflexion": "Eman al diezaguke esperientziak ezagutza ziurra?",
   "autores": [
    {
     "id": "locke"
    },
    {
     "id": "hume"
    }
   ],
   "temas": [
    "hf-racionalismo"
   ]
  },
  "M": {
   "xy": [
    13.8,
    0.9
   ],
   "titulo": "Jainkoa edo Natura",
   "texto": "Zuretzat dena errealitate bakarra da —Jainkoa edo Natura— eta dena beharrez gertatzen da. Spinozak bezala, uste duzu librea izatea ez dela nahi duzuna egitea, gauzak zergatik gertatzen diren ulertzea baizik.",
   "abierto": "Dena beharrezkoa bada, zentzurik al du saritzeak edo zigortzeak?",
   "reflexion": "Libreak gara, ala dena dago aurrez zehaztuta?",
   "autores": [
    {
     "id": "spinoza"
    }
   ],
   "temas": [
    "hf-metafisica"
   ]
  },
  "N": {
   "xy": [
    14.8,
    0.9
   ],
   "titulo": "Leviatana",
   "texto": "Botere indartsurik gabe, bizitza denen aurkako denen gerra izango litzateke. Nahiago duzu zure askatasuna subirano bati utzi segurtasunaren truke. Hobbesek beldurrari emandako erantzuna da, eta badu Makiaveloren errealismotik zerbait.",
   "abierto": "Nork babesten gaitu subiranotik?",
   "reflexion": "Justifikatuta al dago askatasunari uko egitea segurtasunaren truke?",
   "autores": [
    {
     "id": "hobbes"
    },
    {
     "id": "maquiavelo"
    }
   ],
   "temas": [
    "hf-contrato"
   ]
  },
  "O": {
   "xy": [
    15.8,
    0.9
   ],
   "titulo": "Liberala",
   "texto": "Uste duzu Estatua baino lehenagoko eskubideak ditugula —bizitza, askatasuna, jabetza— eta boterea mugatuta eta banatuta egon behar dela horiek babesteko. Locken linea da eta, XIX. mendean, Millena.",
   "abierto": "Zer gertatzen da beren eskubideak baliarazteko jabetzarik edo boterik ez dutenekin?",
   "reflexion": "Zein izan behar dira Estatuaren boterearen mugak?",
   "autores": [
    {
     "id": "locke"
    },
    {
     "id": "mill"
    }
   ],
   "temas": [
    "hf-contrato",
    "hf-utilitarismo"
   ]
  },
  "P": {
   "xy": [
    16.8,
    0.9
   ],
   "titulo": "Borondate orokorra",
   "texto": "Zuretzat boterea herriarena da: lege bat borondate orokorra adierazten badu bakarrik da legitimoa. Rousseauk bezala, uste duzu gizarteak usteldu dezakeela, baina kontratu on batek hiritar libre egiten gaituela ere bai.",
   "abierto": "Zer gertatzen da borondate orokorrarekin ados ez dagoen gutxiengoarekin?",
   "reflexion": "Zerk egiten du legitimo lege bat?",
   "autores": [
    {
     "id": "rousseau"
    }
   ],
   "temas": [
    "hf-contrato"
   ]
  },
  "Q": {
   "xy": [
    17.8,
    0.9
   ],
   "titulo": "Utilitarista",
   "texto": "Ekintzak beren ondorioen arabera epaitzen dituzu: zuzena da gehiengoarentzat zoriontasun handiena sortzen duena. Millek bezala, goi- eta behe-mailako plazerrak bereizten dituzu, eta muga bat jartzen duzu: besteei kalterik ez egitea.",
   "abierto": "Pertsona bat sakrifika al daiteke horrela asko salbatzen badira?",
   "reflexion": "Ondorioen arabera bakarrik epaitu behar al dira ekintzak?",
   "autores": [
    {
     "id": "bentham"
    },
    {
     "id": "mill"
    }
   ],
   "temas": [
    "hf-utilitarismo"
   ]
  },
  "R": {
   "xy": [
    19.2,
    0.9
   ],
   "titulo": "Autonomia",
   "texto": "Uste duzu morala ez dagoela ondorioen mende, ezta nahi duzunaren mende ere, baizik eta guztientzat balio dezakeen arau baten arabera jokatzean, eta pertsonak beti helburutzat tratatzean, eta inoiz ez bitarteko soiltzat. Kanten inperatibo kategorikoa da.",
   "abierto": "Eta arau unibertsal bat betetzeak kalte egiten badu kasu zehatz batean, adibidez norbaiti kalte egiteko bila dabilenari gezurrik ez esateak?",
   "reflexion": "Gure betebeharra bete behar al dugu ondorioak txarrak badira ere?",
   "autores": [
    {
     "id": "kant"
    }
   ],
   "temas": [
    "hf-kant",
    "hf-etica-deber"
   ]
  },
  "S": {
   "xy": [
    20.2,
    0.9
   ],
   "titulo": "Emantzipazioa",
   "texto": "Zuretzat filosofiak ez du nahikoa mundua ulertzearekin: aldatu egin behar da. Desberdintasuna ez da naturala, lana eta jabetza antolatzeko moduaren ondorioa baizik, eta gainditu daiteke. Marxen linea da eta, XX. mendean, Frankfurteko Eskolarena.",
   "abierto": "Nola eraldatzen da gizartea eraldaketa zapalkuntza berri batean amaitu gabe?",
   "reflexion": "Posible al da desberdintasunik gabeko gizarte bat?",
   "autores": [
    {
     "id": "marx"
    },
    {
     "id": "adorno"
    }
   ],
   "temas": [
    "hf-capitalismo",
    "hf-sospecha"
   ]
  },
  "T": {
   "xy": [
    21.2,
    0.9
   ],
   "titulo": "Balioak sortu",
   "texto": "Oinarri absoluturik gabe, ez zara hondoratzen: zure balioak sortzea eta bizitza osoari baietz esatea erabakitzen duzu, minari ere bai. Nietzschek gaingizakiaren irudiarekin planteatu zuen erronka da.",
   "abierto": "Bakoitzak bere balioak sortzen baditu, zer irizpiderekin kritika ditzakegu besteren balioak?",
   "reflexion": "Ba al dago balio unibertsalik, ala pertsona bakoitzak sortzen ditu?",
   "autores": [
    {
     "id": "nietzsche"
    }
   ],
   "temas": [
    "hf-posmodernidad",
    "hf-sospecha"
   ]
  },
  "U": {
   "xy": [
    22.2,
    0.9
   ],
   "titulo": "Existentzialista",
   "texto": "Zuretzat existentzia esentziaren aurretik dago: ez zara izaera finko batekin jaiotzen, aukeratzen duzunarekin egiten zara, eta horren erantzule zara. Sartreren, Camusen eta Beauvoirren linea da.",
   "abierto": "Guztiz libreak bagara, zenbateko eragina dute gizarte-klaseak, hezkuntzak edo gorputzak garen horretan?",
   "reflexion": "Egiten duguna al gara?",
   "autores": [
    {
     "id": "sartre"
    },
    {
     "id": "camus"
    },
    {
     "id": "beauvoir"
    }
   ],
   "temas": [
    "hf-existencialismo"
   ]
  },
  "V": {
   "xy": [
    23.2,
    0.9
   ],
   "titulo": "Feminista",
   "texto": "Uste duzu emakumeen eta gizonen arteko desberdintasuna ez dela naturala, eraikia baizik, eta eskubideak pertsona guztienak direla edo ez direla eskubideak. Olympe de Gouges eta Mary Wollstonecraftengandik Simone de Beauvoirrenganaino doan linea da.",
   "abierto": "Nahikoa al da legeetako berdintasunarekin, ala eguneroko bizitza ere aldatu behar da?",
   "reflexion": "Generoa eraikuntza soziala al da?",
   "autores": [
    {
     "id": "beauvoir"
    },
    {
     "id": "wollstonecraft"
    },
    {
     "id": "gouges"
    }
   ],
   "temas": [
    "hf-beauvoir"
   ]
  },
  "W": {
   "xy": [
    24.2,
    0.9
   ],
   "titulo": "Arrazoi dialogikoa",
   "texto": "Oinarri absoluturik gabe, konfiantza duzu guztion arteko elkarrizketak, hertsadurarik gabe eta arrazoiak emanez, arau komunetara eraman gaitzakeela. Habermasen proposamena da, dena balio duela diotenen aurrean.",
   "abierto": "Zer gertatzen da elkarrizketan berdintasunean parte hartu ezin dutenekin?",
   "reflexion": "Konpon ditzake elkarrizketak desadostasun moralak?",
   "autores": [
    {
     "id": "habermas"
    },
    {
     "id": "wittgenstein"
    }
   ],
   "temas": [
    "hf-posmodernidad",
    "hf-analitica"
   ]
  },
  "X": {
   "xy": [
    25.2,
    0.9
   ],
   "titulo": "Justizia ekitate gisa",
   "texto": "Uste duzu gizarte justua dela aukeratuko genukeena, bertan zein toki egokituko zitzaigun jakingo ez bagenu: askatasun berdinak guztientzat, eta desberdintasunak okerren daudenei mesede egiten badiete bakarrik. Rawlsen ezjakintasunaren beloa da.",
   "abierto": "Zenbat desberdintasun onar daiteke gizarte batek justua izaten jarraitzeko?",
   "reflexion": "Zerk egiten du justu gizarte bat?",
   "autores": [
    {
     "id": "rawls"
    }
   ],
   "temas": [
    "hf-capitalismo"
   ]
  },
  "Y": {
   "xy": [
    26.2,
    0.9
   ],
   "titulo": "Arrazoi bitala eta poetikoa",
   "texto": "Zuretzat pentsatzea norbere bizitzatik eta haren zirkunstantziatik pentsatzea da, sentimenduak eta esaten ez dakiguna mespretxatzen ez dituen arrazoi batekin. Ortega y Gassetena, María Zambranorena eta, bere erara, Unamunorena da filosofia hori.",
   "abierto": "Arrazoia sentimenduei irekitzen bazaie, nola saihesten dugu besterik gabe apetatzen zaiguna arrazoitzea?",
   "reflexion": "Uler dezake arrazoiak bizitza?",
   "autores": [
    {
     "id": "ortega"
    },
    {
     "id": "zambrano"
    },
    {
     "id": "unamuno"
    }
   ],
   "temas": [
    "hf-existencialismo"
   ]
  },
  "Z": {
   "xy": [
    27.2,
    0.9
   ],
   "titulo": "Bizitza erdigunean jarri",
   "texto": "Zuretzat ekonomiak bizitzaren zerbitzura egon behar du, eta ez alderantziz: naturaren eta beste pertsonen zaintzen mende gaude, eta bi gauza horiek ahazten dituen sistema bat bizitzaren aurkako gerran dago. Yayo Herreroren ekofeminismoa da.",
   "abierto": "Nola aldatzen da sistema oso bat inor atzean utzi gabe?",
   "reflexion": "Ba al dugu betebeharrik naturarekin eta etorkizuneko belaunaldiekin?",
   "autores": [
    {
     "id": "herrero"
    }
   ],
   "temas": [
    "hf-siglo21"
   ]
  },
  "AA": {
   "xy": [
    28.2,
    0.9
   ],
   "titulo": "Gaitasunak",
   "texto": "Uste duzu gizarte bat justua dela pertsona guztiei bizitza duin baterako gaitasunak bermatzen badizkie: osasuna, hezkuntza, maitasuna, arrazoimen praktikoa, jolasa, parte-hartzea. Herrialde baten aberastasuna ez da nahikoa hori jakiteko. Martha Nussbaumen ikuspegia da.",
   "abierto": "Nork erabakitzen du zein gaitasun diren oinarrizkoak kultura guztientzat?",
   "reflexion": "Zer behar du pertsona batek bizitza duin bat izateko?",
   "autores": [
    {
     "id": "nussbaum"
    }
   ],
   "temas": [
    "hf-siglo21"
   ]
  },
  "AB": {
   "xy": [
    29.2,
    0.9
   ],
   "titulo": "Denbora motela",
   "texto": "Konturatzen zara inork ez zaituela zuk zeuk bezainbeste esplotatzen, beti gehiago errenditu dezakezula uste duzunean. Denbora motela, isiltasuna eta errealitatearekiko kontaktua berreskuratzea aukeratzen duzu. Byung-Chul Hanek nekearen gizarteari egiten dion kritika da.",
   "abierto": "Deskonekta al daiteke mundutik kanpo geratu gabe?",
   "reflexion": "Libreago egiten al gaitu teknologiak?",
   "autores": [
    {
     "id": "han"
    }
   ],
   "temas": [
    "hf-siglo21"
   ]
  }
 }
};
