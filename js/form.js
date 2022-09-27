var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar"); 
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);

    if (errores.length > 0){//si el tamaño de mis errores es mayor que cero, exhibir errores
        exhibirMensajesErrores(errores);
        return;//si entra directamente se corta y no me adiciona los datos
    }

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();

});

function capturarDatosPaciente(form){
    //capturando los datos del formulario
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente; 
}

function construirTr(paciente){
     
       var pacienteTr = document.createElement("tr");     
       pacienteTr.classList.add("paciente");
          
       pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
       pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
       pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
       pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
       pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

       return pacienteTr; 
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){//caso mi peso o altura este incorrecto
    var errores = []
    if (!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto")
    }
    if (!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecto");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensaje-errores");
     
    errores.forEach(function(error){
        var li = document.createElement("li");//crea el elemento li
        li.textContent = error;//entramos al contenido de li
        ul.appendChild(li);//asigna a padre ul el hijo li
    });
}