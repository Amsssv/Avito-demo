import * as React from 'react';
import LeftBar from './Body__components/leftBar';
import Cards from './Body__components/card';
import SelectFilter from './Body__components/filter';
import WindowIcon from '@mui/icons-material/Window';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Box, Pagination, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { createTheme } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';


const customTheme = createTheme({
	content: {
		display: "flex",
		boxSizing: 'border-box',
	},
	viewButtons: {
		display: 'flex',
		alignItems: 'center',
	},
	viewButton: {
		height: 40
	},
	pagination: {
		alignItems: 'center',
		padding: 3,
	},
	filter: {
		display: { xs: 'block', md: 'none' },
		fontSize: 30
	}
})

export default function Body() {
	const classes = customTheme

	const [alignment, setAlignment] = React.useState('line');

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	return (
		<Box sx={classes.content}>
			<LeftBar />
			<Box >
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Box sx={classes.viewButtons}>
						<ToggleButtonGroup
							color='primary'
							value={alignment}
							exclusive
							onChange={handleChange}
							sx={classes.viewButton}>
							<ToggleButton value="line">
								<ViewHeadlineIcon />
							</ToggleButton>
							<ToggleButton value="grid" >
								<WindowIcon />
							</ToggleButton>
						</ToggleButtonGroup>
						<SelectFilter />
					</Box>
					<TuneIcon sx={classes.filter} />
				</Box>
				<Cards />
				<Cards />
				<Cards />
				<Stack spacing={2} sx={classes.pagination}>
					<Pagination count={10} size="large" />
				</Stack>
			</Box>
		</Box>
	);

}





