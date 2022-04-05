import React from 'react'

import { Title } from '../../util/styles'
import { Study } from '../study'
import { Section } from './styles'
import { useIntersectionToShow } from 'hooks'
import propTypes from 'prop-types'

export const Education = ({ data: { word, data } }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <Section id={`${word}`} ref={element}>
      {show && (
        <>
          <Title>{word}</Title>
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
  data: propTypes.object
}
