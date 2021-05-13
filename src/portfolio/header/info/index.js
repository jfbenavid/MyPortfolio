import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { StyledInfo, H1, H3, SocialNetwork } from './styles'

export const Info = ({ info }) => (
  <StyledInfo>
    <H1>{info.get('name')}</H1>
    <H3>{info.get('occupation')}</H3>
    <SocialNetwork>
      <a href={info.getIn(['socialMedia', 'linkedin'])} target='_blank' rel='noopener noreferrer'>
        <FaLinkedinIn />
      </a>
      <a href={info.getIn(['socialMedia', 'github'])} target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
    </SocialNetwork>
  </StyledInfo>
)
