import { StyledSection } from './styles'
import { useIntersectionToShow } from 'hooks'
import { ReactNode } from 'react'

type sectionProps = {
  children: ReactNode
  title: string
}

export const Section = ({ title, children }: sectionProps) => {
  const [show, element] = useIntersectionToShow()

  return (
    <StyledSection id={title} ref={element}>
      {show && (
        <>
          <h2>{title}</h2>
          {children}
        </>
      )}
    </StyledSection>
  )
}
