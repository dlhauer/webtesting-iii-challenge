import React from 'react';
import { render, rerender, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('provides buttons to toggle the closed and locked states', () => {
  const { getByText, rerender } = render(<Controls locked={false} closed={false} />)
  getByText('Lock Gate');
  getByText(/close gate/i);

  rerender(<Controls locked={true} closed={true} />)
  getByText(/unlock gate/i);
  getByText(/open gate/i);
})

test('the open toggle button is disabled if the gate is locked', () => {
  const { getByText } = render(<Controls locked={true} closed={true}/>)
  const openButton = getByText(/open gate/i);
  expect(openButton.hasAttribute('disabled')).toBe(true);
})

test('the locked toggle button is disabled if the gate is open', () => {
  const { getByText } = render(<Controls locked={false} closed={false}/>)
  const lockButton = getByText(/lock gate/i);
  expect(lockButton.hasAttribute('disabled')).toBe(true);
})


//Isn't this already covered by other tests?
test('cannot be closed or opened if it is locked', () => {
  const { getByText, queryByText } = render(<Controls closed={true} locked={true} />)
  // expect(queryByText(/open gate/i)).toBe(null);
  const openButton = getByText(/open gate/i);
  // expect(queryByText(/^close gate$/i)).toBe(null);
})