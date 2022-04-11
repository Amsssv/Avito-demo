import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ background: '#292929' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Stack spacing={2} direction="row" sx={{ color: '#00aaff' }}>
						<Button variant="contained">Login</Button>
						<Button variant="contained"  >Sign In</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box >
	);
}