import styled from 'styled-components'

export const Ul = styled.ul`
  background-color: rgba(0, 0, 0, .025);
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 7px 10px;

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }

  & > li {
    align-items: center;
    border-radius: 3px;
    display: block;
    font-size: 1em;
    list-style-type: none;
    margin: 0 5px;

    &:not(.burger):after {
      display: block;
      content: '';
      border-bottom: solid 3px black;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover:after{
      transform: scaleX(1);
    }
  }

  & > li > a {
    align-items: center;
    display: flex;
    padding: 8px;
    text-transform: uppercase;

    & > svg {
      margin-right: 8px;
    }
  }
`
