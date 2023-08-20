import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
