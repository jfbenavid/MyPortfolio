import styled from 'styled-components'

export const ImageDiv = styled.div`
  padding: 10px;
  width: 200px;
  z-index: 1;

  & > figure {
    border-radius: 50%;
    height: 200px;
    margin: 0;
    overflow: hidden;
    width: 200px;

    & > img {
      width: 100%;
    }
  }
`
