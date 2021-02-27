import sleep from '../../assets/sleep.png';
import printToDom from '../helpers/printToDom';

const sleepCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="eat-card" style="width: auto; height: 100%;">
      <div class="card-body">
        <h5 class="card-title text-center">ENERGY level = </h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${sleep}" class="card-img-top" style="width: 67%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" class="btn btn-light mx-4">+ nap</button>
            <button type="button" class="btn btn-light mx-4">- deep slumber</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#sleep', domString);
};

export default sleepCard;
