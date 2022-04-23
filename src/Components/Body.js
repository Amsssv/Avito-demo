import * as React from 'react';
import LeftBar from './body/leftBar';
import { Box, } from '@mui/material';
import List from './body/list';

import { Provider } from "../provider";

export default function Body() {

	return (
		<Box sx={{
			display: "flex",
			boxSizing: 'border-box'
		}}>
			<Provider>
				<LeftBar />
				<List />
			</Provider>
		</Box>
	);

}





