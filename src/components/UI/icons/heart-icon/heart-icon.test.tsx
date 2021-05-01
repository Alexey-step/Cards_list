import React from 'react';
import { render, screen } from '@testing-library/react';
import HeartIcon from './heart-icon';

describe('Test HeartIcon component', () => {
  it('HeartIcon component should render correctly', () => {
    render(
      <HeartIcon isLiked />,
    );

    expect(screen.getByTestId('heart')).toBeInTheDocument();
  });
});
