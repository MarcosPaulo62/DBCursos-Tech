import { screen, render } from "@testing-library/react";
import { ModalCadastroAluno } from "./ModalCadastroAluno";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../styles/global";

describe("Modal register tests", () => {
  test("Should render a title and a button", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <ModalCadastroAluno open={true} />
      </ThemeProvider>
    );

    expect(screen.getByText("Adicionar")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar novo professor")).toBeInTheDocument();
  });
});
