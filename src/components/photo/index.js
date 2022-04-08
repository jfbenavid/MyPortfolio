import React from 'react'
import PropTypes from 'prop-types'

import { ImageDiv } from './styles'

export const Photo = ({ link, alt }) => (
  <ImageDiv>
    <div>
      <figure>
        <img
          rel='pre-connect'
          src={link}
          alt={alt}
        />
      </figure>
    </div>
  </ImageDiv>
)

Photo.propTypes = {
  link: PropTypes.string,
  alt: PropTypes.string
}
