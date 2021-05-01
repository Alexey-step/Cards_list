import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../cards/cards';
import Sorting from '../../sorting/sorting';
import { getActiveCards } from '../../../store/selector';
import Paginate from '../../UI/paginate/paginate';
import { CARDS_PER_PAGE } from '../../../const';

import './main.scss';

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cards = useSelector(getActiveCards);
  const pageCount = Math.ceil(cards.length / CARDS_PER_PAGE);
  const offset = currentPage * CARDS_PER_PAGE;
  const currentCards = cards.slice(offset, offset + CARDS_PER_PAGE);

  return (
    <div className="main">
      <h1 className="main__title">Card list</h1>
      <Sorting />
      <Cards cards={currentCards} />
      <Paginate pageCount={pageCount} onPageClick={setCurrentPage} />
    </div>
  );
};

export default Main;
