function logKey1() {  //This f() gets "a" and the "operator" and first element of "b"
    switch (true) {   // careful, return and break don't have the same effect in this switch's
        case pressedKey === "Control" && a != "": {      // Control Key is Our Sign Change Key
            a = "-1" * a;
            break;
        }
        case operator === "" && pressedKey in operators: {
            numbers["."] = ".";      //  if Operator Don´t Exist and 1stNumber is not Present
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
                    //  If op exist and now we have a Number, we have the 2ndNumber
                    b = pressedKey;
                    enter = true;
                    if (b === ".") b = "0."; //  fix . => "0." Display issue on 2ndNumber
                    if (pressedKey === ".") delete numbers["."]; //  Prevents double or more "dots" on 2ndNumber
                    d = false;    //if d = false then b !=0
                    textNumbers.textContent = b;  // This change "a" and set "b" on the Display
                    return;
                }
            }
        }
    } //This last lines are the reazon of the importance of break over return in some lines 
    if (operator != "" && operator != "Control" && operator != "Enter") { operatorNumbers.textContent = operator; };
    if (operator === "Enter") { operatorNumbers.textContent = "=" };
    if (a != "") { textNumbers.textContent = a; }
    if (a === ".") a = "0."; //  fix . => "0." Display issue on 1stNumber
    if (pressedKey === ".") delete numbers["."]; //  Prevents double or more "dots" on 1ndNumber
}

function logKey2() {
    switch (true) {
        case pressedKey === "Control": // Control is Our Sign Change Key Again
            b = "-1" * b;
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
            enter = false; // This prevents "Enter" more then once "error"
            a = Number(a);
            b = Number(b);
            a = parseFloat(operate(a, b, operator)).toFixed(3); //This fix same round and fix decimals in one f()
            textNumbers.textContent = a;  //This set the result on the Display
            b = operator = "";
            d = true;
            return
    }
    textNumbers.textContent = b;  //If pressedKey is not Enter, then we update "b"
}

function logic() {  //This f() its our main Caller for each case
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

main();