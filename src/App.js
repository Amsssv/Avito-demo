import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/header';
import Body from './components/body';
import reducers from "./reducers";
import {initItems} from "./middlewares";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from "react-redux";
import thunk from "redux-thunk";



const store = createStore(reducers, undefined, applyMiddleware(thunk));

store.dispatch(initItems)

export default function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <Header />
            <Container>
                <Body />
            </Container>
        </Provider>
    );
}