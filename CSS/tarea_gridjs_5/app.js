const div = document.getElementById('container');
const columns = 3;
const rows = 3;

const init = () => {
  let row = 0;
  let count = 0;
  for (let x = 0; x < columns * rows; x++) {
    count++;
    createButton(`Button ${x + 1}`, row);
    if (count === columns) {
      count = 0;
      row++;
    }
  }
}

const createButton = (bname, row) => {
  let b = document.createElement('button');
  b.name = row;
  b.innerHTML = bname;
  b = stylingOne(b, row);
  b.addEventListener('click', () => {
    changeRowsStyle(row);
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
      break;
    default:
      button.style.background = 'purple';
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
      break;
    default:
      button.style.border = '1px solid purple';
      button.style.color = 'purple';
  }
}

const changeRowsStyle = (row) => {
  let buttons = document.getElementsByName(row);
  for (let x = 0; x < buttons.length; x++) {
    stylingTwo(buttons[x], row);
  }
}

init();