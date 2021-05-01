import React from 'react';
import { useAuth } from '../../contexts/auth';

import { Container } from './styles';

const SignIn: React.FC = () => {
    const {signed, signIn, loading} = useAuth();
    console.log(signed);

    function handleSignIn() {
        signIn();
    }

    return (
        <Container>
            <input type="text" defaultValue="test@email.com"/>
            <input type="password" defaultValue="123" />
            <button onClick={handleSignIn}>
                {loading ? 'Carregando' : 'Entrar'}
            </button>
        </Container>
    );
}

export default SignIn;