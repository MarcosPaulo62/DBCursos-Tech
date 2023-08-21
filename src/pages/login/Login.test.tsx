import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Login} from "./Login";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";

describe("Login Component", () => {
  test("renders login page correctly", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
      </ThemeProvider>
    );

    const homeButton = screen.getByText("Página Inicial");
    const arrowIcon = screen.getByTestId("arrow-icon");
    const authenticationCard = screen.getByTestId("auth-card");

    expect(homeButton).toBeInTheDocument();
    expect(arrowIcon).toBeInTheDocument();
    expect(authenticationCard).toBeInTheDocument();
  });
});
