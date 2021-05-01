import React from 'react';

import './arrow-icon.scss';

const ArrowIcon: React.FC = () => {
  return (
    <svg
      data-testid="arrow"
      viewBox="0 0 7 4"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" />
    </svg>
  );
};

export default ArrowIcon;
