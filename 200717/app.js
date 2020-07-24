let bd_enteros = [1,2,3,4,5,6,7,8,9,10];
let bd_decimos = [10,20,30,40,50,60,70,80,90,100];
let selectorHTML = document.getElementById('select');

async function selectOption() {
    try {
        const valueSelected = Number(selectorHTML.options[selectorHTML.selectedIndex].value);
        const response = await returnDataPromise(valueSelected);
        console.log('Data:', response);
    } catch (e) {
        console.log(e);
    }
}

function returnDataPromise(id) {
    return new Promise((resolve, reject) => {
        id ? id === 1 ? resolve(bd_enteros) : resolve(bd_decimos) : reject('Error: Id entregado no válido');
    });
}
