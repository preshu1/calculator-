function areaOfRectangle(length, breadth) {
  return length * breadth;
}

//calling a function
console.log(areaOfRectangle(10.67, 30));

//function that checks if the number is odd or even
function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even number!`);
  } else {
    console.log(`${number} is odd number!`);
  }
}

oddOrEven(1099);

//functions that returns the larger of two numbers
function largeOne(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

largeOne(230, 500);

// using return keyword
function largeOne(num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else {
    return `${num2} is greater than ${num1}`;
  }
}

const result = largeOne(230, 500);
console.log(result);

// function passed as argument

function add(a, b) {
  return a + b;
}

function square(fn) {
  const result = add(5, 6);
  return result * result;
}

console.log(square(add));

//another example
function greetUser(name) {
  console.log("hi, " + name);
}

function userName(fn) {
  let name = "Preshu";
  fn(name);
}
userName(greetUser);

let isLogged = true;
function sayHi(name = "user") {
  console.log("hello, " + name);
}
function sayBye(name = "user") {
  console.log("bye," + name);
}
if (isLogged) {
  sayHi("preshu");
} else {
  sayBye();
}
//using callbacks
function handleUserStatus(isLogged, onlogged, notlogged) {
  if (isLogged) {
    onlogged(name);
  } else {
    notlogged("preshu");
  }
}
isLogged = false;
//functions for logged and not logged

function greet(name = "user") {
  console.log("hi, welcome back" + name);
}

function logoff(name = "user") {
  console.log("Thankyou for using our product, " + name);
}

//calling function
handleUserStatus(isLogged, greet, logoff);
