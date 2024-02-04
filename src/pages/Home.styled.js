import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 80px 102px;
`;

export const HomeImg = styled.img`
  width: 590px;
  height: 400px;
  margin-right: 20px;
`;

export const HomeDescription = styled.p`
  color: var(--secondary-text-color);
  font-size: 1.2em;
  margin: 20px 0;
`;

export const ServicesList = styled.ul`
  padding: 0;
  margin: 20px 0;
`;

export const ServiceItem = styled.li`
  color: var(--main-text-color);
  font-size: 1.1em;
  font-weight: 500;
`;

export const HomeSubTitle = styled.h3`
  font-size: 30px;
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const HomeDescriptionWrap = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;
