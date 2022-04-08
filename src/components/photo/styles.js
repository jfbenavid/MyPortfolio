import styled from 'styled-components'

export const ImageDiv = styled.div`
  align-items: center;
  background-color: ${p => p.theme.background.main};
  border-radius: 50%;
  display: flex;
  height: calc(100vw - 40px);
  justify-content: center;
  width: calc(100vw - 40px);

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
      height: calc(100% - 10px);
      margin: 0;
      overflow: hidden;
      width: calc(100% - 10px);

      & > img {
        width: 100%;
      }
    }
  }
`
