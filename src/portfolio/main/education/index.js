import React from 'react'
import { Study } from './study'
import { AllStudies } from './styles'

export const Education = props => (
  <section>
    <h2>{props.educationDescription}</h2>
    <AllStudies>
      {props.educations.map(item => {
        return <Study key={item.id} {...item} />
      })}
    </AllStudies>
  </section>
)
