//paciente es un objeto 
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i<pacientes.length; i++){
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");//aqui se accede al hijo "info-peso" a traves del padre "primer paciente"
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = true;
    alturaEsValida = true;

    //ver logica de matematica aplicada a la informática
    //verdadero o falso --> verdadero
    if ((peso < 0) || (peso > 1000)){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";   //imprime en la tabla el msj  
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");//adicioname la clase paciente-incorrecto al objeto paciente
    }
    //verdadero o falso --> verdadero
    if ((altura < 0) || (altura > 3.00)){
        console.log("Altura incorrecto");
        tdIMC.textContent = "Altura incorrecto ";  //imprime en la tabla el msj
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");//paciente.style.background_color = "blue"; por si se quiere cambiar de color directamente desde javascript 
    }
    //verdadero Y verdadero --> verdadero
    // verdadero y falso --> falso
    if (pesoEsValido && alturaEsValida){  
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}

function calcularIMC(peso,altura){
    var imc = peso / (altura*altura);//100 / 2 * 2 = 100 / 4 = 25
    return imc.toFixed(2);
}

