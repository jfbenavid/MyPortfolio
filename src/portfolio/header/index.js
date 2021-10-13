import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader } from './styles'
import { Photo } from './photo'
import { Menu } from './menu'
import { Info } from './info'

export const Header = ({
  handleLanguageChange,
  english,
  headerData: { photoInfo, information }
}) => (
  <StyledHeader>
    <Menu
      handleLanguageChange={handleLanguageChange}
      languageText={english}
    />
    <Photo photoInfo={photoInfo} />
    <Info info={information} />
  </StyledHeader>
)

export default Header

Header.propTypes = {
  handleLanguageChange: PropTypes.func,
  english: PropTypes.bool,
  headerData: PropTypes.object
}
