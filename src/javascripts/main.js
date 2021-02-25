import '../styles/main.scss';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const init = () => {
  printToDom();
};

init();
