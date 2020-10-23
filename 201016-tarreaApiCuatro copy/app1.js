/* let titleWelcome=document.getElementById("nametitle");

 const welcome = ()=>{
  titleWelcome.innerHTML = `Bienvenido ${data.name}`;
 }

console.log(welcome()); */

const dataJson = localStorage.getItem('dataString');
const data=JSON.parse(dataJson);
console.log(Object.values(data[0].name));
const name=data[0].name.toString();
console.log(name)

const titleWelcome = () => {
 let printWelcome =document.getElementById("nametitle");
 printWelcome.innerHTML = `Bienvenida  ${name}`};
  
titleWelcome();
const  buttonNextpage2  = document.getElementById("next2");
buttonNextpage2 .addEventListener("click", ()=>{
  location.assign('page2.html');
});

const buttonbackhome = document.getElementById("backHome");
buttonbackhome.addEventListener("click", () => {
  location.replace("index.html");
});

  



