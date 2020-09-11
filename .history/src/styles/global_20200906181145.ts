import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
 body{
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
 }
 input, body, button {
     font: 16px Roboto, sans-serif;
 }
 #root {
     max-width: 960px;
     margin: 0 auto; /* pra centralizar as informações desse container */


 }
`;
