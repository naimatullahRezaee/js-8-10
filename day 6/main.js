// 3 case

// let x = 201;

// if (x == 0) {
//   console.log("this number is zero");
// } else if (x % 2 == 0) {
//   console.log("this number is even");
// } else {
//   console.log("this number is Odd");
// }

// var a = 0;

// if (a == 0) {
//   console.log("this number is zero");
// } else if (a > 0) {
//   console.log("this number is Positive");
// } else {
//   console.log("this number is Negative");
// }

// let age = 4000;

// if (age >= 18 && age <= 65) {
//   console.log("your form is secucessfully submited");
// } else {
//   console.log("your form is not submited");
// }

// Switch

var day = 2;

let dayname;

switch (day) {
  case 0:
    dayname = "Saturday";
    break;
  case 1:
    dayname = "Sunday";
    break;

  case 2:
    dayname = "Monday";
    break;

  case 3:
    dayname = "Tuesday";
    break;

  case 4:
    dayname = "Wednesday";
    break;

  case 5:
    dayname = "Thursday";
    break;

  case 6:
    dayname = "Friday";
    break;

  default:
    dayname = "this number is invalid";
    break;
}

console.log("the day is:  " + dayname);
