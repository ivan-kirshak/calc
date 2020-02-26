// most of calculator functionality was made by example of Derek Banas

let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let calcInput = document.getElementById("calcInput");
let calcHistory = document.getElementById("calcHistory");

function pressMathBtn(operator) {
    if (!resultVal) {
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    calcInput.value = "";
}

function pressNumBtn(num) {
    if (resultVal) {
        newVal = num;
        resultVal = "";
    } else {
        if (num === '.') {
            if (decimalClicked != true) {
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    calcInput.value = newVal;
}

function equalPressBtn() {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch (mathOperator) {
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        case "x^2":
            resultVal = prevVal * prevVal;
            break;
        case "x^3":
            resultVal = prevVal * prevVal * prevVal;
            break;
        case "sqrt":
            resultVal = Math.sqrt(prevVal);
            break;
        default:
            resultVal = newVal;
    }

    let historyItem = document.createElement("li");
    if (mathOperator === "x^2" || mathOperator === "x^3" || mathOperator === "sqrt") {
        historyItem.innerHTML = `${prevVal} ${mathOperator} = ${resultVal}`;
    } else {
        historyItem.innerHTML = `${prevVal} ${mathOperator} ${newVal} = ${resultVal}`;
    }
    calcHistory.appendChild(historyItem);

    prevVal = resultVal;
    calcInput.value = resultVal;


}

function pressDelBtn() {
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    calcInput.value = 0;
}

// first trial to make pwa
// used example shown in on freecodecamp.org 
// (https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#what-is-a-service-worker)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker works properly"))
            .catch(res => console.log("something is wrong with service worker", err))
    })
}
