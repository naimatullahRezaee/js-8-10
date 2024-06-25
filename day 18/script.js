// const h1 = document.getElementById("heaing");

// h1.style.backgroundColor = "red";
// h1.style.fontSize = "90px";

// function hideimg() {
//   document.getElementById("img1").style.display = "none";
//   document.getElementById("img2").style.display = "none";
// }

function hideimg() {
  const images = document.getElementsByClassName("container");
  for (x = 0; x < images.length; x++) {
    images[x].style.display = "none";
    // alert(x);
  }
}

function showimg() {
  const images = document.getElementsByClassName("container");

  for (img in images) {
    images[img].style.display = "block";
  }
}
