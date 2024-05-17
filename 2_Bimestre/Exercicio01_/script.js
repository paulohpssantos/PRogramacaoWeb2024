let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado");


function somarNumeros(){
    //retirando os valores digitados nos inputs
    let valor1 = Number(ipValor1.value);
    let valor2 = Number(ipValor2.value); 
    
    //fazendo a soma dos números
    let resultado = valor1 + valor2;

    //exibindo o resultado na tela
    h3Resultado.textContent = resultado;
}

btSomar.onclick = function(){
    somarNumeros();
}

