import React from "react";
import { Pagination, Stack } from "@mui/material";
import {useDispatch, useSelector} from "../../../redux";
import {paginate} from "../../../actions";

export default function PostPagination() {
	const state = useSelector()
	const dispatch = useDispatch();
	const pageNumber = (event) => {
		dispatch(paginate(event.target.innerText))
	};

	return (
		<>
			<Stack spacing={2} sx={{
				alignItems: 'center',
				padding: 3
			}}>
				<Pagination count={state.pages} size="large" onClick={pageNumber}/>
			</Stack>
		</>
	)
}