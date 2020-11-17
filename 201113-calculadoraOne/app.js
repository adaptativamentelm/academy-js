
let sections = document.getElementsByTagName("section");
let h2 = document.createElement("h2");
//let buttonEquals = document.getElementById("equal");
//const positionButton = () => {
let button = document.getElementsByTagName("button");

//let buttonClear=document.getElementById('clean');
//let buttonAdd=document.getElementById('summ');
// let buttonMinus=document.getElementById('minus')
//let displayed = false;

let valueButton = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "=", 0, ""];

let num = [];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (
      valueButton.indexOf(1) ||
      valueButton.indexOf(2) ||
      valueButton.indexOf(3) ||
      valueButton.indexOf(4) ||
      valueButton.indexOf(5) ||
      valueButton.indexOf(6) ||
      valueButton.indexOf(7) ||
      valueButton.indexOf(8) ||
      valueButton.indexOf(9) ||
      valueButton.indexOf(0)
    ) {
      //   console.log(valueButton[i]);
      num.push(valueButton[i]);
      let x=num.join('')
      console.log(x);
      
    } 
  });
}


//positionButton();
//const num1,num2;
const sum = (num1, num2) => {
  return num1 + num2;
};
const rest = (num1, num2) => {
  return num1 - num2;
};
console.log(sum(52,25))
console.log(rest(52,32))