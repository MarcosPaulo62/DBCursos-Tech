import React from 'react';
import { render } from '@testing-library/react';
import { DashboardProfessores } from './DashboardProfessores';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ColorsTheme } from '../../styles/global';

test('renders DashboardProfessores component', () => {
  render(<ThemeProvider theme={ColorsTheme}><BrowserRouter><DashboardProfessores /></BrowserRouter></ThemeProvider>);
});
