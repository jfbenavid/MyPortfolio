import styled from 'styled-components'

export const StyledInfo = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: calc(100% - 220px);
  }

  & > h1 {
    font-size: 2em;
    margin: 0;
    text-align: center;
  }

  & > h3 {
    font-size: 1.17em;
    margin: 0;
    text-align: center;
    font-family: 'Montserrat', 'system-ui';
    margin: 5px 0;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100px;
    & > a {
      font-size: 2em;
    }
  }
`
