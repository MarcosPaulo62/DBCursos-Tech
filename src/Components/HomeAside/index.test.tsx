import {render, screen} from "@testing-library/react";
import {HomeAside} from "./index";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";

describe("Home aside tests", () => {
  test("Should render the aside correctly", () => {
    render(
      <ThemeProvider theme={ColorsTheme}>
        <HomeAside />
      </ThemeProvider>
    );

    expect(screen.getByText("Ações bloqueadas")).toBeInTheDocument();
  });
});
