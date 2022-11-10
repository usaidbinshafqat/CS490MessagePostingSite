import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TopAppBar } from "../homePage/TopAppBar";
import AboutUsUsaid from "./AboutUsUsaid";
import AboutUsJackson from "./AboutUsJackson";
import AboutUsMallory from "./AboutUsMallory";
import AboutUsKyle from "./AboutUsKyle";
import AboutUsPhumz from "./AboutUsPhumz";
import "./index.css";
// import { create } from "lodash";
// import { ReactComponent as HeaderLogo } from "../homePage/header_logo_svg";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				msg.postr
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// const styles = (theme) => ({
// 	Card: {
// 		width: 300,
// 		margin: "auto",
// 	},
// 	Media: {
// 		height: 550,
// 	},
// });

export function About(params: any) {
	return (
		<>
			<div style={{ marginBottom: "70px" }}>
				<TopAppBar />
			</div>
			<div
				style={{
					alignContent: "center",
				}}
			>
				<br />
				<div className="aboutCards">
					<Grid item xs={6}>
						<AboutUsKyle />
					</Grid>
					&nbsp;
					<Grid item xs={6}>
						<AboutUsUsaid />
					</Grid>
					&nbsp;
					<Grid item xs={6}>
						<AboutUsMallory />
					</Grid>
				</div>
				<br />
				<br />
				<div className="aboutCards">
					<Grid item xs={6}>
						<AboutUsPhumz />
					</Grid>
					&nbsp;
					<Grid item xs={6}>
						<AboutUsJackson />
					</Grid>
				</div>
			</div>
		</>
	);
}
