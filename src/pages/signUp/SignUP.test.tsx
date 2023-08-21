import React from 'react';
import { render, screen } from '@testing-library/react';
import { SignUp } from './SignUp';
import { MemoryRouter } from 'react-router-dom';



describe("Login Component", () => {
test('renders SignUp component', () => {
  render(<SignUp />);
});

test('displays link to home with correct text', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    
    const link = screen.getByText('Página Inicial');
    expect(link).toBeInTheDocument();
  });
});