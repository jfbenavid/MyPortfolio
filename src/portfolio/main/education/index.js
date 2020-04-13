import React from 'react'
import { Study } from './study'
import { Section, AllStudies } from './styles'
import { useInstersectionToShow } from 'hooks'

export const Education = ({ data }) => {
  const [show, element] = useInstersectionToShow()

  return (
    <Section ref={element}>
      {show && (
        <>
          <h2>{data.get('educationDescription')}</h2>
          <AllStudies>
            {data.get('educations').map(item => {
              return <Study key={item.get('id')} data={item} />
            })}
          </AllStudies>
        </>
      )}
    </Section>
  )
}
