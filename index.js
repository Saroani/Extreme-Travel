/* const headerElement = document.querySelector("#header"); */
const headerElement = document.getElementById("header");
headerElement.style.border = "5px solid";

const titleElement = document.querySelectorAll(".info .info-package img");
console.log(titleElement);

titleElement.forEach((el) => {
  el.style.border = "2px solid";
});

const labelElement = document.querySelectorAll(".info .info-package label");
labelElement.forEach((el) => {
  if (el.matches(".mild")) el.style.borderBottom = "2px solid yellow";
  else if (el.matches(".intense")) el.style.borderBottom = "2px solid Orange";
  else el.style.borderBottom = "2px solid Red";
});

const navElement = document.querySelector("nav .nav-list").children;
console.log(navElement);
const seitElement = document.querySelector(".footer .site-map");
function creatItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}
for (let i = 0; i < navElement.length; i++) {
  seitElement.appendChild(creatItem(navElement[i].textContent));
}
