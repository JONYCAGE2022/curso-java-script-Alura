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

    var paciente = capturarDatosPacientes(form);
    console.log(paciente);
    
    var tabla = document.querySelector("#tabla-pacientes");

    //crear los tds y un tr
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

    //asignar los valores a la propiedad  textContent
    nombreTd.textContent = paciente.nombre;//le asigno a esto que creamos anteriormente el valor que el usuario ingreso
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc; 

    //asignacion al tr de los td, y la tabla el tr 
    pacienteTr.appendChild(nombreTd);//asociamos el hijo nombreTd al padre pacienteTr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);//asociamos pacienteTr a la tabla .. eso quiere decir que los valores capturados se ingresan en la tabla

});
//clase seria paciente con caracteristicas que tiene paciente (abtraccion) = {nombre,peso,altura,%de godrura}
//objeto seria el paciente llevado a la realidad(instancia, representando algo del mundo real), por ej: paciente 1 = {Juan,70,1.70,18}
function capturarDatosPacientes(form){
    //capturando los datos del formulario 
    var paciente = {
        nombre : form.nombre.value, //toma los valores cargador en el input
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}