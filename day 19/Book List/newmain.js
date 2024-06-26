// const page = document.getElementById("page-banner");

// const titles = document.getElementsByClassName("title");

// const lis = document.getElementsByTagName("li")[2];

// const page = document.querySelectorAll("li")[1];

// const list = document.querySelectorAll("ul li .name")[2];

const ul = document.querySelector("ul");

// const list = (ul.children[3].children[1].innerHTML = "delete");

// const list = li.lastElementChild;

const li = document.querySelector("li");

const list = li.parentElement.parentElement.parentElement.parentElement;

console.log(list);
