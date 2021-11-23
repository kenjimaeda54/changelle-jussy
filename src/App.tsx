import React from 'react';
import Home from './pages/home';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './GlobalStyles';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
