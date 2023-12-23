import { ContainerDiv } from './styles'
import { hasChildren } from 'types'

export const Home = ({ children }: hasChildren) => {
  return (
    <ContainerDiv id="home">
      {children}
    </ContainerDiv>
  )
}
