var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){//event es solo el evento 
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);//elimina conparentNode al padre asi se sborraria la fila en ves de campo por campo
});//setTimeout es un intervalo de tiempo antes de que se ejecute la siguiente instruccion

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){//doble clic
        this.remove()//this es dueño creador del evento
    })
});
*/