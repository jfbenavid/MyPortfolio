import React from 'react'
import { StyledPhoto, Img, ImageDiv } from './styles'

export const Photo = ({ photoInfo }) => (
  <ImageDiv>
    <StyledPhoto>
      <Img
        rel='pre-connect'
        src={photoInfo.get('link')}
        alt={photoInfo.get('alt')}
      />
    </StyledPhoto>
  </ImageDiv>
)
