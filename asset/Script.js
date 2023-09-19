let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let preValue = 0;

document.getElementById('clearButton').addEventListener('click', clearDisplay);
document.getElementById('button7').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('button4').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('button3').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('addButton').addEventListener('click', () => setOperator('+'));
document.getElementById('button8').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('button5').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('button2').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('subtractButton').addEventListener('click', () => setOperator('-'));
document.getElementById('button9').addEventListener('click', () => appendToDisplay('9'));
document.getElementById('button6').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('button1').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('multiplyButton').addEventListener('click', () => setOperator('*'));
document.getElementById('button0').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('decimalButton').addEventListener('click', () => appendToDisplay('.'));
document.getElementById('equalsButton').addEventListener('click', calculateResult);
document.getElementById('divideButton').addEventListener('click', () => setOperator('/'));


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
