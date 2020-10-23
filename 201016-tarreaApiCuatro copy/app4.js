const dataJson = localStorage.getItem('dataString');
const data=JSON.parse(dataJson);
console.log(Object.values(data[0].name));
const name=data[0].name.toString();
console.log(name)

const titleWelcome = () => {
 let printWelcome =document.getElementById("nametitle4");
 printWelcome.innerHTML = `Bienvenida  ${name}`};
  
titleWelcome();


const porcentajeDeCumple = () => {
  let fechai = new Date("01/01/2020");
  let fechacumple = new Date("02/03/2020");

  let milisegundos = 24 * 60 * 60 * 1000;

  let milisegundosTranscurridos = Math.abs(
    fechai.getTime() - fechacumple.getTime()
  );
  let diasHastaCumple = Math.round(milisegundosTranscurridos);

  let porcientodeDiasCumple = Math.round(
    (diasHastaCumple / milisegundos / 365) * 100
  );

  console.log(
    "El porcentaje de mi cumple es " + porcientodeDiasCumple + "%" + " del año"
  );

  return porcientodeDiasCumple;
};

const printPorcentBirthday = () => {
 let printPercent = document.getElementById("percentbirthday");
  console.log("este es un string", printPercent);
  printPercent.innerHTML = `El porcentaje de mi cumple es ${porcentajeDeCumple()}% del año`;
};
printPorcentBirthday();

const buttonOutSite = document.getElementById("outsite");
buttonOutSite.addEventListener("click", () => {
  location.replace("index.html");
});
const buttonback3 = document.getElementById("back3");
buttonback3.addEventListener("click", () => {
  location.assign("page3.html");
});
