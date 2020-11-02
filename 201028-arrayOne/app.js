const getUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
let inputNames = document.getElementById('inputNames');
let data = [];
let names = [];
console.log('names', names);

const getData = async () => {

    try {
        let response = await fetch(getUrl);
        let data = await response.json();
        console.log('data', data);
        filterNames(data, inputNames.value.toUpperCase());
        // console.log(inputNames.value.toUpperCase());
        
    } catch (e) {
        console.log(e);
    }

}

const filterNames = (info, valueName) => {

    if (names.length===0) {
        for (let i = 0; i < info.length; i++) {
            names.push(info[i].name.toUpperCase());          
        }
        console.log('names despues del for', names);    
    }
    let filterArray = names.filter(e => e.includes(valueName)==true );
    console.log(filterArray);
}


inputNames.addEventListener('keyup', getData);