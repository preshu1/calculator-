function greet(userName, time) {
  //let displayMsg
  if (time === "morning") {
    return morning(userName);
  } else if (time === "afternoon") {
    return afternoon(userName);
  } else if (time === "evening") {
    return evening(userName);
  } else if (time === "night") {
    return night(userName);
  } else {
    console.log("Please enter a valid time to get a message!");
    return;
  }
}

function morning(userName) {
  return `Good morning! ${userName}!`;
}
function afternoon(userName) {
  return `Good afternoon! ${userName}!`;
}
function evening(userName) {
  return `Good evening! ${userName}!`;
}
function night(userName) {
  return `Good Night! ${userName}`;
}

//testing
console.log(greet("preshu", "morning"));
console.log(greet("jay", "night"));
console.log(greet("san", "afternoon"));
