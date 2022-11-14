import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MalloryCard() {
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Mallory Dolorfino
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Fullstack Developer
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            Loves cats and can juggle.
          </Typography>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            K College '23 🇺🇸
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
        image="/assets/mallory.png"
        alt="photo of mallory"
      />
    </Card>
  );
}
