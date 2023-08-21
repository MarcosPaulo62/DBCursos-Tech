import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import { Router } from "./Router";
import { CursosProvider } from "./context/CursosContext";
import { AlunosProvider } from "./context/AlunosContext";
import { ProfessoresProvider } from "./context/ProfessoresContext";

function App() {
  return (
    <ProfessoresProvider>
      <AlunosProvider>
        <CursosProvider>
          <ThemeProvider theme={ColorsTheme}>
            <div className="App">
              <Router />
            </div>
          </ThemeProvider>
        </CursosProvider>
      </AlunosProvider>
    </ProfessoresProvider>
  );
}

export default App;
