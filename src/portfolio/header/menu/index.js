import React from 'react'
import PropTypes from 'prop-types'

import { Nav } from './styles'
import { GiEarthAmerica } from 'react-icons/gi'

export const Menu = ({ handleLanguageChange, languageText }) => (
  <Nav>
    <ul>
      <li>
        <a href='#' onClick={() => handleLanguageChange(!languageText)}>
          <GiEarthAmerica />
          {languageText ? 'Español' : 'English'}
        </a>
      </li>
    </ul>
  </Nav>
)

Menu.propTypes = {
  handleLanguageChange: PropTypes.func,
  languageText: PropTypes.bool
}
