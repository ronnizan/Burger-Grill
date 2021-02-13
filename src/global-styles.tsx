import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  // font-size: 16px;
}`;
  