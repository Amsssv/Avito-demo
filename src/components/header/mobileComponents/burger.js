import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Burger(props) {
	return (
		<IconButton
			size="large"
			onClick={props.open}
			color="inherit"
		>
			<MenuIcon />
		</IconButton>
	)
}