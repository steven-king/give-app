import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
