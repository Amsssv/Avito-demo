import React from "react";
import Header__title from "./Header__components/header__title"
import Header__navigation from './Header__components/header__navigation';
import Header__authorization from './Header__components/header__authorization';
import { AppBar, Container, Stack, IconButton, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
	return (
		<AppBar position="static" sx={{
			boxShadow: 'none',
			background: '#292929'
		}}>
			<Container fixed>
				<Toolbar variant="dense" >
					<IconButton edge="start"
						color='inherit' aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<Typography sx={{ flexGrow: 1 }} variant="h6">AVITO-DEMO</Typography>
					<Stack spacing={2} direction="row" sx={{ color: '#00aaff' }}>
						<Button variant="contained">Log In</Button>
						<Button variant="contained">Sign In</Button>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	)
}