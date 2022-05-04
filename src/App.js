import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/header';
import Body from './components/body';
import reducers from "./reducers";
import { fetchItems } from "./middlewares";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from "react-redux";

const store = createStore(reducers, undefined, applyMiddleware(fetchItems));

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