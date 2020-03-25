import React from 'react'
import { Study } from './study'
import { AllStudies } from './styles'

export const Education = ({ data }) => (
  <section>
    <h2>{data.get('educationDescription')}</h2>
    <AllStudies>
      {data.get('educations').map(item => {
        return <Study key={item.get('id')} data={item} />
      })}
    </AllStudies>
  </section>
)
