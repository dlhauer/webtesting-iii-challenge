// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard defaults to Open and Unlocked', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/unlock/i);
  getByText(/open/i);
});

test('Dashboard shows Controls and Display', () => {
  const { getByTestId } = render(<Dashboard />)
  getByTestId('display');
  getByTestId('controls');
})