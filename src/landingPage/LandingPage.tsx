import { Box, Container, Grid, Stack } from "@mui/material";
import { LandingPageButtons } from "./LandingPageButtons";
import Logo from "./logo_transparent.png";

export const LandingPage = () => {
  return (
    //big screen
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <img src={Logo} alt="logo" />

        <LandingPageButtons />
      </Stack>
    </Container>
  );
};
