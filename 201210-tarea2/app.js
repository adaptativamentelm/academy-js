let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data=[]
//pintar la pantalla con la data con:nombre, id, user, foto de los usuarios y un boton para eliminarlo

let sections = document.querySelector("div.user");
console.log(sections)
const init = async () => {
  for (let x = 0; x < qty.length; x++) {
    let user = await getData(`${urlGet}${qty[x]}`);
    data.push(user[0]);
    }

 // let mapEx5 = mapEx3.map((data) => ({ "value": data.value }));
/*  const data1= data.map(e =>({'name':e.name,'id':e.id,'user':e.user,'img':e.img }));
  console.log(data1) */
 print(data)
};

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};




const print = (a) => {
  const data1= data.map(e =>({'name':e.name,'id':e.id,'user':e.user,'img':e.img }));
  console.log(data1)
  for (let i = 0; i < a.length; i++) {
    let h2= document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let imagen=document.createElement("img")
   // let src=document.createAttribute(imagen,src)
    let button=document.createElement("button")
    h2.textContent = data1[i].name;
    h4.textContent = 'Id:'+data1[i].id;
    h3.textContent = 'User:'+data1[i].user;
    imagen.innerHTML=i;
    imagen.src=data[i].img
   button.textContent= 'Eliminar';
   
    imagen.style.maxWidth='30%'
    sections.appendChild(h2);
    sections.appendChild(h4);
    sections.appendChild(h3);
    sections.appendChild(imagen)
    sections.appendChild(button)
   
  } 
}; 
init()

//hacer un arreglo con los ids de los botones