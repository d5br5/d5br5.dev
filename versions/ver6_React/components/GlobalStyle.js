import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --high: #02343F;
    --low: #F0EDCC;
    --font: #384040;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }

  html {
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
    color: var(--high);
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: var(--high);
    transition: 0.3s ease;

    &:visited {
      color: var(--high);
    }

    &:hover {
      color: gray;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: .05rem;
    text-align: center;
    color: var(--font);
  }

  h1 {
    text-transform: uppercase;
    font-size: 5rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 400;
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 1.5rem;
    color: darkgray;
  }

  h5 {
    font-size: 1.5rem;
    color: gray;
  }

  hr {
    margin: 50px 0;
    border: lightgray 0.1px solid;
  }

  @media ${(props) => props.theme.tabletS} {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    h5,
    p,
    h4 {
      font-size: 1.2rem;
    }
  }

`;

export default GlobalStyle;