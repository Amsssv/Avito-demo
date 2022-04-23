import React, { useState } from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';
import { useRedux } from "../../../provider";

const Items = ["By default", "Cheaper", "Expensive", "By date"]

export default function PostFilter() {
	const { state, dispatch } = useRedux()
	const [select, setSelect] = useState("By default");

	const handleChange = (event) => {
		let selected = event.target.value;
		setSelect(selected);
		dispatch({ type: selected })
	};

	return (
		<div>
			<FormControl sx={{
				margin: 1,
				minWidth: 200
			}} size="small">
				<Select value={select} onChange={handleChange} >
					{Items.map((item, index) => (
						<MenuItem key={item[index]} value={item}>{item}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}


// const initialState = []

// function compareNumbers(a, b) {
// 	return a - b;
// }

// prices = (numbers.map((number) => number.price)).sort(compareNumbers)


// const filter = () => {
// 	for (let a = 0; a < numbers.length; a++) {
// 		for (let i = 0; i < numbers.length; i++) {
// 			if (numbers[i].price === prices[a]) {
// 				initialState.push(numbers[i])
// 			}
// 		}
// 	}
// }
// filter()