import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SortingList from './sorting-list';

const mockStore = configureStore([]);
describe('Test SortingList component', () => {
  it('SortingList component should render correctly', () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SortingList onItemClick={jest.fn()} />
        </Router>
      </redux.Provider>,
    );
    expect(screen.getByText(/date/!)).toBeInTheDocument();
    expect(screen.getByTestId(/select-item/!)).toBeInTheDocument();
  });
});
