import fight from '../../assets/fight.png';
import printToDom from '../helpers/printToDom';

const fightCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="eat-card" style="width: auto; height: 100%;">
      <div class="card-body">
        <h5 class="card-title text-center">FIGHT level = </h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${fight}" class="card-img-top" style="width: 67%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" class="btn btn-light mx-4">+ run away</button>
            <button type="button" class="btn btn-light mx-4">- violence</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#fight', domString);
};

export default fightCard;
