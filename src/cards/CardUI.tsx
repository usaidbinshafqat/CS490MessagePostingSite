import { Box, Card, IconButton, CardContent, CardActions, CardHeader, 
  Typography, Avatar, Color } from "@mui/material";
import * as React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ButtonBase } from '@mui/material';
import { purple } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
            U
          </Avatar>
        }
        titleTypographyProps={{align: "left" as const}}
        title="User"
        subheaderTypographyProps={{align: "left" as const}}
        subheader="Time/Date Posted"
      />
    <CardContent>
      <Typography>CS Final Project</Typography>
      <Typography>Phumz, Mallory, Usaid, Kyle, Jackson</Typography>
    </CardContent>
    <div className="card__actions">
      <CardActions disableSpacing>
          <LikeButton> </LikeButton> 
      </CardActions>
    </div>
  </React.Fragment>
);

export const CardUI = () => {
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};