import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {ColorsTheme} from "./styles/global";

function App() {
  const [theme, setTheme] = useState(ColorsTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
