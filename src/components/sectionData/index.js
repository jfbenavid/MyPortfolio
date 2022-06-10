import React from 'react'
import propTypes from 'prop-types'
import { StyledSection } from './styles'
import { useIntersectionToShow } from 'hooks'

export const Section = ({ word, children }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <StyledSection id={word} ref={element}>
      {show && (
        <>
          <h2>{word}</h2>
          {children}
        </>
      )}
    </StyledSection>
  )
}

Section.propTypes = {
  word: propTypes.string,
  children: propTypes.element
}
