const getUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
let inputNames = document.getElementById('inputNames');
let sectionList = document.getElementById('sectionList');
let data = [];
let names = [];
console.log('names', names);

const getData = async () => {
    clear();
    try {
        clear();
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
    let filterArray = names.filter(e => e.includes(valueName)===true );
    console.log('filter array', filterArray);
     clear()
    for (let x = 0; x < filterArray.length; x++) {
        let div = document.createElement('div');
        div.innerHTML = filterArray[x];
        sectionList.appendChild(div);
    }
    
}


const clear = () => {
    let lies = document.getElementsByTagName('div');
    for (let y = lies.length-1; y >= 0; y--) {
        lies[y].remove();   
    }
}
// lucho dice que lo haga alreves dios sabe KE


inputNames.addEventListener('keyup', getData);

 