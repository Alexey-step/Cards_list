import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Sorting from './sorting';

const mockStore = configureStore([]);
describe('Test Sorting component', () => {
  it('Sorting component should render correctly', () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Sorting />
        </Router>
      </redux.Provider>,
    );
    expect(screen.getByText(/Sort by:/!)).toBeInTheDocument();
  });
});
