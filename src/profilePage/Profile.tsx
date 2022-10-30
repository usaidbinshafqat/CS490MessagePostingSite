import * as React from "react";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import { CardUI } from "../cards/CardUI";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import './Profile.css';
// ? does it need to take in any parameters?
export const Profile = () => {
	return (
		<div>
			{/* user profile picture */}
			<Grid spacing={-30} container>
				<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
				<Box sx={{ "& > :not(style)": { m: 1 } }}>
					<Fab
						className="profile__info"
						variant="extended"
						size="medium"
						color="primary"
						aria-label="add"
					>
						Follow
					</Fab>
					<Typography className="profile__info" variant="h4" gutterBottom>
						{" "}
						Kyle Baker
					</Typography>
					<Typography
						className="profile__info"
						variant="subtitle1"
						gutterBottom
					>
						@kydoggbaker
					</Typography>
				</Box>
			</Grid>

			{/* posts */}
			<CardUI />
			<CardUI />
			<CardUI />
		</div>
	);
};
