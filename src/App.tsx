import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import { Router } from "./Router";


function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
