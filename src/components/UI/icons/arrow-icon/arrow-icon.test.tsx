import React from 'react';
import { render, screen } from '@testing-library/react';
import ArrowIcon from './arrow-icon';

describe('Test ArrowIcon component', () => {
  it('ArrowIcon component should render correctly', () => {
    render(
      <ArrowIcon />,
    );

    expect(screen.getByTestId('arrow')).toBeInTheDocument();
  });
});
