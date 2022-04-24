import * as React from 'react';
import { Box, } from '@mui/material';

import {createStore, Provider, useReduxDispatch, useReduxState} from "../provider";
import {useReducer} from "react";

const Test = () => {
    const state = useReduxState();
    const dispatch = useReduxDispatch();

	return (
		<div>
			<span>{state.value}</span>
			<button onClick={()=>dispatch({type: "INCREMENT"})}>increment</button>
			<button onClick={()=>dispatch({type: "DECREMENT"})}>decrement</button>
		</div>
	)
}

const reducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1}
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state
    }
}
const middlewares = [
    store => next => action => {
        console.log(store);
		next();
        console.log(action);
    }
];


const store = createStore(reducer, {value: 0}, middlewares)
export default function Body() {
    return (
        <Box sx={{
            display: "flex",
            boxSizing: 'border-box'
        }}>
            <Provider store={store}>
                <Test/>
                {/*<LeftBar />*/}
                {/*<List />*/}
            </Provider>
        </Box>
    );

}





