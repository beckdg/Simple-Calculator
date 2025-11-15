const display = document.getElementById("display");
let result = 0;
let justDisplayedResult = false;

function append(value) {
    if (justDisplayedResult == true){
        display.value = "";
    }
    display.value += value;
    justDisplayedResult = false;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace the visual "×" and "÷" with actual operators
        let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
    if (display.value == result){
        justDisplayedResult = true;
    }
    
}
