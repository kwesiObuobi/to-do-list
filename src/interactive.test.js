import { add, update } from './addRemove.js';
import { setCompleted, clearAllCompleted } from './interactive.js';

describe('Tasks Manipulation', () => {
  it('should edit a single task\'s description', () => {
    const newest = { description: 'newest task', completed: false, index: 1 };
    add(newest);
    update(0, 'description', 'update newest task');
    expect(JSON.parse(localStorage.getItem('todolist'))[0].description).toBe('update newest task');
  });

  it('should update an item\'s \'completed\' status', () => {
    const oldStatus = JSON.parse(localStorage.getItem('todolist'))[0].completed;
    setCompleted(0);
    expect(oldStatus).not.toBe(JSON.parse(localStorage.getItem('todolist'))[0].completed);
  });

  it('should clear all completed tasks from the list of tasks', () => {
    add('newest task');
    add('another newest task');
    setCompleted(1);
    clearAllCompleted();
    expect(JSON.parse(localStorage.getItem('todolist'))).toHaveLength(1);
  });
});