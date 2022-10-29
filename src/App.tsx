import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./landingPage/LandingPage";
import { LoginPage } from "./loginPage/LoginPage";
import Profile from "./profilePage/Profile";
import { SignUp } from "./signupPage/SignUp";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<AppView />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
