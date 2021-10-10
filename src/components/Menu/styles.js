import styled from 'styled-components'

export const Nav = styled.div`     
  display: flex;
  justify-content: space-between;  
`;

export const NavOptions = styled.ul`
  padding-inline-start: 0px;
  list-style: none;    
  display: block;    
  letter-spacing: 1px;
  line-height: 2.5;
  text-transform: uppercase;
  font-size: .9rem;
`;

export const NavItem = styled.li`
  font-size: 1.0em;
  display: inline-block;
  margin: 0px 10px;
  cursor: pointer;
`;