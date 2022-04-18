import React from "react";
import { AppBar, Container, Stack, Box, Toolbar, Typography, Button, IconButton, Menu } from "@mui/material";
import { createTheme } from "@mui/material/node_modules/@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";


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
	menu_item: {
		ml: 1
	},
	likes: {
		color: "white"
	},
	header_medium: {
		mr: 2,
		display: { xs: "none", md: "flex" }
	},
	header_small: {
		flexGrow: 1,
		display: { xs: "flex", md: "none" }
	},
	header_title: {
		flexGrow: 1,
		display: { xs: "none", sm: "flex", md: "none" }
	},
})

const pages = ["Products", "Pricing", "Blog"]

export default function Header() {

	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const classes = customTheme
	return (
		<AppBar position="static" sx={classes.header}>
			<Container >
				<Toolbar variant="dense" sx={classes.toolbar}>
					<Box sx={classes.header_medium}>
						<Typography variant="h6">AVITO-DEMO	</Typography>
						{pages.map((page) => (
							<MenuItem key={page} sx={classes.menu_item} >
								<Typography>{page}</Typography>
							</MenuItem>
						))}
					</Box>
					<Box sx={classes.header_small}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} sx={classes.menu_item} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography variant="h6" sx={classes.header_title}>
						AVITO-DEMO
					</Typography>
					<div>
						<Stack spacing={2} direction="row" sx={classes.button}>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon sx={classes.likes} />
							</IconButton>
							<Button variant="contained">Log In</Button>
							<Button variant="contained">Sign In</Button>
						</Stack>
					</div>
				</Toolbar>
			</Container>
		</AppBar >
	)
}