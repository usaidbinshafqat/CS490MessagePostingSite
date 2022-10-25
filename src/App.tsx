import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppView } from "./views/AppView";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#453750",
      },
      secondary: {
        main: "#fcde9c",
      },
      warning: {
        main: "#C197D2",
      },
      error: {
        main: "#D3D3D3",
      },
    },
  });

  responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppView />
        {/* <Profile /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
