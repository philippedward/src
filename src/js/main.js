// Sélection des éléments
const carouselImages = document.querySelector(".carousel-img");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
const slideInterval = 3000; // Temps en millisecondes (3 secondes)

function updateCarousel() {
  // Change l'image affichée
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Met à jour l'état actif des points
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Fonction pour aller à l'image suivante
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % dots.length; // Revient au début après la dernière image
  updateCarousel();
}

// Fonction pour aller à l'image précédente
function goToPreviousSlide() {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length; // Va à la dernière image si on recule au début
  updateCarousel();
}

// Ajouter des écouteurs aux flèches
rightArrow.addEventListener("click", () => {
  goToNextSlide();
  resetAutoScroll(); // Réinitialise l'autoscroll après interaction
});

leftArrow.addEventListener("click", () => {
  goToPreviousSlide();
  resetAutoScroll(); // Réinitialise l'autoscroll après interaction
});

// Ajouter des écouteurs aux points
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
    resetAutoScroll(); // Réinitialise l'autoscroll après interaction
  });
});

// Autoscroll automatique
let autoScroll = setInterval(goToNextSlide, slideInterval);

// Réinitialiser l'autoscroll après une interaction utilisateur
function resetAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(goToNextSlide, slideInterval);
}

// Initialisation
updateCarousel();
