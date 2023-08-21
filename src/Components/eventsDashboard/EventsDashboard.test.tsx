import {screen, render} from "@testing-library/react";
import EventsDashboard from "./EventsDashboard";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "../../styles/global";

describe("Make tests on event dashboard", () => {
  test("Should render the next event", () => {
    const day = new Date();
    const futureDay = new Date(day);
    futureDay.setDate(day.getDate() + 1)
    render(
      <ThemeProvider theme={ColorsTheme}>
        <EventsDashboard />
      </ThemeProvider>
    );
    expect(screen.getByText(futureDay.getDate())).toBeInTheDocument();
  });
});

