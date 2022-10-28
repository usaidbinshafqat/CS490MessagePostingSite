import * as React from "react";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import { CardUI } from "../cards/CardUI";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import "./Profile.css";
// ? does it need to take in any parameters?
export const Profile = () => {
	return (
		<div>
			{/* user profile picture */}
				<Avatar className="avatar" sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}>OP</Avatar>
				<Box className="follow" sx={{ "& > :not(style)": { m: 1 } }}>
					<Fab
						variant="extended"
						size="medium"
						color="primary"
						aria-label="add"
					>
						Follow
					</Fab>
				</Box>

			<h5 className="username">Username</h5>

			{/* posts */}
			<CardUI />
			<CardUI />
			<CardUI />
		</div>
	);
};
