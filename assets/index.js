let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  if (getComputedStyle(container).display != "none") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
});

button.addEventListener("click", () => {
  if (getComputedStyle(container2).display != "none") {
    container2.style.display = "none";
  } else {
    container2.style.display = "flex";
  }
});
