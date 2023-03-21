const scrollUpBtn = document.getElementById('scrollUpBtn');

scrollUpBtn.addEventListener('click', function () {
  scrollUp();
});

function scrollUp() {
  // Obtenir la position actuelle de la page
  let currentPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  // Définir la position à laquelle on souhaite déplacer la page
  let targetPosition = 0;

  // Crée une animation pour déplacer la page
  let animation = setInterval(function () {
    // Calcule la distance à parcourir à chaque intervalle
    let distance = (targetPosition - currentPosition) / 10;

    // Si la distance est très petite, arrête l'animation
    if (Math.abs(distance) < 1) {
      clearInterval(animation);
      window.scrollTo(0, targetPosition);
    } else {
      currentPosition += distance;
      window.scrollTo(0, currentPosition);
    }
  }, 16);
}
