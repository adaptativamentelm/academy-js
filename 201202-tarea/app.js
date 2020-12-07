let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data = [];
let buttonPrint = document.getElementById('obtainUsers');
let printPosition = document.getElementById('Here');

const getData = async(id) => {
    let url = `${urlGet}${id}`
    let dataFetch = await fetch(url);
    let dataReady = await dataFetch.json();
    return dataReady
}

const drawHtml = (htmlTag, htmlParent) => {
    let eleName = document.createElement(htmlTag);
    htmlParent.appendChild(eleName);
    return eleName;
}

const printData = async() => {
    data = [];
    printPosition.innerHTML = "";
    for (let i = 1; i <= qty.length; i++) {
        let dataUser = await getData(i);
        if (dataUser[0]["typeid"] === 1) {
            let tagName = drawHtml('h2', printPosition);
            tagName.innerHTML = dataUser[0]["name"];
            console.log(dataUser[0]["name"]);
        }
    };
}

buttonPrint.addEventListener('click', printData);