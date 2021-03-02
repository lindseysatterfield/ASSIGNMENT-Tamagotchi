let strength = 100;

const addStrength = (e) => {
  e.preventDefault();
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  document.querySelector('#fight-level').innerHTML = `STRENGTH level = ${strength}`;
};

const subtractStrength = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
  document.querySelector('#fight-level').innerHTML = `STRENGTH level = ${strength}`;
};

export { addStrength, subtractStrength };
