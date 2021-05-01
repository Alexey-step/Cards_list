import React from 'react';
import { render, screen } from '@testing-library/react';
import PlusIcon from './plus-icon';

describe('Test PlusIcon component', () => {
  it('PlusIcon component should render correctly', () => {
    render(
      <PlusIcon />,
    );

    expect(screen.getByTestId('plus')).toBeInTheDocument();
  });
});
