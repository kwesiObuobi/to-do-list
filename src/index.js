import './style.css';

const tasks = [
  // {
  //   description: 'Wash Planes',
  //   completed: true,
  //   index: 1,
  // },
  // {
  //   description: 'Wash dishes',
  //   completed: false,
  //   index: 3,
  // },
  // {
  //   description: 'Wash cars',
  //   completed: true,
  //   index: 2,
  // },
];

const toDoBox = document.querySelector('.todo-box');

tasks
  .sort((a, b) => a.index - b.index)
  .forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const listCheckAndName = document.createElement('div');
    listCheckAndName.classList.add('list-check-and-name');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const itemValInput = document.createElement('input');
    itemValInput.classList.add('list-item-value');
    itemValInput.value = task.description;

    const listElipsesBox = document.createElement('div');
    listElipsesBox.classList.add('list-ellipses-box');
    listElipsesBox.innerHTML = '<i class="fa-solid fa-ellipsis-vertical">';

    listCheckAndName.appendChild(checkbox);
    listCheckAndName.appendChild(itemValInput);

    listItem.appendChild(listCheckAndName);
    listItem.appendChild(listElipsesBox);

    toDoBox.appendChild(listItem);
  });

const clearLi = document.createElement('li');
clearLi.classList.add('clear-li');
clearLi.innerHTML = 'Clear all completed';
toDoBox.appendChild(clearLi);