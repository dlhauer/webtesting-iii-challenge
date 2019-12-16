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