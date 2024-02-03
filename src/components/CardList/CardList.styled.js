import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & :nth-child(4n) {
    margin-right: 0;
  }

  & :nth-last-child(-n + 4) {
    margin-bottom: 0;
  }
`;

export const StyledItem = styled.li`
  height: 426px;
  width: 274px;
  margin-right: 29px;
  margin-bottom: 50px;
`;
