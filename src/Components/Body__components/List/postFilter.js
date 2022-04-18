import * as React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';

const Items = ["By default", "Cheaper", "Expensive", "By date"]

export default function PostFilter() {

	const [select, setSelect] = React.useState("By default");

	const handleChange = (event) => {
		setSelect(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{
				margin: 1,
				minWidth: 200
			}} size="small">
				<Select value={select} onChange={handleChange}>
					{Items.map((item, index) => (
						<MenuItem key={item[index]} value={item}>{item}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
