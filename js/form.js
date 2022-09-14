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
    alturaTd = document.createElement("td");
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
    imcTd.textContent = calcularIMC(peso,altura);

    pacienteTr.appendChild(nombreTd);//asociamos el hijo nombreTd al padre pacienteTr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);//asociamos pacienteTr a la tabla .. eso quiere decir que los valores capturados se ingresan en la tabla

});