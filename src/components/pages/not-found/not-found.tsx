import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

import './not-found.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 Not Found</h1>
      <Link to={AppRoute.MAIN} className="not-found__link">
        Back to main
      </Link>
    </div>
  );
};

export default NotFound;
