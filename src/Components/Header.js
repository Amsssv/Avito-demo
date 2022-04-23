import React from "react";
import { AppBar, Container, Stack, Box, Toolbar } from "@mui/material";
import Authorization from "./header/authorization";
import Tittle from "./header/title";
import Favorite from "./header/favorite";
import Navigation from "./header/navigation";
import MobileNavigation from "./header/mobileComponents/mobileNavigation";

export default function Header() {

	return (
		<AppBar position="static" sx={{
			boxShadow: "none",
			background: "#292929"
		}}>
			<Container >
				<Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
					<Box sx={{
						mr: 2,
						display: { xs: "none", md: "flex" }
					}}>
						<Tittle />
						<Navigation />
					</Box>
					<MobileNavigation />
					<Stack spacing={2} direction="row">
						<Favorite />
						<Authorization />
					</Stack>
				</Toolbar>
			</Container>
		</AppBar >
	)
}