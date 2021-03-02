import play from '../../../assets/play.png';
import printToDom from '../../helpers/printToDom';

const playCard = () => {
  let domString = '';
  domString += `
    <div class="card" id="play-card" style="width: auto; height: 100%;">
      <div class="card-body">
      <h5 class="card-title text-center" id="play-level">FUN level = 50</h5>
        <h5 class="card-title text-center"></h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="${play}" class="card-img-top" style="width: 67%" alt="Image of illustrated cat">
          <div id="btns">
            <button type="button" id="play-super-add" class="btn btn-light mx-5" style="margin: 0 1.5em ! important;">+++ catnip</button>
            <button type="button" id="play-regular-add" class="btn btn-light mx-5" style="margin: 0 1.5em ! important;">+ scratch post</button>
          </div>
        </div>
      </div>
    </div>`;

  printToDom('#play', domString);
};

export default playCard;
