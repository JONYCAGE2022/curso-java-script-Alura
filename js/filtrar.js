var campoFiltro = document.querySelector("#filtrar-tabla")//captura el id filtrar.tabla que esta en el index

campoFiltro.addEventListener("input",function(){
    console.log(this.value);//imprimir el valor que estoy ingresando en el input

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){//si hay algo es escrito en la caja de texto haceme la iteracion de comparacion con cada uno de los pacientes de la tabla
        for (var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i]
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value,"i");//regExp permite realizar una busqueavanzada donde no importa si sea mayusucla o minuscula la palabra igual la relaciona 
            //regexp necesita en el primer parametro el padron y el segundo el flags que en este caso es i 
    
            if (!expresion.test(nombre)){//si el nombre es igual al valor de la variable, que llame a la clase invisible y sino que remueve esa clase
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }
    
            /*var comparar = nombre.substring(0, this.value.length);
            var compararMinuscula = comparar.toLowerCase();
            var valorDigitadoMinuscula = this.value.toLowerCase();
            if(!(valorDigitadoMinuscula  == compararMinuscula )){
            paciente.classList.add("invisible");
            } else {
            paciente.classList.remove("invisible");
            } */
            //este codigo es otra forma para hacer un fiultro sin necesidad de usar expresiones regulares



            //console.log(nombre);//imprimir el nombre que lo estoy caputarando de cada uno de mis pacientes
    
        }
    }else{//si no hay nada volveme todo los pacientes a mostrar osea elimianme el invisible
        for (var i = 0; i < pacientes.length ; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }

    
})//escuchador de eventos