/*function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function caluclate(num1, num2, sign) {
  //const num1 = parseFloat(firstNum.value)
  //const num2 = parseFloat(secondNum.value)
  let result;
  switch (sign) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = sub(num1, num2);
      break;
    case "*":
      result = mul(num1, num2);
      break;
    case "/":
      result = div(num1, num2);
      break;
    default:
      console.log("please select a valid operator");
      return;
  }
  console.log(`Result is: ${result}`);
  return result;
}

//testing using some values

caluclate(10, 15, "-");
caluclate(300, 40, "-");*/

//using nested functions

function calculate(num1, num2, sign) {
  let result;

  //inner functions
  function add() {
    return num1 + num2;
  }

  function sub() {
    return num1 - num2;
  }

  function mul() {
    return num1 * num2;
  }

  function div() {
    return num1 / num2;
  }
  if (sign !== "+" && sign !== "-" && sign !== "*" && sign !== "/") {
    console.log("please use a valid operator to calculate");
    return;
  } else if (sign === "+") {
    result = add();
  } else if (sign === "-") {
    result = sub();
  } else if (sign === "*") {
    result = mul();
  } else if (sign === "/") {
    if (num2 === 0) {
      console.log("sorry can't divide a number by zero");
      return;
    }
    result = div();
  }
  console.log(`Result is: ${result}`);
  return result;
}
//testing using some random values

calculate(200, 590, "*");
