import styled from 'styled-components'

export const ContainerDiv = styled.div`
  align-items: center;
  background-color: ${p => p.theme.header};
  box-sizing: border-box;
  color: ${p => p.theme.background.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 58px);
  padding: 3rem 5px 1rem;
`
