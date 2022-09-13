/*var titulo = document.querySelector(".titulo");

titulo.addEventListener("click",mostrarMensaje);//escuchador de eventos
//al llamar a la funcion mostrarMensaje se puede adicionar los parentesis y si o si se tendra que pasar los parametros para que el evento click traiga o retorne un datos
function mostrarMensaje (){
    console.log("usted hizo click en el titulo");
}*/

var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){ //funcion anonima que se la suele usar en muchos eventos
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var nombre = form.nombre.value; //toma los valores cargador en el input
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tabla = document.querySelector("#tabla-pacientes");

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    //<tr><tr>
    //<td><td>
    //<td><td>
    //<td><td>
    //<td><td>
    //<td><td>

    nombreTd.textContent = nombre;//le asigno a esto que creamos anteriormente el valor que el usuario ingreso
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nombreTd);//asociamos el hijo nombreTd al padre pacienteTr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    tabla.appendChild(pacienteTr);//asociamos pacienteTr a la tabla .. eso quiere decir que los valores capturados se ingresan en la tabla

});

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
        var imc = peso / (altura * altura); //100 / 2 * 2 = 100 / 4 = 25 
        tdIMC.textContent = imc.toFixed(2);
    }
}

