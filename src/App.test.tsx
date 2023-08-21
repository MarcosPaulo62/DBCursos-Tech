import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  test("Should render the App", () => {
    render(<App />);
    expect(screen.getByText("DBCursos")).toBeInTheDocument();
  });
});
