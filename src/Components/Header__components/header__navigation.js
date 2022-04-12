import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Header__navigation() {

	const pages = ['Products', 'Pricing', 'Blog'];

	return (
		<Box sx={{ flexGrow: 1, display: 'flex' }}>
			{pages.map((page) => (
				<Button
					key={page}
					sx={{ my: 2, color: 'white', display: 'block' }}
				>
					{page}
				</Button>
			))}
		</Box>
	)

}