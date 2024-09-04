import { render, screen } from '@testing-library/react';
import App from './App';

test('renders order list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Orders/i);
  expect(linkElement).toBeInTheDocument();
});

