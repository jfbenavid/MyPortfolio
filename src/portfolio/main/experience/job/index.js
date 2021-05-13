import React from 'react'
import { Article, Title, Ul, Li, Span, Container } from './styles'
import { useIntersectionToShow } from 'hooks'

export const Job = ({ data, functionDescription, achievementsDescription }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <Article ref={element}>
      {show && (
        <Container>
          <Title>
            <h3>{data.get('jobTitle')}</h3>
            <h4>{data.get('company')}</h4>
            <h5>{data.get('time')}</h5>
          </Title>
          <Span>{functionDescription}</Span>
          <Ul>
            {data.get('jobFunctions').map(description => (
              <Li key={description}>{description}</Li>
            ))}
          </Ul>
          <Span>{achievementsDescription}</Span>
          <Ul>
            {data.get('jobAchievements').map(description => (
              <Li key={description}>{description}</Li>
            ))}
          </Ul>
        </Container>
      )}
    </Article>
  )
}
