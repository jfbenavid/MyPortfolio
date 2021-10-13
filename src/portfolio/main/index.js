import React from 'react'
import PropTypes from 'prop-types'

import { StyledSection } from './styles'
import { Profile } from './profile'
import { Experience } from './experience'
import { Education } from './education'
import { Skills } from './skills'

export const Main = ({ mainInfo: { profile, skills, experience, courses, education } }) => {
  return (
    <StyledSection>
      <Profile data={profile } />
      <Skills data={skills} />
      <Experience data={experience} />
      <Education data={courses} />
      <Education data={education} />
    </StyledSection>
  )
}

Main.propTypes = {
  mainInfo: PropTypes.object
}
