import { render, screen } from "@testing-library/react";
import  {BrowserRouter}   from "react-router-dom";
import { Login } from "./Login";

describe("Login Component", () => {
  test("renders login page correctly", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const homeButton = screen.getByText("Página Inicial");
    const arrowIcon = screen.getByTestId("arrow-icon");
    const authenticationCard = screen.getByTestId("auth-card");

    expect(homeButton).toBeInTheDocument();
    expect(arrowIcon).toBeInTheDocument();
    expect(authenticationCard).toBeInTheDocument();
  });

 
});
