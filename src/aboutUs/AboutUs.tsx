import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { TopAppBar } from "../homePage/TopAppBar";
import KyleCard from "./KyleCard";
import PhumzCard from "./PhumzCard";
import UsaidCard from "./UsaidCard";
import MalloryCard from "./MalloryCard";
import JacksonCard from "./JacksonCard";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://msgpstr.com/">
        msg.postr
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const AboutUs = () => {
  return (
    <>
      <div style={{ marginBottom: "90px" }}>
        <TopAppBar />
      </div>
      <Box
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Meet the msg.postr team!
          </Typography>
        </Container>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <MalloryCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PhumzCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UsaidCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <KyleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <JacksonCard />
        </Grid>
      </Grid>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
    </>
  );
};
