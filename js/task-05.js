const userInput = document.getElementById('name-input');
const outputDisplay = document.getElementById('name-output');
userInput.addEventListener('input', function () {
    const enteredText = userInput.value;
    outputDisplay.textContent = enteredText === '' ? 'Anonymous' : enteredText;
});