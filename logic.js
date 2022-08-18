// Calculator result
var result;
// Turn on calculator
const ON = document.querySelector('.ONCE');
const screen = document.querySelector('.screen')
ON.addEventListener('click', function(e) {
    screen.innerHTML = '';
    result = document.createElement('h1');
    result.textContent = '0';
    screen.appendChild(result);
});
// Turn off calculator
const OFF = document.querySelector('.OFF');
OFF.addEventListener('click', function(e) {
    screen.innerHTML = '';
})