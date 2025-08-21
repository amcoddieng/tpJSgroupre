// Récupérer les infos admin depuis le localStorage
let identifiantsValide = JSON.parse(localStorage.getItem("admin"));

// si pas connecté => rediriger vers form.html
if (identifiantsValide.connecte == "non") {
  window.location.href = "form.html"; 
}

// fonction pour sauvegarder l'admin dans le localStorage
// function saveAdmin() {
//   localStorage.setItem("admin", JSON.stringify(identifiantsValide));
// }





let tab = document.getElementById('corpsTab');

// 🔹 Fonction pour sauvegarder dans localStorage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(user));
}

// 🔹 Affichage des utilisateurs
function afficherUsers() {
  tab.innerHTML = ""; 
  user.forEach((Element, index) => {
    let tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${Element.nom}</td>
      <td>${Element.email}</td>
      <td>${Element.date}</td>
      <td class="status ${Element.status === "valider" ? "active" : "inactive"}">${Element.status}</td>
      <td>
        <button class="edit">Changer</button>
        <button class="delete">Supprimer</button>
      </td>
    `;

    // Bouton changer status
    tr.querySelector(".edit").addEventListener("click", () => {
      let v = confirm("Voulez-vous valider ?");
      Element.status = v ? "valider" : "invalide";
      saveUsers();
      afficherUsers();
    });

    // Bouton supprimer
    tr.querySelector(".delete").addEventListener("click", () => {
      let c = confirm("Voulez-vous supprimer cet utilisateur ?");
      if (c) {
        user.splice(index, 1);
        saveUsers();
        afficherUsers();
      }
    });

    tab.appendChild(tr);
  });
}
// h==================================================================================================h
// 🔹 Vérification temps réel des mots de passe
let ecoute1 = document.getElementById('mdp1');
let ecoute2 = document.getElementById('mdp2');
let msg = document.getElementById('msg');   
let msg1 = document.getElementById('msg1'); 

function verifierLongueur() {
  let valeur = ecoute1.value;

  // Compter uniquement les lettres
  let nbLettres = (valeur.match(/[a-zA-Z]/g) || []).length;

  if (valeur.length === 0) {
      msg1.textContent = "";
  } else if (valeur.length < 8) {
      msg1.textContent = "Le mot de passe doit contenir au moins 8 caractères";
      msg1.style.color = "orange";
      document.getElementById('bb').disabled = true;

  } else if (nbLettres < 2) {
      msg1.textContent = "Le mot de passe doit contenir au moins 2 lettres";
      msg1.style.color = "orange";
      document.getElementById('bb').disabled = true;

  } else {
      msg1.textContent = "Mot de passe valide ";
      msg1.style.color = "green";
      document.getElementById('bb').disabled = false;

  }
}


function verifierCorrespondance() {
  if (ecoute2.value.length === 0) {
      msg.textContent = "";
  } else if (ecoute1.value !== ecoute2.value) {
      msg.textContent = "Les mots de passe ne correspondent pas";
      msg.style.color = "red";
  } else {
      msg.textContent = "Les mots de passe correspondent";
      msg.style.color = "green";
  }
}

// Vérifier en temps réel
ecoute1.addEventListener('input', function() {
  verifierLongueur();
  verifierCorrespondance();
});

ecoute2.addEventListener('input', function() {
  verifierLongueur();
  verifierCorrespondance();
});



// 🔹 Formulaire ajout utilisateur
document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let nom = document.getElementById('nom');
    let email = document.getElementById('email');

    if (nom.value.trim() === "" || email.value.trim() === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    if (ecoute1.value === "" || ecoute2.value === "" || ecoute1.value !== ecoute2.value) {
        alert("Vérifiez vos mots de passe !");
        return;
    }

    let today = new Date();
    let dateFormatee = today.toLocaleDateString("fr-FR") + " " + today.toLocaleTimeString("fr-FR");

    let newUser = {
      nom: nom.value,
      email: email.value,
      date: dateFormatee,
      status: "encours",
      mdp : ecoute1.value
    };

    user.push(newUser);
    saveUsers();
    afficherUsers();

    alert("Utilisateur ajouté avec succès !");
    this.reset();
    msg.textContent = "";
});

// 🔹 affichage initial
afficherUsers();
