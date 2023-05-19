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
    if (e.key in operators && a === "") { // if operator comes first then 1stNumber
      a = "0";
      operator = e.key;
      console.log("l45")
      console.log("a " + a);
      console.log("operator " + operator);
      return;
    }
    if (e.key in operators) {  // operator comes before 1stNumber is assigned
      operator = e.key;
      console.log("l52")
      console.log("a " + a);
      console.log("operator " + operator);
      return;
    }
    if (e.key in numbers) { // 1st number is at his normal position
      a = a + e.key;
      console.log("l59")
      console.log("a " + a);
      console.log("operator " + operator);
      return;
    }
  } else if (e.key in operators) { // if operator is assigned more then once op=op
    operator = e.key;
    console.log("l66")
    console.log("a " + a);
    console.log("operator " + operator);
    return;
  } else if (e.key in numbers) { // if 1stNumber is assigned and Op, 1ndNumber is assigned
    b = e.key;
    document.removeEventListener("keydown", logKey1);
    document.addEventListener("keydown", logKey2);
    console.log("l74")
    console.log("a " + a);
    console.log("b " + b);
    console.log("operator " + operator);
  }
}

document.addEventListener("keydown", logKey1);

function logKey2(e) {
  console.log("hello");
  console.log("a " + a);
  console.log("operator " + operator);
  console.log("a=" + b);
}
