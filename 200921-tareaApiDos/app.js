let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let btn = document.getElementById('get');
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');

const getData = async () => {
    try {
        let response = await fetch(get);
        data = await response.json();
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if ((data[i].id)%2 === 0) {
                createW(section1, data[i].name); 
            }else{
                createW(section2, data[i].name);
            }
        }
    } catch (e) {
        console.log(e);
    }
};

const createW = (section, name) => {
    let li = document.createElement('li');
    section.appendChild(li);
    li.innerHTML = name;
}

btn.addEventListener('click', getData);


