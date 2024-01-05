const userInput = document.querySelector('#validation-input');
userInput.addEventListener('blur', () => {
    const requiredLength = Number(userInput.dataset.length);
    userInput.classList.remove('valid', 'invalid');
    if (userInput.value.length === requiredLength) {
        userInput.classList.add('valid');
    } else {
        userInput.classList.add('invalid');
    }
});
