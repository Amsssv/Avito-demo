import React from "react";
import { Pagination, Stack } from "@mui/material";
import {filtredItems} from "./posts";
import {useDispatch} from "../../../redux";
import {paginate} from "../../../actions";

export default function PostPagination() {
	const items = filtredItems();
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
				<Pagination count={Math.ceil(items.length/3)} size="large" onClick={pageNumber}/>
			</Stack>
		</>
	)
}