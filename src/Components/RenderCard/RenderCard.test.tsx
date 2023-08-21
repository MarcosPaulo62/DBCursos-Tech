import {render, screen} from "@testing-library/react";
import {RenderCard} from "./RenderCard";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";

describe("Render card tests", () => {
  test("Should render error msg pre-defined when the role is undefined", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <RenderCard />
      </ThemeProvider>
    );
    expect(screen.getByTestId("error-msg")).toBeInTheDocument();
  });

  test("Should render the teacher cards", () => {
    localStorage.setItem("cargo", "professor");
    render(
      <ThemeProvider theme={ColorsTheme}>
        <RenderCard />
      </ThemeProvider>
    );
    expect(screen.getByText(`Acessar Alunos`)).toBeInTheDocument();
  });

  test("Should render the teacher cards", () => {
    localStorage.setItem("cargo", "aluno");
    render(
      <ThemeProvider theme={ColorsTheme}>
        <RenderCard />
      </ThemeProvider>
    );
    expect(screen.getByText(`Acessar Professores`)).toBeInTheDocument();
  });

  test("Should render the teacher cards", () => {
    localStorage.setItem("cargo", "admin");
    render(
      <ThemeProvider theme={ColorsTheme}>
        <RenderCard />
      </ThemeProvider>
    );
    expect(screen.getByText(`Acessar Alunos`)).toBeInTheDocument();
    expect(screen.getByText(`Acessar Professores`)).toBeInTheDocument();
  });
});
