const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list'; // GET
const descUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/description'; // GET
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id'; // POST
let nav = document.getElementsByTagName('nav')[0];
let info = document.getElementById('info');
let dataOne;
let dataTwo;

const getData = async (url) => {
    const response1 = await fetch(url);
    return await response1.json();
};

const init = async () => {
    dataOne = await getData(listUrl);
    dataTwo = await getData(descUrl);
    console.log('dataOne', dataOne);
    console.log('dataTwo', dataTwo);
    drawing(1, dataOne);
    drawing(2, dataTwo);
};

const drawing = (option, data) => {
    switch (option) {
        case 1:
            let ul = document.createElement('ul');
            for (let x = 0; x < data.length; x++) {
                let li = document.createElement('li');
                let h3 = document.createElement('h3');
                h3.innerHTML = data[x].id;
                let img = document.createElement('img');
                img.width = 100;
                img.height = 100;
                img.src = data[x].typeimg;
                img.addEventListener('click', function () {
                    let information = {
                        "url": descUrl,
                        "id": data[x].id
                    }
                    localStorage.setItem('information', JSON.stringify(information));
                    location.href = 'profile.html';
                });
                li.appendChild(h3);
                li.appendChild(img);
                ul.appendChild(li);
            }
            nav.appendChild(ul);
            break;
        case 2:
            let h21 = document.createElement('h2');
            h21.innerHTML = `Company: ${data.company}`;
            let h22 = document.createElement('h2');
            h22.innerHTML = `Name: ${data.name}`;
            let h23 = document.createElement('h2');
            h23.innerHTML = `Date: ${data.year}-${data.month + 1 > 9 ? data.month + 1 : '0' + (data.month + 1)}-${data.day}`;
            let img = document.createElement('img');
            img.width = 400;
            img.height = 400;
            img.src = data.img;
            info.appendChild(h21);
            info.appendChild(h22);
            info.appendChild(h23);
            info.appendChild(img);
    }
};

init();
