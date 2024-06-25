const person = {
  fname: "marwa",
  lname: "Rahimi",
  gender: "female",
  //   age: 20,

  showInfo() {
    return `my name is: ${this.fname} ${this.lname}`;
  },
};

// let firstname = person.fname;
// let lastname = person.lname;
// console.log(firstname);
// console.log(lastname);

let { fname, lname, gender } = person;

console.log(lname);

// console.log(person.showInfo());

function Person(f, l, g) {
  this.fname = f;
  this.lname = l;
  this.gender = g;
}

Person.prototype.showInfo = function () {
  g;
  return `my name is: ${this.fname} ${this.lname}`;
};

const person1 = new Person("Marwa", "Rahimi", "female");
const person2 = new Person("Ali", "ahmadi", "male");
console.log(person1.showInfo());

// // console.log(person1.showInfo());
// // console.log(person2.showInfo());

// console.log(person1);

//  class

// let fname = "marwa";
// let lname = "Rahimi";
// let gender = "female";

// const person = {
//   fname,
//   lname,
//   gender,

//   showInfo() {
//     return `my name is: ${this.fname} ${this.lname}`;
//   },
// };

// console.log(person.showInfo());
