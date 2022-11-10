import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AboutUsJackson() {
	var cardStyle = {
		// display: "flex",
		width: "30vw",
		height: "45vw",
	};
	return (
		<Card style={cardStyle}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="/images/mallory.png"
					alt="jackson"
				/>
				<CardContent>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					></Grid>
					<Typography gutterBottom variant="h5" component="div">
						Mallory Dolorfino
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Can juggle.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Full-stack Developer
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Kalamazoo College '23
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
