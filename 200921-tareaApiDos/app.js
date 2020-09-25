let get = "https://portal-be.adaptativamente.cl/reporteria/academy/users";
let post = "https://portal-be.adaptativamente.cl/reporteria/academy/user/id";
let data = [];
let odds = document.getElementById("odd");
let evens = document.getElementById("even");
let show = document.getElementById("show");
let idInput = document.getElementById("idInput");
let showId = document.getElementById("showId");

// const getData = async () => {
//     const response = await fetch(get);
//     data = await response.json();
//     console.log('data', data);
//     processing();
// };

// const processing = () => {
//     for (let x = 0; x < data.length; x++) {
//         drawing(data[x].name, data[x].id % 2 === 0);
//     }
// };

// const drawing = (str, isOdd) => {
//     let h2 = document.createElement('h2');
//     h2.innerHTML = str;
//     isOdd ? odds.appendChild(h2) : evens.appendChild(h2);
// };

// getData();

const getPost = async () => {
  let payload = {
    "id": Number(idInput.value)
  };
  const params = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  let response = await fetch(post, params);
  let data = await response.json();
  console.log("DATA", data);
  drawing(`ID :  ${data[0].id}`);
  drawing(`Name : ${data[0].name}`);
  drawing(`user : ${data[0].user}`);
};

// const processing = () => {
//   for (let x = 0; x = data.length; x++) {
//       console.log("que imprimo",data[x])
//     drawing(data[x]);
//   }
// };

const drawing = (n) => {
  let p = document.createElement('p');
  p.innerHTML = n;
  showId.appendChild(p);
};

show.addEventListener("click", getPost);
