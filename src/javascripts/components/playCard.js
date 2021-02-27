import play from '../../assets/play.png';
import printToDom from '../helpers/printToDom';

const playCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="eat-card" style="width: auto; height: 100%;">
      <div class="card-body">
        <h5 class="card-title text-left">PLAY level = </h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${play}" class="card-img-top" style="width: 67%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" class="btn btn-light mx-5">+ fun</button>
            <button type="button" class="btn btn-light mx-5">- fun</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#play', domString);
};

export default playCard;
