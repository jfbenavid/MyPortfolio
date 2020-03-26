import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { StyledInfo, H1, H3, A, SocialNetwork, Contact } from './styles'

export const Info = ({ info }) => (
  <StyledInfo>
    <H1>{info.get('name')}</H1>
    <H3>{info.get('occupation')}</H3>
    <Contact>
      <A href={`mailto:${info.getIn(['emailDescription', 'email'])}`}>
        <span>
          <FaEnvelope /> {info.getIn(['emailDescription', 'text'])}
        </span>
        {info.getIn(['emailDescription', 'email'])}
      </A>
      <A
        href={`tel:${info
          .getIn(['phoneDescription', 'phone'])
          .replace(/\s/g, '')}`}
      >
        <span>
          <FaPhone /> {info.getIn(['phoneDescription', 'text'])}
        </span>
        {info.getIn(['phoneDescription', 'phone'])}
      </A>
    </Contact>
    <SocialNetwork>
      <a href={info.getIn(['socialNetworks', 'linkedin'])} target='_blank'>
        <FaLinkedinIn />
      </a>
      <a href={info.getIn(['socialNetworks', 'github'])} target='_blank'>
        <FaGithub />
      </a>
    </SocialNetwork>
  </StyledInfo>
)
