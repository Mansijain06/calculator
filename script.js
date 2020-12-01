let inputValue = document.getElementById("input");

function calculate(e) {
    inputValue.value = inputValue.value + e.target.innerText;
}

function ans(e) {        
    let x = inputValue.value
    let y = eval(x)
    inputValue.value = y
}

function clearInput() {
    inputValue.value = "";
}

function reset() {
    inputValue.innerText = "";
    clearInput();
}