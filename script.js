// operations f() start here
let firstNumber, secondNumber, result, storedResult;

let operations = {
  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
  "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
};

operate = function (value1, value2, operator) {
  if (operator in operations) {
    return (result = operations[operator](value1, value2));
  }
};
// keysLogger start here
let numbers = {};
function numberConstructor() {
  numbers = {
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
}
numberConstructor();
const operators = { "+": "+", "-": "-", "*": "*", "/": "/" };
let a = "";
let operator;
let lastKey;

function logKey1(e) {
  if (!operator) {
   
  }
}
document.addEventListener("keydown", logKey1);

function logKey2 (e) {
  console.log("hello");
  console.log("a="+a);
  console.log("operator="+ operator)

}
