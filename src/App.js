import * as React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Header from './Components/Header';
import Main from './Components/Body';
import Cards from './Components/Body__components/card';
import SelectLabels from './Components/Body__components/filter';
import Align_buttons from './Components/Body__components/align';

export default function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <main >
        <Container fixed>
          <Box sx={{
            display: "flex",
            boxSizing: 'border-box',
          }}>
            <Box >
              <Main />
            </Box>
            <Box >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Align_buttons />
                <SelectLabels />
              </Box>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Box>
          </Box>
        </Container>
      </main>
    </>
  );
}