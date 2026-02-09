import { evaluate } from "https://cdn.jsdelivr.net/npm/mathjs@11.11.0/+esm";


const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

function calculate() {
    let expression = display.value;
    let result = evaluate(expression);
    display.value = result;
}

function appendToDisplay(input) {
    if (display.value === "0") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay(){
    display.value = 0;
}

function removeLast(){
    display.value = display.value.slice(0, -1)
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        switch(value){
            case "C":
                clearDisplay();
                break;
            case "←":
                removeLast();
                break;
            case "=":
                calculate();
                break;
            case "÷":
                appendToDisplay("/"); // converter para / que eval entende
                break;
            case "×":
                appendToDisplay("*"); // converter para * que eval entende
                break;
            default:
                appendToDisplay(value)
                break
        }
    });
});
