import React from 'react'
import { Study } from './study'

export const Education = props => (
  <section>
    <h2>{props.educationDescription}</h2>
    <div>
      {props.educations.map(item => {
        return <Study key={item.id} {...item} />
      })}
    </div>
  </section>
)
