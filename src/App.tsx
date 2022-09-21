import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppView } from "./AppView";

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
        <AppView />
      </div>
    </ThemeProvider>
  );
}

export default App;
