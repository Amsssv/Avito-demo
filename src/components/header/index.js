import React from 'react';
import {AppBar, Container, Stack, Box, Toolbar} from '@mui/material';
import AuthButtons from './authButtons';
import Tittle from './homeLogo';
import FavoriteItemsIcon from './favoriteItemsIcon';
import HeaderNavigation from './headerNavigation';

export default function Header() {
    return (
        <AppBar position='static' sx={{boxShadow: 'none', background: '#292929'}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Tittle/>
                        <HeaderNavigation/>
                    </Box>
                    <Stack spacing={2} direction='row'>
                        <FavoriteItemsIcon/>
                        <AuthButtons/>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}