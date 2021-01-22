import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background-color: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  h3,h4{
    font-weight: 400;
    color: rgb(100,100,100)
  }

  body{
    font-family: 'Lato', sans-serif;
  }
  `;
