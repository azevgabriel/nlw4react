import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logo from '../../assets/logo.svg'
import {Title, Form, Repositories} from './styles'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repositórios no GitHub.</Title>
            <Form>
                <input placeholder="Digite o nome do reposítorio"/>
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://github.com/azevgabriel.png"
                        alt="Gabriel Azevedo"
                    />
                    <div>
                        <strong>azevgabriel/myStudies</strong>
                        <p>Hub de projetos de estudos!</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img
                        src="https://github.com/azevgabriel.png"
                        alt="Gabriel Azevedo"
                    />
                    <div>
                        <strong>azevgabriel/myStudies</strong>
                        <p>Hub de projetos de estudos!</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img
                        src="https://github.com/azevgabriel.png"
                        alt="Gabriel Azevedo"
                    />
                    <div>
                        <strong>azevgabriel/myStudies</strong>
                        <p>Hub de projetos de estudos!</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;
