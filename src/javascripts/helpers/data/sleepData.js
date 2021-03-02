let energy = 50;

const addShortEnergy = (e) => {
  e.preventDefault();
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  document.querySelector('#energy-level').innerHTML = `ENERGY level = ${energy}`;
};

const addLongEnergy = (e) => {
  e.preventDefault();
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
  document.querySelector('#energy-level').innerHTML = `ENERGY level = ${energy}`;
};

export { addShortEnergy, addLongEnergy };
