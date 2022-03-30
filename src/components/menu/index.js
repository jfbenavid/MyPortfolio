import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Squeeze as Hamburger } from 'hamburger-react'

import { Ul } from './styles'

export const Menu = (props) => {
  const { handleLanguageChange, isEnglish, mainInfo } = props
  const [isOpen, setIsOpen] = useState(true)
  const sections = Object.keys(mainInfo)

  return (
    <nav>
      <Ul open={isOpen}>
        <li className='burger'>
          <Hamburger size={18} toggled={isOpen} toggle={setIsOpen} />
        </li>
        {isOpen && sections.map(section =>
          <li key={section}><a href={`#${section}`}>{mainInfo[section].word}</a></li>
        )}
        <li>
          <a href='#' onClick={() => handleLanguageChange(!isEnglish)}>
            {isEnglish ? 'Español' : 'English'}
          </a>
        </li>
      </Ul>
    </nav>
  )
}

Menu.propTypes = {
  handleLanguageChange: propTypes.func,
  isEnglish: propTypes.bool,
  mainInfo: propTypes.object
}
