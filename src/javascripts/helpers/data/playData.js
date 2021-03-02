let fun = 50;

const addSuperFun = (e) => {
  e.preventDefault();
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  document.querySelector('#play-level').innerHTML = `FUN level = ${fun}`;
};

const addRegularFun = (e) => {
  e.preventDefault();
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  document.querySelector('#play-level').innerHTML = `FUN level = ${fun}`;
};

export { addSuperFun, addRegularFun };
