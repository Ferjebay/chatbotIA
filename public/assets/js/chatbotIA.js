// https://chatbot-ia-utb.herokuapp.com/

var elInput = document.getElementById('txtPregunta');
elInput.addEventListener('keyup', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13) {
    evaluarExpresion();
  }
});

const evaluarExpresion = () => {

  const msg = document.getElementById("txtPregunta");

  if (msg.value == "") {
    return alert("Por favor escribe algo");
  }

  mostrarMensaje(msg.value, "usuario");

  fetch(`https://chatbot-ia-utb.herokuapp.com/api/dialogflow?queryText=${msg.value}&sessionId="abcd1234"&languageCode="es"`)
  .then(response => response.json())
  .then(data =>{
    mostrarMensaje(data.msg, "bot")
  });

  msg.value = ""; 
}

const mostrarMensaje = (mensaje, usuario) => {
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    str_minuto = new String (minuto)

    if (str_minuto.length == 1)minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1) hora = "0" + hora
    
    var horaImprimible = hora + ":" + minuto + " HOY  ";
    
    const name = document.createElement("li");
    name.classList.add("clearfix");
    const divn = document.createElement("div");
    
    if (usuario == 'bot') {
      divn.classList.add("message-data");
    }else{
      divn.classList.add("message-data","text-right");
    }

    name.appendChild(divn);
    const div2 = document.createElement("div");

    if (usuario == 'bot') {
      div2.classList.add("message","my-message");
    }else{
      div2.classList.add("message","other-message","float-right");
    }

    const span = document.createElement("span");
    span.classList.add("message-data-time");
    span.textContent = horaImprimible;

    var url =  ( usuario == 'bot' ) ? 'assets/img/IArtificial.jpg' : 'assets/img/utb.png';
    
    var image = new Image();
    image.src = url;
    span.appendChild(image);

    div2.textContent = mensaje;
    name.appendChild(divn);
    divn.appendChild(span);
    name.appendChild(div2);
      
    const ins = document.querySelector(".fg");
    ins.insertBefore(name, ins.lastChild[0]);

    //Enviar el scroll al final
    var objDiv = document.getElementById("areaChat");
    objDiv.scrollTop = objDiv.scrollHeight;

    //Reproducir Audio cuando responda el bot
    if (usuario == 'bot') {
      var speech = new SpeechSynthesisUtterance();
    
      // Set the text and voice attributes.
      speech.text = mensaje;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      
      window.speechSynthesis.speak(speech);      
    }
}




