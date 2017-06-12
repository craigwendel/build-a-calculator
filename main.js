let clearButton = document.getElementById('clear-button');

function clearClick() {
  console.log('Click!')
}

clearButton.addEventListener('click',clearClick)



let getButtons = document.querySelectorAll('.buttons h3');

for (let i = 0; i < getButtons.length; i++) {
   const buttonValue = getButtons[i].textContent;
   console.log(buttonValue)
}

console.log("outside the loop", buttonValue)
