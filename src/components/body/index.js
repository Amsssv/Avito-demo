import * as React from 'react';
import LeftBar from './leftBar';
import {Box,} from '@mui/material';
import List from './list';

export default function Body() {

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





