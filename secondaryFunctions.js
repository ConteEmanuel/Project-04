//operation f()
operate = function (value1, value2, operator) {
  if (operator in operations) {
    return (result = operations[operator](value1, value2));
  }
}; 

function resetValues() {  //This is our Escape()
  a = b = operator = "";
  enter = true;
  numbers["."] = "."; //we add it if need it}
  operatorNumbers.textContent="";
  textNumbers.textContent="";
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

function main() { //  this is the main Event Listener for keys and clicks()
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
