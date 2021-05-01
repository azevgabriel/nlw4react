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

    input {
        padding: 10px;
        border: 2px solid ${(props) => props.theme.colors.pink};
        max-width: 80%;
        width: 20rem;
        height: 2.5rem;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }

    button {
        background-color: ${(props) => props.theme.colors.pink};
        color: #fff;
        cursor: pointer;
        border: 0;
        max-width: 80%;
        height: 2.5rem;
        border-radius: 4px;
        width: 20rem;

        &:hover{
            transform: scale(1.01);
        }
        
        &:active{
            transform: scale(.99);
        }
    }

`;