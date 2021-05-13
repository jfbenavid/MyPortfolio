import React from 'react'
import { Skill } from './styles'

export const Skills = ({ data }) => (
  <section>
    <h2>{data.get('word')}</h2>
    {data.get('data').map(skill => <Skill key={skill}>{skill}</Skill>)}
  </section>
)
