import React from "react";
import WindowIcon from '@mui/icons-material/Window';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function ToggleAppearance() {

	const [alignment, setAlignment] = React.useState('line');

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	return (
		<ToggleButtonGroup
			color='primary'
			value={alignment}
			exclusive
			onChange={handleChange}
			sx={{ height: 40 }}>
			<ToggleButton value="line">
				<ViewHeadlineIcon />
			</ToggleButton>
			<ToggleButton value="grid" >
				<WindowIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	)
} 