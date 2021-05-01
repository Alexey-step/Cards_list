import React from 'react';
import { render, screen } from '@testing-library/react';
import Paginate from './paginate';

describe('Test Paginate component', () => {
  it('Paginate component should render correctly', () => {
    render(
      <Paginate onPageClick={jest.fn()} pageCount={0} />,
    );

    expect(screen.getByText(/next/i)).toBeInTheDocument();
    expect(screen.getByText(/prev/i)).toBeInTheDocument();
  });
});
