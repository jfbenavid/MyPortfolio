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
    
    @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default GlobalStyles
