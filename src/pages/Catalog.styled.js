import styled from '@emotion/styled';

export const CatalogContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const LoadMoreButton = styled.button`
  color: var(--button-color);

  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  background-color: transparent;
  padding: 12px;
`;

export const CatalogWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
`;
