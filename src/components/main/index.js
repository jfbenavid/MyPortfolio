import React from 'react'
import propTypes from 'prop-types'

import Header from '../header'
import { Home } from '../home'
import { Section } from '../sectionData'
import { Job } from '../job'
import { Study } from '../study'

export const Main = (props) => {
  const { profile, skills, experience, courses, education } = props.mainInfo
  const { header } = props
  return (
    <>
      <Header {...props} />
      <Home {...header}/>
      <div className='container'>
        <Section word={profile.word}>
          <p>{profile.data}</p>
        </Section>
        <Section word={skills.word}>
          {skills.data.map(skill =>
            <span key={skill} className='skill'>{skill}</span>
          )}
        </Section>
        <Section word={experience.word}>
          <div className='separated'>
            {experience.data.map((item, index) => (
              <Job
                key={index}
                functionDescription={experience.functionWord}
                achievementsDescription={experience.achievementWord}
                data={item}
              />
            ))}
          </div>
        </Section>
        <Section word={courses.word}>
          <div className='separated'>
            {courses.data.map((item, index) => (
              <Study key={index} data={item} />
            ))}
          </div>
        </Section>
        <Section word={education.word}>
          <div className='separated'>
            {education.data.map((item, index) => (
              <Study key={index} data={item} />
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

Main.propTypes = {
  mainInfo: propTypes.object,
  header: propTypes.object
}
