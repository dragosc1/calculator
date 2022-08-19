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
// Select all digits and put them in an array
const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let digits = [];
const n = arr.length;
for (let i = 0; i < n; i++) {
    digits[i] = document.querySelector(`.${arr[i]}`);
    digits[i].value = i;
}
// Set event for touching digits
digits.forEach(digit => digit.addEventListener('click', function() {
    // If the calculator is not on STOP
    if (!screen.innerHTML)
        return;
    // If the result content is 0 and you pres 0 STOP
    if (result.textContent == '0' && digit.value == 0)
        return;
    // Calculator allows only numbers that contains 6 digits
    if (result.textContent.length == 6)
        return;
    if (result.textContent == '0')
        result.textContent = digit.value;
    else result.textContent += digit.value;
    screen.innerHTML = '';
    screen.appendChild(result);
}));
