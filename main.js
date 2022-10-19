// chiedo quanti km desidera percorrere
let km = prompt("quanti km desidera percorrere?");
km = parseInt(km)


// chiedo l'eta
let age = prompt("Please enter your age");
age = parseInt(age)


// prezzo al km standard
const prezzoKm = 0.21


// calcolo prezzo del biglietto
let prezzoBiglietto = km * prezzoKm;


// sconto del 20%
let primoSconto = prezzoBiglietto * 0.2;

// calcolo biglietto con il primo sconto
let prezzoBigliettoAbambino = prezzoBiglietto - primoSconto;


// sconto del 40%
let secondoSconto = prezzoBiglietto * 0.4;

// calcolo biglietto con il secondo sconto
let prezzoBigliettoAnziano = prezzoBiglietto - secondoSconto;

// if else if
if(age <= 18){
    prezzoBiglietto =  prezzoBigliettoAbambino.toFixed(2);
} else if(age >= 65){
    prezzoBiglietto = prezzoBigliettoAnziano.toFixed(2);
} else{
    prezzoBiglietto = prezzoBiglietto
}

// inner html
document.getElementById('prezzo').innerHTML = "Il prezzo del biglietto è: "+ prezzoBiglietto + "€";


