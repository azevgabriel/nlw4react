import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { Container } from '../Dashboard/styles'

const SignIn: React.FC = () => {
    const {signed, signIn, loading} = useContext(AuthContext);
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