import { Home } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const TopAppBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Home />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
