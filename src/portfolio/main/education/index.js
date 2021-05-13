import React from 'react'
import { Study } from './study'
import { Section, AllStudies } from './styles'
import { useIntersectionToShow } from 'hooks'

export const Education = ({ data }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <Section ref={element}>
      {show && (
        <>
          <h2>{data.get('word')}</h2>
          <AllStudies>
            {data.get('data').map(item => {
              return <Study key={item} data={item} />
            })}
          </AllStudies>
        </>
      )}
    </Section>
  )
}
