import React from 'react'
import propTypes from 'prop-types'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { StyledInfo } from './styles'

export const Info = ({ occupation, socialMedia: { linkedin, github } }) => (
  <StyledInfo>
    <h1>{occupation}</h1>
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
  name: propTypes.string,
  occupation: propTypes.string,
  socialMedia: propTypes.object
}
