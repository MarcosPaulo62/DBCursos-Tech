import React from "react";
import { render, screen } from "@testing-library/react";
import { DashboardCursos } from "./DashboardCursos";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../styles/global";

describe("DashboardCursos Component", () => {
  test("renders without crashing", () => {
    render(<ThemeProvider theme={ColorsTheme}><BrowserRouter><DashboardCursos /></BrowserRouter></ThemeProvider>);
  });

  
});
