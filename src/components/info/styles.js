import styled from 'styled-components'

export const StyledInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;

  & > h1 {
    font-size: 4em;
    margin: 0;
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 150px;
    & > a {
      font-size: 3em;

      &:hover {
        color: #161b22;
      }
    }
  }
`
