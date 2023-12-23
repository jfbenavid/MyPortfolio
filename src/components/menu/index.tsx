import { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'

import { Nav, Ul } from './styles'

export type menuProps = {
  sectionKeys: string[],
  locale: Record<string, string>
  toggleLanguage: () => void
}

export const Menu = ({sectionKeys, locale, toggleLanguage}: menuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const localeKeys = Object.keys(locale)
  const linksData = sectionKeys.filter(s => localeKeys.includes(s))

  return (
    <Nav className='container'>
      <ul>
        <li>
          <a href='#' onClick={toggleLanguage}>
            {locale['language']}
          </a>
        </li>
        <li>
          <Hamburger size={18} toggled={isOpen} toggle={setIsOpen} />
        </li>
        <Ul isOpen={isOpen}>{
          linksData.reverse().map(section =>
            <li key={section}><a href={`#${locale[section]}`}>{locale[section]}</a></li>
          )}
          <li>
            <a href='#home'>{locale['home']}</a>
          </li>
          <li>
            <Hamburger size={18} toggled={isOpen} toggle={setIsOpen} />
          </li>
        </Ul>
      </ul>
    </Nav>
  )
}
