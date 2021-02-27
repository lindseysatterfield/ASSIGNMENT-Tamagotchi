import eatCat from '../../assets/eatCat.png';
import printToDom from '../helpers/printToDom';

const eatCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="eat-card" style="width: auto; height: 100%;">
      <div class="card-body">
        <h5 class="card-title text-center">EAT level = </h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${eatCat}" class="card-img-top" style="width: 67%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" class="btn btn-light mx-5">+ food</button>
            <button type="button" class="btn btn-light mx-5">- food</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#eat', domString);
};

export default eatCard;
