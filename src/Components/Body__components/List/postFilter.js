import * as React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';
import {sort as sortBy} from "../../../constants";
import {useRedux} from "../../../provider";
import {sort} from "../../../actions";
const options = {
	[sortBy.ASC_PRICE]:"by lowest price",
	[sortBy.DESC_PRICE]: "by higher price",
	[sortBy.ASC_DATE]:"newest",
	[sortBy.DESC_DATE]: "oldest"
}

export default function PostFilter() {
	const {state, dispatch}  = useRedux();
	const [select, setSelect] = React.useState(state.sort);

	const handleChange = (event) => {
		dispatch(sort(event.target.value))
		setSelect(event.target.value);
	};

	const items = Object.entries(options).map(([value, label]) => ({label, value}));
	return (
		<div>
			<FormControl sx={{
				margin: 1,
				minWidth: 200
			}} size="small">
				<Select value={select} onChange={handleChange}>
					{items.map((item, index) => (
						<MenuItem key={item[index]} value={item.value}>{item.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
