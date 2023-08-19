import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, setTheme] = useState(ColorsTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
