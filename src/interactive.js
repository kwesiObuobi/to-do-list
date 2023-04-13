import todoList from './todoList.js';
import { updateIndexes } from './addRemove.js';

export const setCompleted = (pos) => {
  todoList[pos].completed = !todoList[pos].completed;
  localStorage.setItem('todolist', JSON.stringify(todoList));
};

export const clearAllCompleted = () => {
  const tasks = todoList.filter((item) => item.completed === false);
  todoList.splice(0, todoList.length, ...tasks);
  updateIndexes();
  localStorage.setItem('todolist', JSON.stringify(todoList));
};