import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLiked, setActiveCard } from '../../../store/action-creators';
import EditIcon from '../../UI/icons/edit-icon/edit-icon';
import HeartIcon from '../../UI/icons/heart-icon/heart-icon';
import { Card } from '../../../types';

import './cards-item.scss';

interface Props {
  card: Card
}

const CardsItem: React.FC<Props> = ({ card }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    title,
    description,
    isLiked,
    id,
    date,
  } = card;
  const dateFormat = new Date(date).toLocaleDateString('ru-RU', { year: 'numeric', day: 'numeric', month: 'numeric' });
  const handleLikedButton = (cardId: number) => {
    dispatch(setLiked(cardId));
  };

  const handleEditButton = (cardId: number, item: Card) => {
    dispatch(setActiveCard(item));
    history.push(`/info/${cardId}`);
  };

  return (
    <li className="cards__item card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <span className="card__date">{dateFormat}</span>
      <div className="card__wrapper">
        <button
          className="card__btn card__btn--edit"
          type="button"
          onClick={() => { return handleEditButton(id, card); }}
        >
          <EditIcon />
        </button>
        <button
          onClick={() => { return handleLikedButton(id); }}
          className="card__btn card__btn--favorite"
          type="button"
        >
          <HeartIcon isLiked={isLiked} />
        </button>
      </div>
    </li>
  );
};

export default CardsItem;
