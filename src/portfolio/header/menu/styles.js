import styled from 'styled-components'

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
`

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 5px 10px;
  padding: 0;
`

export const Li = styled.li`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: inline-flex;
  list-style-type: none;
`

export const Link = styled.a`
  align-items: center;
  display: flex;
  padding: 8px;
  & > svg {
    margin-right: 8px;
  }
`
