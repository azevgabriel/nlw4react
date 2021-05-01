import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router';
// BrowserRouter eu perderia o acesso ao History

import GlobalStyle from './styles/global';
import theme from './styles/theme';

import Routes from './routes';
import history from './services/history';
import ContextProvider from './contexts';

function App() {
  return (
      <ThemeProvider theme={theme.default}>
        <ContextProvider>
          <Router history={history}>
            <Routes/>
            <GlobalStyle/>
          </Router>    
        </ContextProvider>    
      </ThemeProvider>
  );
}

export default App;
