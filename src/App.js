import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, GivePage, SharePage, ProgressPage } from 'features';
import { Nav } from 'components';

const ROUTES = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'give',
    element: <GivePage />,
  },
  {
    path: 'connect',
    element: <SharePage />,
  },
  {
    path: 'progress',
    element: <ProgressPage />,
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
