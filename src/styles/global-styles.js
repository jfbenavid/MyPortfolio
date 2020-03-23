import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto', 'system-ui';
        color: ${p => p.theme.colors.black};
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyles
