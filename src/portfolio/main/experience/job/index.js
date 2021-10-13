import React from 'react'
import PropTypes from 'prop-types'

import { Article, Title, Ul, Li, Span, Container } from './styles'
import { useIntersectionToShow } from 'hooks'

export const Job = ({
  data: { jobTitle, company, time, jobFunctions, jobAchievements },
  functionDescription,
  achievementsDescription
}) => {
  const [show, element] = useIntersectionToShow()

  return (
    <Article ref={element}>
      {show && (
        <Container>
          <Title>
            <h3>{jobTitle}</h3>
            <h4>{company}</h4>
            <h5>{time}</h5>
          </Title>
          <Span>{functionDescription}</Span>
          <Ul>
            {jobFunctions.map(description => (
              <Li key={description}>{description}</Li>
            ))}
          </Ul>
          <Span>{achievementsDescription}</Span>
          <Ul>
            {jobAchievements.map(description => (
              <Li key={description}>{description}</Li>
            ))}
          </Ul>
        </Container>
      )}
    </Article>
  )
}

Job.propTypes = {
  data: PropTypes.object,
  functionDescription: PropTypes.string,
  achievementsDescription: PropTypes.string
}
