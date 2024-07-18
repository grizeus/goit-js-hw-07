function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const numberOfBoxes = input.value;
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
  const initialSize = 30;
  if (numberOfBoxes > 0 && numberOfBoxes <= 100) {
    for (let i = 0; i < numberOfBoxes; i++) {
      const box = document.createElement("div");
      const size = initialSize + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add("box");
      boxesContainer.appendChild(box);
    }
  }
  if (input.value !== "") {
    input.value = "";
  }
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
});
