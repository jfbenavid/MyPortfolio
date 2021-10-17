import styled from 'styled-components'

export const A = styled.a`
  margin-bottom: 15px;
  width: 100%;
  @media (min-width: 768px) {
    width: calc(50% - 7.5px);
  }

  @media (min-width: 1024px) {
    width: calc(33.33% - 7.5px);
  }

  & > div {
    align-items: center;
    animation: fadeIn 2s;
    display: flex;
    width: 100%;

    & > img {
      width: 80px;
    }

    & > div {
      padding-left: 15px;
      & > h3,
      & > h4 {
        margin: 0;
      }
    }
  }
`
