import {Badge, IconButton} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useSelector} from "../../redux";

export const totalFavoriteItems = () => {
	const state = useSelector();
	const items = state.items.filter((item) => item.isFavorite ? item : '');
	return items
}

export default function Favorite() {
	const totalLikes = totalFavoriteItems();

	return (
		<IconButton aria-label="add to favorites">
			<Badge badgeContent={totalLikes.length} color="error">
				<FavoriteIcon sx={{color: 'white'}} />
			</Badge>
		</IconButton>

	)
}