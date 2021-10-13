import React from 'react'
import PropTypes from 'prop-types'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { StyledInfo } from './styles'

export const Info = ({ info: { name, occupation, socialMedia: { linkedin, github } } }) => (
  <StyledInfo>
    <h1>{name}</h1>
    <h3>{occupation}</h3>
    <div>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
        <FaLinkedinIn />
      </a>
      <a href={github} target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
    </div>
  </StyledInfo>
)

Info.propTypes = {
  info: PropTypes.object
}
