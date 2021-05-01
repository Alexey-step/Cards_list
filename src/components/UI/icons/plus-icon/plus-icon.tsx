import React from 'react';

import './plus-icon.scss';

const PlusIcon: React.FC = () => {
  return (
    <svg
      data-testid="plus"
      className="plus"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18ZM4 8H8V4H10V8H14V10H10V14H8V10H4V8Z" />
    </svg>
  );
};

export default PlusIcon;
