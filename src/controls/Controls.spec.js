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

// test('buttons text changes to reflect the state the door will be in if clicked' , () => {
//   const closedSpy = jest.fn();
//   const lockedSpy = jest.fn();
  
//   const { getByText, rerender} = render(<Controls locked={false} closed={false} toggleClosed={closedSpy} toggleLocked={lockedSpy}/>)
  
//   const closeButton = getByText(/close gate/i);
//   fireEvent.click(closeButton)
//   getByText(/open gate/i);
// })

// test( 'the closed toggle button is disabled if the gate is locked', ())