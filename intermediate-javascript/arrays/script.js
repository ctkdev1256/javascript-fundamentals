// arrays concepts
// const numbers = [9 , 12, 4, 7, 15]

// length (number of element in a array)
// console.log(numbers);

// push()
// console.log(numbers.push(85, 95, 16));

// includes
// console.log(numbers.includes(6));

// forEach
// const number = [1 ,2, 4, 7, 5]

// const multiply = number.forEach(number => console.log(number * 2));

// number => console.log(multiply)

// number.forEach(number => console.log(number * 2));

// objects in array
// const data = [
//     {
//         name: 'joe',
//         age: 35
//     },
//     {
//         name: 'jolie',
//         age: 35
//     },
//     {
//         name: 'mary',
//         age: 35
//     },
//     {
//         name: 'pete',
//         age: 35
//     },
// ];

// console.log(data)

// console.log(data[2])

// property name is sometime same as property value
// const username = input.username
// const password = input.password

// const newUser = {
//     username: username,
//     password: password
// };

//passing object as argument to function
function logUser(user) {
    console.log(user.name);
    console.log(user.age);
}

const user = {
    name: 'mary',
    age:  25
};

logUser(user);

