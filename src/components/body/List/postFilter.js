import * as React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';
import { sort as sortBy } from "../../../constants";
import { sort as sortd} from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

const options = {
	[sortBy.ASC_PRICE]: "by lowest price",
	[sortBy.DESC_PRICE]: "by higher price",
	[sortBy.ASC_DATE]: "newest",
	[sortBy.DESC_DATE]: "oldest"
}

export default function PostFilter() {
	const sort = useSelector((state) => state.sort);
	const dispatch = useDispatch();
	const [select, setSelect] = React.useState(sort);

	const handleChange = (event) => {
		dispatch(sortd(event.target.value))
		setSelect(event.target.value);
	};

	const items = Object.entries(options).map(([value, label]) => ({ label, value }));

	return (
		<div>
			<FormControl sx={{
				margin: 1,
				minWidth: 200
			}} size="small">
				<Select value={select} onChange={handleChange}>
					{items.map((item, index) => (
						<MenuItem key={index} value={item.value}>{item.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}