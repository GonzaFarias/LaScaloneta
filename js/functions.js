
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('verMas').addEventListener('click', function (e) {
    e.preventDefault();
  });
  
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
});


function resetForm() {
  document.getElementById("commentForm").reset();
}