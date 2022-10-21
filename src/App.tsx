import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppView } from "./AppView";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#453750",
      },
      secondary: {
        main: "#fcde9c",
      },
    },
  });

  responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppView />
      </div>
    </ThemeProvider>
  );
}

export default App;
