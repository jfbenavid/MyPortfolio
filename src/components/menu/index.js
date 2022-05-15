import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Squeeze as Hamburger } from 'hamburger-react'

import { Nav, Ul } from './styles'

export const Menu = (props) => {
  const { handleLanguageChange, isEnglish, mainInfo } = props
  const [isOpen, setIsOpen] = useState(false)
  const sections = Object.keys(mainInfo)

  return (
    <Nav className='container'>
      <ul>
        <li>
          <a href='#' onClick={() => handleLanguageChange(!isEnglish)}>
            {isEnglish ? 'Español' : 'English'}
          </a>
        </li>
        <li>
          <Hamburger size={18} toggled={isOpen} toggle={setIsOpen} />
        </li>
        <Ul isOpen={isOpen}>{
          sections.reverse().map(section =>
            <li key={section}><a href={`#${mainInfo[section].word}`}>{mainInfo[section].word}</a></li>
          )}
          <li>
            <a href='#home'>{isEnglish ? 'Home' : 'Hogar'}</a>
          </li>
          <li>
            <Hamburger size={18} toggled={isOpen} toggle={setIsOpen} />
          </li>
        </Ul>
      </ul>
    </Nav>
  )
}

Menu.propTypes = {
  handleLanguageChange: propTypes.func,
  isEnglish: propTypes.bool,
  mainInfo: propTypes.object
}
