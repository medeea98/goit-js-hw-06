const font = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
font.addEventListener('input', function() {
    text.style.fontSize = font.value + 'px';
});
text.style.fontSize = font.value + 'px';
