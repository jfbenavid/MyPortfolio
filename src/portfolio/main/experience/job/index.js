import React from 'react'
import { Article, Title, Ul, Li, Span } from './styles'

export const Job = props => (
  <Article>
    <Title>
      <h3>{props.jobTitle}</h3>
      <h4>{props.company}</h4>
      <h5>{props.time}</h5>
    </Title>
    <Span>{props.functionDescription}</Span>
    <Ul>
      {props.jobFunctions.map(x => (
        <Li key={x.id}>{x.description}</Li>
      ))}
    </Ul>
    <Span>{props.achievementsDescription}</Span>
    <Ul>
      {props.jobAchievements.map(x => (
        <Li key={x.id}>{x.description}</Li>
      ))}
    </Ul>
  </Article>
)
