import React from 'react'
import { Study } from './study'
import { Section, AllStudies } from './styles'
import { useIntersectionToShow } from 'hooks'
import PropTypes from 'prop-types'

export const Education = ({ data: { word, data } }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <Section ref={element}>
      {show && (
        <>
          <h2>{word}</h2>
          <AllStudies>
            {data.map(item => {
              return <Study key={item} data={item} />
            })}
          </AllStudies>
        </>
      )}
    </Section>
  )
}

Education.propTypes = {
  data: PropTypes.object
}
