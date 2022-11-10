import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AboutUsUsaid() {
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
					image="/images/usaid.jpeg"
					alt="green iguana"
				/>
				<CardContent>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					></Grid>
					<Typography gutterBottom variant="h5" component="div">
						Usaid Shafqat
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Loves anything tech, die hard cricket fan.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Full-stack Developer
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Kalamazoo College '22
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
