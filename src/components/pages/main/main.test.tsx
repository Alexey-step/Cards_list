import React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';
import { cards } from '../../../mocks/test-mocks';

const mockStore = configureStore([]);

describe('Test Main component', () => {
  it('Main component should render correctly', () => {
    const store = mockStore({ cards: cards.start });

    render(
      <redux.Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </redux.Provider>,
    );

    expect(screen.getByText(/Card list/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hy there/i)).toBeInTheDocument();
    expect(screen.getByText(/New Card/i)).toBeInTheDocument();
    expect(screen.getByText(/amazing card/i)).toBeInTheDocument();
  });
});
