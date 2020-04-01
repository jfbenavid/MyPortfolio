import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Index from './portfolio/index'
import { theme } from './styles/theme-provider'
import GlobalStyles from './styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { store } from './state/store/createStore'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .catch(error => console.log(error.message))
}

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Index />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
