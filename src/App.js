import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './pages/Home';
import Menu from './components/Menu';

import './App.css';
import 'fontsource-roboto';
import theme from './config/theme';
import { Container } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, } from '@material-ui/core/styles';
import Header from './components/Header';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Header />
          <Menu />
          <HomePage />
        </Container>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
