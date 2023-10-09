import styled from 'styled-components'

export const StyledSection = styled.section`
  p {
    text-align: justify;
  }

  h2 {
    font-size: 1.1em;
    text-transform: uppercase;
  }

  span.skill {
    display: inline-block;

    &::before {
      content: '•';
      margin: 0 5px;
      font-weight: 900;
    }
  }

  .separated {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
