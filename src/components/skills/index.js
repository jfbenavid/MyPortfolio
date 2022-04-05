import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../../util/styles'
import { Skill } from './styles'

export const Skills = ({ data: { word, data } }) => (
  <section id={word}>
    <Title>{word}</Title>
    {data.map(skill => <Skill key={skill}>{skill}</Skill>)}
  </section>
)

Skills.propTypes = {
  data: PropTypes.object
}
