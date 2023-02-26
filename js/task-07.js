const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handleInput = (event) => {
  text.style.fontSize = `${event.target.value}px`;
};

fontSizeControl.addEventListener("input", handleInput);
