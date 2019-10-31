import React from 'react';
import { render } from '@testing-library/react';
import Display from './components/display';
import Dashboard from './components/dashboard';
import App from './App';

test('it displays the text Strikes', () => {
  const { getByText } = render(<App />);
  getByText(/strikes/i);
})

test('it displayes the text Balls', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);  
})

test('it renders without crashing', () => {
  render(<App />);
});
