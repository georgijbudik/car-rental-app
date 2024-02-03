import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > div {
    > div:first-child {
      margin-right: 18px;
    }
  }
`;

export const StyledLabel = styled.label`
  display: block;
  color: #8a8a89;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FiltersContainer = styled.div`
  padding-bottom: 50px;
  margin: 0 auto;
`;

export const StyledInput = styled.input``;

export const StyledSecondInput = styled.input`
  width: 160px;
  padding: 14px 14px 14px 24px;
  align-items: center;
  border-radius: 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background: #f7f7fb;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;

export const StyledButton = styled.button`
  display: flex;
  margin-top: 24px;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: var(--button-color);
  color: var(--white-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  margin-left: 18px;
  font-family: inherit;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
  }
`;

export const SelectContainer = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 18px;
  }
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;

  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;

  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
`;

export const SpanLeft = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  line-height: 20px; /* 111.111% */
  font-weight: 500;
`;

export const SpanRight = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  font-weight: 500;
`;
