import { Box, Card, IconButton, CardContent, Typography, Color } from "@mui/material";
import * as React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

class LikeButton extends React.Component<{}, {liked: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  render() {
    return (
      <IconButton 
      className = "likeButton" 
      color = {this.state.liked ? "warning" : "error"}
      onClick={() => this.setState({liked: !this.state.liked})}>
         <FavoriteIcon/> 
      </IconButton>
    )
  }
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography>CS Final Project</Typography>
      <Typography>Phumz, Mallory, Usaid, Kyle, Jackson</Typography>
      <LikeButton> </LikeButton>
    </CardContent>
  </React.Fragment>
);

export const CardUI = () => {
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};