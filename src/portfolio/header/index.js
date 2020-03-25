import React from 'react'
import { StyledHeader } from './styles'
import { Photo } from './photo'
import { Menu } from './menu'
import { Info } from './info'

export const Header = ({ handleLanguageChange, english, headerData }) => (
  <StyledHeader>
    <Menu handleLanguageChange={handleLanguageChange} languageText={english} />
    <Photo photoInfo={headerData.get('photoInfo')} />
    <Info info={headerData.get('information')} />
  </StyledHeader>
)

export default Header
