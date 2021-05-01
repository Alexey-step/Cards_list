import React from 'react';

import './heart-icon.scss';

interface Props {
  isLiked: boolean
}

const HeartIcon: React.FC<Props> = ({ isLiked }) => {
  return (
    <svg data-testid="heart" className={`heart-icon ${isLiked && 'heart-icon--active'}`} viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.205 1.791L17.8507 2.1438C20.0139 4.31623 20.0117 7.69616 17.8535 9.85337L17.8535 9.85345L10 17.7069L2.14656 9.85345L2.14648 9.85337C-0.0118664 7.69594 -0.0137202 4.316 2.14531 2.1478L2.14603 2.14707C2.65128 1.63758 3.25229 1.23303 3.91449 0.956706C4.5766 0.680419 5.28681 0.537782 6.00426 0.537C7.35901 0.53711 8.66432 1.04607 9.66157 1.96306L9.99996 2.2742L10.3384 1.9631C11.3358 1.04623 12.6411 0.537277 13.9959 0.537C14.7124 0.53758 15.4218 0.679775 16.0832 0.955412C16.7448 1.23108 17.3452 1.63478 17.8502 2.14331L18.205 1.791Z" />
    </svg>
  );
};

export default HeartIcon;
