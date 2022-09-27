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
    var inAltura = altura.value;
    var inPeso = peso.value;

    console.log(inNome + " seu IMC é " + calculo(inAltura, inPeso));    
});