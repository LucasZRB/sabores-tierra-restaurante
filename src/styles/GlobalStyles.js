import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Importar las fuentes de Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Nunito:wght@400;700&family=Teko:wght@500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgPrincipal};
    color: ${({ theme }) => theme.colors.textoPrincipal};
    font-family: ${({ theme }) => theme.fonts.nunito}; /* Por defecto */
    overflow-x: hidden;
    -font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.teko};
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }
`;
