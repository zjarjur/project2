let button2 = document.getElementById("counter-button");
let counter2 = document.getElementById("counter");
let number2 = 0;

function addOne2(event){
    number2 = number2 + 1;
    counter.textContent = number2;
}

button2.addEventListener("click", addOne2);
