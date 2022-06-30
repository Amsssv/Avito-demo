import React from "react";
import {Box} from "@mui/material";
import ToggleAppearance from "./toggleAppearance";
import PostPagination from "./postPagination";
import Posts from "./posts";
import AddNewCard from "./addNewCard";
import PostSortBy from "./postSortBy";

export default function List() {
    return (
        <Box>
            <Box sx={{display: 'flex', alignItems: 'center',}}>
                <ToggleAppearance/>
                <PostSortBy/>
                <AddNewCard/>
            </Box>
            <Posts/>
            <PostPagination/>
        </Box>
    )
}