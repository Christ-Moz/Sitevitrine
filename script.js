const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // ajoute/enlève la classe "open"
  });
}


const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Merci de remplir tous les champs !");
      return;
    }

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert("Veuillez entrer un email valide !");
      return;
    }

    alert("Votre message a bien été envoyé !");
    form.reset(); // vide le formulaire
  });
}
