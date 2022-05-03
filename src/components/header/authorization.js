import { Button } from "@mui/material"
import React from "react"
import {useDispatch} from "../../redux";
import {fetchsomething} from "../../actions"

export default function Authorization() {
	const dispatch = useDispatch()

	return (
		<>
			<Button variant="contained" onClick={() => dispatch(fetchsomething())}>Log In</Button>
			<Button variant="contained">Sign In</Button>
		</>
	)
}