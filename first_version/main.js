let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let calcInput = document.getElementById("calcInput");
let calcHistory = document.getElementById("calcHistory");

function pressMathBtn(operator) {
    if(!resultVal) {
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
    if(resultVal) {
        newVal = num;
        resultVal = "";
    } else {
        if(num === '.') {
            if(decimalClicked != true) {
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

    switch(mathOperator){
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
        default:
            resultVal = newVal;
    }

    let historyItem = document.createElement("li");
    historyItem.innerHTML = `${prevVal} ${mathOperator} ${newVal} = ${resultVal}`;
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

