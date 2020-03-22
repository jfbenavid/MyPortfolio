import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { StyledInfo, H1, H3, A, SocialNetwork } from './styles'

export const Info = props => (
  <StyledInfo>
    <H1>{props.name}</H1>
    <H3>{props.occupation}</H3>
    <A href={`mailto:${props.emailDescription.email}`}>
      <span>
        <FaEnvelope /> {props.emailDescription.text}
      </span>
      {props.emailDescription.email}
    </A>
    <A href={`tel:${props.phoneDescription.phone.replace(/\s/g, '')}`}>
      <span>
        <FaPhone /> {props.phoneDescription.text}
      </span>
      {props.phoneDescription.phone}
    </A>
    <SocialNetwork>
      <a href={props.socialNetworks.linkedin} target='_blank'>
        <FaLinkedinIn />
      </a>
      <a href={props.socialNetworks.github} target='_blank'>
        <FaGithub />
      </a>
    </SocialNetwork>
  </StyledInfo>
)
