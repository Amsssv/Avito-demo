import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {createTheme} from '@mui/system';
import PriceFilter from './priceFilter';
import SideBar from "./SideBar";

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
    }
})

export default function LeftBar() {
    const classes = customTheme;
    return (
        <Drawer variant='permanent' sx={classes.drawer}>
            <SideBar/>
            <PriceFilter/>
        </Drawer>
    );
}