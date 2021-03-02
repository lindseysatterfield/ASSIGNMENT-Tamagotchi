import '../styles/main.scss';
import cardBuilder from './components/cardBuilder';
import domEvents from './helpers/domEvents';

const init = () => {
  cardBuilder();
  domEvents();
};

init();
