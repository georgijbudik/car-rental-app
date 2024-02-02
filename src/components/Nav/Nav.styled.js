import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  padding: 12px 26px;
  background-color: var(--button-color);
  color: var(--white-color);
  border-radius: 8px;
  &:hover {
    background-color: var(--accent-color);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  margin: 0 auto;
`;
