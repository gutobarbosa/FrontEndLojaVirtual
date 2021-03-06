import styled from 'styled-components';

// Template Literals
export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    margin-top: 80px;
    max-width: 450px;
    line-height: 56px;
`;

export const Form = styled.form `
    margin-top: 40px;
    max-width:700px;
    display: flex;

    input{
        flex: 1;
        height: 70px;
    }

    button {
        width: 210px;
        height: 70px;
    }

`;

/* quando temos um container com determinado tamanho, e temos o componente e utilizamos flex:1 ele ira preencher todo o tamanho do container menos o tamanho do botão, nesse caso podemos definir um tamanho pro botão

/* isso é oque tinamos antes
h1{
    font-size: 48px;
    color: #3A3A3A;
} */
