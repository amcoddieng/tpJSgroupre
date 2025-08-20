// Identifiants valides par défaut
const identifiantsValides = {
  email: "utilisateur@exemple.com",
  motDePasse: "motdepasse123"
};

// Récupération des éléments du formulaire
const champEmail = document.getElementById("email");
const champMotDePasse = document.getElementById("motdepasse");
const erreurEmail = document.getElementById("emailErreur");
const erreurMotDePasse = document.getElementById("motdepasseErreur");
const messageGlobal = document.getElementById("message");

// Événement lors de la soumission du formulaire
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  const email = champEmail.value.trim();
  const motDePasse = champMotDePasse.value.trim();

  // Réinitialisation des messages
  erreurEmail.textContent = "";
  erreurMotDePasse.textContent = "";
  messageGlobal.textContent = "";
  messageGlobal.style.color = "#008080";

  let estValide = true;

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Vérification du champ email
  if (email === "") {
    erreurEmail.textContent = "Veuillez entrer votre email.";
    estValide = false;
  } else if (!regexEmail.test(email)) {
    erreurEmail.textContent = "Format d'email invalide.";
    estValide = false;
  }

  // Vérification du mot de passe
  if (motDePasse === "") {
    erreurMotDePasse.textContent = "Veuillez entrer votre mot de passe.";
    estValide = false;
  }

  // Si tout est bon
  if (!estValide) return;

  if (email === identifiantsValides.email && motDePasse === identifiantsValides.motDePasse) {
    // Redirection en cas de succès
    window.location.href = "form1.html";
  } else {
    messageGlobal.textContent = "Email ou mot de passe incorrect.";
  }
});

// Nettoyage des erreurs en temps réel
champEmail.addEventListener("input", function () {
  erreurEmail.textContent = "";
});

champMotDePasse.addEventListener("input", function () {
  erreurMotDePasse.textContent = "";
});
