import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import { Router } from "./Router";
import { ModalCadastro } from "./Components/ModalCadastro/ModalCadastro";

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
      <div className="App">
        <Router />
        <ModalCadastro></ModalCadastro>
      </div>
    </ThemeProvider>
  );
}

export default App;
