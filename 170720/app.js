let selected = document.getElementById('selected');
async function myFunction() {
    try {
        // console.log(selected.options);
        // console.log(selected.selectedIndex);
        let response = await obtenerData(selected.selectedIndex);
        console.log(response);
    } catch (error) {
        console.log("holi");
    }
}

function obtenerData(selection) {
    let bd_enteros = [1,2,3,4,5,6,7,8,9,10];
    let bd_decimos = [10,20,30,40,50,60,70,80,90,100]; 

    return new Promise( (resolve, reject) => 
    {
        if (selection == 1){
            resolve(bd_enteros);
        } else if (selection == 2) {
            resolve(bd_decimos);
        } else {
            reject('opcion no válida')
        }
    } )
}