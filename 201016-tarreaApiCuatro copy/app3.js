
const dataJson = localStorage.getItem('dataString');
const data=JSON.parse(dataJson);
console.log(Object.values(data[0].name));
const name=data[0].name.toString();
console.log(name)

const titleWelcome = () => {
 let printWelcome =document.getElementById("nametitle3");
 printWelcome.innerHTML = `Bienvenida  ${name}`};
  
titleWelcome();

const buttonNextpage4 = document.getElementById('next4');
buttonNextpage4.addEventListener("click", ()=>{
  location.assign('page4.html');
});  
const buttonback2 = document.getElementById("back2");
buttonback2.addEventListener("click", () => {
  location.assign("page2.html");
});