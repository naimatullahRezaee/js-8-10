// let pageBanner = document.getElementById("page-banner");

// console.log(pageBanner);

// let titles = document.getElementsByClassName("title");

// let lis = document.getElementsByTagName("li");

// for (el of lis) {
//   console.log(el);
// }
// console.log(lis);

// let pageBanner = document.querySelector("#page-banner");
// let titles = document.querySelectorAll(".title");
// let lis = document.querySelectorAll("li");

// for (i of lis) {
//   console.log(i);
// }

// let elements = document.querySelectorAll("#book-list li .name")[1];

// console.log(elements);

// let result;

// const list = document.querySelector("ul");
// const li = document.querySelector("li");

// result = list.children[2].children[0].innerHTML;

// result = list.firstElementChild.firstElementChild.innerHTML;
// result = list.lastElementChild;

// result = list.childElementCount;

// result = li.parentElement.parentElement;
// console.log(result);

// const heading = document.createElement("h2");
// heading.className = "newheading";
// heading.id = "heading";
// heading.setAttribute("value", "Heading");

// heading.className += "oldheading";

// heading.innerHTML = `

//     <ul>
//     <li>item 1 </li>
//     <li>item 2 </li>
//     <li>item 3 </li>
//     </ul>
// `;

// heading.appendChild(document.createTextNode("new content"));

// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");

// li1.appendChild(document.createTextNode("item 1"));
// li2.appendChild(document.createTextNode("item 2"));

// ul.appendChild(li1);
// ul.appendChild(li2);

// heading.appendChild(ul);

// console.log(heading);

// const newheading = document.createElement("h2");

// newheading.className = "title";
// newheading.innerHTML = "لیست کتابهای جدید";

// const oldheading = document.querySelectorAll(".title")[1];

// const parentheading = document.querySelector("#book-list");
// parentheading.replaceChild(newheading, oldheading);

// // console.log(oldheading);

// const li = document.querySelectorAll("li")[2];

// const ul = document.querySelector("ul");

// li.remove();
// ul.children[2].remove();

// document.querySelector(".button").addEventListener("click", function (a) {
//   console.log("hello world");
//   a.preventDefault();

//   //   let re = a.target;
//   let re = a.type;
//   console.log(re);
// });

// document.querySelector(".button").addEventListener("click", function (e) {
//   console.log("clicked");
//   e.preventDefault();
// });

// document.querySelector(".button").addEventListener("mousedown", function (e) {
//   console.log("mousedown");
//   e.preventDefault();
// });

// const button = document.querySelector(".button");

// button.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });

// button.addEventListener("mouseup", function () {
//   console.log("mouse up");
// });

// button.addEventListener("mouseenter", function () {
//   console.log("mouse enter");
// });
// button.addEventListener("mouseout", function () {
//   console.log("mouse out");
// });

// button.addEventListener("mousemove", function () {
//   console.log("mouse moving ....");
// });

// document.querySelector("body").addEventListener("mousemove", () => {
//   console.log("mouse moved");
// });

// const heading1 = document.querySelectorAll(".title")[1];

// document.body.addEventListener("mousemove", (e) => {
//   heading1.innerHTML = `mouseX : ${e.offsetX} , mouseY : ${e.offsetY}`;
// });

// const inputText = document.querySelector("#add-book input");

// inputText.value = "";
// const link = document.querySelector(".button");

// link.addEventListener("click", (e) => {
//   console.log(inputText.value);
//   inputText.value = "";
//   e.preventDefault();
// });

// console.log(inputText.value);

// inputText.addEventListener("keydown", () => {
//   console.log(inputText.value);
// });

// inputText.addEventListener("keyup", () => {
//   console.log(inputText.value);
// });
// inputText.addEventListener("focus", () => {
//   console.log("selected");
// });
// inputText.addEventListener("blur", () => {
//   console.log("unselected");
// });

const checkBox = document.querySelector("#hide input");
const heading = document.querySelectorAll(".title")[1];
const ul = document.querySelector("ul");

// checkBox.checked = true;
// checkBox.checked = false;

// checkBox.addEventListener("change", () => {
//   if (checkBox.checked) {
//     heading.style.display = "none";
//     ul.style.display = "none";
//   } else {
//     heading.style.display = "block";
//     ul.style.display = "block";
//   }
// });

// console.log(checkBox);

localStorage.setItem("title", "Learning");

const arr = ["ali 1", "ali 2"];
const obj = {
  fname: "karima",
  age: 18,
};

localStorage.setItem("array", arr);

localStorage.setItem("object", JSON.stringify(obj));

const arr1 = localStorage.getItem("array").split(",");

const obj1 = JSON.parse(localStorage.getItem("object"));

console.log(arr1);

console.log(obj1);
