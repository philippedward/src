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

// Sélection du bouton
const button = document.getElementById("colorButton");

// Ajout d'un événement click
button.addEventListener("click", () => {
  // Ajouter la classe "clicked" pour changer la couleur
  button.classList.add("clicked");

  // Revenir à la couleur rouge après la transition
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 500); // Durée de la transition (0.5s)
});
