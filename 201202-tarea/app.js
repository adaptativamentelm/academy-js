let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let button = document.querySelector('button.button')
let sections = document.querySelector('section.name')
let data = [];
console.log('button',button);
console.log('section',sections);

const init = async() => {
    for (let x = 0; x < qty.length; x++) {
        let user = await getData(`${urlGet}${qty[x]}`);
        data.push(user[0])

    }
    const array=data.filter(e=>e.typeid===1)
    console.log('user',array);
  // draw(data)

  };


const getData = async(url) => {
    const response = await fetch(url);
    return await response.json();
};



 


button.addEventListener('click', init); 