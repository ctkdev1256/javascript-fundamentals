const text = 'Hello-World';

// length
console.log(text.length);

// includes
console.log(text.includes('orld'));

// upperCase
console.log(text.toUpperCase());

// lowerCase
console.log(text.toLowerCase());

// trim
// const text = 'Hello-World                  ';
console.log(text.trim());

// substring - index(not including number 5 letter/character)
console.log(text.substring(-4, 2));

// chaining 


// Convert string into float
let num = '10.12';
let intNumber = parseFloat(num);
console.log(intNumber);

// Convert string into float
var values = "554,20".split(",")
var v1 = parseFloat(values[0])
var v2 = parseFloat(values[1])

console.log(v1) //554
console.log(v2) //20
console.log(values) // split values of string into array: (2) ['554', '20']