import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../../util/styles'
import { Jobs } from './styles'
import { Job } from '../job'

export const Experience = ({ data: { word, data, functionWord, achievementWord } }) => (
  <section id={word}>
    <Title>{word}</Title>
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
