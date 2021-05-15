import React from 'react';
import SignUp from './pages/SignIn';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

// Provider do contexto é um componente que a gente coloca por volta
// dos componentes que a gente quer que tenha acesso ao contexto de Auth

const App: React.FC = () => (
    <>
        <AppProvider>
            <SignUp />
        </AppProvider>

        <GlobalStyle/>
    </>
);

export default App;
