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
      warning: {
        main: "#C197D2",
      },
      error: {
        main: "#D3D3D3",
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
