import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import { HomePage } from "./homePage/HomePage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2D232E",
      },
      secondary: {
        main: "#474448",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
