import * as React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';

export default function SelectLabels() {
	const [select, setSelect] = React.useState('default');

	const handleChange = (event) => {
		setSelect(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 200 }} size="small">
				<Select
					value={select}
					onChange={handleChange}
				>
					<MenuItem value="default">By default</MenuItem>
					<MenuItem value="Cheaper">Cheaper</MenuItem>
					<MenuItem value="Expensive">Expensive</MenuItem>
					<MenuItem value="By date">By date</MenuItem>
				</Select>

			</FormControl>
		</div>
	);
}
