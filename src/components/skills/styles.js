import styled from 'styled-components'

export const Skill = styled.span`
  & {
    display: inline-block;
  }

  ::before {
    content: '•';
    margin: 0 5px;
    font-weight: 900;
  }
`
