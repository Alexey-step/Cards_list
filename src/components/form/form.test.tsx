import React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { cards } from '../../mocks/test-mocks';
import Form from './form';

const mockStore = configureStore([]);

describe('Test Form component', () => {
  it('Form component should render correctly without props', () => {
    const store = mockStore({});

    render(
      <redux.Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </redux.Provider>,
    );

    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByTestId(/title/i)).toBeInTheDocument();
    expect(screen.getByTestId(/description/i)).toBeInTheDocument();
  });
  it('Form component should render correctly with props', () => {
    const store = mockStore({});

    render(
      <redux.Provider store={store}>
        <BrowserRouter>
          <Form card={cards.start[0]} />
        </BrowserRouter>
      </redux.Provider>,
    );

    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hy there/i)).toBeInTheDocument();
    expect(screen.getByTestId(/title/i)).toBeInTheDocument();
    expect(screen.getByTestId(/description/i)).toBeInTheDocument();
  });
});
