import { subtractFood, addFood } from './data/eatData';
import { addStrength, subtractStrength } from './data/fightData';
import { addSuperFun, addRegularFun } from './data/playData';

const domEvents = () => {
  document.querySelector('#eat-add').addEventListener('click', addFood);
  document.querySelector('#eat-subtract').addEventListener('click', subtractFood);
  document.querySelector('#play-super-add').addEventListener('click', addSuperFun);
  document.querySelector('#play-regular-add').addEventListener('click', addRegularFun);
  document.querySelector('#add-fight').addEventListener('click', addStrength);
  document.querySelector('#subtract-fight').addEventListener('click', subtractStrength);
};

export default domEvents;
