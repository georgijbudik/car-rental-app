import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  height: 50px;
  border-radius: 4px;

  display: flex;

  align-items: center;
  padding: 16px 205px;
  background-color: white;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

export const LogoWrap = styled.div`
  display: flex;
  padding-right: 240px;
  align-items: center;
`;

export const LogoTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: var(--button-color);
`;
