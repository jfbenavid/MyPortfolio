import React from 'react'
import { Nav, Ul, Li, Link } from './styles'
import { GiEarthAmerica } from 'react-icons/gi'

export const Menu = props => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link href='#' onClick={props.handleLanguageChange}>
            <GiEarthAmerica />
            {props.languageText ? 'Español' : 'English'}
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
}
