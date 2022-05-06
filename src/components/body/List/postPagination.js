import React from "react";
import { Pagination, Stack } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {paginate} from "../../../actions";

export default function PostPagination() {
	const pages = useSelector((state) => state.pages)
	const page = useSelector((state) => Number(state.page))

	const dispatch = useDispatch();
	const pageNumber = (event) => {
		dispatch(paginate(Number(event.target.innerText)))
	};

	return (
		<>
			<Stack spacing={2} sx={{
				alignItems: 'center',
				padding: 3
			}}>
				<Pagination count={pages} page={page} size="large" onClick={pageNumber}/>
			</Stack>
		</>
	)
}