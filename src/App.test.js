import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render a application title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Welcome to React application!/i);
    expect(titleElement).toBeInTheDocument();
  });
});
