import React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Info from './info';
import { cards } from '../../../mocks/test-mocks';

const mockStore = configureStore([]);

describe('Test Info component', () => {
  Storage.prototype.getItem = jest.fn(() => { return JSON.stringify(cards.start); });
  it('Info component should render correctly', () => {
    const store = mockStore({ card: cards.start[0] });

    render(
      <redux.Provider store={store}>
        <BrowserRouter>
          <Info />
        </BrowserRouter>
      </redux.Provider>,
    );

    expect(screen.getByText(/Card edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hy there/i)).toBeInTheDocument();
    expect(screen.getByTestId(/title/i)).toBeInTheDocument();
    expect(screen.getByTestId(/description/i)).toBeInTheDocument();
  });
});
