import styled from 'styled-components';

export const CardWrapper = styled.div``;

export const CardImg = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const DescriptionWrap = styled.div`
  padding: 14px 0 28px 0;
`;

export const CardButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-family: inherit;
  background-color: var(--button-color);
  color: var(--white-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 auto;
`;

export const CardTitle = styled.h2`
  color: var(--main-text-color);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CardDescriptionSpan = styled.span`
  color: var(--button-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
