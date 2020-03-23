import React from 'react'
import { Jobs } from './styles'
import { Job } from './job'

export const Experience = props => (
  <>
    <h2>{props.experienceDescription}</h2>
    <Jobs>
      {props.jobs.map(x => (
        <Job
          key={x.id}
          functionDescription={props.functionDescription}
          achievementsDescription={props.achievementsDescription}
          {...x}
        />
      ))}
    </Jobs>
  </>
)
