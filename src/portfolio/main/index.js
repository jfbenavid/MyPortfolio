import React from 'react'
import { StyledSection } from './styles'
import { Profile } from './profile'
import { Experience } from './experience'

export const Main = props => (
  <StyledSection>
    <Profile {...props.profile} />
    <Experience {...props.experience} />
  </StyledSection>
)
