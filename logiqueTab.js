

    let tab = document.getElementById('corpsTab');

    function afficherUsers() {
      tab.innerHTML = ""; // reset avant affichage
      user.forEach((Element, index) => {
        let tr = document.createElement('tr');
        let th1 = document.createElement('td');
        let th2 = document.createElement('td');
        let th3 = document.createElement('td');
        let th4 = document.createElement('td');
        let th5 = document.createElement('td');

        th1.textContent = Element.nom;
        th2.textContent = Element.email;
        th3.textContent = Element.date;

        th4.textContent = Element.status;
        th4.classList.add("status", Element.status === "valider" ? "active" : "inactive");

        let btnChange = document.createElement('button');
        btnChange.textContent = "Changer";
        btnChange.classList.add("edit");
        btnChange.addEventListener("click", () => {
          Element.status = (Element.status === "valider") ? "encours" : "valider";
          afficherUsers();
        });

        let btnDelete = document.createElement('button');
        btnDelete.textContent = "Supprimer";
        btnDelete.classList.add("delete");
        btnDelete.addEventListener("click", () => {
          user.splice(index, 1);
          afficherUsers();
        });

        th5.appendChild(btnChange);
        th5.appendChild(btnDelete);

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        tab.appendChild(tr);
      });
    }

    // Formulaire ajout utilisateur
    document.getElementById("userForm").addEventListener("submit", function(e) {
        let today = new Date();
        let jour   = today.getDate().toString().padStart(2, '0');
        let mois   = (today.getMonth() + 1).toString().padStart(2, '0');
        let annee  = today.getFullYear();
        let heures   = today.getHours().toString().padStart(2, '0');
        let minutes  = today.getMinutes().toString().padStart(2, '0');
        let secondes = today.getSeconds().toString().padStart(2, '0');

let dateFormatee = `${jour}/${mois}/${annee} ${heures}:${minutes}:${secondes}`;
        

        e.preventDefault();
        let newUser = {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        date: dateFormatee,
        status: "en cours de validation"
      };
      user.push(newUser);
      afficherUsers();
      this.reset();
    });

    // affichage initial
    afficherUsers();

