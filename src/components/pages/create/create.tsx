import React from 'react';
import Form from '../../form/form';

import './create.scss';

const Create: React.FC = () => {
  return (
    <section className="create">
      <h2 className="create__title">New Card</h2>
      <Form />
    </section>
  );
};

export default Create;
