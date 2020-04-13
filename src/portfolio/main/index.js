import React, { useRef, useEffect } from 'react'
import { StyledSection } from './styles'
import { Profile } from './profile'
import { Experience } from './experience'
import { Education } from './education'

export const Main = ({ mainInfo }) => {
  return (
    <StyledSection>
      <Profile data={mainInfo.get('profile')} />
      <Experience data={mainInfo.get('experience')} />
      <Education data={mainInfo.get('education')} />
    </StyledSection>
  )
}
