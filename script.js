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
let a = (b = operator = ""); //a and b are 1st and 2nd number and and the operator corresponds to the operation to execute
let enter = true; // Enter Key State Switch

function resetValues() {
  a = b = operator = "";
  enter = true;
  numbers = {};
  numberConstructor();
}

function logKey1(e) {
  // careful, return and break don't have the same effect here
  switch (true) {
    case e.key === "Control" && a != 0: {
      // Control Key is Our Sign Change Key
      a = "-1" * a;
      break;
    }
    case operator === "" && e.key in operators: {
      //  if Operator Don´t Exist and 1stNumber is not Present
      operator = e.key; //  then 1stNumber  is Filled with "0" and OP is Assigned
      if (a === "") a = "0";
      break;
    }
    case operator === "" && e.key in numbers: {
      // Normal use
      a = a + e.key; // !IMPORTANT! we cant use op ternary, because we need this value on var. "a" to execute the next line
      if (a === "0") a = e.key; //  If firstNumber = 0 we can Change Again his Value
      break;
    }
    case operator != "": {
      numbers["."] = "."; // This With the Lines at the End of this f() Prevents Double or More "dots"
      if (Number(a) == 0) {  // This makes an alert on Division by 0
        alert("You can't divide by zero", "Press any Key to continue");
        resetValues();
        return;
      }
      switch (true) {
        case e.key in operators: {
          // If 1stNUmber and Operator Exist we can change Operator more then Once
          operator = e.key;
          return;
        }
        case e.key in numbers: {
          //  If op exist and now we ave a Number, we have 2ndNumber
          b = e.key;
          enter = true;
          if (b === ".") b = "0."; //  fix . => "0." Display issue on 2ndNumber
          if (e.key === ".") delete numbers["."]; //  Prevents double or more "dots" on 2ndNumber
          document.removeEventListener("keydown", logKey1);
          document.addEventListener("keydown", logKey2);
        }
      }
    }
  }
  if (a === ".") a = "0."; //  fix . => "0." Display issue on 1stNumber
  if (e.key === ".") delete numbers["."]; //  Prevents double or more "dots" on 1ndNumber
}

document.addEventListener("keydown", logKey1); // this fo in main()

function logKey2(e) {
  switch (true) {
    case e.key === "Control": // Control is Our Sign Change Key Again
      b = "-1" * b;
      return;
    case e.key in numbers:
      if (b === "0") {
        //if b = 0 we can Change It
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
    case e.key === "Enter" && enter === true: //Enter is our "=" Operator
      enter = false; // This prevents "Enter" more then once "error"
      a = Number(a);
      b = Number(b);
      a = parseFloat(operate(a, b, operator)).toFixed(3);
      b = operator = "";
      console.log(a + b + operator);
      document.addEventListener("keydown", logKey1);
  }
}

document.addEventListener("keydown", clearData);

function clearData(e) {   // Clear Button f()
  if (e.key === "Escape") {
    let confirmation = prompt(
      "Do you want to RESET you current operation?",
      "press yes to reset or any key to Ignore"
    );
    if (confirmation === "yes") { resetValues(); }
  }
}

function backspace(e) {   // backspace f() for 1st and 2nd number
  if (e.key === "Backspace") {
    switch (true) {
      case a != "" && b === "": {
        let auxA = a.split("");
        auxA.pop();
        a = auxA.join("");
        return;
      }
      case a != "" && b != "": {
        let auxB = b.split("");
        auxB.pop();
        b = auxB.join("");
      }
    }
  }
}
document.addEventListener("keydown", backspace);

addEventListener("click", (e) => {
    console.log(e.target)
    const touch = e.target.getAttribute("data-key");
  console.log(touch)
    
},{
  capture: false,
  once: true
})