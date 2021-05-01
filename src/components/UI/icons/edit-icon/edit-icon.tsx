import React from 'react';

import './edit-icon.scss';

const EditIcon: React.FC = () => {
  return (
    <svg data-testid="edit" className="edit-icon" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5719 10.7781L13.5719 9.77812C13.7281 9.62187 14 9.73125 14 9.95625V14.5C14 15.3281 13.3281 16 12.5 16H1.5C0.671875 16 0 15.3281 0 14.5V3.5C0 2.67187 0.671875 2 1.5 2H10.0469C10.2687 2 10.3813 2.26875 10.225 2.42812L9.225 3.42812C9.17813 3.475 9.11563 3.5 9.04688 3.5H1.5V14.5H12.5V10.9531C12.5 10.8875 12.525 10.825 12.5719 10.7781ZM17.4656 4.47187L9.25937 12.6781L6.43437 12.9906C5.61562 13.0813 4.91875 12.3906 5.00938 11.5656L5.32188 8.74063L13.5281 0.534375C14.2437 -0.18125 15.4 -0.18125 16.1125 0.534375L17.4625 1.88437C18.1781 2.6 18.1781 3.75937 17.4656 4.47187V4.47187ZM14.3781 5.4375L12.5625 3.62187L6.75625 9.43125L6.52812 11.4719L8.56875 11.2437L14.3781 5.4375ZM16.4031 2.94687L15.0531 1.59687C14.925 1.46875 14.7156 1.46875 14.5906 1.59687L13.625 2.5625L15.4406 4.37812L16.4062 3.4125C16.5312 3.28125 16.5313 3.075 16.4031 2.94687V2.94687Z" />
    </svg>
  );
};

export default EditIcon;
