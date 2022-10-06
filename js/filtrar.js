var campoFiltro = document.querySelector("#filtrar-tabla")//captura el id filtrar.tabla que esta en el index
console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
    console.log("Escribieron en el input");
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");
    console.log(pacientes);
})//escuchador de eventos