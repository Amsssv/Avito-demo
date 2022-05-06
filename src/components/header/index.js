import React from "react";
import {AppBar, Container, Stack, Box, Toolbar} from "@mui/material";
import Authorization from "./authorization";
import Tittle from "./title";
import Favorite from "./favorite";
import Navigation from "./navigation";
import MobileNavigation from "./mobileComponents/mobileNavigation";

export default function () {

    return (
        <AppBar position="static" sx={{
            boxShadow: "none",
            background: "#292929"
        }}>
            <Container>
                <Toolbar variant="dense" sx={{justifyContent: "space-between"}}>
                    <Box sx={{
                        mr: 2,
                        display: {xs: "none", md: "flex"}
                    }}>
                        <Tittle/>
                        <Navigation/>
                    </Box>
                    <MobileNavigation/>
                    <Stack spacing={2} direction="row">
                        <Favorite/>
                        <Authorization/>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}