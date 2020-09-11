import styled from 'styled-components';
import {shade} from 'polished';

// Template Literals
// Assim como Sass Less que trazem novas funcionalidades dentro do css
// o React faz a mesma coisa com o styled-components no qual
// mesmo sendo um arquivo de estilização do form
// podemos ramificar a estilização, por exemplo, no css comum teriamos que
// fazer da seguinte forma, form input { e a estilização}
// Aqui simplesmente podemos puxar um input {} e entre outros recursos dentro do informado ali em cima
// desta forma todo input, button e etc que estiver dentro do form, receberão as estilizações.
// Então aqui também é possivel encadear as estilizações, assim como está abaixo.
// Obs: mais também podemos manipular da forma antiga do css também sem problemas algum.
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
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;
        background: white;

        &::placeholder{
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
           background: ${shade(0.2, '#04D361')};
        }
    }

`;

export const Repositories = styled.div `
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #A8A8B3;
            }
            p{
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
            svg {
                margin-left: auto;
            }

        }
    }
`;

/* quando temos um container com determinado tamanho, e temos o componente e utilizamos flex:1 ele ira preencher todo o tamanho do container menos o tamanho do botão, nesse caso podemos definir um tamanho pro botão

/* isso é oque tinamos antes
h1{
    font-size: 48px;
    color: #3A3A3A;
} */
