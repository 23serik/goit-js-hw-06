const btnDecrement = document.querySelector("#counter > button[data-action='decrement']");
const btnIncrement = document.querySelector("#counter > button[data-action='increment']");
const valueEl = document.querySelector("#counter > #value");
let counterValue = 0;

const handleClickDecrement = (event) => {
  counterValue--;
  valueEl.textContent = counterValue;
};
const handleClickIncrement = (event) => {
  counterValue++;
  valueEl.textContent = counterValue;
};

btnDecrement.addEventListener("click", handleClickDecrement);
btnIncrement.addEventListener("click", handleClickIncrement);
