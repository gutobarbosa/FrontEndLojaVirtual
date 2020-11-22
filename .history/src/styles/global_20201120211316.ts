import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAFAFA ;
    -webkit-font-smoothing: antialiased

  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    max-width: 1500vw;
  }

  button {
    cursor: pointer;
  }
`;
