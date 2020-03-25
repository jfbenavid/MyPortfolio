import React from 'react'
import { Jobs } from './styles'
import { Job } from './job'

export const Experience = ({ data }) => (
  <section>
    <h2>{data.get('experienceDescription')}</h2>
    <Jobs>
      {data.get('jobs').map(x => (
        <Job
          key={x.get('id')}
          functionDescription={data.get('functionDescription')}
          achievementsDescription={data.get('achievementsDescription')}
          data={x}
        />
      ))}
    </Jobs>
  </section>
)
