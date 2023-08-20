import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import EventsDashboard from "./components/events-dashboard/EventsDashboard";

function App() {
  const [theme, setTheme] = useState(ColorsTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
      <EventsDashboard />
    </ThemeProvider>
  );
}

export default App;
