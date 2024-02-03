import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  padding: 12px 26px;
  background-color: var(--input-color);
  color: black;
  border-radius: 8px;
  transition: var(--transition);
  &:hover {
    background-color: var(--accent-color);
  }
  &.active {
    background-color: var(--accent-color);
    color: var(--white-color);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 46px;
  margin: 0 auto;
`;
