import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body, html, #root{
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;
