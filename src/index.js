import './style.css';

const tasks = [
  {
    description: 'Wash Planes',
    completed: true,
    index: 1,
  },
  {
    description: 'Wash dishes',
    completed: false,
    index: 3,
  },
  {
    description: 'Wash cars',
    completed: true,
    index: 2,
  },
];

tasks.sort((a, b) => a.index - b.index);