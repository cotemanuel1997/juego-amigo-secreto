let listaDeAmigos = [];
let amigo;
// Fucionalidades: 

// Agregar nombres: 

//  Los usuarios escribirán el nombre de un amigo en un campo de texto 

// Validar entrada: 

//  Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

// Visualizar la lista: 

//  Los nombres ingresados aparecerán en una lista debajo del campo de entrada. 

// se agregarán a una lista visible al hacer clic en "Adicionar". 

// Los nombres ingresados se mostrarán en una lista visible en la página, 

 

// Sorteo aleatorio: 

//  Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. 

// determinar quién es el "amigo secreto". 

// Implementa una función para agregar amigos

function agregarAmigo(){


    // Capturar el valor del campo de entrada: 
        // Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    amigo = document.getElementById("amigo").value;
    // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if(validarEntrada(amigo)){
        // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        listaDeAmigos.push(amigo);
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
    return true;
}
