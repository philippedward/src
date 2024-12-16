// Sélectionner les éléments
const carouselImages = document.querySelectorAll(".carousel-img img");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

// Fonction pour changer l'image et mettre à jour les dots
function changeSlide(index) {
  // Mettre à jour l'image visible
  const offset = -index * 33.33; // Calculer le décalage en fonction de l'indice
  document.querySelector(
    ".carousel-img"
  ).style.transform = `translateX(${offset}%)`;

  // Mettre à jour les dots
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Fonction pour faire défiler automatiquement les images
function autoSlide() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  changeSlide(currentIndex);
}

// Changer d'image au clic sur un dot
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.slide);
    currentIndex = index;
    changeSlide(index);
  });
});


// Sélection du bouton en utilisant la classe correcte
const button = document.querySelector('button');

// Ajout d'un événement de clic sur le bouton
button.addEventListener('click', () => {
  // Ajout de la classe 'clicked' lorsque le bouton est cliqué
  button.classList.add('clicked');

  // Retirer la classe 'clicked' après une durée pour laisser l'animation se produire
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 700); // La durée ici doit être la même que celle de la transition CSS
});



//langue
// Sélection des éléments
const menuToggle = document.getElementById("menu-toggle");
const hiddenLinks = document.querySelector(".hidden-links");
const icon = document.querySelector("#hamburger-logo i");

// Gestion du clic
menuToggle.addEventListener("click", () => {
  // Basculer la classe 'expanded' pour les liens cachés
  hiddenLinks.classList.toggle("expanded");
  
  // Basculer la classe 'rotated' pour l'icône
  icon.classList.toggle("rotated");
});

