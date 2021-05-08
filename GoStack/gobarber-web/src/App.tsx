import React from 'react';
import SignUp from './pages/SignIn';
import GlobalStyle from './styles/global';

import {AuthProvider} from './hooks/AuthContext';

// Provider do contexto é um componente que a gente coloca por volta
// dos componentes que a gente quer que tenha acesso ao contexto de Auth

const App: React.FC = () => (
    <>
        <AuthProvider>
            <SignUp />
        </AuthProvider>

        <GlobalStyle/>
    </>
);

export default App;
