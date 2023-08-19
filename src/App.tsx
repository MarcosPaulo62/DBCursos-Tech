import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";

function App() {
  const [theme, setTheme] = useState(ColorsTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <SignUp /> */}
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
