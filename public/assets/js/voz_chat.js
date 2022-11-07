//configuracion de voz
const btnInicio = document.querySelector('#btnInicio');
const btnfin = document.querySelector('#btnfin');
const texto_voz = document.querySelector('#txtPregunta');

let recognition = new webkitSpeechRecognition();
recognition.lang ='es-ES';
recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult = (event) =>{
    const results = event.results;
    const frase = results[results.length -1][0].transcript;
    texto_voz.value += frase;
    console.log(texto_voz);
}

// recognition.onnomatch = function(event) {
// 	diagnostic.texto_voz = 'no se reconoce';
//   }

btnInicio.addEventListener('click', () =>{
recognition.start();
//event.stopPropagation();
});
btnfin.addEventListener('click', () =>{
    recognition.abort();
});