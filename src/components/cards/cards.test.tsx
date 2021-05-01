import React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { cards } from '../../mocks/test-mocks';
import Cards from './cards';

const mockStore = configureStore([]);

describe('Test Cards component', () => {
  it('Should Cards render correctly', () => {
    const store = mockStore({ cards: cards.start });

    render(
      <redux.Provider store={store}>
        <BrowserRouter>
          <Cards cards={cards.start} />
        </BrowserRouter>
      </redux.Provider>,
    );

    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hy there/i)).toBeInTheDocument();
    expect(screen.getByText(/New Card/i)).toBeInTheDocument();
    expect(screen.getByText(/amazing card/i)).toBeInTheDocument();
  });
});
