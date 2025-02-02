// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos la lista principal para agregar a nuestros amigos.
let amigos = [];

//Función principal para agregar amigos a la lista de amigos.
function agregarAmigo() {
 
    let friend = document.getElementById('amigo').value.trim(); //Obtenemos el valor del input del usuario.

    if (friend) { // Verificamos si existe un valor obtenido.
        amigos.push(friend); //Agregamos el valor a nuestra lista con "push".
        limpiarCaja(); //limpiamos el valor ingresado en el "input".
        mostrarAmigos(amigos);//Llamamos a la función que muestra los nombres agregados.
    } else { // Si no existe algún valor del input del usuario, mandamos un mensaje.
        alert('Por favor, inserte un nombre')
    }
}

function mostrarAmigos(amigos) {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Bucle para iterar en la lista de amigos.
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento <li> para cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Asignar el texto del nombre del amigo
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    }
}

// Función de ayuda para obtener un elemento del HTML y rellenarlo con un texto.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función de ayuda para limpiar el elemento "amigo" luego de un input.
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// Función para sortear el amigo.
function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Para ello obtenemos un numero aleatorio y lo damos a la posición de la lista.
    asignarTextoElemento(`resultado`, `El amigo sorteado es: ${amigoSorteado}`) // Llamamos a la función de ayuda para asignar texto a un elemento.
    return;
}


