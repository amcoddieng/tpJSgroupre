// // ici je vais declarer un tableau d'objet pour enregitrer les donnees
// let user = [
//     {nom : "amadou dieng", email : "dieng0097@gmail.com", status : "valider", date : "20/08/2025"},
//     {nom : "soda kebe", email : "dieng0097@gmail.com", status : "valider", date : "20/08/2025"},
//     {nom : "madiop wade", email : "dieng0097@gmail.com", status : "encours", date : "20/08/2025"},
//     {nom : "amadou dieng", email : "dieng0097@gmail.com", status : "encours", date : "20/08/2025"}
// ]




// Charger les données depuis le localStorage ou initialiser par défaut
let user = JSON.parse(localStorage.getItem("users")) || [
    {nom : "amadou dieng", email : "dieng0097@gmail.com", mdp : "amadou", status : "valider", date : "20/08/2025"},
    {nom : "soda kebe", email : "dieng0097@gmail.com", mdp : "amadou", status : "valider", date : "20/08/2025"},
    {nom : "madiop wade", email : "dieng0097@gmail.com", mdp : "amadou", status : "encours", date : "20/08/2025"},
    {nom : "amadou dieng", email : "dieng0097@gmail.com", mdp : "amadou", status : "invalide", date : "20/08/2025"}
];