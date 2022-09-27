/*Capturando dados*/
let nome = document.querySelector("#input-nome");
let altura = document.querySelector("#input-altura");
let peso = document.querySelector("#input-peso");

/*Funções*/
function calculo(a, b){
    return (a*a)/b;
}

/*Eventos*/
document.querySelector("#btn-calcular").addEventListener("click", function(){
    let divResultado = document.getElementById("resultado");
    divResultado.style.display = "block";

    let inNome = nome.value;
    let inAltura = altura.value;
    let inPeso = peso.value;

    console.log(calculo(inAltura, inPeso));
    
})