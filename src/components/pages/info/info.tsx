import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store/reducer';
import * as ActionCreator from '../../../store/action-creators';
import Form from '../../form/form';
import { Card } from '../../../types';
import Spinner from '../../UI/spinner/spinner';

import './info.scss';

interface ParamsTypes {
  id: string
}

const Info: React.FC = () => {
  const { id } = useParams<ParamsTypes>();
  const { card } = useSelector((state: RootState) => { return state; });

  const dispatch = useDispatch();

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const savedCard = cards.find((item: Card) => { return String(item.id) === id; });
    if (savedCard) {
      dispatch(ActionCreator.setActiveCard(savedCard));
    }
  }, [dispatch]);

  if (!card) {
    return <Spinner />;
  }

  return (
    <section className="info">
      <h2 className="info__title">Card edit</h2>
      <Form card={card} />
    </section>
  );
};

export default Info;
