const div = document.getElementById('container');
const columns = 3;
const rows = 3;
let arrElements = [];

const init = () => {
  let row = 0;
  let count = 0;
  let ids = [];
  for (let x = 0; x < columns * rows; x++) {
    count++;
    createButton(`Button ${x + 1}`, row);
    ids.push(row);
    if (count === columns) {
      arrElements.push(ids);
      count = 0;
      row++;
      ids = [];
    }
  }
}

const createButton = (bname, row) => {
  let b = document.createElement('button');
  b.name = row;
  b.innerHTML = bname;
  b = stylingOne(b, row);
  b.addEventListener('click', () => {
    changeRow(row);
  });
  div.appendChild(b);
}

const stylingOne = (button, row) => {
  button.style.color = '#fff';
  switch (row) {
    case 0:
      button.style.background = 'red';
      break;
    case 1:
      button.style.background = 'blue';
      break;
    case 2:
      button.style.background = 'green';
  }
  return button;
}

const stylingTwo = (button, row) => {
  button.style.background = '#fff';
  switch (row) {
    case 0:
      button.style.border = '1px solid red';
      button.style.color = 'red';
      break;
    case 1:
      button.style.border = '1px solid blue';
      button.style.color = 'blue';
      break;
    case 2:
      button.style.border = '1px solid green';
      button.style.color = 'green';
  }
  return button;
}

const changeRow = (row) => {
  let buttons = document.getElementsByName(row);
  for (let x = 0; x < buttons.length; x++) {
    stylingTwo(buttons[x], row);
  }
}

init();