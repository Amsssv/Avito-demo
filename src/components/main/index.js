import React from 'react';
import LeftBar from './leftBar';
import {Box} from '@mui/material';
import List from './list';

const Body = () => (
    <Box sx={{display: "flex", boxSizing: 'border-box'}}>
        <LeftBar/>
        <List/>
    </Box>
);

export default Body;




