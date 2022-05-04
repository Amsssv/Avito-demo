import {Badge, IconButton} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import {useSelector} from "react-redux";

// export const totalFavoriteItems = () => {
// 	const state = useSelector( state => state.reducers);
// 	const items = state.items.filter((item) => item.isFavorite ? item : '');
// 	return items
// }

export default function Favorite() {
	// const totalLikes = totalFavoriteItems();

	return (
		<IconButton aria-label="add to favorites">
			<Badge badgeContent={2} color="error">
				<FavoriteIcon sx={{color: 'white'}} />
			</Badge>
		</IconButton>

	)
}