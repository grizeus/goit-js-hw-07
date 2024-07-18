const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", event => {
  const curInput = event.currentTarget.value.trim();
  if (curInput !== "") {
    output.textContent = curInput;
  } else {
    output.textContent = "Anonymous";
  }
});
