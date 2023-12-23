import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Index from './components/index'
import GlobalStyles from './styles/global-styles'

import { theme } from './styles/theme-provider'

createRoot(document.getElementById('app'))
  .render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Index />
    </ThemeProvider>,
  )
