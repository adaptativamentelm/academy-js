let sectionBirthday = document.getElementById('birthday');
let backButton4 = document.getElementById('back4');
let forwardButton4  = document.getElementById('forward4');

const back4 = () => {
    location.href = 'three.html';   
}
const forward4 = () => {
    location.href = 'index.html';
}
const draw = () => {
    let h2Birthday = document.createElement('h2');    
    h2Birthday.innerHTML = `Mi cumpleaños cae en el ${percentage(08,05)} % del año`;
    sectionBirthday.appendChild(h2Birthday); 
}
const percentage = (month, day) =>{
    let array = []; //el año 2020 tiene 366 dias
    for(var  i = 1; i < month; i++) {
        let months = new Date(2020, i, 0).getDate();
        array.push(months);
    }
    array.push(day);
    var sumMonths = array.reduce(function(a, b){
        return a + b;
    }, 0);
    let percentage = Math.round(((sumMonths * 100)/ 366)*100)/100;
    // console.log(sumMonths);
    // console.log(percentage);
    return percentage;   
}

draw();

backButton4.addEventListener('click', back4);
forwardButton4.addEventListener('click', forward4);

