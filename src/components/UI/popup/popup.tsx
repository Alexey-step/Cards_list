import React from 'react';
import { useSelector } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { RootState } from '../../../store/reducer';

const Popup: React.FC = () => {
  const { isBlocking } = useSelector((state: RootState) => { return state; });

  return (
    <Prompt
      when={isBlocking}
      message={(location) => {
        window.history.replaceState(null, null, location.pathname);

        return isBlocking
          ? `Are you sure you want to go to ${location.pathname}`
          : isBlocking;
      }}
    />
  );
};

export default Popup;
