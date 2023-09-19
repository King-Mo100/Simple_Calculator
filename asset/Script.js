function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    preValue = 0;
    display.innerText = '0';
}

function setOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator;
        preValue = parseFloat(currentInput);
        currentInput = '';
    }
}