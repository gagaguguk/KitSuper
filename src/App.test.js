// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KitSuperRare title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KitSuperRare/i);
    expect(titleElement).toBeInTheDocument();
});
