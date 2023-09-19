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

function calculateResult() {
    if (currentInput === '') return;
    const currentValue = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            preValue += currentValue;
            break;
        case '-':
            preValue -= currentValue;
            break;
        case '*':
            preValue *= currentValue;
            break;
        case '/':
            if (currentValue !== 0) {
                preValue /= currentValue;
            } else {
                alert('Error: Division by zero');
                clearDisplay();
                return;
            }
            break;
    }
    
    display.innerText = preValue;
    currentInput = preValue.toString(); // Store the result as the new input
    currentOperator = '';
}

clearDisplay();
