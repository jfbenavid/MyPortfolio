import { hasChildren } from 'types'

export const Header = ({children}: hasChildren) => (
  <header>
    {children}
  </header>
)

export default Header
