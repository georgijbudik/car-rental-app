import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  height: 50px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: var(--white-color);
  margin-bottom: 14px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: var(--button-color);
`;

export const StyledHomeLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
});
