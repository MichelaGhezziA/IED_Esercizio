<<<<<<< HEAD:Esercizi casa/Esercizio2/scriptmain.js


alert('Choose the operation you want:');


var mathematics = prompt('+ - / *');


var firstNumber = prompt('Insert the first number here:');
firstNumber = parseInt(firstNumber);

var secondNumber = prompt('Insert the second number here:');
secondNumber = parseInt(secondNumber);


function sum(){
    var ris = firstNumber + secondNumber;
    alert('The result is: ' + ris);
}

function minus(){
    var ris = firstNumber - secondNumber;
    alert('The result is: ' + ris);
}

function division(){
    var ri = firstNumber / secondNumber;
    alert('The result is: ' + ris);
}

function moltiplication(){
    var ris = firstNumber * secondNumber;
    alert('The result is: ' + ris);
}

function result(){
    switch(mathematics) {
        case "+": 
            sum();
            break;
        case "-": 
            minus();
            break;
        case "/": 
            division();
            break;
        case "*": 
            moltiplication();
            break;
    }

}

result();


=======


alert('Choose the operation you want:');


var mathematics = prompt('+ - / *');


var firstNumber = prompt('Insert the first number here:');
firstNumber = parseInt(firstNumber);

var secondNumber = prompt('Insert the second number here:');
secondNumber = parseInt(secondNumber);


function sum(){
    var ris = firstNumber + secondNumber;
    alert('The result is: ' + ris);
}

function minus(){
    var ris = firstNumber - secondNumber;
    alert('The result is: ' + ris);
}

function division(){
    var ris = firstNumber / secondNumber;
    alert('The result is: ' + ris);
}

function moltiplication(){
    var ris = firstNumber * secondNumber;
    alert('The result is: ' + ris);
}

function result(){
    switch(mathematics) {
        case "+": 
            sum();
            break;
        case "-": 
            minus();
            break;
        case "/": 
            division();
            break;
        case "*": 
            moltiplication();
            break;
    }

}

result();


>>>>>>> 4d3a55f9338c68aa635611a09f8d06e30e1fb110:Esercizio2/scriptmain.js
