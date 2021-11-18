import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const theme = {
  header: 'white',
  background: 'cyan',
  text: 'red'
}

const ThemeMock = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
)

export default ThemeMock

ThemeMock.propTypes = {
  children: PropTypes.any
}
