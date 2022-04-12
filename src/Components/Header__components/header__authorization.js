import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Header__authorization() {

	return (
		<Stack spacing={2} direction="row" sx={{ color: '#00aaff' }}>
			<Button variant="contained">Log In</Button>
			<Button variant="contained">Sign In</Button>
		</Stack>
	)

}