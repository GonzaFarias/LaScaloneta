
const comentariosCollection = db.collection("comentarios");
const commentForm = document.getElementById("commentForm");


// Función para enviar el comentario
function enviarComentario() {
  console.log("Enviando comentario...");

  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("msg").value;

  console.log("Nombre:", nombre);
  console.log("Mensaje:", mensaje);

  comentariosCollection
    .add({
      nombre: nombre,
      mensaje: mensaje,
      fecha: obtenerHoraActual(),
    })
    .then(() => {
      console.log("Comentario agregado con éxito");
      alert("Comentario enviado");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    })
}

// Escuchar cambios en la colección "comentarios" y actualizar la lista de comentarios
comentariosCollection.onSnapshot((snapshot) => {
  commentList.innerHTML = ""; // Limpiar la lista de comentarios antes de actualizarla

  const comentarios = [];

  snapshot.forEach((doc) => {
    const comentario = doc.data();
    comentarios.push(comentario);
  });

  comentarios.reverse(); // Invertir el orden de los comentarios para mostrar los más recientes primero

  comentarios.forEach((comentario) => {
    const li = document.createElement("li");
    li.classList.add('hidden');
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-info");

    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("username");
    usernameSpan.textContent = comentario.nombre;

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("time");
    timeSpan.textContent = comentario.fecha;

    userDiv.appendChild(usernameSpan);
    userDiv.appendChild(timeSpan);

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message-content");

    const messageP = document.createElement("p");
    messageP.textContent = comentario.mensaje;

    messageDiv.appendChild(messageP);

    li.appendChild(userDiv);
    li.appendChild(messageDiv);

    commentList.appendChild(li);
  });

  hiddenMessages = Array.from(document.querySelectorAll('.messages li.hidden'));
  mensajesMostrados = 0;
  mostrarMensajes();
});

// Función para mostrar los mensajes de a lotes
function mostrarMensajes() {
  const mensajesRestantes = hiddenMessages.length - mensajesMostrados;
  const cantidadAMostrar = Math.min(mostrarPorLote, mensajesRestantes);

  for (let i = mensajesMostrados; i < mensajesMostrados + cantidadAMostrar; i++) {
    hiddenMessages[i].classList.remove('hidden');
  }

  mensajesMostrados += cantidadAMostrar;
 
  document.getElementById('verMas').addEventListener('click', function (e) {
    e.preventDefault();
  });

  const hiddenItems = document.querySelectorAll('li.hidden');
  // Verifica si no hay más elementos ocultos
  if (hiddenItems.length == 0) {
    // Si no hay elementos ocultos, oculta el botón "verMas"
    document.getElementById('verMas').style.display = 'none';
  }
  else{
    document.getElementById('verMas').style.display = 'block';
  }
}

// Obtener referencia a los mensajes ocultos inicialmente
let hiddenMessages = Array.from(document.querySelectorAll('.messages li.hidden'));

// Definir la cantidad de mensajes a mostrar por lote
const mostrarPorLote = 4;

// Definir la cantidad de mensajes mostrados inicialmente
let mensajesMostrados = 0;


// Función para obtener la hora actual
function obtenerHoraActual() {
  const fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let dia = fecha.getDate();
  let year = fecha.getFullYear();
  let mes = fecha.getMonth();
  const ampm = hora >= 12 ? "PM" : "AM";
  hora = hora % 12;
  hora = hora ? hora : 12;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  const horaActual = dia +"/"+mes+"/"+year+ " - "+ hora + ":" + minutos + " " + ampm;
  return horaActual;
}