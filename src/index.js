import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Index from './portfolio/index'
import GlobalStyles from './styles/global-styles'

import { theme } from './styles/theme-provider'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .catch(error => console.log(error.message))
}

render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Index />
  </ThemeProvider>,
  document.getElementById('app')
)
