import React from 'react'
import PropTypes from 'prop-types'

import { Skill } from './styles'

export const Skills = ({ data: { word, data } }) => (
  <section>
    <h2>{word}</h2>
    {data.map(skill => <Skill key={skill}>{skill}</Skill>)}
  </section>
)

Skills.propTypes = {
  data: PropTypes.object
}
