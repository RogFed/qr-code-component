import React from 'react';
import { render, within } from '@testing-library/react';

import App from '../../components/App';

test('Should render h1 element with expected text', () => {
  render(<App />);
  const container = document.querySelector('h1');
  // @ts-ignore
  const text = within(container).getByText('ReactJS App');
  expect(text).toBeTruthy();
});
