//Doom vars
let textNumbers = document.getElementById('displayText');
let operatorNumbers = document.getElementById('sign');
// operations f() start here
let firstNumber, secondNumber, result, storedResult;
let pressedKey = "";
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

const operators = { "+": "+", "-": "-", "*": "*", "/": "/", "Enter": "Enter", "Control": "Control" };
let a = (b = operator = ""); //a and b are 1st and 2nd number and and the operator corresponds to the operation to execute
let enter = d = true; // Enter Key State Switch

function resetValues() {
  console.log("hi!!")
  a = b = operator = "";
  enter = true;
  numbers = {};
  numberConstructor();
}

function logKey1() {
  // careful, return and break don't have the same effect here
  switch (true) {
    case pressedKey === "Control" && a != "": {
      // Control Key is Our Sign Change Key
      a = "-1" * a;
      break;
    }
    case operator === "" && pressedKey in operators: {
      numbers["."] = ".";
      //  if Operator Don´t Exist and 1stNumber is not Present
      operator = pressedKey; //  then 1stNumber  is Filled with "0" and OP is Assigned
      if (a === "") a = "0";
      break;
    }
    case operator === "" && pressedKey in numbers: {
      // Normal use
      a = a + pressedKey; // !IMPORTANT! we cant use op ternary, because we need this value on var. "a" to execute the next line
      if (a === "0") a = pressedKey; //  If firstNumber = 0 we can Change Again his Value
      break;
    }
    case operator != "": {
      // This With the Lines at the End of this f() Prevents Double or More "dots"
      if ((Number(a) == 0) && (operator === "/")) {  // This makes an alert on Division by 0
        alert("You can't divide by zero", "Press any Key to continue");
        resetValues();
        return;
      };
      switch (true) {
        case pressedKey in operators: {
          // If 1stNUmber and Operator Exist we can change Operator more then Once
          operator = pressedKey;
          return;
        }
        case pressedKey in numbers: {
          //  If op exist and now we ave a Number, we have 2ndNumber
          b = pressedKey;
          enter = true;
          if (b === ".") b = "0."; //  fix . => "0." Display issue on 2ndNumber
          if (pressedKey === ".") delete numbers["."]; //  Prevents double or more "dots" on 2ndNumber
          d = false;
          textNumbers.textContent = b;
          return;
        }
      }
    }
  }
  if (operator != "" && operator != "Control" && operator != "Enter") { operatorNumbers.textContent = operator; };
  if (operators === "Enter") { operatorNumbers.textContent = "=" };
  if (a != "") { textNumbers.textContent = a; }
  if (a === ".") a = "0."; //  fix . => "0." Display issue on 1stNumber
  if (pressedKey === ".") delete numbers["."]; //  Prevents double or more "dots" on 1ndNumber
}


function logKey2() {
  switch (true) {
    case pressedKey === "Control": // Control is Our Sign Change Key Again
      b = "-1" * b;
      textNumbers.textContent = b;
      break;
    case pressedKey in numbers:
      if (b === "0") {
        //if b = 0 we can Change It
        b = pressedKey;
        break;
      } else {
        b = b + pressedKey; // if not we stack 2ndNumber
        break;
      }
    case pressedKey === "Enter" && enter === true: //Enter is our "=" Operator
      console.log("HI!!!");
      enter = false; // This prevents "Enter" more then once "error"
      a = Number(a);
      b = Number(b);
      a = parseFloat(operate(a, b, operator)).toFixed(3);
      textNumbers.textContent = a;
      b = operator = "";
      d = true;
      return
  }
  textNumbers.textContent = b;
}

function clearData(pressedKey) {   // Clear Button f()
  if (pressedKey === "Escape") {
    let confirmation = prompt(
      "Do you want to RESET you current operation?",
      "press yes to reset or any key to Ignore"
    );
    if (confirmation === "yes") { resetValues(); }
  }
}

function backspace() {   // backspace f() for 1st and 2nd number
  if (pressedKey === "Backspace") {
    switch (true) {
      case a != "" && b === "": {
        let auxA = a.split("");
        auxA.pop();
        a = auxA.join("");
        textNumbers.textContent = a;
        return;
      }
      case a != "" && b != "": {
        let auxB = b.split("");
        auxB.pop();
        b = auxB.join("");
        textNumbers.textContent = b;
      }
    }
  }
}



function getKey() {
  document.getElementById("keyPad").addEventListener(
    "click",
    (e) => {
      pressedKey = e.target.closest("div").getAttribute("data-key");
      let divPressed = document.querySelector(`div[data-key="${pressedKey}"]`);
      divPressed.classList.toggle("keyClicked");
      logic(pressedKey);
      setTimeout(() => {
        divPressed.classList.toggle("keyClicked");
      }, 500);
    },
    {
      capture: false,
      once: false,
    }
  );
  document.addEventListener("keydown", (e) => {
    pressedKey = e.key;
    logic(pressedKey);
  });
}
getKey();
function logic() {
  switch (true) {
    case (pressedKey === "Escape"): {
      clearData(pressedKey);
      break;
    }
    case (pressedKey === "Backspace"):
      {
        backspace(pressedKey);
        break;
      }
    case (pressedKey in numbers && d === true || pressedKey in operators && d === true):
      {
        logKey1(pressedKey);
        break;
      }
    case (pressedKey in numbers && (d === false) && (b != "") && (operator != "") || pressedKey in operators && d === false) && (b != "") && (operator != ""):
      { logKey2(pressedKey); }
  }
}