import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image="logo.svg"
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Sample Post
				</Typography>
				<Typography variant="body2" color="text.secondary">
					I love coding in react typescript! Jk I hate it.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Like</Button>
				<Button size="small">Comment</Button>
				<Button size="small">Share</Button>
			</CardActions>
		</Card>
	);
}
