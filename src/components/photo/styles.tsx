import styled from 'styled-components'

export const ImageDiv = styled.div`
  align-items: center;
  background-color: ${p => p.theme.background.main};
  border-radius: 50%;
  display: flex;
  height: calc(100vw - 40px);
  justify-content: center;
  max-height: 487px;
  max-width: 487px;
  width: calc(100vw - 40px);

  @media (min-width: 769px) {
    height: 40vw;
    max-height: 380px;
    max-width: 380px;
    width: 40vw;
  }

  & > div {
    align-items: center;
    background-color: ${p => p.theme.background.second};
    border-radius: 50%;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;

    & > figure {
      border-radius: 50%;
      height: calc(100% - 25px);
      margin: 0;
      overflow: hidden;
      width: calc(100% - 25px);

      & > img {
        width: 100%;
      }
    }
  }
`
