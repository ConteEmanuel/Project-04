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
let numbers ={};
function numberConstructor(){
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
    ".": "."
  };
};
numberConstructor();
const operators = {"+":"+","-":"-","*":"*","/":"/"};
let a = "";
let operator;

function logKey1(e) {
  if (e.key in operators && (a === "" || a === "0")){ // if operator comes first => a=0 and op reset itself
    a="0.";
    operator=e.key;
    console.log(operator);
    numbers = {};
  }
  if (e.key === "." && a===""){ // if dot comes first this add "0"
    a = "0.";
    return
  }
  if (e.key in numbers) { // adds number or "."
    a = a + e.key;
  }
  if (e.key === ".") {  // prevent two or more dots
    delete numbers["."];
    return;
  }
  console.log(a);
}

document.addEventListener("keydown", logKey1);
