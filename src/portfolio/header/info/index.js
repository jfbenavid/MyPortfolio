import React from 'react'
import PropTypes from 'prop-types'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { StyledInfo, H1, H3, SocialNetwork } from './styles'

export const Info = ({ info: { name, occupation, socialMedia: { linkedin, github } } }) => (
  <StyledInfo>
    <H1>{name}</H1>
    <H3>{occupation}</H3>
    <SocialNetwork>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
        <FaLinkedinIn />
      </a>
      <a href={github} target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
    </SocialNetwork>
  </StyledInfo>
)

Info.propTypes = {
  info: PropTypes.object
}
