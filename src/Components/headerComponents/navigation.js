import { MenuItem, Typography } from "@mui/material";
import React from "react";

const pages = ["Products", "Pricing", "Blog"]

export default function Navigation(props) {

	return (
		<>
			{pages.map((page) => (
				<MenuItem key={page} sx={{ ml: 1 }} onClick={props.close} >
					<Typography>{page}</Typography>
				</MenuItem>
			))
			}
		</>
	)
}