import React from 'react';
import { useHistory } from 'react-router-dom';
import PlusIcon from '../../UI/icons/plus-icon/plus-icon';
import CardsItem from '../cards-item/cards-item';
import { Card } from '../../../types';

import './cards-list.scss';

interface Props {
  cards: Card[],
}

const CardsList: React.FC<Props> = ({ cards }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/create');
  };

  return (
    <ul className="cards__list">
      <li className="cards__item cards__item--add">
        <button onClick={handleClick} className="cards__btn" type="button">
          <PlusIcon />
        </button>
      </li>
      {
        cards.map((card) => {
          return <CardsItem key={card.id} card={card} />;
        })
      }
    </ul>
  );
};

export default CardsList;
