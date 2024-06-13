const students = {
  id: 100,
  name: "marwa",
  age: 20,
  gender: "female",
  lastname: "karimi",
  ismarrid: true,

  favorite: ["music", "football", "coding", "swimming"],

  address: {
    city: "kabul",
    street: "taimanin Street 2",
    block: 5,
  },

  speak: function () {
    console.log(` Name: ${this.name} \n Lastname: ${this.lastname} `);
  },
};

console.log(students.speak());

console.log(students.address["street"]);
// console.log(students.favorite[2]);
// console.log(students.favorite[0]);

// for (st in students) {
//   console.log(` ${st} = ${students[st]}   `);
// }

// console.log(students.name);
// console.log(students.gender);
// console.log(students.ismarrid);

// console.log(students["age"]);
// console.log(students["lastname"]);
