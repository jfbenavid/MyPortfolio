import React from 'react'
import propTypes from 'prop-types'

import { Profile } from '../profile'
import { Experience } from '../experience'
import { Education } from '../education'
import { Skills } from '../skills'
import Header from '../header'
import { Home } from '../home'

export const Main = (props) => {
  const { profile, skills, experience, courses, education } = props.mainInfo
  const { header } = props
  return (
    <>
      <Header {...props} />
      <Home {...header}/>
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
  mainInfo: propTypes.object,
  header: propTypes.object
}
