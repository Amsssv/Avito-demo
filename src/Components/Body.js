import * as React from 'react';
import Left_Bar from './Body__components/leftBar';
import Cards from './Body__components/card';
import SelectFilter from './Body__components/filter';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import WindowIcon from '@mui/icons-material/Window';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Box } from '@mui/material';
import { createTheme } from '@mui/material';

const customTheme = createTheme({
	content: {
		display: "flex",
		boxSizing: 'border-box',
	},
	viewButton: {
		display: 'flex',
		alignItems: 'center'
	}
})

export default function Body() {
	const classes = customTheme

	return (
		<Box sx={classes.content}>
			<Left_Bar />
			<Box >
				<Box sx={classes.viewButton}>
					<ButtonGroup disableElevation variant="contained">
						<Button>
							<WindowIcon />
						</Button>
						<Button>
							<ViewHeadlineIcon />
						</Button>
					</ButtonGroup>
					<SelectFilter />
				</Box>
				<Cards />
				<Cards />
				<Cards />
			</Box>
		</Box>
	);

}





