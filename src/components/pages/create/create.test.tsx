import React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Create from './create';

const mockStore = configureStore([]);

describe('Test Create component', () => {
  it('Create component should render correctly', () => {
    const store = mockStore({});

    render(
      <redux.Provider store={store}>
        <BrowserRouter>
          <Create />
        </BrowserRouter>
      </redux.Provider>,
    );

    expect(screen.getByText(/New Card/i)).toBeInTheDocument();
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByTestId(/title/i)).toBeInTheDocument();
    expect(screen.getByTestId(/description/i)).toBeInTheDocument();
  });
});
