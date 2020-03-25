import React from 'react'
import { Article, Title, Ul, Li, Span } from './styles'

export const Job = ({ data, functionDescription, achievementsDescription }) => (
  <Article>
    <Title>
      <h3>{data.get('jobTitle')}</h3>
      <h4>{data.get('company')}</h4>
      <h5>{data.get('time')}</h5>
    </Title>
    <Span>{functionDescription}</Span>
    <Ul>
      {data.get('jobFunctions').map(x => (
        <Li key={x.get('id')}>{x.get('description')}</Li>
      ))}
    </Ul>
    <Span>{achievementsDescription}</Span>
    <Ul>
      {data.get('jobAchievements').map(x => (
        <Li key={x.get('id')}>{x.get('description')}</Li>
      ))}
    </Ul>
  </Article>
)
