const MILK_FOR_A_PORTION_ML = 60;



function printMilkbyPieEaters(peopleNumber){

    var milkTotal = peopleNumber * MILK_FOR_A_PORTION_ML;

    console.log('il latte necessario per' + peopleNumber + 'persone corrisponde a ' +milkTotal+ 'ml.');

}


function printMilkbyPieEaters(){

for(var peopleNumber = 1; peopleNumber < 10; peopleNumber++ ){

    printMilkbyPieEaters(peopleNumber);
}
}

//printMilkQuantities();

var [names] = ['Carl','Bill', 'Steve', 'Mark'];

function printTarget(name){
    console.log('Target of today is customer' + name);
}


for (var nameIndex in names){
    var name = names[nameIndex];
    printTarget(name);
}