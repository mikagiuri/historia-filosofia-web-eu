// Datos del juego «Eudaimonía» (Aristóteles) — rediseño 25-09-2026 sobre la idea original del material de
// gamificación del Gabriel Aresti BHI (BATX 2). Arte de cartas en media/juegos/aristoteles/.
// Modelo (números ocultos durante la partida; se revelan al final):
//   sal = salud 🏋️ · hac = hacienda 💰 · car = carácter 🧠 · rep = reputación 🏛️ · ene = enemigos ⚔️ · phr = prudencia 🧭
//   Salud o hacienda a 0 → eliminado (muerte / ruina). Enemigos altos → tirada de peligro cada ronda
//   (juicio, ostracismo, atentado), igual para el incorruptible que para el ambicioso.
//   Eudaimonía final = 2·carácter + prudencia + salud (máx. 8) + hacienda (máx. 8) + reputación (máx. 6).
// Opciones: efectos numéricos, tags (activan los rasgos del personaje), risk (dado con win/lose; la prudencia
// ayuda; pBase cambia la probabilidad base), muerte (probabilidad de morir en el acto), set (marca que desencadena
// un dilema posterior), r (resultado). Equilibrado con tools/sim_eudaimonia.js: revisar tras tocar números.
// Dilemas: etapa j/m/v (juventud, madurez, vejez), orient (solo esas orientaciones), req (necesita una marca),
// cond (mínimos de estadística para que salga), urgente (sale en la ronda siguiente, aunque alargue la partida),
// hist (nota histórica que se muestra tras decidir). Etapas: paso = rentas y desgaste al entrar en la etapa.
const JUEGO_ARIS = {
  meta: { imgBase: "media/juegos/aristoteles/", etapas: [
    { id:"j", label:"Juventud", rondas:3 },
    { id:"m", label:"Madurez", rondas:6, paso:{ hac:3, t:"Pasan los años: tus tierras y tu trabajo rinden." } },
    { id:"v", label:"Vejez", rondas:3, paso:{ hac:1, sal:-1, t:"Llega la vejez: rentas ahorradas, pero el cuerpo se resiente." } } ] },
  stats: [
    { k:"sal", em:"🏋️", label:"Salud",      niveles:[[2,"al límite"],[4,"frágil"],[7,"buena"],[99,"robusta"]] },
    { k:"hac", em:"💰", label:"Hacienda",   niveles:[[2,"al borde de la ruina"],[4,"escasa"],[7,"holgada"],[99,"rica"]] },
    { k:"car", em:"🧠", label:"Carácter",   niveles:[[2,"degradado"],[4,"vacilante"],[7,"firme"],[99,"ejemplar"]] },
    { k:"rep", em:"🏛️", label:"Reputación", niveles:[[2,"despreciada"],[4,"discreta"],[7,"respetada"],[99,"famosa"]] },
    { k:"ene", em:"⚔️", label:"Enemigos",   niveles:[[1,"ninguno"],[3,"algunos"],[5,"muchos"],[7,"poderosos"],[99,"te quieren muerto"]] },
    { k:"phr", em:"🧭", label:"Prudencia",  niveles:[[3,"impulsiva"],[6,"sensata"],[99,"muy prudente"]] }
  ],
  chars: [
    { id:"socrates", name:"Sócrates", orient:"Contemplativa", sal:8, hac:4, car:8, rep:4, ene:2, phr:8,
      virtud:"Pobreza voluntaria", virtudT:"El dinero le importa poco: pierde la mitad de lo normal cuando le cuesta dinero.",
      debilidad:"Incomprendido", debilidadT:"Cada verdad dicha en público le gana más enemigos que a los demás.",
      mods:{ verdad:{ ene:1 } }, mult:{ hac:{ down:0.5 } },
      perfil:"Pobre, sano como un soldado y muy prudente; la ciudad lo conoce más por molesto que por sabio.", frase:"Solo sé que no sé nada.",
      destino:"Condenado a beber cicuta en 399 a. C., acusado de impiedad y de corromper a los jóvenes; rechazó huir de la cárcel." },
    { id:"hipatia", name:"Hipatia", orient:"Contemplativa", sal:6, hac:6, car:8, rep:7, ene:2, phr:7,
      virtud:"Prestigio", virtudT:"Sus alumnos la respetan: gana reputación con más facilidad.",
      debilidad:"Desconfianza social", debilidadT:"Todo lo que hace a la vista de todos le gana enemigos.",
      mods:{ publico:{ ene:1 } }, mult:{ rep:{ up:1.5 } },
      perfil:"Maestra respetada de una familia acomodada; su fama la protege… y la expone.", frase:"El conocimiento es mi fuerza.",
      destino:"Asesinada en 415 por una turba de cristianos en Alejandría, en pleno enfrentamiento entre el obispo Cirilo y el prefecto Orestes." },
    { id:"platon", name:"Platón", orient:"Contemplativa", sal:7, hac:8, car:7, rep:6, ene:1, phr:7,
      virtud:"Idealismo", virtudT:"Actuar con justicia le fortalece el carácter más que a otros.",
      debilidad:"Rigidez", debilidadT:"Los pactos y componendas le desgastan el carácter.",
      mods:{ justo:{ car:1 }, pacto:{ car:-1 } },
      perfil:"Aristócrata rico y bien relacionado, con pocos enemigos y un proyecto: que gobiernen los sabios.", frase:"Que gobierne quien ama la sabiduría.",
      destino:"Viajó tres veces a Siracusa para educar a sus tiranos y, según la tradición, en uno de esos viajes lo vendieron como esclavo. Murió anciano en Atenas, al frente de la Academia." },
    { id:"protagoras", name:"Protágoras", orient:"Discursiva", sal:6, hac:8, car:6, rep:8, ene:2, phr:6, sinImg:true,
      virtud:"Maestro de retórica", virtudT:"Cobra caro por enseñar: todo lo que hace a la vista de todos le da dinero.",
      debilidad:"Agnóstico", debilidadT:"Lo que dice de los dioses escandaliza: cada verdad incómoda le gana más enemigos.",
      mods:{ publico:{ hac:1 }, verdad:{ ene:1 } },
      perfil:"El sofista más famoso y mejor pagado de Grecia; amigo de Pericles y sospechoso para los devotos.", frase:"El hombre es la medida de todas las cosas.",
      destino:"Pericles le encargó las leyes de la colonia de Turios. Según la tradición, lo acusaron de impiedad por su libro Sobre los dioses, quemaron sus libros en el ágora y murió en un naufragio al huir de Atenas." },
    { id:"diogenes", name:"Diógenes", orient:"Contemplativa", sal:8, hac:2, car:7, rep:4, ene:2, phr:6, sinImg:true, noRuina:true,
      virtud:"Autarquía", virtudT:"No necesita casi nada: quedarse sin dinero no lo elimina, y lo pierde a la mitad que los demás.",
      debilidad:"Desvergüenza (anaídeia)", debilidadT:"Se burla de todos: cada verdad dicha en público le gana enemigos y le quita reputación.",
      mods:{ verdad:{ ene:1, rep:-1 } }, mult:{ hac:{ down:0.5 } },
      perfil:"Vive en una tinaja, pide limosna y se ríe de las convenciones. Es sano y libre, y casi no tiene nada que perder.", frase:"Apártate, que me quitas el sol.",
      destino:"Vivió en Atenas y en Corinto, pobre por elección y burlándose de las convenciones. Murió muy anciano en Corinto hacia 323 a. C.; según la tradición, el mismo año que Alejandro." },
    { id:"aspasia", name:"Aspasia", orient:"Discursiva", sal:6, hac:6, car:6, rep:5, ene:2, phr:6,
      virtud:"Elocuencia", virtudT:"Sus discursos convencen: gana reputación con más facilidad.",
      debilidad:"Dependencia", debilidadT:"Extranjera y mujer, depende de protectores: cuando pierde reputación, pierde el doble.",
      mult:{ rep:{ up:1.5, down:2 } },
      perfil:"Extranjera culta y elocuente en una ciudad que no deja votar a las mujeres; su posición depende de otros.", frase:"Las palabras también tienen poder.",
      destino:"Compañera de Pericles. Según Plutarco, la acusaron de impiedad y Pericles lloró ante el jurado para salvarla." },
    { id:"aristofanes", name:"Aristófanes", orient:"Discursiva", sal:6, hac:6, car:5, rep:6, ene:2, phr:5,
      virtud:"Ingenio y sátira", virtudT:"Decir verdades en público le da fama…",
      debilidad:"Mordacidad", debilidadT:"…y también enemigos.",
      mods:{ verdad:{ rep:1, ene:1 } },
      perfil:"Comediógrafo de éxito, ni rico ni pobre, con una lengua que la ciudad aplaude y los poderosos temen.", frase:"La risa también dice la verdad.",
      destino:"Cleón lo denunció por ridiculizar a Atenas ante los extranjeros; siguió escribiendo comedias hasta la vejez." },
    { id:"pericles", name:"Pericles", orient:"Política", sal:7, hac:8, car:6, rep:9, ene:4, phr:7, sinImg:true, riesgo:0.1,
      virtud:"Prudencia política", virtudT:"Aristóteles lo pone como ejemplo de hombre prudente: sus decisiones arriesgadas salen bien más a menudo.",
      debilidad:"Blanco de sus rivales", debilidadT:"Como no pueden con él, atacan a los suyos: todo lo que hace en público le gana enemigos.",
      mods:{ publico:{ ene:1 } },
      perfil:"Aristócrata rico, elegido general año tras año; el político más poderoso de Atenas, rodeado de amigos… y de acusaciones contra ellos.", frase:"Amamos la belleza con sencillez y el saber sin blandura.",
      destino:"Dirigió Atenas durante unos treinta años, que se conocen como el «siglo de Pericles». Sus rivales acusaron a Fidias, a Anaxágoras y a Aspasia. Murió en 429 a. C. de la peste, al comienzo de la guerra del Peloponeso." },
    { id:"aristides", name:"Arístides", orient:"Política", sal:7, hac:6, car:9, rep:7, ene:3, phr:6, sinImg:true, ostracismo:0.7,
      virtud:"El Justo", virtudT:"Actuar con justicia le da fama, y actuar injustamente le pesa más que a nadie.",
      debilidad:"Justicia sin concesiones", debilidadT:"Cada acto justo le gana enemigos, y la ciudad se cansa de oír llamarlo «el Justo»: si tiene mucha fama, el ostracismo le amenaza el doble.",
      mods:{ justo:{ rep:1, ene:1 }, injusto:{ car:-1 } },
      perfil:"Aristócrata de fortuna modesta y general en Maratón. Toda Atenas lo llama «el Justo», y a algunos eso ya les molesta.", frase:"Nada sería más provechoso… ni más injusto.",
      destino:"Condenado al ostracismo en 482 a. C. Según Plutarco, un campesino que no sabía escribir le pidió que grabara él mismo «Arístides» en el óstrakon, porque estaba harto de oír llamarlo «el Justo». Volvió en 480 para luchar en Salamina y Platea, fijó con equidad el tributo de la Liga de Delos y murió tan pobre que la ciudad dotó a sus hijas." },
    { id:"alcibiades", name:"Alcibíades", orient:"Política", sal:8, hac:9, car:4, rep:8, ene:3, phr:3,
      virtud:"Carisma y audacia", virtudT:"Gana reputación con más facilidad que nadie.",
      debilidad:"Hedonismo", debilidadT:"Los placeres le dañan más el carácter y la salud.",
      mods:{ placer:{ car:-1, sal:-1 } }, mult:{ rep:{ up:1.5 } },
      perfil:"Joven, rico, guapo y famoso; poco prudente y rodeado de envidias.", frase:"Mi brillo guiará a los demás.",
      destino:"Acusado de sacrilegio, se pasó a Esparta, luego a Persia y volvió a Atenas; murió asesinado en Frigia en 404 a. C." },
    { id:"cleon", name:"Cleón", orient:"Política", sal:6, hac:7, car:3, rep:7, ene:3, phr:3,
      virtud:"Oratoria popular", virtudT:"Cuando gana reputación, gana el doble…",
      debilidad:"Demagogia", debilidadT:"…y cuando la pierde, también pierde el doble.",
      mult:{ rep:{ up:2, down:2 } },
      perfil:"Comerciante enriquecido que manda en la asamblea a gritos; poco carácter y mucha ambición.", frase:"El pueblo quiere firmeza.",
      destino:"Murió en 422 a. C. en la batalla de Anfípolis, al frente del ejército ateniense." },
    { id:"critias", name:"Critias", orient:"Política", sal:6, hac:8, car:3, rep:5, ene:3, phr:4,
      virtud:"Astucia política", virtudT:"Imponerse por la fuerza le rinde más dinero…",
      debilidad:"Tiranía", debilidadT:"…pero le crea más enemigos.",
      mods:{ fuerza:{ hac:1, ene:1 } },
      perfil:"Aristócrata rico, culto y resentido con la democracia.", frase:"El orden se impone.",
      destino:"Jefe de los Treinta Tiranos en 404 a. C.; murió al año siguiente luchando contra los demócratas en Muniquia." },
    { id:"trasimaco", name:"Trasímaco", orient:"Política", sal:6, hac:7, car:4, rep:5, ene:2, phr:3,
      virtud:"Astucia", virtudT:"Gana dinero con facilidad cuando juega sucio…",
      debilidad:"Cinismo moral", debilidadT:"…pero, como no cree en la justicia, actuar bien le fortalece la mitad.",
      mods:{ injusto:{ hac:1 } }, mult:{ car:{ up:0.5 } },
      perfil:"Sofista de éxito que cobra caro; piensa que la justicia es lo que conviene al más fuerte.", frase:"La justicia sirve al poderoso.",
      destino:"Sofista de Calcedonia conocido sobre todo por la República de Platón; apenas sabemos cómo terminó su vida." },
    { id:"alejandro", name:"Alejandro Magno", orient:"Política", sal:9, hac:10, car:4, rep:8, ene:4, phr:4,
      virtud:"Ambición y mando", virtudT:"Imponerse por la fuerza le da fama.",
      debilidad:"Desmesura", debilidadT:"No es capaz de elegir las opciones de término medio en las que otros se refugian.",
      mods:{ fuerza:{ rep:1 } }, bloquea:["medida"],
      perfil:"Heredero de un reino, riquísimo, fuerte y famoso, con enemigos desde la cuna.", frase:"El mundo no basta.",
      destino:"Conquistó un imperio hasta la India y murió en Babilonia en 323 a. C., con 32 años." }
  ],

  dilemmas: [
    /* ===================== JUVENTUD ===================== */
    { id:"efebo", etapa:"j", virtue:"Valor (andreía)", sit:"Tienes dieciocho años y empiezas tu servicio como efebo: dos años de guardia en las fronteras del Ática.", opts:[
      { t:"Entrenar a fondo y hacer amigos en la guarnición.", sal:2, rep:1, tags:["medida"], r:"Vuelves fuerte y con amigos que te defenderán." },
      { t:"Conseguir un destino cómodo gracias a los contactos de tu familia.", rep:-1, car:-1, hac:1, r:"Te ahorras frío y marchas, pero los demás lo saben." },
      { t:"Demostrar tu valor buscando peleas con los pastores de la frontera.", sal:-2, rep:1, ene:1, car:-1, tags:["fuerza"], r:"Ganas fama de bravo… y alguna cicatriz innecesaria." },
      { t:"Aprovechar las guardias nocturnas para leer y discutir con otros efebos.", phr:2, car:1, sal:-1, r:"Duermes poco, pero aprendes a pensar antes de actuar." } ] },
    { id:"maestro", etapa:"j", virtue:"Prudencia (phrónesis)", sit:"Quieres formarte. En el ágora, un sofista cobra caro por enseñarte a ganar pleitos; un filósofo no cobra, pero hace preguntas que incomodan a los poderosos.",
      hist:"Protágoras llegó a cobrar 100 minas por un curso; Sócrates presumía de no cobrar nunca.", opts:[
      { t:"Pagar al sofista: la retórica abre todas las puertas.", hac:-3, rep:2, phr:1, r:"Aprendes a convencer a cualquiera. Tu bolsa lo nota." },
      { t:"Seguir al filósofo, aunque te vean con alguien mal visto.", car:1, phr:2, ene:1, tags:["verdad"], r:"Aprendes a examinarte a ti mismo; algunos padres ya no quieren que sus hijos te traten." },
      { t:"Ni uno ni otro: aprender el oficio de tu familia.", hac:2, phr:1, rep:-1, r:"Ganas dinero y oficio, pero en el ágora nadie sabe quién eres." },
      { t:"Los dos a la vez, trabajando de día para pagar al sofista.", hac:-2, sal:-2, phr:2, rep:1, r:"Lo aprendes todo… y acabas agotado." } ] },
    { id:"simposio", etapa:"j", virtue:"Templanza (sophrosýne)", sit:"En un simposio en casa de un rico, el vino corre sin mezclar con agua y te retan a beber hasta el amanecer.",
      hist:"Los griegos consideraban bárbaro beber el vino sin mezclar; en el Banquete de Platón, Sócrates bebe toda la noche sin emborracharse.", opts:[
      { t:"Aceptar el reto y ganarlo.", sal:-2, rep:2, car:-1, tags:["placer"], r:"Eres la leyenda de la noche; tu hígado no opina lo mismo." },
      { t:"Beber poco y quedarte a la conversación.", car:1, phr:1, tags:["medida"], r:"Sales con la cabeza clara y dos amigos nuevos." },
      { t:"Irte diciendo en voz alta lo que piensas de esas fiestas.", rep:-2, ene:1, car:-1, r:"Aristóteles también llamaría vicio a esa insensibilidad: te toman por un amargado." },
      { t:"Pedir ser el simposiarca y marcar tú cuánto se mezcla el vino.", phr:1, risk:true, win:{ rep:2, car:1, r:"Diriges la noche con gracia: todos quieren volver a invitarte." }, lose:{ rep:-2, r:"Te toman por un pedante y te abuchean." } } ] },
    { id:"herencia", etapa:"j", virtue:"Generosidad (eleutheriótes)", sit:"Muere tu padre. Te deja unos olivares en el Ática y deudas con varios vecinos.", opts:[
      { t:"Pagar primero todas las deudas, aunque te quedes con poco.", hac:-2, car:2, rep:1, tags:["justo"], r:"Quedas corto de dinero, pero con palabra." },
      { t:"Vender los olivares y vivir de rentas en la ciudad.", hac:1, rep:1, phr:-1, r:"Vida cómoda en la ciudad; los acreedores tendrán que esperar." },
      { t:"Pedir más préstamos para comprar un barco mercante.", risk:true, win:{ hac:5, r:"El barco vuelve cargado de trigo del mar Negro." }, lose:{ hac:-4, r:"El barco se hunde frente a Eubea con toda la carga." } },
      { t:"No pagar a los vecinos más pobres: no pueden pleitear contra ti.", hac:2, car:-3, ene:2, tags:["injusto"], r:"Ganas unas dracmas y pierdes a tus vecinos." } ] },
    { id:"aval", etapa:"j", virtue:"Amistad (philía)", sit:"Un amigo de la infancia te pide que avales un préstamo enorme para su negocio naval.", opts:[
      { t:"Avalarlo entero: los amigos lo tienen todo en común.", car:1, risk:true, win:{ rep:1, hac:1, r:"El negocio sale bien y tu amigo te lo agradece toda la vida." }, lose:{ hac:-5, r:"El negocio quiebra y el acreedor viene a por ti." } },
      { t:"Negarte: la amistad no debe mezclarse con el dinero.", car:-1, rep:-1, r:"Tu amigo lo entiende… a medias." },
      { t:"Prestarle solo lo que puedas perder sin arruinarte.", hac:-2, car:1, phr:1, tags:["medida"], r:"No lo salva del todo, pero no le fallas." },
      { t:"Avalarlo a cambio de quedarte con la mitad del negocio.", car:-1, risk:true, win:{ hac:3, r:"Buen negocio… aunque la amistad ya no es la misma." }, lose:{ hac:-4, r:"Quiebra, y encima tu amigo te guarda rencor." } } ] },
    { id:"delion", etapa:"j", virtue:"Valor (andreía)", sit:"Primera batalla como hoplita. La falange empieza a ceder y el hombre que tenías a la izquierda cae herido.",
      hist:"En la batalla de Delión (424 a. C.), según cuenta Alcibíades en el Banquete, Sócrates se retiró sin perder la calma y cubrió a sus compañeros.", opts:[
      { t:"Tirar el escudo y correr.", rep:-3, car:-2, r:"Salvas la vida, pero en Atenas no hay mayor deshonra que perder el escudo." },
      { t:"Cargar tú solo contra el enemigo.", tags:["fuerza"], muerte:0.12, muerteT:"Caes atravesado por una lanza tebana.", risk:true, win:{ rep:3, car:1, r:"Rompes la línea enemiga y todos cantan tu nombre." }, lose:{ sal:-4, r:"Te cercan; sales vivo de milagro." } },
      { t:"Retirarte con orden, cubriendo al herido.", sal:-1, car:2, rep:1, tags:["medida"], r:"Llevas al herido a salvo. Así, y no de otra forma, se es valiente." },
      { t:"Quedarte quieto con el escudo en alto, esperando órdenes que no llegan.", sal:-2, r:"Sobrevives sin gloria y con una herida en el brazo." } ] },
    { id:"olimpia", etapa:"j", virtue:"Templanza (sophrosýne)", sit:"Te seleccionan para competir en Olimpia. Un entrenador te propone una dieta extrema; otro, pagar a los jueces.",
      hist:"Con las multas a los tramposos se levantaban en Olimpia estatuas de Zeus, los Zanes, con el nombre del tramposo grabado.", opts:[
      { t:"Entrenar duro, pero con descanso.", sal:1, rep:1, tags:["medida"], r:"No ganas, pero haces un buen papel." },
      { t:"Dieta extrema y entrenamiento sin descanso.", risk:true, win:{ rep:3, r:"¡Corona de olivo! Tu ciudad te dará de comer gratis toda la vida." }, lose:{ sal:-3, r:"Te lesionas antes de la final." } },
      { t:"Sobornar a los jueces.", car:-2, tags:["injusto"], risk:true, win:{ rep:3, hac:-2, r:"Ganas… y sabes cómo." }, lose:{ rep:-4, hac:-3, ene:1, r:"Te descubren: tu nombre queda grabado en una estatua de la vergüenza." } },
      { t:"Renunciar para dedicarte a estudiar.", phr:1, rep:-1, r:"Tu familia no lo entiende." } ] },

    /* ===================== MADUREZ (comunes) ===================== */
    { id:"arginusas", etapa:"m", virtue:"Justicia (dikaiosýne)", sit:"Te toca por sorteo presidir la asamblea. La multitud exige juzgar a la vez, en una sola votación, a los generales que no rescataron a los náufragos. Es ilegal.",
      hist:"Arginusas, 406 a. C.: Sócrates, que presidía ese día, se negó a someterlo a votación. Los generales fueron ejecutados igualmente.", opts:[
      { t:"Someterlo a votación: el pueblo es soberano.", rep:1, car:-3, r:"Los generales son ejecutados. Al año siguiente, la ciudad se arrepiente." },
      { t:"Negarte a votar algo ilegal, aunque te amenacen.", car:3, ene:3, rep:-1, tags:["justo","publico"], r:"Te gritan traidor. No cedes." },
      { t:"Fingirte enfermo y dejar que presida otro.", car:-1, rep:-1, r:"Te salvas del lío, pero no de tu conciencia." },
      { t:"Proponer juicios separados con argumentos legales.", phr:1, tags:["justo"], risk:true, win:{ car:2, rep:2, ene:1, r:"Consigues calmar a la asamblea… por un día." }, lose:{ ene:2, rep:-1, r:"Nadie te escucha y te anotan en la lista de sospechosos." } } ] },
    { id:"leon", etapa:"m", virtue:"Justicia (dikaiosýne)", sit:"El gobierno oligárquico te ordena detener a León de Salamina, un inocente, para quedarse con sus bienes. Quiere mancharte las manos.",
      hist:"En 404 a. C. los Treinta dieron esa orden a Sócrates y a otros cuatro. Los otros fueron; Sócrates se fue a casa.", opts:[
      { t:"Obedecer: órdenes son órdenes.", hac:2, car:-3, set:"colaborador", r:"León muere. Te pagan con parte de sus bienes." },
      { t:"Irte a casa sin decir nada.", car:2, ene:3, rep:-1, tags:["justo"], r:"No detienes a nadie. Los Treinta toman nota de tu nombre." },
      { t:"Avisar a León en secreto para que huya.", car:2, ene:1, risk:true, win:{ r:"León escapa y nadie sabe que fuiste tú." }, lose:{ ene:3, r:"Un criado te ha visto. Ahora te vigilan." } },
      { t:"Denunciar la orden ante todos en el ágora.", car:3, ene:5, rep:2, tags:["justo","publico","verdad"], muerte:0.12, muerteT:"Esa misma noche, los hombres de los Treinta vienen a buscarte.", r:"La ciudad te admira en voz baja. Los Treinta, en voz alta, te odian." } ] },
    { id:"jurado", etapa:"m", virtue:"Justicia (dikaiosýne)", sit:"Eres jurado en un pleito. Un comerciante poderoso te ofrece dinero por votar contra un meteco sin recursos.", opts:[
      { t:"Aceptar el dinero.", hac:3, car:-3, set:"corrupto", tags:["injusto"], r:"El meteco lo pierde todo. Tú ganas un secreto." },
      { t:"Rechazarlo y votar en conciencia.", car:1, ene:1, tags:["justo"], r:"El comerciante no olvida." },
      { t:"Rechazarlo y denunciar el soborno ante el tribunal.", car:2, rep:1, ene:3, tags:["justo","publico"], r:"El comerciante es multado y jura vengarse." },
      { t:"Aceptar el dinero y votar en conciencia igualmente.", hac:3, car:-1, ene:3, phr:-1, r:"Has engañado a un hombre poderoso. Eso se paga." } ] },
    { id:"trierarca", etapa:"m", virtue:"Magnificencia (megaloprépeia)", sit:"La ciudad te nombra trierarca: durante un año debes pagar y mandar un trirreme de guerra.",
      hist:"Las liturgias eran los servicios públicos que pagaban los ricos. Con la antídosis podías retar a otro a hacerse cargo… o a cambiar su fortuna por la tuya.", opts:[
      { t:"Pagar lo necesario y cumplir bien.", hac:-2, rep:1, car:1, tags:["medida"], r:"Un buen barco y un deber cumplido." },
      { t:"Gastarte una fortuna para tener el mejor barco de la flota.", hac:-5, rep:3, r:"Tu trirreme es la envidia del Pireo. Tu administrador llora." },
      { t:"Recurrir a la antídosis: que pague otro más rico.", ene:2, risk:true, win:{ r:"El otro acepta pagar. Te has librado, y has ganado un enemigo." }, lose:{ hac:-3, rep:-1, r:"El tribunal te da la razón a medias: pagas igual, y además las costas." } },
      { t:"Ahorrar en remeros y velas.", hac:-1, rep:-2, risk:true, win:{ r:"El barco aguanta el año." }, lose:{ sal:-3, rep:-2, r:"Una tormenta hunde el barco mal equipado: nadas hasta la costa." } } ] },
    { id:"sicilia", etapa:"m", virtue:"Valor (andreía)", sit:"La asamblea, entusiasmada, vota invadir Sicilia. Te ofrecen el mando de una parte de la flota.",
      hist:"La expedición a Sicilia (415-413 a. C.) terminó en desastre: la mayoría murió o acabó en las canteras de Siracusa. Nicias había hablado en contra.", opts:[
      { t:"Aceptar el mando y la gloria.", rep:3, hac:2, ene:2, tags:["fuerza"], muerte:0.15, muerteT:"Mueres en las canteras de Siracusa, como tantos atenienses.", risk:true, win:{ rep:2, r:"Vuelves de los pocos, con honores." }, lose:{ sal:-4, hac:-2, r:"Vuelves derrotado, enfermo y sin nada." } },
      { t:"Hablar en contra, aunque te llamen cobarde.", car:2, rep:-2, ene:2, tags:["verdad","publico"], r:"Pierdes la votación. Tenías razón, pero eso no consuela a nadie." },
      { t:"Votar a favor, pero quedarte en casa.", car:-1, r:"Ni gloria ni riesgo." },
      { t:"Encargarte de los suministros y quedarte una parte.", hac:4, car:-3, ene:1, set:"corrupto", tags:["injusto"], r:"La flota zarpa con menos grano del que debía." } ] },
    { id:"peste", etapa:"m", virtue:"Generosidad (eleutheriótes)", sit:"Estalla la peste en Atenas. Tienes almacenes de grano y medicinas.",
      hist:"La peste de 430 a. C. mató quizá a un tercio de los atenienses, entre ellos a Pericles. Tucídides la sufrió y la describió.", opts:[
      { t:"Venderlo caro: nunca valdrá tanto.", hac:4, car:-3, ene:2, rep:-2, tags:["injusto"], r:"Te haces rico mientras la ciudad entierra a sus muertos." },
      { t:"Repartirlo gratis tú mismo.", hac:-4, car:3, rep:2, risk:true, win:{ r:"Sales ileso de entre los enfermos." }, lose:{ sal:-4, r:"Te contagias." } },
      { t:"Huir al campo con tu familia.", rep:-2, car:-1, sal:1, r:"Te salvas. Nadie olvida que te fuiste." },
      { t:"Organizar con otros un reparto a precio justo.", hac:-1, car:2, rep:1, phr:1, tags:["justo","medida"], risk:true, win:{ r:"El sistema funciona y te salvas." }, lose:{ sal:-2, r:"Enfermas, pero sobrevives." } } ] },
    { id:"tirano", etapa:"m", virtue:"Prudencia (phrónesis)", sit:"El tirano de Siracusa te invita a su corte: quiere que lo conviertas en un gobernante filósofo.",
      hist:"Platón fue tres veces a Siracusa para educar a Dionisio I y a Dionisio II. Fracasó las tres.", opts:[
      { t:"Aceptar por la influencia y el dinero.", hac:3, car:-2, set:"colaborador", r:"Vives en un palacio y aconsejas a un hombre que no te escucha." },
      { t:"Rechazar la invitación.", car:1, r:"Te quedas en casa. Siracusa sigue igual." },
      { t:"Ir e intentar educarlo de verdad.", car:1, risk:true, win:{ car:1, rep:2, r:"El tirano modera alguna ley. Es poco, pero no es nada." }, lose:{ hac:-4, ene:2, sal:-1, r:"Se cansa de ti y te vende como esclavo; unos amigos pagan tu rescate." } },
      { t:"Ir y pasar información a sus enemigos.", car:-1, ene:2, hac:1, risk:true, win:{ rep:1, r:"Los demócratas de Siracusa te lo agradecen." }, lose:{ sal:-3, ene:3, r:"Te descubren. Huyes de noche en un barco de pescadores." } } ] },
    { id:"impiedad", etapa:"m", virtue:"Amistad (philía)", sit:"Acusan de impiedad a tu antiguo maestro por decir que el sol es una piedra incandescente.",
      hist:"A Anaxágoras lo acusaron de impiedad por eso mismo, hacia 430 a. C.; Pericles le ayudó a salir de Atenas.", opts:[
      { t:"Testificar a su favor.", car:2, ene:3, rep:-1, tags:["verdad","publico"], r:"Tu maestro te abraza. La acusación apunta tu nombre." },
      { t:"Callar.", car:-1, r:"Lo condenan. Nadie te pregunta nada." },
      { t:"Ayudarle a huir de noche.", car:1, ene:2, hac:-1, risk:true, win:{ r:"Llega a salvo a Lámpsaco." }, lose:{ ene:2, rep:-2, r:"Os descubren en el puerto." } },
      { t:"Testificar contra él para salvarte tú.", car:-4, ene:-2, rep:1, set:"delator", r:"Los acusadores te consideran uno de los suyos." } ] },
    { id:"deudas", etapa:"m", virtue:"Justicia (dikaiosýne)", sit:"Los campesinos, ahogados por las deudas, piden que se perdonen. Muchos te deben dinero a ti.",
      hist:"Solón (594 a. C.) hizo la seisákhtheia, «la sacudida de cargas»: canceló deudas y prohibió la esclavitud por deudas.", opts:[
      { t:"Exigir que te paguen hasta el último óbolo.", hac:2, ene:2, rep:-2, car:-1, r:"Cobras. Los campesinos no olvidan." },
      { t:"Perdonar tú primero las deudas que te deben.", hac:-4, car:2, rep:2, r:"Pierdes mucho, y ganas a una comarca entera." },
      { t:"Proponer una ley que perdone parte, como Solón.", hac:-2, car:2, rep:1, ene:1, phr:1, tags:["justo","medida"], r:"Ni los ricos ni los pobres quedan del todo contentos. Buena señal." },
      { t:"Vender las deudas a un usurero antes de que se aprueben.", hac:1, car:-2, rep:-1, tags:["injusto"], r:"Te libras del problema, y se lo pasas a otros." } ] },
    { id:"mitilene", etapa:"m", virtue:"Mansedumbre (praótes)", sit:"Una ciudad aliada se ha rebelado. El pueblo, furioso, quiere matar a todos sus hombres. Te toca hablar en la asamblea.",
      hist:"Mitilene, 427 a. C.: Cleón pidió la matanza; Diódoto convenció a la asamblea al día siguiente, y un segundo trirreme llegó a tiempo de evitarla.", opts:[
      { t:"Pedir la matanza: el pueblo te lo agradecerá.", rep:3, car:-3, ene:1, tags:["fuerza"], r:"Te aclaman. Mil personas van a morir." },
      { t:"Pedir que se castigue solo a los culpables.", car:2, rep:-1, risk:true, win:{ rep:2, r:"Convences a la asamblea. Un trirreme sale a toda prisa a detener la matanza." }, lose:{ ene:2, r:"Te acusan de estar comprado por los rebeldes." } },
      { t:"No hablar.", car:-1, rep:-1, r:"Otros deciden por ti." },
      { t:"Pedir el castigo máximo en público y votar en contra en secreto.", car:-1, phr:-1, ene:1, r:"Ni tú sabes ya qué piensas." } ] },
    { id:"rumor", etapa:"m", virtue:"Veracidad (alétheia)", sit:"Circula un rumor falso sobre ti. Puedes probar que lo empezó tu rival, pero para eso tendrías que revelar un secreto de un amigo.", opts:[
      { t:"Revelar el secreto de tu amigo.", rep:2, car:-2, ene:1, r:"Tu reputación se salva. Tu amistad, no." },
      { t:"Aguantar el rumor en silencio.", rep:-3, car:1, r:"Pierdes fama. Tu amigo nunca sabrá lo que hiciste por él." },
      { t:"Difundir tú un rumor peor sobre tu rival.", rep:1, car:-2, ene:2, tags:["injusto"], r:"Empate en el barro." },
      { t:"Hablar en privado con tu rival y negociar.", phr:1, tags:["pacto"], risk:true, win:{ rep:1, ene:-1, r:"Llegáis a un acuerdo: él desmiente y tú olvidas." }, lose:{ rep:-2, r:"Usa la conversación contra ti." } } ] },
    { id:"prestamo", etapa:"m", virtue:"Generosidad (eleutheriótes)", sit:"Te proponen un préstamo marítimo: si el barco vuelve del mar Negro, doblas tu dinero; si se hunde, lo pierdes.",
      hist:"Aristóteles distinguía la administración de la casa, que busca lo necesario, de la crematística, que busca acumular dinero sin límite.", opts:[
      { t:"Invertir toda tu fortuna.", risk:true, win:{ hac:6, r:"El barco vuelve. Eres rico." }, lose:{ hac:-7, r:"El barco no vuelve." } },
      { t:"Invertir una parte.", risk:true, win:{ hac:2, r:"Buena ganancia." }, lose:{ hac:-2, r:"Pierdes lo invertido." } },
      { t:"No invertir: tienes lo que necesitas.", phr:1, tags:["medida"], r:"Duermes tranquilo." },
      { t:"Invertir y pagar al capitán para que no pase por aguas peligrosas.", hac:-1, car:-1, risk:true, win:{ hac:3, r:"El barco vuelve." }, lose:{ hac:-3, r:"El capitán se queda tu dinero y desaparece." } } ] },
    { id:"stasis", etapa:"m", virtue:"Valor (andreía)", sit:"Guerra civil en la ciudad: demócratas y oligarcas se matan en las calles, y los dos bandos te exigen que elijas.",
      hist:"Una ley atribuida a Solón quitaba los derechos al ciudadano que no tomara partido en una guerra civil. Tucídides describe la stásis de Corcira como el fin de toda moral.", opts:[
      { t:"Unirte a los oligarcas.", hac:2, ene:3, tags:["fuerza"], set:"oligarca", r:"Tu bando gana… por ahora." },
      { t:"Unirte a los demócratas.", rep:1, ene:3, r:"Luchas en el Pireo con los remeros y los artesanos." },
      { t:"Encerrarte en casa hasta que pase.", rep:-2, ene:1, car:-1, r:"Los dos bandos te desprecian." },
      { t:"Mediar entre los dos bandos.", phr:1, muerte:0.08, muerteT:"Un exaltado te mata en plena negociación.", risk:true, win:{ car:2, rep:3, ene:-2, r:"Logras una tregua. Te deben la paz." }, lose:{ ene:3, sal:-2, r:"Los dos bandos te acusan de traidor." } } ] },
    { id:"ostrakon", etapa:"m", virtue:"Justicia (dikaiosýne)", sit:"Se vota un ostracismo. Un rival te propone unir vuestros partidarios para desterrar a un tercero y repartiros su poder.",
      hist:"En 416 a. C., Alcibíades y Nicias se pusieron de acuerdo para que el desterrado fuera Hipérbolo. Fue el último ostracismo de Atenas.", opts:[
      { t:"Aceptar el pacto.", rep:2, ene:2, car:-2, tags:["pacto"], r:"El tercero se va diez años. Tu rival y tú os vigiláis." },
      { t:"Rechazarlo y votar a quien creas de verdad peligroso.", car:1, ene:1, r:"Votas con tu conciencia; tu rival se lo toma mal." },
      { t:"Avisar a la víctima del complot.", car:1, ene:2, rep:1, r:"El complot fracasa. Ya sabes quién te odia." },
      { t:"No votar.", rep:-1, r:"Otros deciden." } ] },
    { id:"mina", etapa:"m", virtue:"Justicia (dikaiosýne)", sit:"Te ofrecen arrendar una concesión en las minas de plata del Laurión. Es muy rentable si no te importa cómo trabajan los esclavos en las galerías.", opts:[
      { t:"Arrendarla y exprimir al máximo.", hac:4, car:-3, tags:["injusto"], r:"La plata fluye. Mejor no bajar a ver cómo." },
      { t:"Arrendarla, pero con turnos y comida decentes.", hac:2, car:1, phr:1, tags:["medida"], r:"Ganas menos que otros, pero ganas." },
      { t:"No entrar en ese negocio.", car:1, r:"Otro lo arrienda en tu lugar." },
      { t:"Arrendarla y endeudarte para abrir más galerías.", car:-2, risk:true, win:{ hac:6, r:"Encuentras una veta riquísima." }, lose:{ hac:-5, sal:-1, r:"La galería se hunde." } } ] },

    /* ===================== MADUREZ · CONTEMPLATIVA ===================== */
    { id:"libro", etapa:"m", orient:["Contemplativa","Discursiva"], virtue:"Veracidad (alétheia)", sit:"Tu libro dice que de los dioses no se puede saber si existen. Un amigo te aconseja no publicarlo.",
      hist:"Protágoras abrió así su obra Sobre los dioses; según la tradición, sus libros se quemaron en el ágora.", opts:[
      { t:"Publicarlo tal cual.", car:1, rep:2, ene:4, tags:["verdad","publico"], r:"Se lee en toda Grecia. Y en los templos." },
      { t:"Publicarlo con un lenguaje más prudente.", phr:1, rep:1, ene:1, tags:["medida"], r:"Dice lo mismo, pero hay que saber leerlo." },
      { t:"Leerlo solo a tus discípulos.", phr:1, r:"Tus ideas circulan en voz baja." },
      { t:"Quemarlo tú mismo.", car:-2, phr:-1, r:"Nadie te acusará de nada. Nadie sabrá lo que pensabas." } ] },
    { id:"escuela", etapa:"m", orient:["Contemplativa"], virtue:"Generosidad (eleutheriótes)", sit:"Fundas una escuela. ¿Cómo la vas a mantener?", opts:[
      { t:"Cobrar mucho, como los sofistas.", hac:4, rep:1, car:-1, r:"La escuela es rica; los alumnos, también." },
      { t:"No cobrar y vivir de donaciones.", hac:-2, car:1, rep:1, r:"Vives con lo justo, rodeado de gente que quiere aprender." },
      { t:"Cobrar a cada uno según lo que pueda pagar.", hac:1, car:1, phr:1, tags:["medida","justo"], r:"Pagan los ricos por los pobres, y todos aprenden." },
      { t:"Aceptar solo a hijos de familias poderosas.", hac:2, rep:2, ene:1, car:-1, r:"Tus alumnos gobernarán la ciudad. Los demás te guardan rencor." } ] },
    { id:"alejandria", etapa:"m", orient:["Contemplativa"], virtue:"Prudencia (phrónesis)", sit:"El obispo y el prefecto de la ciudad se enfrentan; a tus clases vienen alumnos de los dos bandos.",
      hist:"Alejandría, 415: Hipatia era amiga y consejera del prefecto Orestes. La turba que la mató la culpaba de impedir la reconciliación.", opts:[
      { t:"Apoyar en público al prefecto: tiene razón.", rep:1, ene:4, tags:["publico"], muerte:0.1, muerteT:"Una turba te arrastra por las calles.", r:"El prefecto te lo agradece. El bando del obispo te señala." },
      { t:"Seguir enseñando como siempre, sin opinar.", ene:1, r:"Tu silencio también es interpretado." },
      { t:"Dejar de enseñar en público una temporada.", rep:-2, ene:-2, hac:-1, r:"Te olvidan un poco. Mejor así." },
      { t:"Intentar reconciliar a los dos.", phr:1, risk:true, win:{ rep:2, car:2, ene:-1, r:"Una tregua frágil, pero tregua." }, lose:{ ene:3, r:"Cada bando cree que trabajas para el otro." } } ] },
    { id:"alumno", etapa:"m", orient:["Contemplativa"], virtue:"Amistad (philía)", sit:"Un joven brillante, rico y arrogante quiere ser tu discípulo para aprender a gobernar.",
      hist:"Alcibíades fue discípulo y amigo de Sócrates. En el juicio de 399 a. C., muchos lo recordaban.", opts:[
      { t:"Enseñarle, aunque no cambie.", rep:1, set:"alumno", r:"Te escucha, te admira… y hace lo que quiere." },
      { t:"Rechazarlo.", rep:-1, r:"Busca a otro maestro, uno menos exigente." },
      { t:"Enseñarle y criticarle en público cuando se equivoque.", car:1, ene:1, tags:["verdad"], set:"alumno", r:"Te respeta más que a nadie; su familia, menos." },
      { t:"Usarlo para ganar influencia.", hac:2, rep:2, car:-2, set:"alumno", r:"Te abre las puertas de las mejores casas." } ] },

    /* ===================== MADUREZ · DISCURSIVA ===================== */
    { id:"comedia", etapa:"m", orient:["Discursiva"], virtue:"Veracidad (alétheia)", sit:"Preparas una obra que ridiculiza al político más poderoso de la ciudad.",
      hist:"En 426 a. C., Cleón llevó a Aristófanes ante el Consejo por Los babilonios; dos años después, Aristófanes lo volvió a ridiculizar en Los caballeros.", opts:[
      { t:"Estrenarla tal cual.", rep:3, ene:4, tags:["verdad","publico"], r:"Todo el teatro ríe. Él no." },
      { t:"Suavizarla.", rep:1, tags:["medida"], r:"Buena acogida. Nadie se ofende demasiado." },
      { t:"Ridiculizar mejor a un filósofo que no tiene poder.", rep:2, car:-2, r:"Éxito fácil. Años después, el público recordará tu caricatura en un juicio." },
      { t:"Guardarla en un cajón.", rep:-2, r:"Este año no estrenas." } ] },
    { id:"logografo", etapa:"m", orient:["Discursiva"], virtue:"Veracidad (alétheia)", sit:"Un hombre rico te paga para que le escribas el discurso de defensa. Sabes que es culpable.", opts:[
      { t:"Escribir el mejor discurso posible por mucho dinero.", hac:3, car:-1, rep:1, r:"Lo absuelven. Tu fama de logógrafo sube." },
      { t:"Rechazar el encargo.", car:1, r:"Otro lo escribirá por ti." },
      { t:"Escribirlo, pero sin mentir en nada.", hac:1, phr:1, tags:["medida"], r:"Un discurso honrado para una causa dudosa." },
      { t:"Escribirlo y pasar la verdad a la acusación.", hac:2, car:-1, ene:2, r:"Lo condenan. Tu cliente sospecha de ti." } ] },
    { id:"acusacion", etapa:"m", orient:["Discursiva"], virtue:"Valor (andreía)", sit:"Para atacar a tu protector político, te acusan a ti de impiedad.",
      hist:"Según Plutarco, a Aspasia la acusó de impiedad el comediógrafo Hermipo, y Pericles lloró ante el jurado para salvarla.", opts:[
      { t:"Defenderte tú misma ante el tribunal.", tags:["publico"], risk:true, win:{ rep:2, ene:-2, r:"Tu defensa es tan buena que la citan durante años." }, lose:{ ene:2, rep:-2, hac:-2, r:"Te condenan a una multa enorme." } },
      { t:"Pedir a tu protector que hable por ti.", rep:-1, ene:-1, r:"Te salva, pero ahora le debes la vida." },
      { t:"Huir de la ciudad.", hac:-3, rep:-2, ene:-3, r:"Empiezas de cero en otra parte." },
      { t:"Contraatacar acusando a tus acusadores.", ene:3, rep:1, tags:["fuerza"], r:"Guerra abierta en los tribunales." } ] },

    /* ===================== MADUREZ · POLÍTICA ===================== */
    { id:"golpe", etapa:"m", orient:["Política"], virtue:"Templanza (sophrosýne)", sit:"Tus partidarios te ofrecen tomar esta noche la Acrópolis y proclamarte tirano.",
      hist:"Pisístrato lo intentó tres veces en el siglo VI a. C. y a la tercera se quedó. Cilón, antes que él, fracasó y sus partidarios fueron asesinados.", opts:[
      { t:"Dar el golpe.", car:-3, tags:["fuerza","injusto"], muerte:0.2, muerteT:"El golpe fracasa: te matan en la Acrópolis.", risk:true, win:{ rep:3, hac:4, ene:5, set:"tirano", r:"Amaneces siendo el amo de la ciudad." }, lose:{ ene:4, hac:-3, r:"Fracasa. Escapas de milagro." } },
      { t:"Negarte y avisar al Consejo.", car:2, ene:3, rep:1, tags:["justo"], r:"El golpe se desarma. Tus antiguos partidarios te odian." },
      { t:"Negarte en silencio.", car:1, ene:1, r:"Nadie sabe nada. De momento." },
      { t:"Proponer reformas legales para lo que piden.", phr:1, car:1, rep:1, ene:1, tags:["medida"], r:"Algunos se conforman; otros te llaman blando." } ] },
    { id:"melos", etapa:"m", orient:["Política"], virtue:"Justicia (dikaiosýne)", sit:"Como general, has rendido una pequeña isla neutral. La asamblea te pregunta qué hacer con los vencidos.",
      hist:"Melos, 416 a. C.: Atenas mató a los hombres y esclavizó a mujeres y niños. Tucídides lo narra en el «diálogo de los melios».", opts:[
      { t:"Matar a los hombres y esclavizar al resto, como escarmiento.", hac:3, rep:1, car:-4, ene:1, tags:["fuerza","injusto"], r:"Nadie más se atreverá a ser neutral." },
      { t:"Pedir clemencia.", car:2, rep:-2, ene:1, r:"Te acusan de blando." },
      { t:"Instalar colonos y cobrar tributo, sin matanza.", car:1, hac:1, phr:1, tags:["medida"], r:"Una conquista, pero sin sangre inútil." },
      { t:"Quedarte con el botín antes de que llegue la orden.", hac:4, car:-3, ene:2, set:"corrupto", tags:["injusto"], r:"Nadie contó bien las ánforas." } ] },
    { id:"hermes", etapa:"m", orient:["Política"], virtue:"Veracidad (alétheia)", sit:"La víspera de tu expedición aparecen mutiladas las estatuas de Hermes de la ciudad. Tus rivales te acusan de sacrilegio.",
      hist:"En 415 a. C. acusaron a Alcibíades. Pidió ser juzgado antes de zarpar; no le dejaron. Condenado en ausencia, se pasó a Esparta.", opts:[
      { t:"Exigir que te juzguen ahora, antes de zarpar.", tags:["publico"], risk:true, win:{ rep:2, ene:-2, r:"Te absuelven y zarpas limpio." }, lose:{ ene:3, r:"Aplazan el juicio: te juzgarán cuando no estés." } },
      { t:"Zarpar y dejar que te juzguen en ausencia.", ene:4, rep:-1, r:"Te condenan a muerte en ausencia." },
      { t:"Sobornar a los testigos.", hac:-3, car:-2, risk:true, win:{ ene:-1, r:"Los testigos se desdicen." }, lose:{ ene:4, rep:-2, r:"Uno de ellos lo cuenta todo." } },
      { t:"Pasarte al enemigo antes de que te detengan.", car:-3, rep:-3, ene:3, hac:2, set:"traidor", r:"Esparta te recibe con los brazos abiertos. Atenas, con una condena a muerte." } ] },
    { id:"flota", etapa:"m", orient:["Política"], virtue:"Justicia (dikaiosýne)", sit:"Tu rival te cuenta en secreto su plan: incendiar la flota de los aliados, fondeada en el puerto. Atenas dominaría el mar sin competencia. La asamblea te encarga juzgarlo.",
      hist:"Según Plutarco, Temístocles propuso algo así y la asamblea encargó a Arístides examinarlo. Arístides dijo que nada sería más provechoso ni más injusto, y los atenienses lo rechazaron sin conocerlo.", opts:[
      { t:"Apoyarlo: lo que conviene a Atenas es lo justo.", hac:2, rep:1, car:-3, ene:1, tags:["injusto","fuerza"], r:"La flota aliada arde. Atenas manda en el mar, y nadie vuelve a fiarse de ella." },
      { t:"Decir a la asamblea que es muy provechoso… y muy injusto.", car:2, ene:2, tags:["justo","publico","verdad"], risk:true, win:{ rep:2, r:"La asamblea lo rechaza sin pedir detalles. Tu rival no te lo perdona." }, lose:{ rep:-1, ene:1, r:"Te acusan de poner la moral por delante de la patria." } },
      { t:"Avisar en secreto a los aliados.", car:1, ene:3, rep:-2, r:"Los aliados se salvan. En Atenas, alguien sospecha de ti." },
      { t:"Proponer, en cambio, una liga con los aliados y un tributo justo.", car:1, rep:1, phr:1, tags:["justo","medida"], r:"Los aliados confían en ti para fijar lo que paga cada ciudad." } ] },
    { id:"hifasis", etapa:"m", orient:["Política"], virtue:"Templanza (sophrosýne)", sit:"Tu ejército está agotado tras años de campaña y quiere volver a casa. Tú quieres seguir hasta el fin del mundo.",
      hist:"A orillas del río Hífasis (326 a. C.), los soldados de Alejandro se negaron a seguir. Volvió, pero por el desierto de Gedrosia, donde murieron miles.", opts:[
      { t:"Ordenar seguir adelante.", rep:1, sal:-2, ene:3, car:-1, tags:["fuerza"], r:"Te obedecen de mala gana." },
      { t:"Volver a casa.", rep:-1, car:1, tags:["medida"], r:"Tus soldados te bendicen." },
      { t:"Ejecutar a los que protestan.", ene:4, car:-3, tags:["fuerza","injusto"], r:"Se hace el silencio. Un silencio peligroso." },
      { t:"Volver por el desierto más duro, para demostrar tu valor.", sal:-4, rep:1, car:-1, r:"Llegas. Muchos no." } ] },
    { id:"demagogo", etapa:"m", orient:["Política","Discursiva"], virtue:"Veracidad (alétheia)", sit:"La ciudad pasa hambre. Puedes ganar las elecciones a general prometiendo trigo barato que no podrás conseguir.", opts:[
      { t:"Prometerlo todo.", rep:3, car:-2, set:"promesa", r:"Ganas con una mayoría aplastante." },
      { t:"Decir la verdad: habrá que apretarse el cinturón.", car:2, rep:-2, tags:["verdad","publico"], r:"Pierdes. Pero nadie podrá reprocharte nada." },
      { t:"Prometer lo que de verdad puedes cumplir.", rep:1, car:1, phr:1, tags:["medida"], r:"Ganas por poco." },
      { t:"Culpar del hambre a los metecos.", rep:2, car:-3, ene:2, tags:["injusto"], r:"Funciona. Siempre funciona." } ] },

    /* ===================== VEJEZ ===================== */
    { id:"juicio", etapa:"v", cond:{ ene:5 }, virtue:"Valor (andreía)", sit:"Ya anciano, te acusan de corromper a los jóvenes y de no creer en los dioses de la ciudad. El jurado lo forman 501 ciudadanos.",
      hist:"Así fue el juicio de Sócrates (399 a. C.), según la Apología de Platón. Pidió como «castigo» comer gratis en el Pritaneo, y lo condenaron a muerte.", opts:[
      { t:"Llorar y suplicar al jurado.", car:-3, ene:-2, rep:-1, r:"Te absuelven por pena. Tú sabes lo que has hecho." },
      { t:"Defender tu vida con orgullo, sin pedir clemencia.", car:3, tags:["verdad","publico"], risk:true, pBase:0, win:{ rep:2, r:"Te absuelven por pocos votos. Ha sido la mejor defensa que se recuerda." }, lose:{ set:"preso", r:"Te condenan a muerte. Te llevan a la cárcel a esperar la ejecución." } },
      { t:"Proponer tú mismo el destierro como pena.", hac:-3, rep:-2, ene:-3, r:"Aceptan. Acabarás tus días lejos de la ciudad." },
      { t:"Huir antes del juicio.", hac:-2, rep:-2, ene:-2, car:-1, r:"Te vas antes de que te juzguen. Algunos te llaman cobarde." } ] },
    { id:"carcel", etapa:"v", req:"preso", urgente:true, virtue:"Justicia (dikaiosýne)", sit:"Estás en la cárcel esperando la ejecución. Tus amigos han sobornado al guardia: puedes escapar esta noche.",
      hist:"En el Critón de Platón, Sócrates rechaza escapar: sería devolver a las leyes injusticia por injusticia.", opts:[
      { t:"Escapar: la condena es injusta.", car:-1, hac:-2, rep:-1, r:"Vives, desterrado y en boca de todos." },
      { t:"Quedarte: no se responde a una injusticia con otra.", car:3, muerte:1, muerteT:"Cumples la sentencia. Tus discípulos no dejarán de hablar de ti." },
      { t:"Escapar y seguir enseñando desde el extranjero.", hac:-2, rep:1, ene:1, r:"Sigues enseñando en otra ciudad." } ] },
    { id:"testamento", etapa:"v", virtue:"Generosidad (eleutheriótes)", sit:"Llega la hora de hacer testamento.",
      hist:"Aristóteles dispuso en su testamento la liberación de varios de sus esclavos, según Diógenes Laercio.", opts:[
      { t:"Dejarlo todo a tus hijos.", r:"Tu familia queda protegida." },
      { t:"Fundar una biblioteca o una escuela con tus bienes.", hac:-4, rep:2, car:1, r:"Tu nombre seguirá en la puerta durante siglos." },
      { t:"Liberar a tus esclavos y repartir una parte entre ellos.", hac:-2, car:2, tags:["justo"], r:"Algunos vecinos lo consideran una locura." },
      { t:"Gastarlo todo en vida en banquetes.", sal:-2, hac:-3, car:-1, tags:["placer"], r:"Que paguen los herederos." } ] },
    { id:"retiro", etapa:"v", virtue:"Prudencia (phrónesis)", sit:"El médico te aconseja dejar la vida pública y retirarte al campo.", opts:[
      { t:"Seguir en la asamblea hasta el final.", rep:1, sal:-2, ene:1, r:"Te respetan, y te agotas." },
      { t:"Retirarte al campo.", sal:2, rep:-1, ene:-2, tags:["medida"], r:"Tus enemigos te olvidan. Tus olivos, no." },
      { t:"Retirarte y escribir tus memorias.", sal:1, phr:1, rep:1, r:"Recordar ordenadamente también es pensar." },
      { t:"Pagar a un curandero famoso por un remedio milagroso.", hac:-3, risk:true, win:{ sal:2, r:"Por casualidad o no, te encuentras mejor." }, lose:{ sal:-2, r:"El remedio era peor que la enfermedad." } } ] },
    { id:"estatua", etapa:"v", virtue:"Magnanimidad (megalopsykhía)", sit:"La ciudad quiere levantarte una estatua en el ágora.",
      hist:"Para Aristóteles, el magnánimo se sabe digno de grandes honores y los acepta sin desearlos con ansia; el vanidoso los busca sin merecerlos.", opts:[
      { t:"Aceptarla y pagarla tú.", hac:-3, rep:2, r:"Una estatua digna." },
      { t:"Rechazarla con falsa modestia.", car:-1, r:"Todos saben que te morías de ganas." },
      { t:"Aceptarla y pedir que el dinero sobrante vaya a los huérfanos de guerra.", car:2, rep:1, tags:["medida"], r:"La estatua es pequeña, y el gesto, grande." },
      { t:"Exigir que sea más grande que la de tu rival.", rep:1, ene:2, car:-1, r:"Ahora hay dos estatuas que no se hablan." } ] },
    { id:"amnistia", etapa:"v", virtue:"Mansedumbre (praótes)", sit:"Los que te persiguieron han caído. Ahora te toca decidir qué se hace con ellos.",
      hist:"En 403 a. C., tras la caída de los Treinta, Atenas votó una amnistía: prohibido «recordar los males pasados». Es una de las primeras de la historia.", opts:[
      { t:"Vengarte: que paguen lo que hicieron.", ene:3, hac:2, car:-2, tags:["fuerza"], r:"Justicia, dicen algunos. Venganza, dicen otros." },
      { t:"Apoyar una amnistía general.", car:2, rep:2, ene:-3, tags:["justo"], r:"La ciudad respira." },
      { t:"Pedir juicio solo para los que mataron.", car:1, ene:-1, phr:1, tags:["medida","justo"], r:"Una justicia difícil, pero justicia." },
      { t:"Irte de la ciudad: no quieres verlos.", rep:-1, ene:-2, r:"Te ahorras rencores." } ] },
    { id:"herederos", etapa:"v", virtue:"Justicia (dikaiosýne)", sit:"Tus hijos se pelean por el negocio familiar. Uno quiere vendérselo a un comprador conocido por maltratar a sus trabajadores.", opts:[
      { t:"Vender al mejor postor.", hac:3, car:-2, r:"Dinero rápido. Mejor no preguntar." },
      { t:"No vender y repartirlo entre tus hijos.", hac:-1, car:1, r:"Se pelearán igual, pero sin vender." },
      { t:"Vender, pero poniendo condiciones en el contrato.", hac:1, phr:1, tags:["medida"], r:"El comprador las acepta a regañadientes." },
      { t:"Quedártelo y apretar tú a los trabajadores.", hac:3, car:-3, ene:1, tags:["injusto"], r:"Si hay que exprimir a alguien, que la ganancia sea tuya." } ] },

    /* ===================== CONSECUENCIAS (se activan con marcas) ===================== */
    { id:"c-colaborador", etapa:["m","v"], req:"colaborador", virtue:"Justicia (dikaiosýne)", sit:"Ha caído el gobierno al que serviste. Ahora te juzgan por colaborar con él.", opts:[
      { t:"Echar la culpa a otros.", car:-2, risk:true, win:{ ene:-2, r:"Te creen." }, lose:{ ene:3, rep:-2, r:"Los otros te acusan a ti con pruebas." } },
      { t:"Asumir tu parte y acogerte a la amnistía.", car:2, rep:-1, hac:-2, ene:-1, r:"Pagas una multa. Puedes mirar a la cara a tus vecinos." },
      { t:"Huir con lo que puedas llevar.", hac:-3, rep:-3, ene:-2, r:"Una vida nueva, lejos y sin nombre." },
      { t:"Comprar testigos.", hac:-4, car:-2, risk:true, win:{ ene:-2, r:"Te absuelven." }, lose:{ ene:4, rep:-3, r:"Se descubre la compra." } } ] },
    { id:"c-corrupto", etapa:["m","v"], req:"corrupto", virtue:"Veracidad (alétheia)", sit:"Un antiguo cómplice amenaza con contar tu corrupción si no le pagas.", opts:[
      { t:"Pagarle.", hac:-3, r:"Volverá a pedir." },
      { t:"Confesar tú primero y devolver lo que tomaste.", rep:-3, car:3, hac:-3, r:"Escándalo, multa… y alivio." },
      { t:"Amenazarlo tú a él.", ene:3, car:-1, r:"Ahora tenéis un secreto y un odio en común." },
      { t:"Hacer que lo callen para siempre.", car:-5, tags:["fuerza","injusto"], risk:true, win:{ r:"Nunca volverás a oír hablar de él." }, lose:{ ene:5, rep:-3, r:"El asesino a sueldo habla." } } ] },
    { id:"c-tirano", etapa:["m","v"], req:"tirano", virtue:"Templanza (sophrosýne)", sit:"Llevas años gobernando como tirano. Te llega el rumor de una conjura para matarte en la próxima procesión.",
      hist:"Harmodio y Aristogitón mataron a Hiparco, hijo de Pisístrato, en las Panateneas de 514 a. C.; Atenas les levantó una estatua como tiranicidas.", opts:[
      { t:"Guardia personal y ejecuciones preventivas.", ene:2, car:-3, hac:-2, tags:["fuerza"], r:"Sobrevives. La ciudad te teme más que nunca." },
      { t:"Renunciar al poder y devolver las leyes.", car:3, rep:2, ene:-4, hac:-2, r:"Pocos tiranos lo hicieron. Te recordarán por eso." },
      { t:"Negociar en secreto con los conjurados.", phr:1, risk:true, win:{ ene:-3, r:"Llegáis a un acuerdo." }, lose:{ ene:2, sal:-3, r:"Era una trampa: te hieren en la procesión." } },
      { t:"No hacer caso: nadie se atreverá.", muerte:0.4, muerteT:"Los conjurados te apuñalan en la procesión.", r:"No pasa nada. Esta vez." } ] },
    { id:"c-alumno", etapa:["m","v"], req:"alumno", virtue:"Amistad (philía)", sit:"Tu antiguo discípulo se ha pasado al enemigo, y la ciudad te culpa de haberlo corrompido.", opts:[
      { t:"Defenderte explicando lo que de verdad le enseñaste.", phr:1, tags:["verdad","publico"], risk:true, win:{ ene:-2, r:"Algunos lo entienden." }, lose:{ ene:3, r:"Nadie quiere escuchar matices." } },
      { t:"Renegar de él en público.", car:-1, ene:-1, r:"Te salvas a medias. Él se entera." },
      { t:"Callar.", ene:2, r:"El que calla otorga, dicen." },
      { t:"Irte una temporada de la ciudad.", hac:-2, ene:-3, rep:-1, r:"Cuando vuelvas, habrá otro culpable." } ] },
    { id:"c-delator", etapa:["m","v"], req:"delator", virtue:"Amistad (philía)", sit:"El maestro contra el que testificaste ha muerto en el exilio. Sus discípulos te señalan por la calle.", opts:[
      { t:"Pedir perdón en público.", car:2, rep:-1, r:"Algunos te perdonan; tú no." },
      { t:"Justificarte: hiciste lo que había que hacer.", car:-1, ene:2, r:"Nadie te cree, ni siquiera tú." },
      { t:"Pagar la educación de sus discípulos pobres.", hac:-3, car:2, rep:1, r:"No borra nada, pero algo repara." },
      { t:"Denunciar también a sus discípulos.", car:-3, ene:3, tags:["injusto"], r:"Ya no hay vuelta atrás." } ] },
    { id:"c-oligarca", etapa:["m","v"], req:"oligarca", virtue:"Justicia (dikaiosýne)", sit:"Los demócratas han recuperado la ciudad. Tu bando ha perdido.", opts:[
      { t:"Resistir en Eleusis con los últimos oligarcas.", ene:3, tags:["fuerza"], muerte:0.15, muerteT:"Caes en la última escaramuza.", r:"Una causa perdida, pero tuya." },
      { t:"Acogerte a la amnistía.", ene:-3, rep:-1, r:"Vuelves a ser un ciudadano más." },
      { t:"Delatar a tus antiguos compañeros a cambio de perdón.", car:-3, ene:-2, r:"Te perdonan. Ellos, no." },
      { t:"Exiliarte con tu fortuna.", hac:-2, rep:-2, ene:-2, r:"Una vida cómoda en el destierro." } ] },
    { id:"c-traidor", etapa:["m","v"], req:"traidor", virtue:"Amistad (philía)", sit:"Llevas años sirviendo al enemigo, y allí tampoco se fían de ti. Atenas te ofrece volver si le traes una victoria.",
      hist:"Alcibíades volvió a Atenas en 407 a. C., aclamado como un héroe; al año siguiente, tras una derrota de su lugarteniente, lo destituyeron.", opts:[
      { t:"Volver con la victoria.", risk:true, win:{ rep:4, ene:-2, r:"Vuelves como un héroe." }, lose:{ ene:3, sal:-2, r:"La batalla sale mal y ahora te odian en los dos bandos." } },
      { t:"Quedarte donde estás.", ene:1, r:"Extranjero en todas partes." },
      { t:"Irte a Persia y vivir de tu fama.", hac:1, rep:-1, ene:1, r:"Un sátrapa te acoge, de momento." },
      { t:"Retirarte a una fortaleza con tus hombres.", hac:-2, ene:-1, r:"Solo, pero a salvo." } ] },
    { id:"c-promesa", etapa:["m","v"], req:"promesa", virtue:"Veracidad (alétheia)", sit:"El trigo barato que prometiste no ha llegado. El pueblo empieza a gritar tu nombre, y no para aplaudir.", opts:[
      { t:"Pagarlo de tu bolsillo.", hac:-5, rep:2, r:"Cumples, aunque te arruines." },
      { t:"Culpar a los ricos y confiscarles el grano.", ene:4, rep:1, tags:["fuerza"], r:"El pueblo come. Los ricos conspiran." },
      { t:"Reconocer que prometiste lo imposible.", car:2, rep:-3, r:"Honesto, tarde y caro." },
      { t:"Inventar un enemigo exterior.", car:-3, rep:1, ene:2, tags:["injusto"], r:"La guerra hace olvidar el hambre… un tiempo." } ] }
  ],

  // Cartas de azar: la fortuna no cambia el carácter, pero sí todo lo demás.
  chance: [
    { t:"Apoyo del pueblo", d:"El pueblo se pone de tu lado.", rep:2, ene:-1, img:"azar-apoyo" },
    { t:"Discurso sutil", d:"Tus palabras logran un equilibrio admirable.", rep:1, phr:1, img:"azar-sutil" },
    { t:"Reforma exitosa", d:"Una medida tuya sale bien.", rep:1, hac:1, img:"azar-reforma" },
    { t:"Inspiración", d:"Encuentras una claridad que ordena tu juicio.", phr:2, img:"azar-inspiracion" },
    { t:"Tratado de paz", d:"Se firma la paz y la ciudad respira.", sal:1, hac:1, ene:-1, img:"azar-paz" },
    { t:"Golpe de suerte", d:"La fortuna sonríe por una vez.", hac:3, img:"azar-suerte" },
    { t:"Resistencia de las élites", d:"Los poderosos bloquean tu iniciativa.", hac:-2, ene:2, img:"azar-elites", bad:true },
    { t:"Reacción de los fanáticos", d:"Recibes una respuesta violenta.", sal:-2, ene:1, img:"azar-fanaticos", bad:true },
    { t:"La peste", d:"Una epidemia asola la ciudad.", sal:-3, img:"azar-peste", bad:true },
    { t:"Ruina económica", d:"Una mala inversión te deja sin recursos.", hac:-3, img:"azar-ruina", bad:true },
    { t:"Traición", d:"Alguien de confianza te vende.", rep:-2, ene:2, hac:-1, img:"azar-traicion", bad:true },
    { t:"Guerra civil", d:"El conflicto interno lo devora todo.", sal:-2, hac:-2, img:"azar-guerra", bad:true },
    { t:"Escándalo público", d:"Tu nombre se arrastra por el fango.", rep:-3, img:"azar-escandalo", bad:true }
  ],
  chanceProb: 0.35,

  // Peligro: si tienes muchos enemigos, cada ronda pueden venir a por ti.
  peligro: {
    umbral: 4, porPunto: 0.06, max: 0.5,
    juicio: { t:"Te llevan a juicio", img:null, em:"⚖️",
      salidas: [
        { min:0.7,  t:"Absuelto", d:"El jurado te absuelve por pocos votos.", ene:-2 },
        { min:0.45, t:"Multa y cárcel", d:"Te condenan a una multa que no puedes pagar entera: unos meses en prisión.", hac:-2, sal:-1, ene:-2 },
        { min:0.22, t:"Destierro", d:"Te condenan al destierro: pierdes casa, amigos y bienes.", hac:-2, rep:-2, ene:-4, img:"azar-destierro" },
        { min:-99,  t:"Condena a muerte", d:"El jurado te condena a muerte.", muerte:true } ] },
    ostracismo: { t:"Ostracismo", d:"La asamblea escribe tu nombre en los óstraka: diez años fuera de la ciudad, aunque conservas tus bienes.", rep:-3, hac:-1, ene:-4, img:"azar-destierro" },
    atentado: { t:"Atentado", img:"azar-fanaticos",
      salidas: [
        { min:0.15, t:"Sobrevives a un atentado", d:"Te asaltan de noche; sales herido.", sal:-3, ene:-1 },
        { min:-99, t:"Asesinado", d:"Te asaltan de noche en una calle del Cerámico.", muerte:true } ] }
  },

  finales: {
    muerte_noble:  { emoji:"🕯️", label:"Vida noble truncada", texto:"Mueres fiel a ti mismo. Aristóteles admiraría tu carácter, pero no te llamaría feliz: la eudaimonía es una vida entera lograda, y la tuya se ha cortado." },
    muerte:        { emoji:"💀", label:"Vida malograda", texto:"Mueres sin haber llegado a ser quien podías ser. Ni la virtud ni la fortuna han acompañado." },
    ruina_noble:   { emoji:"🥀", label:"Virtuoso en la miseria", texto:"Conservas el carácter, pero te has quedado sin nada. Para Aristóteles, la virtud sola no basta: sin bienes no se puede actuar bien ni vivir bien." },
    ruina:         { emoji:"🪨", label:"Arruinado", texto:"Lo has perdido todo, y con ello la posibilidad de participar en la vida de la ciudad." },
    prospero:      { emoji:"🪙", label:"Próspero pero no feliz", texto:"Tienes riqueza y fama, pero un carácter degradado. Para Aristóteles, los bienes externos son medios: sin virtud no hay eudaimonía." }
  },
  bands: [
    { min:46, emoji:"🌿", label:"Vida feliz y excelente" },
    { min:38, emoji:"⚖️", label:"Vida equilibrada" },
    { min:28, emoji:"⚠️", label:"Vida conflictiva" },
    { min:-999, emoji:"🥀", label:"Vida al borde del fracaso" }
  ],
  reflect: [
    "Si tu personaje murió siendo virtuoso, ¿fue feliz? ¿Qué diría Aristóteles, que recuerda que a Príamo nadie lo llama feliz?",
    "¿Qué ha pesado más en tu vida: tu carácter, tus bienes o la fortuna?",
    "Aristóteles dice que la virtud es un término medio «relativo a nosotros». ¿Te ha costado lo mismo actuar bien que a otros personajes?",
    "¿Merece la pena ser incorruptible si eso te puede costar la vida?",
    "¿Qué distingue la vida política, la discursiva y la contemplativa? ¿Cuál es, según Aristóteles, la más feliz?",
    "¿Por qué es tan importante la phrónesis (prudencia) para vivir bien?"
  ]
};
