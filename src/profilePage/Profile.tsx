import * as React from "react";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import { CardUI } from "../cards/CardUI";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
// ? does it need to take in any parameters?
export const Profile = () => {
	return (
		<div>
			{/* user profile picture */}
			<Grid  spacing={-30} container>
				<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
				<Box sx={{ "& > :not(style)": { m: 1 } }}>
					<Fab
						variant="extended"
						size="medium"
						color="primary"
						aria-label="add"
					>
						Follow
					</Fab>
				</Box>
			</Grid>

			<h4>Username</h4>

			{/* posts */}
			<CardUI />
			<CardUI />
			<CardUI />
		</div>
	);
};
