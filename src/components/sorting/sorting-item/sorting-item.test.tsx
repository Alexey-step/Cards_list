import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import SortingItem from './sorting-item';

const mockStore = configureStore([]);
describe('Test SortingItem component', () => {
  it('SortingItem component should render correctly', () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    const option = 'date';
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SortingItem option={option} onItemClick={jest.fn()} />
        </Router>
      </redux.Provider>,
    );
    expect(screen.getByText(/date/!)).toBeInTheDocument();
  });
  it('SortingItem component should call callback when user click on option', () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    const option = 'date';
    const onItemClick = jest.fn();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SortingItem option={option} onItemClick={onItemClick} />
        </Router>
      </redux.Provider>,
    );
    userEvent.click(screen.getByTestId('select-item'));
    expect(onItemClick).toBeCalled();
  });
});
