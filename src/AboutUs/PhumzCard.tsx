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
				width: "500px",
				height: "300px",
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						Phumzille Moyo
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						Backend Developer
					</Typography>
					<Typography
						variant="subtitle2"
						color="text.secondary"
						component="div"
					>
						Addicted to blitz games; at this point, way more than chess.
					</Typography>
					<Typography
						variant="subtitle2"
						color="text.secondary"
						component="div"
					>
						K College '23
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
			</Box>
			<CardMedia
				component="img"
				style={{
					height: "300px",
					width: "300px",
				}}
				image="/images/phumz.png"
				alt="photo of phumz"
			/>
		</Card>
	);
}
