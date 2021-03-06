import styled from 'styled-components';

// Template Literals
// Assim como Sass Less que trazem novas funcionalidades dentro do css
// o React faz a mesma coisa com o styled-components no qual
// mesmo sendo um arquivo de estilização do form
// podemos ramificar a estilização, por exemplo, no css comum teriamos que
// fazer da seguinte forma, form input { e a estilização}
// Aqui simplesmente podemos puxar um input {} e entre outros recursos dentro do informado ali em cima
// desta forma todo input, button e etc que estiver dentro do form, receberão as estilizações.
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
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0px 0px 5px
    }

    button {
        width: 210px;
        height: 70px;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
    }

`;

/* quando temos um container com determinado tamanho, e temos o componente e utilizamos flex:1 ele ira preencher todo o tamanho do container menos o tamanho do botão, nesse caso podemos definir um tamanho pro botão

/* isso é oque tinamos antes
h1{
    font-size: 48px;
    color: #3A3A3A;
} */
