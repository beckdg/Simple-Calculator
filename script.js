const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

let justDisplayedResult = false;
let operators = ["+", "-", "×", "÷", "/", "*"];

function append(value) {
    const lastChar = display.value.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) return;

    if (justDisplayedResult) {
        display.value = "";
    }

    display.value += value;
    justDisplayedResult = false;
    scrollDisplayToRight();
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        let result = eval(expression);
        display.value = result;
        justDisplayedResult = true;
        scrollDisplayToRight;

        // Add to history
        addToHistory(expression, result);
    } catch (error) {
        display.value = "Error";
        justDisplayedResult = true;
    }
}
// scroll display to the right
function scrollDisplayToRight(){
    display.scrollLeft = display.scrollWidth;
}

// Add a new entry to history
function addToHistory(expression, result) {
    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li); // newest on top
}
// Clear History
function clearHistory() {
    historyList.textContent = "";
}
// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || key === ".") append(key);
    if (operators.includes(key)) append(key);
    if (key === "Enter") calculate();
    if (key === "Backspace") backspace();
    if (key === "Escape") clearDisplay();
});
