	//Declaración de variables
    var cadena, cod, respuesta;
	
	//Declaración de expresiones
    var tener = RegExp("(TIENE|TIENES|TENGO|TENDRAS)");
	var cuantos = RegExp("(CUANTOS|CUANTA|CUANTO|CUANTAS)");
    var edad = /AÑOS/;
	var saludar = RegExp("(HOLA|QUE TAL|CÓMO VA|COMO VA|CÓMO VAS|COMO ESTAS)");
	var bien = RegExp("(BIEN|EY HOLA)");
	var inteligenciaArt = RegExp("(QUE ES INTELIGENCIA ARTIFICIAL|INTELIGENCIA ARTIFICIAL)");
	var python = RegExp("(QUE ES PYTHON|PYTHON)");
	
	console.log(tener.global);
   // function evaluarExpresion() {
	let evaluarExpresion=()=>{
      cadena = document.getElementById("txtPregunta").value;
	  escribirChat(cadena);
      cadena = cadena.toUpperCase();
	  document.getElementById("txtPregunta").value="";
	  cod=0;
	  
/*
      document.getElementById("resultado1").innerHTML= tener.test(cadena);
      document.getElementById("resultado2").innerHTML= edad.test(cadena);
*/ 
	  if (saludar.test(cadena)==true) {
		cod = 1;
	  };
	    if (bien.test(cadena)==true) {
		cod = 2;
	  };
      if (cuantos.test(cadena)==true && tener.test(cadena)==true && edad.test(cadena)==true ) {
        cod = 4;
      };
	  if (inteligenciaArt.test(cadena)==true) {
        cod = 5;
      };
	  if (python.test(cadena)==true) {
        cod = 6;
      }; 
	  
	//Lama a responder
		setTimeout(responder, 1000);
      //responder();
    }
//let res =()=>{};
    function responder() {
	var r = Math.floor((Math.random() * 3) + 1);
	//console.log("random " + r);
	console.log(`random ${r}`);
	//console.log("cod " + cod);
	console.log(`cod ${cod}`);
	var mensaje;
      switch (cod) {
	  case 1:
			if (r == 1) {
			mensaje = " Hola!!! Todo bien. Y tú?";
			};
			if (r == 2) {
			mensaje = " Hola!!! que tal brother bien. Y tú?";
			};
			if (r == 3) {
			mensaje = " Excelente. Y tú?";
			};
			
        break;
		
		case 2:
        mensaje = " Me alegra mucho!!!";
        break;
	  
        case 4:
		if (r == 1) {
			mensaje = " Es una pregunta muy personal";
			};
			if (r == 2) {
			mensaje = " Demasiado joven para ti";
			};
			if (r == 3) {
			mensaje = " Tengo toda la edad que te puedas imaginar!!";
			};

         break;
        
		case 5:
			if (r == 1) {
				mensaje = " Programa de computación diseñado para realizar determinadas operaciones que se consideran propias de la inteligencia humana, como el autoaprendizaje.";
				};
				if (r == 2) {
				mensaje = " La inteligencia artificial es, en ciencias de la computación, la disciplina que intenta replicar y desarrollar la inteligencia y sus procesos implícitos a través de computadoras.";
				};
				if (r == 3) {
				mensaje = " es la combinación de algoritmos planteados con el propósito de crear máquinas que presenten las mismas capacidades que el ser humano.";
				};
	
			 
        break;
		case 6:
			if (r == 1) {
				mensaje = " python es un lenguaje de progarmacion de alto nivel";
				};
				if (r == 2) {
				mensaje = " python se utiliza para machine learnig";
				};
				if (r == 3) {
				mensaje = " python es una serpiente del amazonas";
				};
	
			 
        break;

        default:
		mensaje = " No entiendo lo que me estás diciendo";

      }
	  
	  var speech = new SpeechSynthesisUtterance();
  
	// Set the text and voice attributes.
	speech.text = mensaje;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);
    // document.getElementById("respuesta").innerHTML = mensaje;
	//   escribirChat(mensaje);
    // }
	
	//document.getElementById("respuesta").innerHTML = mensaje;
	

	//escribirChat(mensaje);
	momentoActual = new Date();
	hora = momentoActual.getHours();
minuto = momentoActual.getMinutes();
str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora
var horaImprimible = hora + ":" + minuto + " HOY  ";
	console.log(cadena);
	
	const name = document.createElement("li");
	name.classList.add("clearfix");
	const divn = document.createElement("div");
	divn.classList.add("message-data");
	name.appendChild(divn);
	const div2 = document.createElement("div");
	div2.classList.add("message","my-message");
	const span = document.createElement("span");
	span.classList.add("message-data-time");
	span.textContent = horaImprimible;
	var url = 'assets/img/IArtificial.jpg';
    var image = new Image();
	image.src = url;
	span.appendChild(image);
	div2.textContent = mensaje;
	name.appendChild(divn);
	divn.appendChild(span);
	name.appendChild(div2);
	  
	//name.textContent ="new li";
	const ins = document.querySelector(".fg");
	//document.body.insertBefore(name);
	ins.insertBefore(name, ins.lastChild[0]);
	//ins.insertBefore(divn, ins.children[2]);
	console.log(name);
	 

  }
//   function readOutLoud(mensaje) {
// 	var speech = new SpeechSynthesisUtterance();
  
// 	// Set the text and voice attributes.
// 	speech.text = mensaje;
// 	speech.volume = 1;
// 	speech.rate = 1;
// 	speech.pitch = 1;
  
// 	window.speechSynthesis.speak(speech);
//   }
  function addElement() {
	
  }                               


	function escribirChat (texto) {

	const name = document.createElement("li");
	name.classList.add("clearfix");
	const divn = document.createElement("div");

	divn.classList.add("message-data","text-right");

	name.appendChild(divn);
	const div2 = document.createElement("div");

	div2.classList.add("message","other-message","float-right");

	const span = document.createElement("span");
	
	span.classList.add("message-data-time");
	//span.textContent = horaImprimible;
	div2.textContent = texto;
	name.appendChild(divn);
	divn.appendChild(span);
	name.appendChild(div2);
	  
	//name.textContent ="new li";
	const ins = document.querySelector(".fh");
	//document.body.insertBefore(name);
	ins.insertBefore(name, ins.lastChild[0]);
	//ins.insertBefore(divn, ins.children[2]);
	console.log(name);
		//document.getElementById("areaChat").value += texto + "\r\r";
		//document.getElementById("areaChat").value += `${texto} \r\r`;
	}

	//evento enter
	document.getElementById("txtPregunta").addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
      document.getElementById("botonClick").click();
    }
  });

document.getElementById("botonClick").onclick = function() {
  //alert('Clicked!');
  evaluarExpresion();
}

