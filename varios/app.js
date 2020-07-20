// let andre = "andreita";
// let space =" ";
// document.write(andre);
// var pe = document.createElement("p");
// pe.title = "titulo";
// pe.innerHTML = "texto";
// document.getElementsByTagName("body")[0].appendChild(pe);
//___________________________________________


setTimeout(() => {
  console.log("ddddd")  
}, 2000);

function myFunction() {
    console.log('hola bebe2');
}

let radiobut = document.getElementById("1");
radiobut.onchange = function(){
    console.log('saludo');
}

radiobut.addEventListener("change", myFunction);