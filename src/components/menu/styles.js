import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${p => p.theme.background.second};
  text-transform: uppercase;

  & > ul {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    margin: 0;
    padding: 5px;

    @media (min-width: 769px) {
      & > li:nth-child(2) {
        display: none;
      }
    }
  }

  li {
    align-items: center;
    border-radius: 3px;
    font-size: .8em;
    list-style-type: none;
    margin: 0 5px;

    & > a {
      align-items: center;
      display: flex;
      padding: 8px;

      & > svg {
        margin-right: 8px;
      }
    }
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  flex-direction: column-reverse;
  justify-content: flex-end;
  margin-block-start: 0;
  margin-block-end: 0;
  background-color: ${p => p.theme.background.main};
  position: fixed;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  padding: 0;
  transition: transform 0.3s ease-in-out;

  & > li {
    padding: 10px 5px;

    &:last-child {
      align-self: flex-end;
      padding: 0;
    }

    &:not(:last-child):after {
      display: block;
      content: '';
      box-shadow: 0 0 0 1px black;
      transform: scaleX(0);
      transition: transform 500ms ease-in-out;
    }

    &:hover:after{
      transform: scaleX(1);
    }
  }

  @media (min-width: 769px) {
    background-color: unset;
    flex-flow: row nowrap;
    flex-direction: row-reverse;
    transform: unset;
    margin: 0;
    position: initial;
    top: auto;
    right: auto;
    height: auto;
    width: auto;
  }
`
