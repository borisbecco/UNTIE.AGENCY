$(document).ready(function () {
  // Oculta el contenido principal de la página
  $("body").hide();

  // Muestra la página gradualmente con una animación
  $("body").fadeIn(50, function () {
    // Muestra el contenido de a poco después de que la página se haya mostrado completamente
    $(".navbar")
      .hide()
      .each(function (index) {
        $(this)
          .delay(300 * index)
          .fadeIn(2000); // 300 es el tiempo de retraso entre cada elemento, 500 es la duración de la animación de cada elemento
      });
    $(".textbar")
      .hide()
      .each(function (index) {
        $(this)
          .delay(300 * index)
          .fadeIn(3000); // 300 es el tiempo de retraso entre cada elemento, 500 es la duración de la animación de cada elemento
      });
    $(".main-tittle")
      .hide()
      .each(function (index) {
        $(this)
          .delay(300 * index)
          .fadeIn(4000); // 300 es el tiempo de retraso entre cada elemento, 500 es la duración de la animación de cada elemento
      });
  });
});

// carousel

let slides = document.querySelectorAll(".image-slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

//togglebar

const toggleButton = document.getElementById("toggleButton");

document.getElementById("toggleButton").addEventListener("click", function () {
  const overlay = document.getElementById("overlay");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  toggleButton.classList.toggle("newPosition");
});

document.getElementById("overlay").addEventListener("click", function () {
  if (!event.target.closest("#nav-content")) window.location.href = "index2.html"; //
});


// textbar

const textBar = document.querySelector(".textbar-text");

function animate() {
  textBar.classList.add("animate");
}

function resetPosition() {
  textBar.style.left = "0";
}

function checkPosition() {
  const currentPosition = parseInt(textBar.style.left, 10);
  const elementWidth = parseInt(getComputedStyle(textBar).width, 10);

  if (currentPosition >= window.innerWidth - elementWidth) {
    resetPosition();
  }
}

setInterval(() => {
  checkPosition();
  textBar.style.left = `${parseInt(textBar.style.left, 10) + 1}px`;
}, 10);
setInterval(animate, 0);
