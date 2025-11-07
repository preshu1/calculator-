/*function toFahrenheit(temp) {
  let result = temp * (9 / 5) + 32;
  console.log(`${temp}C is ${result}F`);
  return result;
}

function toCelsius(temp) {
  let result = (temp - 32) * 5 / 9;
  console.log(`${temp}F is ${result}C`);
  return result;
}

function tempConvert(temp, msg) {
  let result;
  msg = msg.toLowerCase();

  if (msg === "to fahrenheit") {
    result = toFahrenheit(temp);
  } else if (msg === "to celsius") {
    result = toCelsius(temp);
  } else {
    console.log("please choose one to fahrenheit or to celsius to proceed!");
    return;
  }
  return { original: temp, converted: result };
}
tempConvert(25, "to fahrenheit");
tempConvert(77, "to Celsius");*/

//using nested function

function tempConvert(temp, msg) {
  //inner functions
  let result;
  function toC() {
    return ((temp - 32) * 5) / 9;
  }

  function toF() {
    return temp * (9 / 5) + 32;
  }

  if (msg === "to celsius") {
    result = toC();
  } else if (msg === "to fahrenheit") {
    result = toF();
  } else {
    console.log("Please choose one 'to Fahrenheit' or 'to Celcius' to proceed!");
    return;
  }
  return result;
}
tempConvert(25, "to fahrenheit");
