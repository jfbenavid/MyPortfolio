import React from 'react'
import PropTypes from 'prop-types'

import { Jobs } from './styles'
import { Job } from '../job'

export const Experience = ({ data: { experienceWord, data, functionWord, achievementWord } }) => (
  <section>
    <h2>{experienceWord}</h2>
    <Jobs>
      {data.map((item, index) => (
        <Job
          key={index}
          functionDescription={functionWord}
          achievementsDescription={achievementWord}
          data={item}
        />
      ))}
    </Jobs>
  </section>
)

Experience.propTypes = {
  data: PropTypes.object
}
