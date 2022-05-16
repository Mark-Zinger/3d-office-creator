import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./style/theme";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
