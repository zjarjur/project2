//Make Variables

let counter = document.getElementById("counter");
let number = 0;
let buttonPlusOne = document.getElementById("counter-button");
let buttonMinusOne = document.getElementById("minus-one-button");
let clearButton = document.getElementById("clear-button");
let oneButton = document.getElementById("one-button");
let twoButton = document.getElementById("two-button");
let threeButton = document.getElementById("three-button");
let fourButton = document.getElementById("four-button");
let fiveButton = document.getElementById("five-button");
let sixButton = document.getElementById("six-button");
let sevenButton = document.getElementById("seven-button");
let eightButton = document.getElementById("eight-button");
let nineButton = document.getElementById("nine-button");
let zeroButton = document.getElementById("zero-button");

//Define Functions
function show(something){
    counter.textContent = something;
}

function addOne(){
    number = number + 1;
    show(number);
}

function minusOne(){
    number = number - 1;
    show(number);
}

function clear(){
    number = 0;
    show(number);
}

function one1(){
    number = number * 10 + 1;
    show(number);
}

function two2(){
    number = number * 10 + 2;
    show(number);
}

function three3(){
    number = number * 10 + 3;
    show(number);
}

function four4(){
    number = number * 10 + 4;
    show(number);
}

function five5(){
    number = number * 10 + 5;
    show(number);
}

function six6(){
    number = number * 10 + 6;
    show(number);
}

function seven7(){
    number = number * 10 + 7;
    show(number);
}

function eight8(){
    number = number * 10 + 8;
    show(number);
}

function nine9(){
    number = number * 10 + 9;
    show(number);
}

function zero0(){
    number = number * 10 + 0;
    show(number);
}
//Define Button Event Listeners

buttonPlusOne.addEventListener("click", addOne);
buttonMinusOne.addEventListener("click", minusOne);
clearButton.addEventListener("click", clear);
oneButton.addEventListener("click", one1);
twoButton.addEventListener("click", two2);
threeButton.addEventListener("click", three3);
fourButton.addEventListener("click", four4);
fiveButton.addEventListener("click", five5);
sixButton.addEventListener("click", six6);
sevenButton.addEventListener("click", seven7);
eightButton.addEventListener("click", eight8);
nineButton.addEventListener("click", nine9);
zeroButton.addEventListener("click", zero0);