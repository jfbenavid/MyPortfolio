import styled from 'styled-components'

export const Article = styled.article`
  background-color: rgba(0, 0, 0, .025);
  border-radius: 3px;
  box-sizing: border-box;
  margin-bottom: 15px;
  padding: 8px;
  width: 100%;
  @media (min-width: 1440px) {
    width: calc(50% - 7.5px);
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
  min-height: 65px;
  & > h3,
  & > h4,
  & > h5 {
    margin: 0;
  }
`

export const Ul = styled.ul`
  margin: 7px 0;
  padding-left: 20px;
`

export const Li = styled.li`
  text-align: justify;
`

export const Span = styled.span`
  font-weight: 500;
  &::after {
    content: ':';
  }
`

export const Container = styled.div`
  animation: fadeIn 2s;
`
