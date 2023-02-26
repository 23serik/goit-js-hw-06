const inputEl = document.querySelector("#validation-input");

const handleInputBlur = (event) => {
  debugger;
  if (event.target.value.trim().length === Number(inputEl.getAttribute("data-length"))) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", handleInputBlur);
