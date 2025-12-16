// Quanti km percorrerai?

const kilometri = prompt("Quanti kilometri percorrerai?");
console.log(kilometri);

// Quanti anni hai?

const età = prompt("Quanti anni hai?");
console.log(età);

// prezzo biglietto 0.21 * km: se età compresa tra 18 e 64 = prezzoPieno

let prezzoPieno = kilometri * 0.21;
console.log(prezzoPieno);
let minimo = 18;
let massimo = 64;

if (età >= minimo && età <= massimo) {
  alert(`Il prezzo del biglietto è ${prezzoPieno}`);
}

// -20% per minore di 18 anni: se età è minore di 18 = prezzoJunior

let prezzoJunior = prezzoPieno - (prezzoPieno * 20) / 100;
console.log(prezzoJunior);

if (età < 18) {
  alert(`Il prezzo del biglietto è ${prezzoJunior}`);
}

// -40% per > di 65 anni: se età è maggiore di 65 = prezzoSenior

let prezzoSenior = prezzoPieno - (prezzoPieno * 40) / 100;
console.log(prezzoSenior);

if (età > 65) {
  alert(`Il prezzo del biglietto è ${prezzoSenior}`);
}
