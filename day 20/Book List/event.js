// document.querySelector(".button").addEventListener("click", function () {
//   console.log("hello world");
// });

// document.querySelector(".button").addEventListener("mousedown", function (e) {
//   console.log("Hello World!");
//   e.preventDefault();
// });

// document.querySelector(".button").addEventListener("mouseup", function (e) {
//   console.log("Goodbye World!");
//   e.preventDefault();
// });

// document.querySelector(".button").addEventListener("mouseenter", function (e) {
//   console.log("Hovering over button!");
// });
// document.querySelector(".button").addEventListener("mouseout", function () {
//   console.log("Hovering out button!");
// });

// document.querySelector(".button").addEventListener("mousemove", ()=> {
//   console.log("Mouse moved");
// });

const inputText = document.querySelector("#add-book input");

inputText.value = "";
const btn = document.querySelector(".button");

// btn.addEventListener("click", (g) => {
//   console.log(inputText.value);
//   inputText.value = "";
//   g.preventDefault();
// });

// console.log(inputText.value);

// inputText.addEventListener("keyup", () => {
//   console.log(inputText.value);
// });

// inputText.addEventListener("keydown", () => {
//   console.log(inputText.value);
// });

// inputText.addEventListener("focus", () => {
//   console.log("Input field has focus");
// });
// inputText.addEventListener("blur", () => {
//   console.log("Input field focus out");
// });

const checkBox = document.querySelector("#hide input");
const heading = document.querySelectorAll(".title")[1];
const ul = document.querySelector("ul");

// checkBox.checked = true;
// checkBox.checked = false;

// console.log(checkBox);

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    heading.style.display = "none";
    ul.style.display = "none";
    // console.log("checked");
  } else {
    heading.style.display = "block";
    ul.style.display = "block";
    // console.log("unchecked");
  }
});

// localStorage.setItem("heading1", "heading1");
// localStorage.setItem("heading2", "heading2");
// localStorage.setItem("heading3", "heading3");

// localStorage.removeItem("heading2");
// localStorage.clear();

const arr = ["heading1", "heading2", "heading3"];
const obj = {
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
};

localStorage.setItem("array", arr);

// const l = localStorage.getItem("array").split(",");
// console.log(l);
localStorage.setItem("obj", JSON.stringify(obj));

const o = JSON.parse(localStorage.getItem("obj"));
console.log(o);
