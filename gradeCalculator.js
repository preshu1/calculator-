function gradeCalculator(marks) {
  //inner functions
  function gradeA() {
    return "Grade A";
  }

  function gradeB() {
    return "Grade B";
  }

  function gradeC() {
    return "Grade C";
  }

  function gradeD() {
    return "Grade D";
  }

  function gradeE() {
    return "Grade E";
  }

  function gradeF() {
    return "Grade F";
  }

  //logic part
  if (marks >= 90) {
    return gradeA();
  } else if (marks >= 80) {
    return gradeB();
  } else if (marks >= 70) {
    return gradeC();
  } else if (marks >= 60) {
    return gradeD();
  } else if (marks >= 50) {
    return gradeE();
  } else {
    return gradeF();
  }
}

//testing with some data

console.log(gradeCalculator(96));
console.log(gradeCalculator(80));
console.log(gradeCalculator(77));
console.log(gradeCalculator(50));
console.log(gradeCalculator(20));
