var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){//boton captura el clik
    var xhr = new XMLHttpRequest;//XMLHttpRequest es el responsable por realizar las requisiciones HTTP asincronicas con JavaScript.Para instanciar el objeto necesitamos usar la palabra new
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");//abro esa requisicion
    xhr.addEventListener("load",function(){//carga la variable respuesta 
        var errorAjax = document.querySelector("#error-ajax");
        if (xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);//creo la variable pacientes son los valores de la respuesta , parse convierte 
            pacientes.forEach(function(paciente){//iterar entre todos mis pacientes  y adiciono el paciente
                adicionarPacienteEnLaTabla(paciente);
            });
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
    });
    xhr.send();
});