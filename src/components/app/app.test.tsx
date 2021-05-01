import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './app';
import { cards } from '../../mocks/test-mocks';
import { AppRoute } from '../../const';

const mockStore = configureStore([]);

describe('Test routing', () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  Storage.prototype.getItem = jest.fn(() => { return JSON.stringify(cards.start); });
  it('Render Main when user navigate to "/" url', () => {
    const store = mockStore({
      cards: cards.start,
    });
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>,
    );
    expect(screen.getByText(/Card list/i)).toBeInTheDocument();
    expect(screen.getByTestId('plus')).toBeInTheDocument();
  });
  it('Render Create when user navigate to "/create" url', () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    history.push(AppRoute.CREATE);
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>,
    );
    expect(screen.getByText(/New Card/i)).toBeInTheDocument();
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
    expect(screen.getByTestId(/title/i)).toBeInTheDocument();
    expect(screen.getByTestId(/description/i)).toBeInTheDocument();
  });
  it('Render Info when user navigate to "/info/:id" url', () => {
    const store = mockStore({
      cards: cards.start,
      card: cards.start[0],
    });
    const history = createMemoryHistory();
    history.push(`${AppRoute.INFO}/:id`);
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
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
