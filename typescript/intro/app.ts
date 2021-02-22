console.log('Holabb');

let num: number = 10;
let str: string = 'texto';
let bool: boolean = true;
let anything: any = 10 || 'texto' || true;
let arr: any[] = [1, 'text1', true];
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ['text1', 'text2', 'text3'];
let arr3: boolean[] = [true, false, false, true];

let igor: any = {
  "name": 'Igor',
  "favourite": true,
  "evil": 100,
  "machosidad": 100,
  "ternura": 2,
  "action": function () {
    return this.evil;
  }
};

console.log('json Igor >:)', igor);
console.log('json Igoraction >:)', igor.action());

interface Person {
  name: string,
  gender: string,
  phone: number,
  machosidad: boolean,
  nicknames: string[]
}

let andrea: Person = {
  "name": 'Andrea',
  "gender": 'F',
  "phone": 123,
  "machosidad": false,
  "nicknames": ['Andre', 'Zwiva', 'Belleza', 'Genialidad', 'Apavlina', 'Ama']
};

let scar: Person = {
  "name": 'Scar',
  "gender": 'F',
  "phone": 123,
  "machosidad": false,
  "nicknames": ['Scar', 'bb', 'blondiest', 'GOT7']
};

console.log('1', scar);
let newobj: string = JSON.stringify(scar);
console.log('2', newobj);

const wii1 = (): string => {
  return 'Holi';
}

const wii2 = (): number => {
  return 3;
};

const wii3 = (): void => {
  console.log('jajaja no retorno');
}

////////////////////////////////////////////

const main: any = document.getElementsByTagName('main')[0];

const sum = (a: number, b: number): number => {
  return a + b;
};

const createDiv = (result: number): void => {
  const div = document.createElement('div');
  div.innerHTML = `El resultado es ${result}`;
  main.appendChild(div);
};

createDiv(sum(10, 5));