// const students = {
//   id: 1,
//   name: "ali",
//   age: 23,
// };

// const number = [1, 2, 4, 5, 6, 79, 100];

// for (num in number) {
//   console.log(num);
// }

// let x = 2;

// if (x == 0) {
//   console.log("zero");
// } else {
//   if (x % 2 == 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// grade = parseInt(prompt("Enter your grade: "));

// if (grade >= 60) {
//   if (grade >= 90) {
//     alert("you got scholarship!");
//   } else {
//     alert("you can join to our class");
//   }
// } else {
//   alert("your failed");
// }

for (x = 1; x <= 5; x++) {
  console.log("outer loop " + x);

  for (y = 1; y <= 3; y++) {
    console.log("inner loop " + y);
  }
}

// outer loop 1
// inner loop 1
// inner loop 2
// inner loop 3
// outer loop 2
// inner loop 1
// inner loop 2
// inner loop 3
