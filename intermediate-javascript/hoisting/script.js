number = 65;

function logStuff() {
    console.log('Being hoisted to the top ');
}

console.log(number);
var number;  // var and regular function hoisting to the top in javascript

logStuff();

function logStuff() {
    console.log('Being hoisted to the top ');
}


// hoisting is not valid with let, const, arrow function






