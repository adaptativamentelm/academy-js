//let loginUser = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';//Post
//const listUsers = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list'; // GET


//captar valor de los input
//let name=document.getElementById("post-name").value;
//let user=document.getElementById("post-password").value;

//enviar info en evento del boton al metodo post

// si los valores de los input coinciden con un usuario ir a la pagina 1

/* const api = async () => {
   const urlPost = {
    "method": 'POST', 
    "headers": { 'Content-Type': 'application/json' }, 
    "body": JSON.stringify({"id":1}) 
    //"name":info.name,"user": info.user
  } 
 //const resp1 = await fetch(listUsers);
  const resp1 = await fetch(loginUser, urlPost);
  let data = await resp1.json();
  console.log(data);
}; */




const button = document.getElementById('next2');
button.addEventListener("click", ()=>{
  location.assign('page2.html');
}) 




//let inputs = document.getElementsByTagName('input');
// let button = document.getElementById('next');

// console.log('estamos');
// //button.addEventListener("click",()=>{
//  location.assign('page2')
//})


// const nextpage = document.getElementsByClassName("next");
// for (let i = 0; i < nextpage.length; i++) {
// nextpage[i].addEventListener( "click",()=> {
  
//   location.assign('')
//   //console.log('estamos');
// })};

