let listaDeAmigos = [];
let amigo;
let lista;
let indiceElemento = 0;
// Fucionalidades: 

// Agregar nombres: 
//  Los usuarios escribirán el nombre de un amigo en un campo de texto 
// Implementa una función para agregar amigos

// Validar entrada: 
//  Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

function agregarAmigo(){
    
    // Capturar el valor del campo de entrada: 
    // Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.    
    if (document.getElementById("resultado").innerHTML != "") {
        condicionesIniciales();
    }
    amigo = document.getElementById("amigo").value;
    
    // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if(validarEntrada(amigo)){
        // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        listaDeAmigos.push(amigo);
        mostrarAmigos(amigo);
    }

    // Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    document.getElementById("amigo").value="";
    
}

function validarEntrada(entrada){
    //el campo esta vacio
    if(entrada === ""){
        alert("Por favor, inserte un nombre.");
        return false;
    }
    //el campo solo tiene espacios
    else if (entrada.trim().length == 0) {
        alert("El nombre debe tener al menos un caracter ademas de espacios");
        return false;
    }
    // Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos
    //  verificar si el nombre se repite
    for (let index = 0; index < listaDeAmigos.length; index++) {
        const amigo = listaDeAmigos[index];
        if (amigo == entrada) {
            return false;
        }           
    }
    return true;
}

// Visualizar la lista: 
//  Los nombres ingresados aparecerán en una lista debajo del campo de entrada. 
// se agregarán a una lista visible al hacer clic en "Adicionar". 
// Los nombres ingresados se mostrarán en una lista visible en la página, 
// agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

function mostrarAmigos(amigoIngresado){
    // Tareas específicas:
    // Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    lista = document.getElementById("listaAmigos");

    //crear elementos de lista (<li>) para cada título.
    // Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    let elementoDeLista= document.createElement("li");
    elementoDeLista.innerHTML=amigoIngresado; 
    elementoDeLista.setAttribute("id",indiceElemento);
    indiceElemento ++;
    lista.appendChild(elementoDeLista);               
}

// Sorteo aleatorio: 

//  Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. 

// determinar quién es el "amigo secreto". 
// Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
function sortearAmigo(){
    // Tareas específicas:
    // Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (listaDeAmigos.length < 2) {
        alert("Ingresa almenos dos nombres");
    }
    else{
        // Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
        let indice = generarIndice(listaDeAmigos);

        // Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        let nombreSorteado = listaDeAmigos[indice];
        // Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
        limpiarListaHTML();
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
    }
    

}

function generarIndice(lista) {
    const limiteIndice = lista.length;
    return Math.floor(Math.random()*limiteIndice);
}

function limpiarListaHTML() {
 
    if (document.getElementById("resultado").innerHTML != "") {
        return;
    }
    lista = document.getElementById("listaAmigos");
    
    for (let index = 0; index < indiceElemento; index++) {      
        let elementoDeLista= document.getElementById(index);
        lista.removeChild(elementoDeLista);
    }
}

function condicionesIniciales() {
    listaDeAmigos = [];
    amigo = "";  
    limpiarListaHTML();
    document.getElementById("resultado").innerHTML = "";
    indiceElemento = 0;
}

