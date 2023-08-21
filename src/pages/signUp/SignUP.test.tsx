import {render, screen} from "@testing-library/react";
import {SignUp} from "./SignUp";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";
import {BrowserRouter} from "react-router-dom";

describe("Login Component", () => {
  test("displays link to home with correct text", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </ThemeProvider>
    );
    const link = screen.getByText("Página Inicial");
    expect(link).toBeInTheDocument();
  });
});
