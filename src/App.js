import React, {useEffect} from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/header';
import Body from './components/body';
import {Provider, createStore} from "./redux";
import reducers from "./reducers";
import { fetchItems } from "./middlewares";

const store = createStore(reducers, null, [fetchItems]);


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