// const person = {
//   fname: "karima",
//   lname: "karimi",
//   age: 20,

//   greeting() {
//     console.log("hello world");
//   },
// };

// person.age = 50;

// person.gender = "female";

// person.fullname = function () {
//   return `my name is ${person.fname} ${person.lname} and my age is ${person.age}`;
// };

// delete person.fname;

// console.log(person.fname);
// console.log(person.age);

function Person(first, last, age) {
  this.fname = first;
  this.lname = last;
  this.age = age;
}

Person.prototype.greeting = function () {
  return `${this.fname}  ${this.lname}`;
};
Person.prototype.geder = "female";

const person1 = new Person("farzana", "akbari", 40);

const person2 = new Person("naqiba", "rahimi", 60);

console.log(person1.geder);
console.log(person2.geder);

console.log(person1);
// console.log(person2.greeting());
