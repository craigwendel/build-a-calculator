//variables:
let clearButton = document.querySelector('#clear-button');
let screenDisplay = document.querySelector('#screen');
let getButtons = document.querySelectorAll('.buttons h3');
let product = document.querySelector('#multiply')
let quotient = document.querySelector('#divide');
let addition = document.querySelector('#add');
let subtraction = document.querySelector('#subtract');
let evaluation = document.querySelector('#equal');


clearButton.addEventListener('click', function(){
screenDisplay.textContent = " ";
calculate = [];
});

product.addEventListener('click', function() {
calculate.push('*');
screenDisplay.textContent = calculate.join("");
});

quotient.addEventListener('click', function() {
calculate.push('/');
screenDisplay.textContent = calculate.join("");
});

addition.addEventListener('click', function() {
calculate.push('+');
screenDisplay.textContent = calculate.join("");
});

subtraction.addEventListener('click', function() {
calculate.push('-');
screenDisplay.textContent = calculate.join("");
});


evaluation.addEventListener('click', function() {
let finalCalc = calculate.join('');
finalCalc = eval(finalCalc);
screenDisplay.textContent = finalCalc;
});

var calculate = [];

for (let i = 0; i < getButtons.length; i++) {
   let buttonValue = getButtons[i].textContent;

   getButtons[i].addEventListener('click', function() {
     console.log(buttonValue);
     calculate.push(buttonValue);
     console.log(calculate);
     screenDisplay.textContent = calculate.join("");
  })
};
