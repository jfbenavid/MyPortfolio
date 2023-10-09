import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { StyledInfo } from './styles'
import { information } from 'types'

export const Info = ({ occupation, socialMedia: { linkedin, github } }: information) => (
  <StyledInfo>
    <h2>{occupation}</h2>
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
