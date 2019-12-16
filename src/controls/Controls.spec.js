import React from 'react';
import { render, rerender, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('provides buttons to toggle the closed and locked states', () => {
  const { getByText, rerender, fireEvent } = render(<Controls locked={false} closed={false} />)
  getByText('Lock Gate');
  getByText(/close gate/i);

  rerender(<Controls locked={true} closed={true} />)
  getByText(/unlock gate/i);
  getByText(/open gate/i);

})