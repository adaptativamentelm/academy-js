let button = document.getElementById('goto');

button.addEventListener('click', () => {
  let data = createData('Luis Miranda');
  saveObjectData(data);
  goToSecond();
});