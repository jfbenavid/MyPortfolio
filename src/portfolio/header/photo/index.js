import React from 'react'
import PropTypes from 'prop-types'

import { StyledPhoto, Img, ImageDiv } from './styles'

export const Photo = ({ photoInfo: { link, alt } }) => (
  <ImageDiv>
    <StyledPhoto>
      <Img
        rel='pre-connect'
        src={link}
        alt={alt}
      />
    </StyledPhoto>
  </ImageDiv>
)

Photo.propTypes = {
  photoInfo: PropTypes.object
}
