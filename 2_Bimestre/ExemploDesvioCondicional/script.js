let ipMedia = document.querySelector("#ipMedia");
let btVerificar = document.querySelector("#btVerificar");

function verificarAprovacao(){
    let media = Number(ipMedia.value);

    //Desvio condicional
    if(media >= 6.0){
        alert("O Aluno está APROVADO!!!!");
    }else{
       alert("O Aluno está REPROVADO!!!");     
    }

}

btVerificar.onclick = function(){
    verificarAprovacao();
}