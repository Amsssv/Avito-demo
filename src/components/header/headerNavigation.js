import {MenuItem, Typography} from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";

export default function HeaderNavigation() {
    return (
        <>
            <Link to='/'>
                <MenuItem sx={{ml: 1}}>
                    <Typography>Products</Typography>
                </MenuItem>
            </Link>
            <Link to='/pricing'>
                <MenuItem sx={{ml: 1}}>
                    <Typography>Pricing</Typography>
                </MenuItem>
            </Link>
            <Link to='/blog'>
                <MenuItem sx={{ml: 1}}>
                    <Typography>Blog</Typography>
                </MenuItem>
            </Link>
        </>
    )
}