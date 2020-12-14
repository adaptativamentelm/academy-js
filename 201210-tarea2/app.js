let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let printPosition = document.getElementById('Here');

const getData = async(id) => {
    let url = `${urlGet}${id}`
    let dataFetch = await fetch(url);
    let dataReady = await dataFetch.json();
    return dataReady
}

const drawHtml = (htmlTag, htmlParent, id) => {
    let eleName = document.createElement(htmlTag);
    eleName.id = id;
    htmlParent.appendChild(eleName);
    return eleName;
}

const printData = async() => {
    for (let i = 1; i <= qty.length; i++) {
        let dataUser = await getData(i);
        let tagName = drawHtml('h2', printPosition, dataUser[0]["name"]);
        let imgUser = new Image(100, 100);
        imgUser.src = dataUser[0]['img'];
        tagName.innerHTML = dataUser[0]["name"] + "<br>";
        tagName.appendChild(imgUser);
        let deleteButton = drawHtml('button', tagName, `user${i}`);
        deleteButton.innerHTML = "Eliminar";
        deleteButton.setAttribute("onclick", onclick = "deletePrint(this)"); //para que el boton elimine su propio div que lo contiene.
    };
}


const deletePrint = (divEle) => {
    divEle.parentElement.remove();
    console.log(`Se eliminó el usuario ${divEle.parentElement.id}`);
}

printData();