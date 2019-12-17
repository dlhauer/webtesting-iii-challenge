// Test away!
import React from 'react';
import { render, rerender } from '@testing-library/react';
import Display from './Display';

test('Display shows open/closed and locked/unlocked', () => {
  const { getByText, rerender } = render(<Display closed={false} locked={false}/>);
  getByText(/unlocked/i);
  getByText(/open/i);

  rerender(<Display closed={true} locked={true}/>)
  getByText(/locked/i);
  getByText(/closed/i);
})

test('red-led class applied when locked or closed', () => {
  const { getByText } = render(<Display locked={true} closed={true} />)
  const lockedDisplay = getByText(/locked/i);
  const closedDisplay = getByText(/closed/i)
  expect(lockedDisplay.classList.contains('red-led')).toBe(true);
  expect(closedDisplay.classList.contains('red-led')).toBe(true);
})