const btnInicio = document.querySelector('#btnInicio');
const btnfin = document.querySelector('#btnfin');
const texto = document.querySelector('#texto');

let recognition = new webkitSpeechRecognition();
recognition.lang ='es-ES';
recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult = (event) =>{
    const results = event.results;
    const frase = results[results.length -1][0].transcript;
    texto.value += frase;
    console.log(texto);
}


btnInicio.addEventListener('click', () =>{
recognition.start();
});
btnfin.addEventListener('click', () =>{
    recognition.abort();
});