console.log('Holabb1');
var num = 10;
var str = 'texto';
var bool = true;
var anything = 10 || 'texto' || true;
var arr = [1, 'text1', true];
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['text1', 'text2', 'text3'];
var arr3 = [true, false, false, true];
var igor = {
    "name": 'Igor',
    "favourite": true,
    "evil": 100,
    "machosidad": 100,
    "ternura": 2,
    "action": function () {
        return this.evil;
    }
};
var andrea = {
    "name": 'Andrea',
    "gender": 'F',
    "phone": 123,
    "machosidad": false,
    "nicknames": ['Andre', 'Zwiva', 'Belleza', 'Genialidad', 'Apavlina', 'Ama']
};
var scar = {
    "name": 'Scar',
    "gender": 'F',
    "phone": 123,
    "machosidad": false,
    "nicknames": ['Scar', 'bb', 'blondiest', 'GOT7']
};
console.log('1', scar);
var newobj = JSON.stringify(scar);
console.log('2', newobj);
var wii1 = function () {
    return 'Holi';
};
var wii2 = function () {
    return 3;
};
var wii3 = function () {
    console.log('jajaja no retorno');
};
var main = document.getElementsByTagName('main')[0];
var sum = function (a, b) {
    return a + b;
};
var createDiv = function (result) {
    var div = document.createElement('div');
    div.innerHTML = "El resultado es " + result;
    main.appendChild(div);
};
createDiv(sum(10, 5));
