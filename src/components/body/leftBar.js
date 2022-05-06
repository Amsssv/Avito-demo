import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {createTheme} from "@mui/material/node_modules/@mui/system";
import PriceFilter from './LeftBar/priceFilter';
import ItemsFilter from './LeftBar/ItemsFilter';

const customTheme = createTheme({
    drawer: {
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            position: 'static',
            border: 'none',
        },
        display: {
            xs: 'none',
            md: 'block'
        }
    },
    submit: {
        mr: 1.5,
    }
})

export default function LeftBar() {
    const classes = customTheme;
    return (
        <Drawer variant="permanent" anchor="left" sx={classes.drawer}>
            <ItemsFilter/>
            <PriceFilter/>
        </Drawer>
    );
}