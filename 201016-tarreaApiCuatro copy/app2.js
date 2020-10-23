
const dataJson = localStorage.getItem('dataString');
const data=JSON.parse(dataJson);
console.log(Object.values(data[0].name));
const name=data[0].name.toString();
console.log(name)

const titleWelcome = () => {
 let printWelcome =document.getElementById("nametitle2");
 printWelcome.innerHTML = `Bienvenida  ${name}`};
  
titleWelcome();

const buttonNextpage3 = document.getElementById('next3');
buttonNextpage3.addEventListener("click", ()=>{
  location.assign('page3.html');
});  
const buttonback1 = document.getElementById("back1");
buttonback1.addEventListener("click", () => {
  location.assign("page1.html")});