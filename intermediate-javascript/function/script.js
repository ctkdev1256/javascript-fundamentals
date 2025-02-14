// const squareMeter = 1000
// price = 100

// function calculatorPrice(squareMeter) {
//     const price = 2000 * squareMeter
//     // console.log(price)
//     return price
// }

// let total = calculatorPrice(3000)
// console.log(total)

// // Alternative to write a function: assign it to a var with anonymous parameters
// var totalSquareMeters = function(squareMeter) {
//     const result = 500 * squareMeter
//     return result
// }

// console.log('Total square meter: ' + totalSquareMeters(300) + ' ' + 'footage.')

//call another function
// const saidHello = () => {
//     console.log('Hello');
// };

// const addNumbers = () => {
//     const newNumber = 100;
//     console.log(newNumber)
//     saidHello();
//     console.log(1255000);
// };

// addNumbers();

//refactoring
// const logGreetings = () => {
//     console.log('Hey');
//     console.log('Hey');
//     console.log('hi');
// }

// const doSomething = () => {
//     console.log(2553);
//     console.log(3589);
//     logGreetings();
// }

// const doNothing = () => {
//     console.log(true);
//     console.log(false);
//     logGreetings();
// }

// doSomething();
// doNothing();
// logGreetings();

//early return / stop  function execution
const checkIfValid = (number) => {
    if (number < 30 ) {
        console.log('Denied');
        return;
    } 
    console.log('Approved');
};

checkIfValid(15);




