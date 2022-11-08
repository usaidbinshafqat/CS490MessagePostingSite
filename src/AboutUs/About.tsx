import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { create } from "lodash";
import { HeaderLogo } from "../homePage/header_logo_svg";

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

const cards = [1, 2, 3, 4, 5];

const theme = createTheme({
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
				// text: "#C197D2",
			},
		},
	},

	typography: {
		button: {
			textTransform: "none",
		},
	},
	palette: {
		primary: {
			main: "#453750",
		},
		secondary: {
			main: "#fcde9c",
		},
		warning: {
			main: "#C197D2",
		},
		error: {
			main: "#D3D3D3",
		},
	},
}); // create a theme, talk to usaid about this

export function About(params: any) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<HeaderLogo />
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							About Us
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="text.secondary"
							paragraph
						>
							Meet the msg.postr team!
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						></Stack>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardMedia
										component="img"
										sx={{
											// 16:9
											pt: "56.25%",
										}}
										image="images/phumz.png"
										alt="random"
									/>
									<CardContent sx={{ flexGrow: 0.5 }}>
										<Typography variant="h5" component="h2">
											Heading
										</Typography>
										<Typography>Phumzille Moyo </Typography>
										<Typography> Kalamazoo College '23</Typography>
										<Typography>Fun Fact</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
