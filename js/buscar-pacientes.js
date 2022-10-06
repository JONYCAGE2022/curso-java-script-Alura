var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    console.log("Buscando paciente...");
    var xhr = new XMLHttpRequest;//XMLHttpRequest es el responsable por realizar las requisiciones HTTP asincronicas con JavaScript.Para instanciar el objeto necesitamos usar la palabra new
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
    });
    xhr.send()
});