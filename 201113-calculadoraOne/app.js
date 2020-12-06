const buttonNumber = document.getElementsByName("number");
const buttonOperation = document.getElementsByName("op");
const buttonEqual = document.getElementsByName("equal");
const buttonClear = document.getElementsByName("clean");
const screen = document.getElementById("screen");
const buttonSing=document.getElementsByName("sign");
let opActually = "";
let opBefore = "";
let operation = undefined;
//console.log(buttonClear[0])
buttonNumber.forEach((button) => {
  button.addEventListener("click", () => {
 
    addNumber(button.textContent);

  });
});

buttonOperation.forEach((button) => {
  button.addEventListener("click", () => {
    selectOperation(button.innerText);
  });
});
buttonEqual[0].addEventListener("click", () => {
  calculator();
  actuallyScreen();
}); // Igual

buttonClear[0].addEventListener("click", () => {
  clear();
  actuallyScreen();
});

const selectOperation = (op) => {
  if (opActually === "") return;
  if (opBefore !== "") {
    calculator();
  }
  operation = op.toString();
  opBefore = opActually;
  opActually = "";
};

const calculator = () => {
  let cal;
  let before = parseFloat(opBefore);
  let actually = parseFloat(opActually);
  if (isNaN(before) || isNaN(actually)) return;
  switch (operation) {
    case "+":
      cal = before + actually;
      break;
    case "-":
      cal = before - actually;
      break;
    case "÷":
      cal = before / actually;
      break;
    case "x":
      cal = before * actually;
      break;
    case "^":
      cal = Math.pow(before, actually);
      break;
    case "√":
      if (before === before) {
        cal = Math.pow(actually, 1 / before);
      }
      break;

    default:
      return;
  }
  opActually = cal;
  operation = undefined;
  opBefore = "";
};


const addNumber = (num) => {

 if(num==="- / +"){
  num="-"
  }
  

console.log(opActually)
console.log(opActually.search('..'));
  opActually = opActually.toString() + num.toString();
 if(opActually.search('--')===0){
  opActually="-"
 }

  console.log(opActually.toString().search('..'));
 
    actuallyScreen();

};

const clear = () => {
  opActually = "";
  opBefore = "";
  operation = undefined;
};

const actuallyScreen = () => {
  screen.value = opActually;
};
