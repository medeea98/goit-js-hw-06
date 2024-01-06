const changeColor = document.querySelector('.change-color');
const span = document.querySelector('.color');
const bodyElement = document.body;
changeColor.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}


