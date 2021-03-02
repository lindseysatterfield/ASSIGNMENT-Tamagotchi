let full = 100;

const addFood = (e) => {
  e.preventDefault();
  full += 10;
  if (full > 100) {
    full = 100;
  }
  document.querySelector('#eat-level').innerHTML = `EAT LEVEL = ${full}`;
};

const subtractFood = (e) => {
  e.preventDefault();
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  document.querySelector('#eat-level').innerHTML = `EAT LEVEL = ${full}`;
};

export { subtractFood, addFood };
