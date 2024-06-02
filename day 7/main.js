// var num = 20;

// var result = num % 2 == 0 ? "the number is even" : "the number is odd";

// console.log(result);
// var num = 201;

// if (num % 2 == 0) {
//   console.log("the number is even");
// } else {
//   console.log("the number is odd");
// }

// var x = 500;

// while (x <= 600) {
//   console.log(x);
//   x += 10;
// }

let number = 4;

var guess;

while (true) {
  // guess = parseInt(prompt("Please enter a number between 0 - 10")); // string ---> number

  if (guess === number) {
    alert("You won the game");
    break;
  } else {
    alert("try again");
  }
}
