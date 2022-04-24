import * as React from 'react';
import {Box} from '@mui/material';

import {connect, createStore, Provider, useDispatch, useSelector} from "../redux";

const reducer = (state = {valueOne: 0, valueTwo: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT_ONE':
            return {
                ...state,
                valueOne: state.valueOne + 1
            }
        case 'DECREMENT_ONE':
            return {
                ...state,
                valueOne: state.valueOne - 1
            }
        case 'INCREMENT_TWO':
            return {
                ...state,
                valueTwo: state.valueTwo + 1
            }
        case 'DECREMENT_TWO':
            return {
                ...state,
                valueTwo: state.valueTwo - 1
            }
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

const store = createStore(reducer, {valueOne: 0, valueTwo: 0}, middlewares);

const mapStateToProps = state => {
    return {
        state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const TestWithConnect = connect(mapStateToProps, mapDispatchToProps)((props) => {
    const {state, dispatch} = props
    return (
        <div>
            <span>{state.valueOne}</span>
            <button onClick={() => dispatch({type: "INCREMENT_ONE"})}>increment</button>
            <button onClick={() => dispatch({type: "DECREMENT_ONE"})}>decrement</button>
        </div>
    )
});

const TestWithHooks = () => {
    const state = useSelector();
    const dispatch = useDispatch();
    return (
        <div>
            <span>{state.valueTwo}</span>
            <button onClick={() => dispatch({type: "INCREMENT_TWO"})}>increment</button>
            <button onClick={() => dispatch({type: "DECREMENT_TWO"})}>decrement</button>
        </div>
    )
}

export default function Body() {
    return (
        <Box sx={{
            display: "flex",
            boxSizing: 'border-box'
        }}>
            <Provider store={store}>
                <div>
                    <TestWithConnect/>
                </div>
                <div>
                    <TestWithHooks/>
                </div>
            </Provider>
        </Box>
    );

}





