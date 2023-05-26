// operations f() vars
let firstNumber, secondNumber, result, storedResult;
let pressedKey = "";
let operations = {
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
};

//Display Text and Sign Var
let textNumbers = document.getElementById('displayText');
let operatorNumbers = document.getElementById('sign');

let numbers = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
    ".": ".",
};

const operators = {
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    "Enter": "Enter",
    "Control": "Control"
};

let a = (b = operator = ""); //a and b are 1st and 2nd number and and the operator corresponds to the operation to execute
let enter = d = true; // Enter Key State Switch & d = true if b!=""
