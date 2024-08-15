function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const INITIAL_SIZE = 30;
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const numberOfBoxes = parseInt(input.value);

  if (numberOfBoxes > 0 && numberOfBoxes <= 100) {
    boxesContainer.innerHTML = "";
    const boxes = Array.from({ length: numberOfBoxes }, (_, i) => {
      const size = INITIAL_SIZE + i * 10;
      return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    }).join("");

    boxesContainer.innerHTML = boxes;
  }

  if (input.value !== "") {
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
