const btn = document.querySelector(".button");

// btn.addEventListener("click", function (e) {
//   console.log("Hello world");

//   e.preventDefault();
// });

// btn.addEventListener("mousedown", function (e) {
//   console.log("mousedown");
//   e.preventDefault();
// });

// btn.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });

//   hover
// btn.addEventListener("mouseenter", function () {
//   console.log("Entered the mouse");
// });
// btn.addEventListener("mouseout", function () {
//   console.log("the mouse outed");
// });
// btn.addEventListener("mousemove", function () {
//   console.log("the mouse moved");
// });

const inputText = document.querySelector("#add-book input");
// console.log(inputText.placeholder);

inputText.value = "";

// btn.addEventListener("click", function (h) {
//   console.log(inputText.value);
//   inputText.value = "";
//   h.preventDefault();
// });

// inputText.addEventListener("keyup", () => {
//   console.log(inputText.value);
// });
// inputText.addEventListener("keydown", () => {
//   console.log(inputText.value);
// });
// inputText.addEventListener("focus", () => {
//   console.log("focused");
// });
// inputText.addEventListener("blur", () => {
//   console.log("focus out");
// });

// const checkBox = document.querySelector("#hide input");

// const titles = document.querySelectorAll(".title")[1];
// const ul = document.querySelector("ul");

// checkBox.checked = true;
// checkBox.checked = false;

// checkBox.addEventListener("change", () => {
//   if (checkBox.checked) {
//     titles.style.display = "none";
//     ul.style.display = "none";
//   } else {
//     titles.style.display = "initial";
//     ul.style.display = "initial";
//   }
// });

// localStorage.setItem("name", "Ali");
// localStorage.setItem("description", "some description");

// localStorage.clear();
// localStorage.removeItem("name");

const arr = ["ali", "karim", "marwa"];

localStorage.setItem("array", arr);

const obj = { firstname: "Ali", lastname: "ahmadi" };

localStorage.setItem("newobj", JSON.stringify(obj));

let result = localStorage.getItem("array").split(",");

// console.log(result);

let resultobj = JSON.parse(localStorage.getItem("newobj"));

console.log(resultobj);
