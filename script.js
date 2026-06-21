const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // Change icône burger ↔ X
  if (navLinks.classList.contains('open')) {
    burger.textContent = "✖"; // X
  } else {
    burger.textContent = "☰"; // burger
  }
});
