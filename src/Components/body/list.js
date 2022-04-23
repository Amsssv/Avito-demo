import React from "react";
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Button } from "@mui/material";
import ToggleAppearance from "./List/toggleAppearance";
import PostFilter from "./List/postFilter";
import PostPagination from "./List/postPagination";
import Posts from "./List/posts";

export default function List() {
	return (
		<Box >
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<ToggleAppearance />
				<PostFilter />
				<Button sx={{
					textAlign: 'end',
					flex: 1,
					display: { xs: 'block', md: 'none' },

				}} >
					<TuneIcon sx={{ fontSize: 30 }} />
				</Button>
			</Box>
			<Posts />
			<PostPagination />
		</Box>
	)
}