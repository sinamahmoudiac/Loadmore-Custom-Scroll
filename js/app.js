const btn = document.querySelector("button");
const mainText = document.querySelector(".main");
const span = document.querySelector("span");
const svg = document.querySelector("use");

let flag = false;
btn.addEventListener("click", () => {
  if (flag) {
    mainText.classList.remove("main--open");
    span.innerHTML = "مشاهده همه";
    svg.setAttribute("href", "#add-square");
    flag = false;
  } else {
    mainText.classList.add("main--open");
    span.innerHTML = "مشاهده کمتر";
    svg.setAttribute("href", "#minus-square");
    flag = true;
  }
});
