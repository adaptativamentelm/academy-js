let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let pares = [];
let impares= [];
let data = [];

const getData = async () => {
    let response = await fetch(get);
    let data = await response.json();
    console.log(data)
}
getData();

// for( i = 0; i < data; i++){
//     console.log()
// }

const draw = () => {
    let nombre = document.createElement('p')
    
}