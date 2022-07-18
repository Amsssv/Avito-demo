import React from 'react';
import {Container, CssBaseline} from '@mui/material';
import Header from './components/header';
import Body from './components/main';
import reducers from './reducers';
import {initItems} from './thunks';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const store = createStore(reducers, undefined, applyMiddleware(thunk));

store.dispatch(initItems)

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline/>
                <Header/>
                <Container maxWidth='lg'>
                    <Routes>
                        <Route element={<Body/>} path='/'>
                        </Route>
                        <Route element={<> blablba </>} path='/blog'>
                        </Route>
                    </Routes>
                </Container>
            </Router>
        </Provider>
    );
}