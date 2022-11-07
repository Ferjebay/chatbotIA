	//Declaración de variables
    var cadena, cod, respuesta;
	
	//Declaración de expresiones
    var tener = RegExp("(TIENE|TIENES|TENGO|TENDRAS)");
	var cuantos = RegExp("(CUANTOS|CUANTA|CUANTO|CUANTAS)");
    var edad = /AÑOS/;
	var saludar = RegExp("(HOLA|QUE TAL|CÓMO VA|COMO VA|CÓMO VAS|COMO ESTAS)");
	var bien = RegExp("(BIEN|TUANIS|EY HOLA)");
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
			mensaje = "IA: Hola!!! Todo bien. Y tú?";
			};
			if (r == 2) {
			mensaje = "IA: Hola!!! que tal brother bien. Y tú?";
			};
			if (r == 3) {
			mensaje = "IA: Excelente. Y tú?";
			};
			
        break;
		
		case 2:
        mensaje = "IA: Me alegra mucho!!!";
        break;
	  
        case 4:
		if (r == 1) {
			mensaje = "IA: Es una pregunta muy personal";
			};
			if (r == 2) {
			mensaje = "IA: Demasiado joven para ti";
			};
			if (r == 3) {
			mensaje = "IA: Tengo toda la edad que te puedas imaginar!!";
			};

         break;
        
		case 5:
			if (r == 1) {
				mensaje = "IA: Programa de computación diseñado para realizar determinadas operaciones que se consideran propias de la inteligencia humana, como el autoaprendizaje.";
				};
				if (r == 2) {
				mensaje = "IA: La inteligencia artificial es, en ciencias de la computación, la disciplina que intenta replicar y desarrollar la inteligencia y sus procesos implícitos a través de computadoras.";
				};
				if (r == 3) {
				mensaje = "IA: es la combinación de algoritmos planteados con el propósito de crear máquinas que presenten las mismas capacidades que el ser humano.";
				};
	
			 
        break;
		case 6:
			if (r == 1) {
				mensaje = "IA: python es un lenguaje de progarmacion de alto nivel";
				};
				if (r == 2) {
				mensaje = "IA: python se utiliza para machine learnig";
				};
				if (r == 3) {
				mensaje = "IA: python es una serpiente del amazonas";
				};
	
			 
        break;

        default:
		mensaje = "IA: No entiendo lo que me estás diciendo";

      }
    //   document.getElementById("respuesta").innerHTML = mensaje;
	  escribirChat(mensaje);
    }
	
	function escribirChat (texto) {
		//document.getElementById("areaChat").value += texto + "\r\r";
		document.getElementById("areaChat").value += `${texto} \r\r`;
	}
