import styled from 'styled-components';
// Styled Components = Componentes Estilizados

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.black};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;