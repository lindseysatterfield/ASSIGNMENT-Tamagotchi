import { subtractFood, addFood } from './data/eatData';

const domEvents = () => {
  document.querySelector('#eat-add').addEventListener('click', addFood);
  document.querySelector('#eat-subtract').addEventListener('click', subtractFood);
};

export default domEvents;
