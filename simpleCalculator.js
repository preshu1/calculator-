function add(num1, num2) {
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
caluclate(300, 40, "-");
