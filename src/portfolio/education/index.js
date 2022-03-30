import React from 'react'
import { Study } from '../study'
import { Section } from './styles'
import { useIntersectionToShow } from 'hooks'
import PropTypes from 'prop-types'

export const Education = ({ data: { word, data } }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <Section ref={element}>
      {show && (
        <>
          <h2>{word}</h2>
          <div>
            {data.map((item, index) => (
              <Study key={index} data={item} />
            ))}
          </div>
        </>
      )}
    </Section>
  )
}

Education.propTypes = {
  data: PropTypes.object
}
