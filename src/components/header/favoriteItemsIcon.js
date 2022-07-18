import {Badge, IconButton} from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavoriteItemsIcon() {
    return (
        <IconButton>
            <Badge badgeContent={2} color='error'>
                <FavoriteIcon sx={{color: 'white'}}/>
            </Badge>
        </IconButton>

    )
}