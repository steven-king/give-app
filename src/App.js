import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, GivePage, SharePage } from 'features';
import { Nav } from 'components';

const ROUTES = [
  {
    label: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    label: 'About',
    path: 'about',
    element: <AboutPage />,
  },
  {
    label: 'Give',
    path: 'give',
    element: <GivePage />,
  },
  {
    label: 'Share',
    path: 'connect',
    element: <SharePage />,
  },
];

const theme = createTheme({
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box minHeight="100vh" bgcolor="background.default">
        <Nav tabs={ROUTES} />
        <Box display="flex" justifyContent="center" width="100%">
          <Box width="100%" maxWidth="1400px" style={{ padding: '0 20px 0 20px' }}>
            <Routes>
              {ROUTES.map((route) => (
                <Route
                  key={route.path}
                  exact={route.path === '/'}
                  {...route}
                />
              ))}
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
