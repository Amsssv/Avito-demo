import React from "react";
import { AppBar, Container, Stack, Box, Toolbar, Typography, Button, MenuItem } from "@mui/material";
import { createTheme } from "@mui/material/node_modules/@mui/system";


const customTheme = createTheme({
	header: {
		boxShadow: "none",
		background: "#292929"
	},
	toolbar: {
		justifyContent: "space-between"
	},
	button: {
		color: "#00aaff"
	},
	nav_buttons: {
		display: 'flex'
	},
	menu_item: {
		ml: 1
	}
})

const pages = ['Products', 'Pricing', 'Blog']

export default function Header() {

	const classes = customTheme
	return (
		<AppBar position="static" sx={classes.header}>
			<Container fixed>
				<Toolbar variant="dense" sx={classes.toolbar}>
					<Box sx={classes.nav_buttons}>
						<Typography variant="h6">AVITO-DEMO</Typography>
						{pages.map((page) => (
							<MenuItem key={page} sx={classes.menu_item}>
								<Typography textAlign="center">{page}</Typography>
							</MenuItem>
						))}
					</Box>
					<Stack spacing={2} direction="row" sx={classes.button}>
						<Button variant="contained">Log In</Button>
						<Button variant="contained">Sign In</Button>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar >
	)
}