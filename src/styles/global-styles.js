import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto', 'system-ui';
        color: ${props => props.theme.colors.grey};
    }
    #app > header {
        background-color: red;
        height: 620px;
    }
`

export default GlobalStyles
