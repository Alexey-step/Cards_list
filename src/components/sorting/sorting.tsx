import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowIcon from '../UI/icons/arrow-icon/arrow-icon';
import { RootState } from '../../store/reducer';
import SortingList from './sorting-list/sorting-list';
import { setIsAscending } from '../../store/action-creators';
import TriangleArrowIcon from '../UI/icons/triangle-arrow-icon/triangle-arrow-icon';

import './sorting.scss';

const Sorting: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { option, isAscending } = useSelector((state: RootState) => { return state; });

  const handleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleAscButton = () => {
    dispatch(setIsAscending());
  };

  return (
    <div className="sorting">
      <h2 className="sorting__caption">Sort by: </h2>
      <div className="sorting__wrapper">
        <span className="sorting__type" onClick={handleSelect} tabIndex={0}>
          {option}
          <ArrowIcon />
        </span>
        {
          isOpen && <SortingList onItemClick={handleSelect} />
        }
      </div>
      <button className="sorting__btn" onClick={handleAscButton} type="button">
        <TriangleArrowIcon isAscending={isAscending} />
      </button>
    </div>
  );
};

export default Sorting;
