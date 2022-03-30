import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from '../menu'

export const Header = (props) => (
  <header>
    <Menu {...props} />
  </header>
)

Header.propTypes = {
  handleLanguageChange: PropTypes.func,
  isEnglish: PropTypes.bool,
  data: PropTypes.object
}

export default Header
