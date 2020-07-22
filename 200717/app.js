let bd_enteros = [1,2,3,4,5,6,7,8,9,10];
let bd_decimos = [10,20,30,40,50,60,70,80,90,100];
// Crear un selector con 3 opciones, la primera es representativa, los otros dos con valor, crear funcion que se ejecute cuando se selecciona una opcion y se debe preguntar a otra funcion que recibe un parametro y retorna en una promesa lo siguiente: segun el numero recibido decidir si entregar bd_enteros o db_decimos



function promiseResponse(selectElement) {
	return new Promise((resolve, reject) => {
		try {
            if (selectElement) {
                if (selectElement === '1') {
                    let response = {
                        "value": bd_enteros,
                        "success": true
                    };
                    console.log(response.value);
                    resolve(response);
                } else {
                    let response = {
                        "value": bd_decimos,
                        "success": true
                    };
                    console.log(response.value);
                    resolve(response);
                }
            } else {
                reject(false);
            }

		} catch {
			reject(false);
		}
	});
}

 async function myFunction() {
    let selectOption = document.getElementById('select');
    let selectElement = selectOption.options[selectOption.selectedIndex].value;
    try{
        console.log(selectElement);
        if (selectElement) {
            let number = await promiseResponse(selectElement);
        }else{
            alert('selecciona algo');
        }
    }catch (e) {
        console.log(e);
        alert('Error');
    }  
}

