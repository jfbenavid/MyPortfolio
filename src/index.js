import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Index from './portfolio/index'
import reducer from './reducers/data'
import data from './portfolio/data.eng.json'
import { theme } from './styles/theme-provider'
import GlobalStyles from './styles/global-styles'
import { ThemeProvider } from 'styled-components'

const initialState = {
  data: {
    ...data
  },
  english: true
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Index />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
