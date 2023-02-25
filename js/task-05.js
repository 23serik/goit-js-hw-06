const inputEl = document.querySelector("input#name-input");
const spanEl = document.querySelector("span#name-output");
const handleInput = (event) => {
  debugger;
  if (event.currentTarget.value === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
};
inputEl.addEventListener("input", handleInput);
