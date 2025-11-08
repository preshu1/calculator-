/*function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is an even number!`;
  } else {
    return `${number} is an odd number!`;
  }
}

let result = evenOrOdd(69);
console.log("Result: ", result);*/

//using terniary operator

//syntax : (condition) ? valueIfTrue : valueIfFalse

function oddOrEven(number) {
  return number % 2 === 0 ? `${number} is an even number!` : `${number} is an odd number!`;
}
console.log(oddOrEven(20));
console.log(oddOrEven(27));
