import { subtractFood, addFood } from './data/eatData';
import { addSuperFun, addRegularFun } from './data/playData';

const domEvents = () => {
  document.querySelector('#eat-add').addEventListener('click', addFood);
  document.querySelector('#eat-subtract').addEventListener('click', subtractFood);
  document.querySelector('#play-super-add').addEventListener('click', addSuperFun);
  document.querySelector('#play-regular-add').addEventListener('click', addRegularFun);
};

export default domEvents;
