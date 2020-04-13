import styled from 'styled-components'

export const StudyDiv = styled.div`
  align-items: center;
  animation: fadeIn 2s;
  display: flex;
  width: 100%;
`

export const A = styled.a`
  margin-bottom: 15px;
  width: 100%;
  @media (min-width: 1024px) {
    width: calc(50% - 7.5px);
  }
`

export const Image = styled.img`
  width: 80px;
`

export const Description = styled.div`
  padding-left: 15px;
  & > h3,
  & > h4 {
    margin: 0;
  }
`
