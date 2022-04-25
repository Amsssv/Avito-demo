import { IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function Favorite() {
	return (
		<IconButton aria-label="add to favorites">
			<FavoriteIcon sx={{color: 'white'}} />
		</IconButton>
	)
}