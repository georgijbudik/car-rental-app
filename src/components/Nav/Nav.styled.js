import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  padding: 12px 26px;
  font-weight: 700;
  background-color: var(--button-color);
  color: var(--white-color);
  border-radius: 8px;
  transition: var(--transition);
  &:hover {
    background-color: var(--accent-color);
  }
  &.active {
    background-color: var(--white-color);
    color: var(--accent-color);
    border: 2px solid var(--button-color);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 46px;
`;
