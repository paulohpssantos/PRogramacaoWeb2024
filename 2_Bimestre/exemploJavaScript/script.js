let titulo = document.querySelector("#titulo");
let campoTexto = document.querySelector("#campoTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto(){
    let textoDigitado = String(campoTexto.value); 
    titulo.textContent = textoDigitado;
}

btTrocarTexto.onclick = function(){
    alterarTexto();
}