import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import WindowIcon from '@mui/icons-material/Window';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

export default function Align_buttons() {
	return (
		<ButtonGroup disableElevation variant="contained">
			<Button>
				<WindowIcon />
			</Button>
			<Button>
				<ViewHeadlineIcon />
			</Button>
		</ButtonGroup>
	);
}