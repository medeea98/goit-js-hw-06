const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const input = document.querySelector('#controls input[type="number"]').value;
  createBoxes(input);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = '';
  const resultedBoxes = Array.from({ length: amount }).map((_, index) => {
    const dimension = 30 + index * 10;
    const box = document.createElement('div');
    box.style.width = box.style.height = `${dimension}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  resultedBoxes.forEach(box => boxes.appendChild(box));
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
