import * as React from 'react';
import {Box} from '@mui/material';
import LeftBar from "./Body__components/leftBar";
import List from "./Body__components/list";

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

