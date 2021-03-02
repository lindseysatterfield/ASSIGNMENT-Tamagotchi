import eatCat from '../../../assets/eatCat.png';
import printToDom from '../../helpers/printToDom';

const eatCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="eat-card" style="width: auto; height: 100%;">
      <div class="card-body">
        <h5 class="card-title text-center" id="eat-level">EAT level = 100</h5>
        <h5 id="max-eat" style="margin: 0;"></h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${eatCat}" class="card-img-top" style="width: 67%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" id="eat-add" class="btn btn-light mx-5">+ greens</button>
            <button type="button" id="eat-subtract" class="btn btn-light mx-5">- junk</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#eat', domString);
};

export default eatCard;
