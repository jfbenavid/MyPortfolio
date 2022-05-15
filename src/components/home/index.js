import React from 'react'
import propTypes from 'prop-types'
import { Photo } from '../photo'

import { ContainerDiv } from './styles'
import { Info } from '../info'

export const Home = ({ photoInfo, information }) => (
  <ContainerDiv id="home">
    <Photo {...photoInfo} />
    <Info {...information} />
  </ContainerDiv>
)

Home.propTypes = {
  photoInfo: propTypes.object,
  information: propTypes.object
}
