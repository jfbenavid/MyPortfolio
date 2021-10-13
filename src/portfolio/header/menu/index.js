import React from 'react'
import PropTypes from 'prop-types'

import { Nav, Ul, Li, Link } from './styles'
import { GiEarthAmerica } from 'react-icons/gi'

export const Menu = ({ handleLanguageChange, languageText }) => (
  <Nav>
    <Ul>
      <Li>
        <Link href='#' onClick={() => handleLanguageChange(!languageText)}>
          <GiEarthAmerica />
          {languageText ? 'Español' : 'English'}
        </Link>
      </Li>
    </Ul>
  </Nav>
)

Menu.propTypes = {
  handleLanguageChange: PropTypes.func,
  languageText: PropTypes.bool
}
