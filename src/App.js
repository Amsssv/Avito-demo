import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './Components/Header';
import Body from './Components/Body';


export default function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container >
        <Body />
      </Container>
    </>
  );
}