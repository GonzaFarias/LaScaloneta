
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');

  function highlightLink() {
    let fromTop = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
        links.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightLink);
  highlightLink();
});

window.addEventListener('load', function () {
  var body = document.querySelector('body');
  body.classList.remove('oculto');
  var verMasLink = document.getElementById('verMas');
  var hiddenMessages = Array.from(document.querySelectorAll('.messages .hidden'));
  var mostrarPorLote = 2;
  var mensajesMostrados = 0;

  function mostrarMensajes() {
    var mensajesRestantes = hiddenMessages.length - mensajesMostrados;
    var cantidadAMostrar = Math.min(mostrarPorLote, mensajesRestantes);

    for (var i = mensajesMostrados; i < mensajesMostrados + cantidadAMostrar; i++) {
      hiddenMessages[i].classList.remove('hidden');
    }

    mensajesMostrados += cantidadAMostrar;

    if (mensajesMostrados >= hiddenMessages.length) {
      verMasLink.style.display = 'none'; // Ocultar el enlace "Ver más" cuando se han mostrado todos los mensajes
    }
  }

  verMasLink.addEventListener('click', function (e) {
    e.preventDefault();
    mostrarMensajes();
  });

  // Ocultar los mensajes que no se muestran inicialmente
  for (var i = mostrarPorLote; i < hiddenMessages.length; i++) {
    hiddenMessages[i].classList.add('hidden');
  }
});
