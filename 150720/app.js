let credentials = {
    "user": 'acastro',
    "pass": '123',
    "name": 'Andrea Paulina Castro Castellón'
};

let u = document.getElementById('user');
let p = document.getElementById('pass');

function validateCredentials(user, pass) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                if (credentials.user && credentials.pass && credentials.name && user && pass) {
                    if (credentials.user === user && credentials.pass === pass) {
                        let response = {
                            "name": credentials.name,
                            "success": true
                        };
                        resolve(response);
                    } else {
                        let response = {
                            "success": false
                        };
                        resolve(response);
                    }
                } else {
                    reject(false);
                }
            }, 2000);
        } catch {
            reject(false);
        }
    });
}

async function login() {
    try {
        if (u.value && p.value) {
            let data = await validateCredentials(u.value, p.value);
            if (data.success) {
                alert('Login correcto');
                localStorage.setItem('name', data.name);
                window.location.replace('home.html');
            } else {
                alert('Usuario y/o contraseña incorrectos');
            }
        } else {
            alert('Debe ingresar usuario y contraseña');
        }
    } catch (e) {
        console.log(e)
        alert('Error al iniciar sesión');
    }
}
