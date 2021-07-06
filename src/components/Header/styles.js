import { Grid } from '@material-ui/core';
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-height: 100px;
  }
`;

export const Brand = styled.h1`
  text-align: left;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 4px;
  line-height: 1.5;
  font-size: 2.5rem;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    text-align: center;
  }
`;

export const LogoImage = styled.img`
  max-width: 80%;
`;

export const GridNav = styled(Grid)`
  display: flex;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    justify-content: space-between
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column-reverse;
    align-items: center
  }
`;