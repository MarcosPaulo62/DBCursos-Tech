import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import LandingPageCard from "./components/landing-page-card/LandingPageCard";

function App() {
  const [theme, setTheme] = useState(ColorsTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
      <LandingPageCard />
    </ThemeProvider>
  );
}

export default App;
