import {render, screen} from "@testing-library/react";
import {Welcome} from "./Welcome";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";

describe("Welcome page tets", () => {
  test("Should render the text of the admin", () => {
    localStorage.setItem("cargo", "admin");
    render(
      <ThemeProvider theme={ColorsTheme}>
        <Welcome />
      </ThemeProvider>
    );
    expect(
      screen.getByText("Bem-vindo à área do Administrador! Aqui você pode fazer o cadastro e edição de alunos, cursos e professores.")
    ).toBeInTheDocument();
  });

  
  test("Should render the text of the teacher", () => {
    localStorage.setItem("cargo", "professor");
    render(
      <ThemeProvider theme={ColorsTheme}>
        <Welcome />
      </ThemeProvider>
    );
    expect(
      screen.getByText("Bem-vindo à área do Professor! Aqui você pode buscar pelos alunos da instituição e fazer o adastro de novos cursos.")
    ).toBeInTheDocument();
  });

  
  test("Should render the text of the student", () => {
    localStorage.setItem("cargo", "aluno");
    render(
      <ThemeProvider theme={ColorsTheme}>
        <Welcome />
      </ThemeProvider>
    );
    expect(
      screen.getByText("Bem-vindo à área do Aluno! Aqui você pode buscar pelos cursos da instituição e também pelos professores!")
    ).toBeInTheDocument();
  });
});
