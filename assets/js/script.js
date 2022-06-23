var buttonIncrement = document.getElementById('increment')

var buttonDecrement = document.getElementById('decrement')

var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0;



function increment() {

    currentNumber = currentNumber + 1;

    currentNumberWrapper.innerHTML = currentNumber;

}



function decrement() {

    currentNumber = currentNumber - 1;

    currentNumberWrapper.innerHTML = currentNumber;

}