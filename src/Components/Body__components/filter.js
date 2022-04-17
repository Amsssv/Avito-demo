import * as React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';
import { createTheme } from '@mui/material';

const Items = ["By default", "Cheaper", "Expensive", "By date"]

const customTheme = createTheme({
	filter: {
		margin: 1,
		minWidth: 200
	}
})

export default function SelectFilter() {

	const classes = customTheme

	const [select, setSelect] = React.useState("By default");

	const handleChange = (event) => {
		setSelect(event.target.value);
	};

	return (
		<div>
			<FormControl sx={classes.filter} size="small">
				<Select value={select} onChange={handleChange}>
					{Items.map((item) => (
						<MenuItem value={item}>{item}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
