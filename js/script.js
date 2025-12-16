// Quanti km percorrerai?
const kilometri = prompt("Quanti kilometri percorrerai?");
console.log(kilometri);

// Quanti anni hai?
const età = prompt("Quanti anni hai?");
console.log(età);

// prezzo biglietto 0.21 * km
let prezzoPieno = kilometri * 0.21;
console.log(prezzoPieno);
// -20% per minore di 18 anni
let prezzoJunior = prezzoPieno - (prezzoPieno * 20) / 100;
console.log(prezzoJunior);
// -40% per > di 65 anni
let prezzoSenior = prezzoPieno - (prezzoPieno * 40) / 100;
console.log(prezzoSenior);

//alert con prezzo finale con 2 decimali e simbolo €
