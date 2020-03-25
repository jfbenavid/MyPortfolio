import React from 'react'
import { Nav, Ul, Li, Link } from './styles'
import { GiEarthAmerica } from 'react-icons/gi'

export const Menu = ({ handleLanguageChange, languageText }) => (
  <Nav>
    <Ul>
      <Li>
        <Link href='#' onClick={handleLanguageChange}>
          <GiEarthAmerica />
          {languageText ? 'Español' : 'English'}
        </Link>
      </Li>
    </Ul>
  </Nav>
)
