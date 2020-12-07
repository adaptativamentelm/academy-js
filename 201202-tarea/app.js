let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let btn = document.getElementsByTagName('button')[0];
let sections = document.getElementsByTagName('section');
let data = [];


const getData = async(url) => {
    const response = await fetch(url);
    return await response.json();
};
const complement = async() => {
    for (let x = 0; x < qty.length; x++) {
        let user = await getData(`${urlGet}${qty[x]}`);
        data.push(user[0]);
    }
    print(data);
};

const print = (arr) => {
const data = arr.filter(data=> data.typename === "student");
  console.log("data", data);
 


  };





btn.addEventListener('click', complement);
