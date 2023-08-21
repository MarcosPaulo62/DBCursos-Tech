import {render, screen} from "@testing-library/react";
import {NavbarDashboard} from "./NavbarDashboard";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";
import {BrowserRouter, MemoryRouter, Route, Routes} from "react-router-dom";

describe("Navbar dashboard tests", () => {
  test("Should render a teacher navbar", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <NavbarDashboard role="professor" />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Cursos")).toBeInTheDocument();
    expect(screen.getByText("Alunos")).toBeInTheDocument();
  });
});
