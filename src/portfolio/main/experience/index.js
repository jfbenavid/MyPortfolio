import React from 'react'
import { Jobs } from './styles'
import { Job } from './job'

export const Experience = ({ data }) => (
  <section>
    <h2>{data.get('experienceWord')}</h2>
    <Jobs>
      {data.get('data').map(x => (
        <Job
          key={x}
          functionDescription={data.get('functionWord')}
          achievementsDescription={data.get('achievementWord')}
          data={x}
        />
      ))}
    </Jobs>
  </section>
)
