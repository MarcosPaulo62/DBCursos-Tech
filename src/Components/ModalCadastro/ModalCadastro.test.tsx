import {screen, render} from "@testing-library/react";
import {ModalCadastro} from "./ModalCadastro";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";

describe("Modal register tests", () => {
  test("Should render a title and a button", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <ModalCadastro />
      </ThemeProvider>
    );

    expect(screen.getByText("Adicionar")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar novo professor")).toBeInTheDocument();
  });
});
