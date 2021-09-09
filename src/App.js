import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';

import './App.css';
import 'fontsource-roboto';
import theme from './config/theme';
import { Container } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, } from '@material-ui/core/styles';
import Header from './components/Header';
import StoryBoard from './components/StoryBoard';
import { AppContextProvider } from './state/contexts/app-context';

import Routes from './Routes';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <AppContextProvider >
            <StoryBoard />
            <Header />
            <Menu />
            <Routes />
          </AppContextProvider>
        </Container>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}