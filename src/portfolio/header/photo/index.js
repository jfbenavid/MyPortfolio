import React from 'react'
import PropTypes from 'prop-types'

import { ImageDiv } from './styles'

export const Photo = ({ photoInfo: { link, alt } }) => (
  <ImageDiv>
    <figure>
      <img
        rel='pre-connect'
        src={link}
        alt={alt}
      />
    </figure>
  </ImageDiv>
)

Photo.propTypes = {
  photoInfo: PropTypes.object
}
