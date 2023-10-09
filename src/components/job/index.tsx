import { Article, Title, Ul, Li, Span, Container } from './styles'
import { useIntersectionToShow } from 'hooks'
import { experience } from 'types'

type jobProps = experience & {
  responsibilityText: string
  achievementsText: string
}

export const Job = ({
  title, company, time, responsibilities, achievements, responsibilityText, achievementsText
}: jobProps) => {
  const [show, element] = useIntersectionToShow()

  return (
    <Article ref={element}>
      {show && (
        <Container>
          <Title>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <h5>{time}</h5>
          </Title>
          <Span>{responsibilityText}</Span>
          <Ul>
            {responsibilities.map(description => (
              <Li key={description}>{description}</Li>
            ))}
          </Ul>
          <Span>{achievementsText}</Span>
          <Ul>
            {achievements.map(description => (
              <Li key={description}>{description}</Li>
            ))}
          </Ul>
        </Container>
      )}
    </Article>
  )
}
