
let marks = Number(prompt("Enter your marks outo of 100"));

// sloved using the if/else ladder

if (marks < 35) {
  console.log(`Marks are '${marks}' and grade is 'D'`);
} else if (marks >= 35 && marks <=49) {
  console.log(`Marks are '${marks}' and grade is 'C'`);
} else if (marks >= 50 && marks <= 74) {
  console.log(`Marks are '${marks}' and grade is 'B'`);
} else if (marks >= 75 && marks <= 100) {
  console.log(`Marks are '${marks}' and grade is 'A'`);
} else {
  console.log(`Marks are '${marks}' and please enter your marks outo-ff 100 only.`);
}



//solved using a switch 

switch (true) {
    case (marks < 35):
      console.log(`Marks are '${marks}' and grade is 'D'`);
      break;
    case (marks >= 35 && marks <= 49):
      console.log(`Marks are '${marks}' and grade is 'C'`);
      break;
    case (marks >= 50 && marks <= 74):
      console.log(`Marks are '${marks}' and grade is 'B'`);
      break;
    case (marks >= 75 && marks <= 100):
      console.log(`Marks are '${marks}' and grade is 'A'`);
      break
    default:
      console.log(`Marks are '${marks}' and please enter your marks outo-ff 100 only.`);
      break;
  }
  

  //using  a ternary operators
/*
  let result =
  marks < 35
    ? `Marks are '${marks}' and grade is 'D'`
    : marks >= 35 && marks <= 49
    ? `Marks are '${marks}' and grade is 'C'`
    : marks >= 50 && marks <= 74
    ? `Marks are '${marks}' and grade is 'B'`
    : marks >= 66 && marks <= 79
    ? `Marks are '${marks}' and grade is 'C'`
    : marks >= 75 && marks <= 100
    ? `Marks are '${marks}' and grade is 'A'`
    : `Marks are '${marks}' and please enter your marks outo-ff 100 only`;
console.log(result);
*/