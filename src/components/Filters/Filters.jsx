import {
  FiltersContainer,
  InputContainer,
  SelectContainer,
  SelectWrap,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSecondInput,
  StyledSelect,
} from './Filters.styled';

const Filters = () => {
  return (
    <FiltersContainer>
      <StyledForm>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InputContainer>
            <StyledLabel htmlFor="car-brand">Car brand</StyledLabel>
            <div>
              <StyledInput
                type="text"
                id="car-brand"
                placeholder="Enter the text"
              />
            </div>
          </InputContainer>
          <SelectContainer>
            <SelectWrap>
              <StyledLabel htmlFor="price">Price / 1 hour</StyledLabel>
              <StyledSelect id="price">
                <option value="To $">To $</option>
              </StyledSelect>
            </SelectWrap>
            <SelectWrap>
              <StyledLabel htmlFor="mileage">Сar mileage / km</StyledLabel>
              <InputContainer>
                <StyledSecondInput type="text" id="mileage" />
                <StyledSecondInput type="text" id="mileage" />
              </InputContainer>
            </SelectWrap>
            <StyledButton type="submit">Search</StyledButton>
          </SelectContainer>
        </div>
      </StyledForm>
    </FiltersContainer>
  );
};

export default Filters;
