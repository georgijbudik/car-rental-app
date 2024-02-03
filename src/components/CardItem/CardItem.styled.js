import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  position: relative;
`;

export const CardImg = styled.img`
  width: 274px;
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
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
  }
`;

export const CardTitle = styled.h2`
  color: var(--main-text-color);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CardTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardDescriptionSpan = styled.span`
  color: var(--button-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CardDescriptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 274px;
  height: 40px;
  margin-top: 8px;
  & > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;

export const CardDesctiptionText = styled.p`
  color: var(--secondary-text-color);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const CardPrice = styled.p`
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const CardHertIconWrap = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;
