import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../../cards/cards';
import Sorting from '../../sorting/sorting';
import { getActiveCards } from '../../../store/selector';
import Paginate from '../../UI/paginate/paginate';
import { CARDS_PER_PAGE } from '../../../const';
import { RootState } from '../../../store/reducer';
import { setIsBlocking } from '../../../store/action-creators';

import './main.scss';

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const cards = useSelector(getActiveCards);
  const { isBlocking } = useSelector((state: RootState) => { return state; });
  const pageCount = Math.ceil(cards.length / CARDS_PER_PAGE);
  const offset = currentPage * CARDS_PER_PAGE;
  const currentCards = cards.slice(offset, offset + CARDS_PER_PAGE);

  useEffect(() => {
    if (isBlocking) {
      dispatch(setIsBlocking(false));
    }
  }, [isBlocking]);

  return (
    <main className="main">
      <h1 className="main__title">Card list</h1>
      <Sorting />
      <Cards cards={currentCards} />
      <Paginate pageCount={pageCount} onPageClick={setCurrentPage} />
    </main>
  );
};

export default Main;
