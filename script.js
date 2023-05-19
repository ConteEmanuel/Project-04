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
let operator = "";
let b = "";

function logKey1(e) {
  console.log(e.key); // Control is Our Sign Change Key
  if (e.key === "Control" && a != "0") {
    a = "-1" * a;
    return;
  }
  if (operator === "") {
    switch (true) {
      case e.key in operators:  //  if Operator Dont exist and 1stNumber is not Present then 1stNumber = "0" and OP is Assigned for the First Time
        if (a === "") {
          a = "0";
          operator = e.key;
          console.log("l47");
          console.log("a " + a);
          console.log("operator " + operator);
          return;
        } else {
          operator = e.key; // if 1stNumber and OP exist, then we can change Operator more than once 
          console.log("l53");
          console.log("a " + a);
          console.log("operator " + operator);
          return;
        }
      case e.key in numbers:    
        if (a === "0") {  //  if 1stNumber is "0" we can Change it Again
          a = e.key;
          return;
        } else {  // if 1stNumber is !0 then, we keep adding numbers at 1stNumber
          a = a + e.key;
          console.log("l60");
          console.log("a " + a);
          console.log("operator " + operator);
        }
    }
  } else
    switch (true) {
      case e.key in operators: // if 1stNumber and Operator Exist, we can change the operator
        operator = e.key;
        console.log("l67");
        console.log("a " + a);
        console.log("operator " + operator);
        return;
      case e.key in numbers: // if 1stNUmberExist and operator, then if its a number => its sndNumber!
        b = e.key;
        console.log("l73");
        console.log("a " + a);
        console.log("operator " + operator);
        console.log("b=" + b);
        document.removeEventListener("keydown", logKey1); 
        document.addEventListener("keydown", logKey2);  // We remove 1stNumber() and go to sndNumber() called logKey2
    } 
}

document.addEventListener("keydown", logKey1);

function logKey2(e) {
  switch (true) {
    case e.key === "Control": // Control is Our Sign Change Key Again
      b = "-1" * b;
      return;
    case e.key in numbers:
      if (b === "0") {  //if b = 0 we can Change It
        b = e.key;
        return;
      } else {
        b = b + e.key; // if not we stack 2ndNumber
        console.log("l85");
        console.log("a " + a);
        console.log("operator " + operator);
        console.log("b=" + b);
        return;
      }
    case e.key === "Enter": //Enter is our "=" Operator 
      a = Number(a);
      b = Number(b);
      a = String(operate(a, b, operator));
      b = "";
      operator = "";
      console.log(a + b + operator);
      document.addEventListener("keydown", logKey1);
  }
}
