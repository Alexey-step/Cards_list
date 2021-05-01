import React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CardsItem from './cards-item';
import { cards } from '../../../mocks/test-mocks';

const mockStore = configureStore([]);

describe('Test CardsItem component', () => {
  it('Should CardsItem render correctly', () => {
    const store = mockStore({});

    render(
      <redux.Provider store={store}>
        <BrowserRouter>
          <CardsItem card={cards.start[0]} />
        </BrowserRouter>
      </redux.Provider>,
    );

    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hy there/i)).toBeInTheDocument();
  });
});
