import * as React from 'react';
import LeftBar from './Body__components/leftBar';
import { Box, } from '@mui/material';
import List from './Body__components/list';

export default function Body() {

	return (
		<Box sx={{
			display: "flex",
			boxSizing: 'border-box'
		}}>
			<LeftBar />
			<List />
		</Box>
	);

}





