import React from 'react'
import { StyledSection } from './styles'
import { Profile } from './profile'
import { Experience } from './experience'
import { Education } from './education'
import { Skills } from './skills'

export const Main = ({ mainInfo }) => {
  return (
    <StyledSection>
      <Profile data={mainInfo.get('profile')} />
      <Skills data={mainInfo.get('skills')} />
      <Experience data={mainInfo.get('experience')} />
      <Education data={mainInfo.get('education')} />
    </StyledSection>
  )
}
