import * as React from 'react';
import LeftBar from './leftBar';
import {Box,} from '@mui/material';
import List from './list';
import {useEffect} from "react";
import {getItems, getTotalPages} from "../../actions";
import {useDispatch} from "../../redux";
import {initialState} from "../../reducers";

export default function Body() {
    const dispatch = useDispatch();
    const  state = initialState
    useEffect( () => {
        fetch(`/items?page=${state.page}&minPrice=${state.minPrice}&maxPrice=${state.maxPrice}&sort=${state.sort}`)
            .then(res => res.json())
            .then(data => {
                dispatch(getItems(data.items));
                dispatch(getTotalPages(data.pages))
            })
    }, [])

    return (
        <Box sx={{
            display: "flex",
            boxSizing: 'border-box'
        }}>
            <LeftBar/>
            <List/>
        </Box>
    );

}





