import {act, fireEvent, render, screen, waitFor} from "@testing-library/react";
import {AuthenticationCard} from "./AuthenticationCard";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

describe("Authentication card component tests", () => {
  test("Should render the register page", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <AuthenticationCard isLoginPage={false} />
        </BrowserRouter>
      </ThemeProvider>
    );

    const inputContainer = document.querySelectorAll(".input-container");

    expect(inputContainer).toHaveLength(3);
  });

  test("Should register a new user", async () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <AuthenticationCard isLoginPage={false} />
        </BrowserRouter>
      </ThemeProvider>
    );

    const inputLogin = screen.getByTestId("input-login");
    const inputPassword = screen.getByTestId("input-password");
    const inputConfirmPassword = screen.getByTestId("input-confirm-password");
    const btnSubmit = screen.getByTestId("btn-submit");

    act(() => {
      fireEvent.change(inputLogin, {target: {value: "testuser"}});
      fireEvent.change(inputPassword, {target: {value: "password123"}});
      fireEvent.change(inputConfirmPassword, {
        target: {value: "password123"},
      });
    });

    await act(async () => {
      fireEvent.click(btnSubmit);
    });

    expect(screen.getByText("ENTRAR")).toBeInTheDocument();
  });

  test("Should show a warning toast when the inputs aren't filled", async () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <AuthenticationCard isLoginPage={false} />
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    );

    const btnSubmit = screen.getByTestId("btn-submit");

    fireEvent.click(btnSubmit);

    await waitFor(() => {
      expect(screen.getByText("É necessário preencher todos os campos!")).toBeInTheDocument();
    });
  });

  test("Should show a warning toast when confirm password isn't filled", async () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <AuthenticationCard isLoginPage={false} />
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    );

    const inputLogin = screen.getByTestId("input-login");
    const inputPassword = screen.getByTestId("input-password");
    const btnSubmit = screen.getByTestId("btn-submit");

    act(() => {
      fireEvent.change(inputLogin, {target: {value: "testuser"}});
      fireEvent.change(inputPassword, {target: {value: "password123"}});
    });

    await act(async () => {
      fireEvent.click(btnSubmit);
    });

    await waitFor(() => {
      expect(screen.getByText("É necessário preencher todos os campos!")).toBeInTheDocument();
    });
  });

  test("Should show a warning toast when confirm password isn't filled", async () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <AuthenticationCard isLoginPage={false} />
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    );

    const inputLogin = screen.getByTestId("input-login");
    const inputPassword = screen.getByTestId("input-password");
    const inputConfirmPassword = screen.getByTestId("input-confirm-password");
    const btnSubmit = screen.getByTestId("btn-submit");

    act(() => {
      fireEvent.change(inputLogin, {target: {value: "testuser"}});
      fireEvent.change(inputPassword, {target: {value: "password123"}});
      fireEvent.change(inputConfirmPassword, {target: {value: "anotherpassword"}});
    });

    await act(async () => {
      fireEvent.click(btnSubmit);
    });

    await waitFor(() => {
      expect(screen.getByText("As senhas devem ser iguais!")).toBeInTheDocument();
    });
  });

  test("Should the login button focused", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <AuthenticationCard isLoginPage={false} />
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    );

    const btnLogin = screen.getByTestId("btn-header-login");

    fireEvent.click(btnLogin);

    expect(btnLogin).toHaveClass("onfocus");
  });

  test("Should the register button focused", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <BrowserRouter>
          <AuthenticationCard isLoginPage={true} />
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    );

    const btnRegister = screen.getByTestId("btn-header-register");

    fireEvent.click(btnRegister);
    expect(btnRegister).toHaveClass("onfocus");
  });
});
