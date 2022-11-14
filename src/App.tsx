import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./landingPage/LandingPage";
import { LoginPage } from "./loginPage/LoginPage";
import { SignUp } from "./signupPage/SignUp";
import { ProfilePageLoggedIn } from "./profilePage/ProfileLoggedIn";
import { AppView } from "./views/AppView";
import { ForYouPage } from "./ForYouPage/ForYou";
import { HashtagPage } from "./trends/HashtagPage";
import { SettingsPage } from "./settingsPage/Settings";
import { AboutUs } from "./aboutUs/AboutUs";
import { ProfilePageUnique } from "./profilePage/ProfilePage";

function App() {
  const theme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          // text: "#C197D2",
        },
      },
    },

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
            <Route path="/Profile" element={<ProfilePageLoggedIn />} />
            <Route path="/ForYou" element={<ForYouPage />} />
            <Route path="/Hashtag/:HashTag" element={<HashtagPage />} />
            <Route path="/ProfilePage/:UID" element={<ProfilePageUnique />} />
            <Route path="/Settings" element={<SettingsPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
