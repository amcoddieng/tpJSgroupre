// si identifiantsValides.connecte == "non" il sera redirigé vers a.html
let identifiantsValide = JSON.parse(localStorage.getItem("admin"))

// si pas connecté => rediriger vers form.html
if (identifiantsValide.connecte === "non") {
  window.location.href = "form.html"; 
}
//deconnection
function deconnect(){
    identifiantsValide.connecte === "non"
    saveAdmin()
    window.location.href = "form.html"; 
}

// Charger les données depuis le localStorage ou initialiser par défaut
let user = JSON.parse(localStorage.getItem("users")) || [
    {nom : "amadou dieng", email : "dieng0097@gmail.com", mdp : "amadou", status : "valider", date : "20/08/2025"},
    {nom : "soda kebe", email : "dieng0097@gmail.com", mdp : "amadou", status : "valider", date : "20/08/2025"},
    {nom : "madiop wade", email : "dieng0097@gmail.com", mdp : "amadou", status : "encours", date : "20/08/2025"},
    {nom : "amadou dieng", email : "dieng0097@gmail.com", mdp : "amadou", status : "invalide", date : "20/08/2025"}
];

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

// 🔹 Vérification temps réel des mots de passe
let ecoute1 = document.getElementById('mdp1');
let ecoute2 = document.getElementById('mdp2');
let msg = document.getElementById('msg');

ecoute2.addEventListener('input', function(){ 
  if (ecoute2.value.length === 0) {
      msg.textContent = ""; 
  } 
  else if (ecoute1.value !== ecoute2.value) {
      msg.textContent = "Les mots de passe ne correspondent pas";
      msg.style.color = "red";
  } 
  else {
      msg.textContent = "Les mots de passe correspondent";
      msg.style.color = "green";
  }
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
