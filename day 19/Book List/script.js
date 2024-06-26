// let banner = document.getElementById("page-banner");
// console.log(banner);

// let titles = document.getElementsByClassName("title");
// console.log(titles);

// let lists = document.getElementsByTagName("li");

// for (let el of lists) {
//   console.log(lists[el]);
// }
// console.log(lists[2]);

// const newfile = document.querySelector("#page-banner");
// console.log(newfile);

// let titles = document.querySelectorAll(".title");
// console.log(titles);
// let lis = document.querySelectorAll("li");
// console.log(lis);

// const qselector = document.querySelectorAll("#book-list li .name")[3];
// console.log(qselector);

// let result;
// const list = document.querySelector("ul");
// const li = document.querySelector("li");
// result = list.children[1].children[0].innerHTML;
// result = list.firstElementChild.children[1].innerHTML;

// result = li.parentElement.parentElement.parentElement;
// console.log(result);

// const heading = document.createElement("h1");

// heading.innerHTML = "heaing one ";
// heading.className = "new ";
// heading.id = "newid";
// heading.className += "newheading";
// heading.setAttribute("style", "font-size:80px");

// heading.innerHTML = `<h2>new tag in elements </>`;
// heading.appendChild(document.createTextNode("something"));
// file.innerHTML = "something";

// console.log(heading);

// const heaing = document.createElement("h2");
// heaing.className = "title";
// heaing.innerHTML = "this is new heaading";
// const oldheaing = document.querySelectorAll(".title")[1];

// const parentheading = document.querySelector("#book-list");
// parentheading.replaceChild(heaing, oldheaing);

const newbook = document.createElement("span");

newbook.className = "name";

newbook.innerHTML = "new book";

const oldbook = document.querySelectorAll("li")[3];

const parentbook = document.querySelector("ul");

parentbook.replaceChild(newbook, oldbook);

let parentElement = document.getElementById("parent");
let childElement = document.getElementById("child");
parentElement.removeChild(childElement);

let newElement = document.createElement("div");
newElement.textContent = "Replacement";
parentElement.replaceChild(newElement, childElement);
