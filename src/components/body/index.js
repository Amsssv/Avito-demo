import * as React from 'react';
import LeftBar from './leftBar';
import {Box,} from '@mui/material';
import List from './list';
import {useEffect} from "react";
import {init} from "../../actions";
import {useDispatch} from "react-redux";


export default function Body() {
    const dispatch = useDispatch();

    useEffect( () => {
       dispatch(init())
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





