import React from 'react';
import { useDispatch } from 'react-redux';
import { setOption } from '../../../store/action-creators';

import './sorting-item.scss';

interface Props {
  option: string,
  onItemClick: () => void
}

const SortingItem: React.FC<Props> = ({ option, onItemClick }) => {
  const dispatch = useDispatch();

  const handleOption = (item: string) => {
    dispatch(setOption(item));
    onItemClick();
  };

  return (
    <li
      className="sorting__item"
      onClick={() => { return handleOption(option); }}
    >
      {option}

    </li>
  );
};

export default SortingItem;
