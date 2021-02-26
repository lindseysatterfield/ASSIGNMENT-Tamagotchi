import '../styles/main.scss';
import eatCat from '../assets/eatCat.png';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const eatCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="eat-card" style="width: auto; height: 100%;">
      <div class="card-body">
        <h5 class="card-title text-left">EAT level = </h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${eatCat}" class="card-img-top" style="width: 60%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" class="btn btn-primary mx-5">+ food</button>
            <button type="button" class="btn btn-primary mx-5">- food</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#eat', domString);
};

const init = () => {
  eatCard();
};

init();
