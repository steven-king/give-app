import React, { useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, GivePage, SharePage, ProgressPage } from 'features';
import { Nav } from 'components';
import 'styles.css';

const theme = createTheme({
});

function App() {
  const [name, setName] = useState("");
  const [cause, setCause] = useState("X Cause");

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
      element: <GivePage cause={cause} setName={setName} />,
    },
    {
      path: 'connect',
      element: <SharePage cause={cause} name={name} />,
    },
    {
      path: 'progress',
      element: <ProgressPage />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box minHeight="90vh" bgcolor="background.default">
        <Nav tabs={ROUTES} />
        <Box display="flex" justifyContent="center" width="100%" sx={{ mt: 8 }}>
          <Box width="100%" maxWidth="1400px" style={{ padding: '20px' }}>
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
