
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
let a = b = operator = "";


function logKey1(e) {
  switch (true) {
    case e.key === "Control" && a != 0: {         // Control Key is Our Sign Change Key
      a = "-1" * a;
      break;
    }
    case operator === "" && e.key in operators: { //  if Operator Don´t Exist and 1stNumber is not Present 
      operator = e.key;                           //  then 1stNumber  is Filled with "0" and OP is Assigned
      if (a === "") a = "0";  
      break;
    }
    case operator === "" && e.key in numbers: {   // Normal use
      a = a + e.key;
      if (a === "0") a = e.key;                   //  If firstNumber = 0 we can Change Again his Value
      break;
    }
    case operator != "": {
      numbers["."] = ".";                         // This With the Lines at the End of this f() Prevents Double or More "dots"
      switch (true) {
        case e.key in operators: {                // If 1stNUmber and Operator Exist we can change Operator more then Once
          operator = e.key;
          return;
        }
        case e.key in numbers: {                  //  If op exist and now we ave a Number, we have 2ndNumber
          b = e.key;  
          if (b === ".")                          //  fix . => "0." Display issue on 2ndNumber
          b = "0.";
        if ( e.key === ".")                       //  Prevents double or more "dots" on 2ndNumber
          delete numbers["."];
          document.removeEventListener("keydown", logKey1);
          document.addEventListener("keydown", logKey2);
        }
      }
    }
  }
  if (a === ".")                                   //  fix . => "0." Display issue on 1stNumber
    a = "0.";
  if ( e.key === ".")
    delete numbers["."];                           //  Prevents double or more "dots" on 1ndNumber
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