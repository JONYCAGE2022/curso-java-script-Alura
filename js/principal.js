
var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");//aqui se accede al hijo "info-peso" a traves del padre "primer paciente"
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura) //100 / 2 * 2 = 100 / 4 = 25 
tdIMC.textContent = imc;

if (peso < 0) || (peso > 1000){
    console.log("Peso incorrecto");
}
