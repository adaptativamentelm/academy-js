let send = document.getElementById('send');
let url = 'https://svcintegradoptativamente.cl/acc-dev/';
let urlLogin = 'https://svcintegrados-be.adaptativamente.cl/acc-dev/login';

let usuario = document.getElementById('us');
let passusuario = document.getElementById('pass');

// 'luchoii'
// 1234

const func = async () => {
    let payload = {
        "usuario": usuario.value,
        "passusuario": passusuario.value
    };
    
    // FETCH POST1
    fetch(urlLogin, {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify(payload)
    }).then(response => {
        response.json().then(data => {
            console.log('data', data);
        });
    });

    // FETCH POST2
    // fetch(urlLogin, {
    //     "method": 'POST',
    //     "headers": { 'Content-Type': 'application/json' },
    //     "body": JSON.stringify(payload)
    // }).then(response => {
    //     response.json();
    // }).then(data => {
    //     console.log('data', data);
    // });

    // FETCH GET1
    // fetch(url).then(response => {
    //     response.json().then(data => {
    //         console.log('data', data);
    //     });
    // });

    // FETCH GET2
    // fetch(url).then(response => {
    //     response.json()
    // }).then(data => {
    //     console.log('data', data);
    // });
};

const func2 = async () => {

    try {
        // GET ASYNC AWAIT
        let response = await fetch(url);
        let data = await response.json();
        console.log('data', data);
    } catch (e) {
        console.log(e);
    }

}
const func3 = async () => {
    let payload = {
        "usuario": usuario.value,
        "passusuario": passusuario.value
    };
    try {
        let response2 = await fetch(urlLogin,{
            "method": 'POST',
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify(payload)
        });
        console.log('fetchhhhhh', response2);
        let data2 = await response2.json();
        console.log(data2);      
    } catch (e) {
        console.log(e);
    }
}

send.addEventListener('click', func3);
