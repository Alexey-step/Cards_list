import React from 'react';
import SortingItem from '../sorting-item/sorting-item';
import { Options } from '../../../const';

import './sorting-list.scss';

interface Props {
  onItemClick: () => void
}

const SortingList: React.FC<Props> = (props) => {
  const { onItemClick } = props;

  return (
    <ul className="sorting__list">
      {
        Object.values(Options).map((option) => { return <SortingItem option={option} onItemClick={onItemClick} key={option} />; })
      }
    </ul>
  );
};

export default SortingList;
