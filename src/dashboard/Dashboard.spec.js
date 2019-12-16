// Test away
import React from 'react';
import { render, rerender, fireEvent } from '@testing-library/react';
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

test('buttons text changes to reflect the state the door will be in if clicked' , () => {
  const closedSpy = jest.fn();
  const lockedSpy = jest.fn();
  
  const { getByText, rerender} = render(<Dashboard />)
  
  const closeButton = getByText(/close gate/i);
  fireEvent.click(closeButton);
  getByText(/open gate/i);
  const lockButton = getByText(/lock gate/i);
  fireEvent.click(lockButton);
  getByText(/unlock gate/i);
  const unlockButton = getByText(/unlock gate/i);
  fireEvent.click(unlockButton);
  getByText(/lock gate/i);
  const openButton = getByText(/open gate/i);
  fireEvent.click(openButton);
  getByText(/close gate/i);
})