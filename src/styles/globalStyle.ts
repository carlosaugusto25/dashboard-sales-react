import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle <{ theme?: DefaultTheme }>`
    body, html {
        background: ${({ theme }) => theme.appBackground};
        color: ${({ theme }) => theme.appColor};
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p, span, ul, li {
        margin: 0;
        padding: 0;
    } 

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        outline: none;
    }
`;