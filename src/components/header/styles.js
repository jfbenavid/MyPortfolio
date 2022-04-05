import styled from 'styled-components'

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${p => p.theme.header};
  color: ${p => p.theme.background};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 620px;
  padding: 8px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 35px 0;
  }

  @media (min-width: 1024px) {
    padding: 35px 10%;
  }

  @media (min-width: 1440px) {
    padding: 35px 20%;
  }
`
