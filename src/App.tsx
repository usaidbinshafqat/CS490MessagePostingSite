import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./landingPage/LandingPage";
import { LoginPage } from "./loginPage/LoginPage";
import { AppView } from "./views/AppView";

function App() {
  const theme = createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
    },
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<AppView />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/SignUp" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
