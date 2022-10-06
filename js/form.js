var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar"); 
    var paciente = capturarDatosPaciente(form);

    var errores = validarPaciente(paciente);
    console.log(errores);

    if (errores.length > 0){//si el tamaño de mis errores es mayor que cero, exhibir errores
        exhibirMensajesErrores(errores);
        return;//si entra directamente se corta y no me adiciona los datos
    }

    adicionarPacienteEnLaTabla(paciente);
    form.reset();

    var mensajesErrores = document.querySelector("#mensaje-errores");
    mensajesErrores.innerHTML = "";//es una propiedad, no una funcion, por lo tanto, utilñizamos un simbolo = para atribuirle un nuevo contenido

});

function adicionarPacienteEnLaTabla(paciente){//funcion que adiciona un paciente en la tabla
    var pacienteTr = construirTr(paciente);//creamos la etiqueta paciente
    var tabla = document.querySelector("#tabla-pacientes");//capturamos la tabla
    tabla.appendChild(pacienteTr);//le adicionamos este paciente tr a la tabla
}

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
    if (paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if (paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if (paciente.altura.length == 0){
        errores.push("La altura no puede estar vacia");
    }
    if (paciente.gordura.length == 0){
        errores.push("El %gordura no puede estar vacio");
    }
    if (!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if (!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecto");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensaje-errores");
     
    errores.forEach(function(error){//el forEach contiene todo el array de errores y pasa por todos ellos hasta encontrar el error.
        var li = document.createElement("li");//crea el elemento li
        ul.innerHTML = "";//inserta el nuevo valor 
        li.textContent = error;//entramos al contenido de li
        ul.appendChild(li);//asigna a padre ul el hijo li
    });
}