// operations f() start here
let firstNumber,
    secondNumber,
    result,
    storedResult; 

let operations = {
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
};

operate = function (value1, value2, operator) {
    if (operator in operations) {
        return result = operations[operator](value1, value2);
    }
}
// operations f() ends here