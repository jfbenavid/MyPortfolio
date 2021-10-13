import React from 'react'
import PropTypes from 'prop-types'

import { Jobs } from './styles'
import { Job } from './job'

export const Experience = ({ data: { experienceWord, data, functionWord, achievementWord } }) => (
  <section>
    <h2>{experienceWord}</h2>
    <Jobs>
      {data.map(x => (
        <Job
          key={x}
          functionDescription={functionWord}
          achievementsDescription={achievementWord}
          data={x}
        />
      ))}
    </Jobs>
  </section>
)

Experience.propTypes = {
  data: PropTypes.object
}
