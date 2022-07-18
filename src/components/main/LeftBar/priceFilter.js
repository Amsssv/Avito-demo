import React, {useState} from 'react';
import {FormControl, InputLabel, OutlinedInput, InputAdornment, Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {FilterPrice} from '../../../thunks';

const regexp = new RegExp(/^[0-9\b]+$/);
const isValid = value => regexp.test(value);

export default function PriceFilter() {
    const dispatch = useDispatch();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(9999999);

    const handleMinChange = ({target: {value}}) => isValid(value) && setMinPrice(value);
    const handleMaxChange = ({target: {value}}) => isValid(value) && setMaxPrice(value);
    const handleButtonClick = () => dispatch(FilterPrice(parseInt(minPrice), parseInt(maxPrice)));

    return (
        <>
            <FormControl sx={{mb: 2, mr: 1.5}}>
                <InputLabel htmlFor='lowest-price'>Lowest</InputLabel>
                <OutlinedInput
                    id='lowest-price'
                    value={minPrice}
                    onChange={handleMinChange}
                    startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                    label='Lowest'
                />
            </FormControl>
            <FormControl sx={{mb: 2, mr: 1.5}}>
                <InputLabel htmlFor='highest-price'>Highest</InputLabel>
                <OutlinedInput
                    id='highest-price'
                    value={maxPrice}
                    onChange={handleMaxChange}
                    startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                    label='Highest'
                />
            </FormControl>
            <Button variant='contained' sx={{mr: 1.5}} onClick={handleButtonClick}>Apply</Button>
        </>
    )
}