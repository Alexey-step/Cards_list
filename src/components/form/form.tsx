import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom';
import { updateCards, deleteCard, setCard } from '../../store/action-creators';
import { Card } from '../../types';

import './form.scss';

interface Props {
  card?: Card,
}

const Form: React.FC<Props> = ({ card }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: card ? card.title : '',
    description: card ? card.description : '',
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setCard({
      title: data.title,
      description: data.description,
      id: nanoid(),
      isLiked: false,
      date: Date.now(),
    }));
    setData({
      title: '',
      description: '',
    });
  };

  const handleUpdate = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(updateCards({
      ...card,
      title: data.title,
      description: data.description,
    }));
    history.push('/');
  };

  const handleDeleteBtn = () => {
    dispatch(deleteCard(card.id));
    history.push('/');
  };

  return (
    <form className="form" action="#" onSubmit={card ? handleUpdate : handleSubmit} method="post">
      <input
        className="form__field"
        type="text"
        name="title"
        placeholder="Enter title"
        value={data.title}
        onChange={handleChange}
        required
        minLength={4}
        maxLength={255}
        data-testid="title"
      />
      <textarea
        className="form__field"
        name="description"
        placeholder="Enter description"
        value={data.description}
        onChange={handleChange}
        required
        minLength={4}
        maxLength={300}
        data-testid="description"
      />
      <div className="form__group">
        <button
          className={`form__btn ${card && 'form__btn--save'}`}
          type="submit"
        >
          Save
        </button>
        {
          card && <button className="form__btn" type="submit" onClick={handleDeleteBtn}>Delete</button>
        }
      </div>
    </form>
  );
};

export default Form;
