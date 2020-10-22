let sections = document.getElementsByClassName('profile');
let information = JSON.parse(localStorage.getItem('information'));
// console.log(information)

const getData = async (info) => {
    const payload = {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({ "id": info.id })
        
    };
    console.log('infooooooo',info);
    let response = await fetch (information.url, payload);
    console.log(response);
    let data = await response.json();
    console.log(data);
    drawing1(data[0]);
}

const drawing1 = (d) => {
    console.log('ddddddddddddddddd',d);
    let id = document.createElement('h1');
    id.innerHTML = `ID : ${d.id}`;
    sections[0].appendChild(id);
    let name = document.createElement('h1');
    name.innerHTML = `Name : ${d.name}`;
    sections[0].appendChild(name);
    let user = document.createElement('h1');
    user.innerHTML = `User : ${d.user}`;
    sections[0].appendChild(user);
    let rol = document.createElement('h1');
    if (d.typeid === 1){
        rol.innerHTML = `Rol : Estudiante`
    } else {
        rol.innerHTML = `Rol : Profesor`
    }
    sections[0].appendChild(rol);
}
getData(information);