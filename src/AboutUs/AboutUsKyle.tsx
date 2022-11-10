import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { style } from "@mui/system";

export default function AboutUsJackson() {
	return (
		<Card>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image="/images/jackson.png"
					alt="jackson"
				/>
				<CardContent>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					></Grid>
					<Typography gutterBottom variant="h5" component="div">
						Kyle Baker
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Super Smash Bros fanatic.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Frotnend Developer
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Kalamazoo College '22
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
