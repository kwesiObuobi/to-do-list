import todolist from './todoList.js';

export const add = (task) => {
  todolist.push({
    description: task.value,
    completed: false,
    index: todolist.length + 1,
  });

  localStorage.setItem('todolist', JSON.stringify(todolist));
};

export const update = (pos, key, value) => {
  todolist[pos][key] = value;
  localStorage.setItem('todolist', JSON.stringify(todolist));
};

// export const remove = (id, pos) => {
//   todolist = todolist.filter((todolist))

//   localStorage.setItem('todolist', JSON.stringify(todolist));
// };