let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEventInc);
decreaseDOM.addEventListener("click", clickEventDec);

function clickEventInc(){
    counterDOM.innerHTML = counter++
}
function clickEventDec(){
    counterDOM.innerHTML = --counter
}