import React from 'react'
import { StyledPhoto, Img, ImageDiv } from './styles'

export const Photo = props => (
  <ImageDiv>
    <StyledPhoto>
      <Img src={props.link} alt={props.alt} />
    </StyledPhoto>
  </ImageDiv>
)
