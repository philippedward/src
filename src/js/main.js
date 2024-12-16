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

// Sélection de tous les boutons avec la classe "bouton"
const boutons = document.querySelectorAll(".bouton");

// Parcourir chaque bouton pour lui attacher un événement
boutons.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    // Ajouter la classe 'clicked' au bouton cliqué
    bouton.classList.add("clicked");

    // Retirer la classe 'clicked' après 700 ms pour laisser l'animation se produire
    setTimeout(() => {
      bouton.classList.remove("clicked");
    }, 700); // La durée ici doit correspondre à celle des transitions CSS
  });
});

//langue
// Sélection des éléments
const menuToggle = document.getElementById("menu-toggle");
const hiddenLinks = document.querySelector(".hidden-links");
const icon = document.querySelector(".awesome-arrow");

// Gestion du clic
menuToggle.addEventListener("click", () => {
  // Basculer la classe 'expanded' pour les liens cachés
  hiddenLinks.classList.toggle("expanded");

  // Basculer la classe 'rotated' pour l'icône
  icon.classList.toggle("rotated");
});

//carousel-vin
