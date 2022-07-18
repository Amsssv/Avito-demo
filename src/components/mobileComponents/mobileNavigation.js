import { Box, Menu } from '@mui/material';
import React from 'react';
import HeaderNavigation from '../header/headerNavigation';
import Tittle from '../header/homeLogo';
import Burger from './burger';

export default function MobileNavigation() {

	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<Burger open={handleOpenNavMenu} />
				<Menu
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					<HeaderNavigation close={handleCloseNavMenu} />
				</Menu>
			</Box>
			<Tittle style={{
				flexGrow: 1,
				display: { xs: 'none', sm: 'flex', md: 'none' }
			}} />
		</>
	)
}