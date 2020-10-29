const getUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
let input = document.getElementById('input');
let data = [];

const getData = async (url) => {
    const response = await fetch(url);
    data = await response.json();
    console.log('data', data);
};

const finding = () => {
    console.log('input value', input.value);
    let found = data.filter((el) => el.name.includes(input.value));
    console.log(found);
};

getData(getUrl);
input.addEventListener('keyup', finding);
