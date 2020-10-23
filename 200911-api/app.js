let send = document.getElementById('send');
let url = 'https://portal-be.adaptativamente.cl/acc/';
let urlLogin = 'https://portal-be.adaptativamente.cl/acc/login';

let usuario = document.getElementById('us');
let passusuario = document.getElementById('pass');

// 'luchoii'
// 1234

const func = async () => {
    let payload = {
        "usuario": usuario.value,
        "passusuario": passusuario.value
    };
    const params = {
      "method": 'POST',
      "headers": { 'Content-Type': 'application/json' },
      "body": JSON.stringify(payload) };
    // FETCH POST1
    fetch(urlLogin, params).then(response => {
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
    try {
        let payload = {
            "usuario": usuario.value,
            "passusuario": passusuario.value
        };
        const req = { "method": 'POST', "headers": { 'Content-Type': 'application/json' }, "body": JSON.stringify(payload) };
        let response = await fetch(urlLogin, req);
        let data = await response.json();
        console.log('data func3', data);
    } catch (error) {
        console.log('payload', payload);
        console.log(error);
    }
}

send.addEventListener('click', func3);
