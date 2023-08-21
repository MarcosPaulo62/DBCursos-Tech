import { render, screen } from '@testing-library/react';
import { DashboardAlunos } from './DashboardAlunos';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ColorsTheme } from '../../styles/global';

describe('DashboardAlunos Component', () => {
  test('renders NavbarDashboard component correctly', () => {
    const { getByTestId } = render(<ThemeProvider theme={ColorsTheme}><BrowserRouter><DashboardAlunos /></BrowserRouter></ThemeProvider>);
    const navbarComponent = screen.getByTestId('navbar-component');
    expect(navbarComponent).toBeInTheDocument();
  });

 
});
