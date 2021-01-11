let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let datos = document.getElementById('datos')

// obtencion de datos
const getData = async () => {
    try {
        let response = await fetch(urlGet);
        let data = await response.json();
    } catch (e) {
        console.log(e);
    }
    console.log(data)
}
getData();
