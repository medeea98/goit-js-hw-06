let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
function updateValue() {
    valueEl.textContent = counterValue;
}
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValue();
});
incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValue();
});
updateValue();