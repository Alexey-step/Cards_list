import React from 'react';
import { render, screen } from '@testing-library/react';
import TriangleArrowIcon from './triangle-arrow-icon';

describe('Test TriangleArrowIcon component', () => {
  it('TriangleArrowIcon component should render correctly', () => {
    const isAscending = true;
    render(
      <TriangleArrowIcon isAscending={isAscending} />,
    );

    expect(screen.getByTestId('triangle-arrow')).toBeInTheDocument();
  });
});
