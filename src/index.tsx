import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, StyledEngineProvider } from '@mui/material';

ReactDOM.render(
  <Provider store={store}><CssBaseline /><Container maxWidth="sm"><App /></Container></Provider>,
  document.getElementById('root')
);

