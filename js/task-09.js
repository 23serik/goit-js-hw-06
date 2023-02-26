function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.body;
const btnEl = document.querySelector(".widget > .change-color");
const hexColorEl = document.querySelector(".widget > p > .color");

const handleBtnClick = (event) => {
  const colorHex = getRandomHexColor();
  bodyEl.style.background = colorHex;
  hexColorEl.textContent = colorHex;
};

btnEl.addEventListener("click", handleBtnClick);
