import { subtractFood, addFood } from './data/eatData';
import { addStrength, subtractStrength } from './data/fightData';
import { addSuperFun, addRegularFun } from './data/playData';
import { addLongEnergy, addShortEnergy } from './data/sleepData';

const domEvents = () => {
  document.querySelector('#eat-add').addEventListener('click', addFood);
  document.querySelector('#eat-subtract').addEventListener('click', subtractFood);
  document.querySelector('#play-super-add').addEventListener('click', addSuperFun);
  document.querySelector('#play-regular-add').addEventListener('click', addRegularFun);
  document.querySelector('#add-fight').addEventListener('click', addStrength);
  document.querySelector('#subtract-fight').addEventListener('click', subtractStrength);
  document.querySelector('#add-short-sleep').addEventListener('click', addShortEnergy);
  document.querySelector('#add-long-sleep').addEventListener('click', addLongEnergy);
};

export default domEvents;
