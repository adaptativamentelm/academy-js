let urlGet =
  "https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/";
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let button = document.querySelector("button.button");
let sections = document.querySelector("section.name");
let data = [];

const init = async () => {
  for (let x = 0; x < qty.length; x++) {
    let user = await getData(`${urlGet}${qty[x]}`);
    data.push(user[0]);
  }
  print(data);
};

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const print = (a) => {
  const date = a.filter((e) => e.typeid === 1).map((e) => e.name);
  for (let i = 0; i < a.length; i++) {
    let h1 = document.createElement("h1");
    h1.textContent = date[i];
    sections.appendChild(h1);
  }
};

button.addEventListener("click", init);
