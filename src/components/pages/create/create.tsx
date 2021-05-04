import React from 'react';
import Form from '../../form/form';
import Popup from '../../UI/popup/popup';

import './create.scss';

const Create: React.FC = () => {
  return (
    <section className="create">
      <h2 className="create__title">New Card</h2>
      <Form />
      <Popup />
    </section>
  );
};

export default Create;
