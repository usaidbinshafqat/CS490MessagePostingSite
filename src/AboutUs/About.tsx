import React from "react";
import "./styles.css";
import KyleCard from "./KyleCard";
import MalloryCard from "./MalloryCard";
import UsaidCard from "./UsaidCard";
import PhumzCard from "./PhumzCard";
import JacksonCard from "./JacksonCard";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="http://msgpstr.com/About">
				Msg.Postr
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function About() {
	return (
		<>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={12} sm={6} md={4}>
					<KyleCard />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<PhumzCard />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<UsaidCard />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<MalloryCard />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<JacksonCard />
				</Grid>
			</Grid>

			<Copyright />
		</>
	);
}
