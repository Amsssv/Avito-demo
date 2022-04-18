import React from "react";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@mui/material';


export default function PriceFilter() {

	const [values, setValues] = React.useState({
		priceStart: '',
		priceEnd: '',
	});

	const handleChange = (prop) => (event) => {
		const re = /^[0-9\b]+$/;
		if (event.target.value === '' || re.test(event.target.value)) {
			setValues({ ...values, [prop]: event.target.value });
		}
	};

	return (
		<>
			<FormControl sx={{ mb: 2, mr: 1.5 }}>
				<InputLabel htmlFor="lowest-price">Lowest</InputLabel>
				<OutlinedInput
					id="lowest-price"
					value={values.priceStart}
					onChange={handleChange('priceStart')}
					startAdornment={<InputAdornment position="start">$</InputAdornment>}
					label="Lowest"
					placeholder='100'
				/>
			</FormControl>
			<FormControl sx={{ mb: 2, mr: 1.5 }}>
				<InputLabel htmlFor="highest-price">Highest</InputLabel>
				<OutlinedInput
					id="highest-price"
					value={values.priceEnd}
					onChange={handleChange('priceEnd')}
					startAdornment={<InputAdornment position="start">$</InputAdornment>}
					label="Highest"
					placeholder='1000'
				/>
			</FormControl>
			<Button variant="contained" sx={{ mr: 1.5 }}>Apply</Button>
		</>
	)
}