import React from 'react'
import PropTypes from 'prop-types'

import { Profile } from '../profile'
import { Experience } from '../experience'
import { Education } from '../education'
import { Skills } from '../skills'
import Header from '../header'

export const Main = (props) => {
  const { profile, skills, experience, courses, education } = props.mainInfo
  return (
    <>
      <Header {...props} />
      <div className='container'>
        <Profile data={profile} />
        <Skills data={skills} />
        <Experience data={experience} />
        <Education data={courses} />
        <Education data={education} />
      </div>
    </>
  )
}

Main.propTypes = {
  mainInfo: PropTypes.object
}
