import fight from '../../../assets/fight.png';
import printToDom from '../../helpers/printToDom';

const fightCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="eat-card" style="width: auto; height: 100%;">
      <div class="card-body">
      <h5 class="card-title text-center" id="fight-level">STRENGTH level = 100</h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${fight}" class="card-img-top" style="width: 67%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" id="add-fight" class="btn btn-light mx-4">+ scurry away</button>
            <button type="button" id="subtract-fight" class="btn btn-light mx-4">- bite</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#fight', domString);
};

export default fightCard;
