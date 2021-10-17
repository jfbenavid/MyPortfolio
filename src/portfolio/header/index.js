import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader } from './styles'
import { Photo } from './photo'
import { Menu } from './menu'
import { Info } from './info'

export const Header = ({
  english = true,
  handleLanguageChange,
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

Header.propTypes = {
  handleLanguageChange: PropTypes.func,
  english: PropTypes.bool,
  headerData: PropTypes.object.isRequired
}

export default Header
