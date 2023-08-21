import {screen, render} from "@testing-library/react";
import {CardHome} from "./CardHome";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";

describe("Card home tests", () => {
  test("Should render a paragraph and role", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <CardHome image="teste" cargo="aluno" />
      </ThemeProvider>
    );
    expect(screen.getByTestId('access-role')).toBeInTheDocument();
  });
});
