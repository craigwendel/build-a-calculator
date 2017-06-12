//variables:
let clearButton = document.getElementById('clear-button');
let screenDisplay = document.getElementById('screen');
let getButtons = document.querySelectorAll('.buttons h3');
let product = document.querySelectorById('multiply')
let quotient = document.querySelectorById('divide');
let addition = document.querySelectorById('add');
let subtraction = document.querySelectorById('subtract');
let evaluation = document.querySelectorById('equal');

clearButton.addEventListener('click', function(){
  screenDisplay.textContent = " ";
  calculate = [];
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
