import { ThemeProvider } from 'styled-components'
import { hasChildren } from 'types'

const theme = {
  header: 'white',
  background: { main: 'cyan', second: 'brown' },
  text: 'red'
}

const ThemeMock = (props: hasChildren) => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
)

export default ThemeMock
