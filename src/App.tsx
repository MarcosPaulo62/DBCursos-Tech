import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import { NavbarDashboard } from "./components/NavbarDashboard/NavbarDashboard";

function App() {
  const [theme, setTheme] = useState(ColorsTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavbarDashboard role="aluno" />
      </div>
    </ThemeProvider>
  );
}

export default App;
