import React from 'react';
import useConsole from '../../hooks/useConsole';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    useConsole("useConsole");

    return (
        <Container>
            Dashboard
        </Container>
    );
}

export default Dashboard;