// Récupérer les éléments
const form = document.getElementById("formPage");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const mdp = document.getElementById("mdp");
const mdp2 = document.getElementById("mdp2");

// Fonction pour afficher un message d'erreur
function showError(input, message) {
    // Supprimer ancien message s'il existe
    let error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
        error.remove();
    }

    // Créer le message d'erreur
    const small = document.createElement("small");
    small.classList.add("error");
    small.style.color = "red";
    small.textContent = message;

    // Ajouter juste après l'input
    input.insertAdjacentElement("afterend", small);
}

// Fonction pour supprimer erreur si c'est bon
function clearError(input) {
    let error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
        error.remove();
    }
}

// Vérification du formulaire
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche l’envoi si erreurs

    let valid = true;

    // Vérifier Nom
    if (nom.value.trim() === "") {
        showError(nom, "Le nom est obligatoire");
        valid = false;
    } else {
        clearError(nom);
    }

    // Vérifier Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        showError(email, "L'email est obligatoire");
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        showError(email, "Email invalide");
        valid = false;
    } else {
        clearError(email);
    }

    // Vérifier Mot de passe
    if (mdp.value.trim() === "") {
        showError(mdp, "Mot de passe obligatoire");
        valid = false;
    } else {
        clearError(mdp);
    }

    // Vérifier Confirmation
    if (mdp2.value.trim() === "") {
        showError(mdp2, "Veuillez confirmer le mot de passe");
        valid = false;
    } else if (mdp.value.trim() !== mdp2.value.trim()) {
        showError(mdp2, "Les mots de passe ne correspondent pas");
        valid = false;
    } else {
        clearError(mdp2);
    }

    // Si tout est bon
    if (valid) {
        alert("Formulaire envoyé avec succès ✅");
        form.submit(); // envoie réellement le formulaire
    }
});
