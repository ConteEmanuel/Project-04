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
const numbers = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0",".":"."};
//const operators = {"+":"+","-":"-","*":"*","/":"/"};
let a="";
let operator;

function logKey1 (e){
if (e.key in numbers){
a= a + e.key;}
console.log(a);
}

document.addEventListener("keydown", logKey1);