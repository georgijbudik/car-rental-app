import styled from 'styled-components';

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

export const StyledInput = styled.input`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #f7f7fb;

  color: #121417;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledSelect = styled.select`
  display: flex;
  width: 125px;
  padding: 14px 18px;
  align-items: flex-start;
  border-radius: 14px;
  background: #f7f7fb;

  color: #121417;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledSecondInput = styled.input`
  width: 160px;
  padding: 14px 14px 14px 24px;
  align-items: center;
  border-radius: 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background: #f7f7fb;
`;

export const InputContainer = styled.div``;

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
`;

export const SelectContainer = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 18px;
  }
`;
