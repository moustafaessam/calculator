import { createGlobalStyle } from "styled-components";

export const GlobalStyling = createGlobalStyle`
  @font-face {
    font-family: LeagueSpartanBold;
    src: url("/fonts/LeagueSpartan-Bold.ttf");
  }
  * , ::before , ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
    font-family: LeagueSpartanBold;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
