import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders search input', () => {
    render(<App />);
    const searchInput = screen.getByTestId("SearchBoxContainer");
    expect(searchInput).toBeInTheDocument();
  });

  test('renders list', () => {
    render(<App />);
    const list = screen.getByTestId("List");
    expect(list).toBeInTheDocument();
  });
});

