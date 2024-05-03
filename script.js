let storedNumber = '';
let storedNumber2 = '';
let storedOperator = '';

let operatorSymbols = {
    add: '+',
    subtract: '-',
    multiply: 'x',
    division: '/'
}

function storeNumber(number) {
    if ((storedOperator === '' && storedNumber.length < 9) || (storedOperator !== '' && storedNumber2.length < 9)) {
        if (storedOperator == '') {
            storedNumber += number;
        } else {
            storedNumber2 += number;
        }
        updateDisplay();
    } 
}
function storeOperator(operator) {
    if (storedOperator !== '' && storedNumber2 !== '') {
        calculateResult();

        // Update storedNumber with the result of the previous operation
        storedNumber = document.getElementById('display').innerText;

        // Update the display with the result followed by the new operator
        document.getElementById('display').innerText = storedNumber + " " + operatorSymbols[operator] + " ";

        storedOperator = operatorSymbols[operator];
        storedNumber2 = '';
    } else {
        storedOperator = operatorSymbols[operator];
        updateDisplay();
    }
}


function updateDisplay() {
    document.getElementById('display').innerText =  storedNumber + " " + storedOperator + " " + storedNumber2;
}


function clearDisplay() {
    storedNumber = '';
    storedNumber2 = '';
    storedOperator = '';
    document.getElementById('display').innerText = '0';
}

function changeSign(number) {
    if (storedNumber !== '') {
        storedNumber = parseFloat(storedNumber) * -1;
       updateDisplay();
    } 
}

function convertToPercent() {
    if (storedNumber !== '') {
        percentNumber = storedNumber / 100;
        document.getElementById('display').innerText = percentNumber;
    }
}

function calculateResult() {
    let result = '';
    if (storedOperator == "+") {
        result = parseFloat(storedNumber) + parseFloat(storedNumber2);
    }
    else if (storedOperator == "-") {
        result = parseFloat(storedNumber) - parseFloat(storedNumber2);
    }
    else if (storedOperator == "x") {
        result = parseFloat(storedNumber) * parseFloat(storedNumber2);
    }
    else if (storedOperator == "/") {
        result = parseFloat(storedNumber) / parseFloat(storedNumber2);
    }
    document.getElementById('display').innerText = result;
}

function dontDoDat() {
    document.getElementById('display').innerText = "don't do that";
}
