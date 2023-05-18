let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");

function CalcularMaior(){
    let a = Number(valor1.value);
    let b = Number(valor2.value);

if (a > b){
    resultado.innerHTML = " \nO maior valor eh: " + valor1.value;
} else if ( a == b){
    resultado.innerHTML = "Os valores sao iguais"
} else{
    resultado.innerHTML = " \nO maior valor eh: " + valor2.value;
}
}

botao.onclick = function(){
    CalcularMaior();
}