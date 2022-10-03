var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){//event es solo el evento 
    event.target.parentNode.remove()//elimina conparentNode al padre asi se sborraria la fila en ves de campo por campo
});

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){//doble clic
        this.remove()//this es dueño creador del evento
    })
});
*/