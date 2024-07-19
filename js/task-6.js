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
  const numberOfBoxes = input.value;

  if (numberOfBoxes > 0 && numberOfBoxes <= 100) {
    boxesContainer.innerHTML = "";
    for (let i = 0; i < numberOfBoxes; i++) {
      const box = document.createElement("div");
      const size = INITIAL_SIZE + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.append(box);
    }
  } else {
    return;
  }
  if (input.value !== "") {
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
