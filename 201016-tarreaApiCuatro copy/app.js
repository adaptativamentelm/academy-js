//let loginUser = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';//Post
const listUsers =
  "https://portal-be.adaptativamente.cl/reporteria/academy/users-list"; // GET

let login = "https://portal-be.adaptativamente.cl/reporteria/academy/login"; //esta es post?





//captar valor de los input
let user = document.getElementById("post-name");
let pass = document.getElementById("post-password");

//hacer un objeto con user y pass e ingresarlo en el post
/*   const requestGet =async ()=>{

  const responseList = await fetch(listUsers);
   let data = await responseList.json();
   console.log(data)
  };
 
requestGet(); */

//localStorage.setItem({ user: user.value, pass: pass.value });

const buttonloguin = document.getElementById("catchUser");
buttonloguin.addEventListener("click", () => {
  requestPost();
  next();
});

 
function next() {
  setTimeout(function(){ location.assign('page1.html'); }, 500);
}


 const requestPost = async () => {
  const users ={
    "user":user.value, 
    "pass": Number(pass.value)
  }
  const usersString = JSON.stringify(users);
  console.log(users)
  localStorage.setItem('users', users);
   console.log(usersString)
  const payload = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    
  }; 
  
  const responseLoguin = await fetch(login, payload);
  let data = await responseLoguin.json();
   console.log(data);
     
   localStorage.setItem('dataString', JSON.stringify( data ));
   
};

  