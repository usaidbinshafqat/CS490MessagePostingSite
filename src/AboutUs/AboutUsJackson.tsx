import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AboutUsJackson() {
  return (
    
    <Grid>
      <Card>
        <CardActionArea>
          <CardMedia>
            component="img"
					height="140"
					image="/images/jackson.png"
					alt="jackson"
          </CardMedia>
      
    </Grid>

		{/* <Card>
			<CardActionArea>
				<CardMedia
					
				/>
				<CardContent>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					></Grid>
					<Typography gutterBottom variant="h5" component="div">
						Jackson Kiino- Terburg
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Plays Overwatch .
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Backend Developer
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Kalamazoo College '24
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card> */}
	);
}
