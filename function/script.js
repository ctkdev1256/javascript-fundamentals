const squareMeter = 1000
price = 100

function calculatorPrice(squareMeter) {
    const price = 2000 * squareMeter
    // console.log(price)
    return price
}

let total = calculatorPrice(3000)
console.log(total)

// Alternative to write a function: assign it to a var with anonymous parameters
var totalSquareMeters = function(squareMeter) {
    const result = 500 * squareMeter
    return result
}

console.log('Total square meter: ' + totalSquareMeters(300) + ' ' + 'footage.')
