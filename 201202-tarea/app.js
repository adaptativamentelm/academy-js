let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let btn = document.getElementById('btn');
let data = [];
let students = [];
let students_section = document.getElementById('students_section');

const getData = async (url) => {
    let response = await fetch(url);
    data = await response.json();
    filterStudents(data);
}
qty.forEach(element => {    
    let url = `${urlGet}${element}`;
    getData(url);
});
const filterStudents = (data) => {
    if (data[0].typename == "student") {
        students.push(data[0].name)
    }
}
const printStudents = () => {
    students.forEach(elem => {
        let h3 = document.createElement('h3');

        h3.innerHTML = elem;
        students_section.appendChild(h3);
    })
}

btn.addEventListener('click', printStudents )