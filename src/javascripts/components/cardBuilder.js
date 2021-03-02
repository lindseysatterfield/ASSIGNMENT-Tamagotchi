import eatCard from './cards/eatCard';
import playCard from './cards/playCard';
import fightCard from './cards/fightCard';
import sleepCard from './cards/sleepCard';

const cardBuilder = () => {
  eatCard();
  playCard();
  fightCard();
  sleepCard();
};

export default cardBuilder;
