import { add, remove } from './addRemove.js';

describe('Add and Remove Functionality', () => {
  it('adds exactly one <li> to the DOM', () => {
    document.body.innerHTML = `
      <ul class="todo-box"></ul>
    `;

    add('item 1');
    const items = JSON.parse(localStorage.getItem('todolist'));
    const todoBox = document.querySelector('.todo-box');
    items.forEach((item) => {
      todoBox.innerHTML = `<li>${item.description}</li>`;
    });
    const list = document.querySelectorAll('.todo-box li');

    expect(list).toHaveLength(1);
  });

  it('removes exactly one <li> from the DOM', () => {
    document.body.innerHTML = `
      <ul class="todo-box">
        <li>Item 1</li>
      </ul>
    `;

    const initialLength = JSON.parse(localStorage.getItem('todolist')).length;
    remove(0);
    const todoBox = document.querySelector('.todo-box');
    const items = JSON.parse(localStorage.getItem('todolist'));
    if (items.length > 0) {
      items.forEach((item) => {
        todoBox.innerHTML = `<li>${item.description}</li>`;
      });
    } else {
      todoBox.innerHTML = '';
    }

    const list = document.querySelectorAll('.todo-box li');

    expect(JSON.parse(localStorage.getItem('todolist')).length).toBe(initialLength - 1);
    expect(list).toHaveLength(0);
  });
});