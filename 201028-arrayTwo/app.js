let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let getButton = document.getElementById('getButton');
let list = document.getElementById('list');
let arrayNames = [];
const getData = async (url) => { 

    for (let x = 0; x < qty.length-1; x++) {
        console.log(url+[x])
        const response = await fetch(`${url+qty[x]}`);
        data = await response.json();
        arrayNames.push(data[0].name);
        } 
        print();
        console.log(arrayNames);
};
console.log(arrayNames);
const print = () =>{
    let names = arrayNames.join(' - ');
    let h3 =document.createElement('h3');
    h3.innerHTML = names;
    list.appendChild(h3);


}


getButton.addEventListener('click', getData.bind(null, urlGet));