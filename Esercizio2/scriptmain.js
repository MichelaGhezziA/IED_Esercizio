

alert('Choose the mathematical operation you want:');


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


