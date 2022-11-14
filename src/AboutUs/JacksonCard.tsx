import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function JacksonCard() {
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
						Jackson Kiino-Tersburg
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
						Loves to play Overwatch
					</Typography>

					<Typography
						variant="subtitle2"
						color="text.secondary"
						component="div"
					>
						K College '24
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
			</Box>
			<CardMedia
				component="img"
				sx={{}}
				style={{
					height: "300px",
					width: "300px",
				}}
				image="/images/jackson.png"
				alt="photo of Jackson"
			/>
		</Card>
	);
}
