import React from "react";
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';
import Header__title from "./Header__components/header__title"
import Header__navigation from './Header__components/header__navigation';
import Header__authorization from './Header__components/header__authorization';
import Toolbar from '@mui/material/Toolbar';
import Dick from "./Body";

export default function Header() {
	return (
		<React.Fragment>
			<AppBar sx={{ position: 'fixed', background: '#292929' }}>
				<Container maxWidth='lg'>
					<Toolbar>
						<Header__title />
						<Header__navigation />
						<Header__authorization />
					</Toolbar>
				</Container>
			</AppBar>
			<Dick />
		</React.Fragment>
	)
}