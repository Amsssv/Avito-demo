import React from "react";
import { Pagination, Stack } from "@mui/material";

export default function PostPagination() {
	return (
		<>
			<Stack spacing={2} sx={{
				alignItems: 'center',
				padding: 3
			}}>
				<Pagination count={10} size="large" />
			</Stack>
		</>
	)
}