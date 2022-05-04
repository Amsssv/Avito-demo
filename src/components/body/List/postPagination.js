import React, {useEffect, useState} from "react";
import { Pagination, Stack } from "@mui/material";
import {useDispatch} from "../../../redux";
import {getItems, paginate} from "../../../actions";


export default function PostPagination() {
	const dispatch = useDispatch();

	const pageNumber = (event) => {
		dispatch(paginate(event.target.innerText))
	};

	const [pages, setPages] = useState('')

	useEffect( () => {
		fetch("/items?page=1&minPrice=0&maxPrice=99999&sort=asc_price")
			.then(res => res.json())
			.then(data => {
				dispatch(getItems(data.items));
				setPages(data.pages)
			})
	}, [])
	return (
		<>
			<Stack spacing={2} sx={{
				alignItems: 'center',
				padding: 3
			}}>
				<Pagination count={pages} size="large" onClick={pageNumber}/>
			</Stack>
		</>
	)
}