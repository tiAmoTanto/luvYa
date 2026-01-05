// Seleziono tutti gli elementi con la classe 'cuore'
const cuori = document.querySelectorAll('.cuore');

// Applico l'animazione a ciascun cuore
cuori.forEach(cuore => {
  anime({
    targets: cuore, // Applico l'animazione a ogni cuore
    translateX: function() {
      return anime.random(-250, 250); // Movimento casuale sull'asse X
    },
    translateY: function() {
      return anime.random(-250, 250); // Movimento casuale sull'asse Y
    },
    duration: 1000, // Durata dell'animazione
    easing: 'easeInOutQuad', // Tipo di easing
    loop: true // Animazione in loop
  });
});