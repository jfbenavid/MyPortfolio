import styled from 'styled-components'

export const StyledInfo = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const H1 = styled.h1`
  font-size: 2em;
  margin: 0;
  text-align: center;
`

export const H3 = styled.h3`
  font-size: 1.17em;
  margin: 0;
  text-align: center;
  font-family: 'Montserrat', 'system-ui';
  margin: 5px 0;
`

export const A = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  & > span {
    display: flex;
    align-items: center;
  }
  & > span > svg {
    margin-right: 8px;
  }
`

export const SocialNetwork = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  & > a {
    font-size: 2em;
  }
`
