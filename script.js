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
let b = "";

function logKey1(e) {
  if (!operator) {
    switch (true) {
      case e.key in operators:
        if (a === "") {
          a = "0";
          operator = e.key;
          console.log("l47");
          console.log("a " + a);
          console.log("operator " + operator);
          break;
        } else {
          operator = e.key;
          console.log("l53");
          console.log("a " + a);
          console.log("operator " + operator);
          break;
        }
      case e.key in numbers:
        a = a + e.key;
        console.log("l60");
        console.log("a " + a);
        console.log("operator " + operator);
    }
  } else  switch (true){
      case (e.key in operators):
        operator = e.key;
        console.log("l67");
        console.log("a " + a);
        console.log("operator " + operator);
        break;
      case (e.key in numbers):
        b = e.key;
        document.removeEventListener("keydown" , logKey1);
        document.addEventListener("keydown" , logKey2);
  }
}

document.addEventListener("keydown", logKey1);

function logKey2(e) {
  b=b+e.key;
  console.log("hello");
  console.log("a " + a);
  console.log("operator " + operator);
  console.log("b=" + b);
}
