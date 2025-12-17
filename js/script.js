// Quanti km percorrerai?

const kilometri = parseInt(prompt("Quanti kilometri percorrerai?"));
console.log(kilometri, typeof kilometri);

// Quanti anni hai?

const età = parseInt(prompt("Quanti anni hai?"));
console.log(età, typeof età);

// prezzo biglietto 0.21 * km: se età compresa tra 18 e 64 = prezzoPieno

let prezzoPieno = kilometri * 0.21;
console.log(prezzoPieno);
let minimo = 18;
let massimo = 64;

// -20% per minore di 18 anni: se età è minore di 18 = prezzoJunior

let prezzoJunior = prezzoPieno - (prezzoPieno * 20) / 100;
console.log(prezzoJunior);

// -40% per > di 65 anni: se età è maggiore di 65 = prezzoSenior

let prezzoSenior = prezzoPieno - (prezzoPieno * 40) / 100;
console.log(prezzoSenior);

// Output
if (età >= minimo && età <= massimo) {
  alert(`Il prezzo del biglietto è ${prezzoPieno.toFixed(2)} €`);
} else if (età < 18) {
  alert(`Il prezzo del biglietto è ${prezzoJunior.toFixed(2)} €`);
} else {
  alert(`Il prezzo del biglietto è ${prezzoSenior.toFixed(2)} €`);
}
