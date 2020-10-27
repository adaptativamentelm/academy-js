const createData = (word) => {
  const data = {
    "name": 'Adaptativamente',
    "type": 'Class',
    "data": word
  };
  return data;
};

const saveObjectData = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

const goToSecond = () => {
  location.assign('second.html');
};

const printAndrea = () => {
  console.log('Andrea');
};

const printDaniela = () => {
  console.log('Daniela');
};

const printNatalia = () => {
  console.log('Natalia');
};

const printChinchilla = () => {
  console.log('Chinchilla');
};

const printScarlett = () => {
  console.log('Scarlett');
};

const printIgor = () => {
  console.log('Igor');
};

const printMiguel = () => {
  console.log('Miguel');
};

const printLuis = () => {
  console.log('Luis');
};