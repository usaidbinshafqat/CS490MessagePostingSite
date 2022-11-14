import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function KyleCard() {
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Kyle Baker
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Frontend Developer
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            Super Smash Bros. Ultimate fanatic.
          </Typography>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            K College '22 🇺🇸
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia
        component="img"
        style={{
          maxHeight: "50%",
          maxWidth: "33%",
        }}
        image="/assets/kyle.png"
        alt="photo of kyle"
      />
    </Card>
  );
}
