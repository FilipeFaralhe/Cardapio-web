import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
  background: #312E38;
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}

html, body, #root {
  height: 100vh;
}

 .container {
   width: 90vw;
   max-width: 700px;
 }
 
:root {
--color-background: #F0F0F7;
--color-primary-lighter: #ffa733;
--color-primary-light: #ff9c1a;
--color-primary: #ff9000;
--color-primary-dark: #e68200;
--color-primary-darker: #cc7400;
--color-secundary: #312E38;
--color-secundary-dark: #25222a;
--color-title-in-primary: #FFFFFF;
--color-text-in-primary: #19171c;
--color-text-title: #7c718e;
--color-text-complement: #9C98A6;
--color-text-base: #635b71;
--color-line-in-white: #E6E6F0;
--color-input-background: #F8F8FC;
--color-button-text: #FFFFFF;
--color-box-base: #FFFFFF;
--color-box-footer: #FAFAFC;
font-size: 60%;
}
`;