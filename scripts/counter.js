//Make Variables

let counter = document.getElementById("counter");
let number = 0;
let buttonPlusOne = document.getElementById("counter-button");
let buttonMinusOne = document.getElementById("minus-one-button");

//Define Functions

function addOne(){
    number = number + 1;
    counter.textContent = number;
}

function minusOne(){
    number = number - 1;
    counter.textContent = number;
}

//Define Button Event Listeners

buttonPlusOne.addEventListener("click", addOne);
buttonMinusOne.addEventListener("click", minusOne);