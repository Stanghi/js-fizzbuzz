/*
Scrivi un programma che stampi in console i numeri da 1 a 100,

ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

const container = document.querySelector('.container');
const limit = 100;

for(let i = 1; i <= limit; i++){
    // CREO IL DIV
    const box  =  document.createElement('div');

    // AGGIUNGO CLASSE ms-box
    box.className = 'ms-box';

    // SCRIVO DENTRO IL DIV
    // CALCOLO PER DETERMINARE Fizz, Buzz e FizzBuzz
    if (i % 15 === 0){
        box.innerHTML = "FizzBuzz";
        container.append(box);
        box.classList.add('fizz-buzz');
        console.log("FizzBuzz");   
    }
    else if (i % 3 === 0) {
        box.innerHTML = "Fizz";
        container.append(box);
        box.classList.add('fizz');
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        box.innerHTML = "Buzz";
        container.append(box);
        box.classList.add('buzz');
        console.log("Buzz");
    }
    else{
        box.innerHTML = i;
        container.append(box);
        console.log(i);
    } 
}