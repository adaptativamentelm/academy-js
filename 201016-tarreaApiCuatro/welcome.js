let payloadSave = JSON.parse(localStorage.getItem('payload'));
console.log(payloadSave);
let userName = payloadSave[0].name;
let userId = payloadSave[0].id;
let sectionWelcome = document.getElementById('welcome');
let sectionBirthday = document.getElementById('birthday');
let backButton = document.getElementById('back');
let forwardButton  = document.getElementById('forward')


const drawing = (name, id) => {
    let h2Welcome = document.createElement('h2');
    h2Welcome.innerHTML = `Bienvenid${(id == 6) || (id == 7) || (id == 8) ? "o "+ name : "a "+ name}`;
    sectionWelcome.appendChild(h2Welcome);
}

const back = () => {
    location.href = 'index.html';   
}

const forward = () => {
    let h2Birthday = document.createElement('h2');
    
    h2Birthday.innerHTML = `Mi cumpleaños cae en el ${percentage(08,05)} % del año`;
    sectionBirthday.appendChild(h2Birthday);
}
const percentage = (month, day) =>{
    let array = []; //el año 2020 tien 366 dias
    for(var  i = 1; i < month; i++) {
        let months = new Date(2020, i, 0).getDate();
        array.push(months);
    }
    array.push(day);
    var sumMonths = array.reduce(function(a, b){
        return a + b;
    }, 0);
    let percentage = Math.round(((sumMonths * 100)/ 366)*100)/100;
    console.log(sumMonths);
    console.log(percentage);
    return percentage;
    
}

drawing(userName, userId);
backButton.addEventListener('click', back);
forwardButton.addEventListener('click', forward);


