// function sum(x, y) {
//   return x + y;
// }

// console.log(sum(5, 6, 8, 3, 64));

function sum(...args) {
  let add = 0;

  for (i = 0; i < args.length; i++) {
    add += args[i];
  }
  return add;
}

console.log(sum(6, 8, 9, 3, 4));
// prompt

// user
// ali
// karima
// ahmad

// function sum() {
//   let add = 0;

//   for (i = 0; i < arguments.length; i++) {
//     add += arguments[i];
//   }
//   return add;
// }

// console.log(sum(6, 8, 9, 3, 4));

// function sum() {
//   console.log(arguments.length);
// }

// sum(4, 8, 23, 6, 28, 3);

// let greeting = function (name) {
//   console.log(`Hello ${name}`);
// };

// greeting("karima");

// let greeting = (name) => {
//   console.log(`Hello ${name}`);
// };

// greeting("karima");

// (function () {
//   console.log("hello world!");
// })();

// var numbers = [1, 2, 3, 4];

// let num = numbers.map((x) => {
//   console.log(x);
// });

// function Student(id, name, age, gedner) {
//   this.id = id;
//   this.name = name;
//   this.gender = gedner;
//   this.age = age;
// }

// var s = Student(1, "ali", 25, "male");
// console.log(`id: ${id} \n Name: ${name} \n age: ${age} \n gedner: ${gender}`);

// function newname(callback) {
//   console.log("Hello World");
//   callback();
// }

// newname(greeting);

// function greeting() {
//   console.log("ali");
// }

// factorial

/*  

n --->   n * n-1     n >= 1
5!  5 * 4 * 3 * 2 

*/

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(0));
