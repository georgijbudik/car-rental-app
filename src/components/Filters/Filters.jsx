import { useDispatch, useSelector } from 'react-redux';
import {
  FiltersContainer,
  InputContainer,
  InputLeft,
  InputRight,
  SelectContainer,
  SelectWrap,
  SpanLeft,
  SpanRight,
  StyledButton,
  StyledForm,
  StyledLabel,
  StyledSecondInput,
} from './Filters.styled';
import Select from 'react-select';
import { selectMakes } from 'redux_/catalog/catalogSelectors';
import { stylesCarBrand, stylesPriceRange } from './selectStyles/styles';
import { useState } from 'react';
import { fetchCatalog } from 'redux_/catalog/catalogOperations';

const Filters = () => {
  const makes = useSelector(selectMakes);
  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({
    make: '',
    price: null,
    mileageFrom: '',
    mileageTo: '',
  });
  console.log(filterParams);

  const makeOptions = makes.map(make => ({ value: make, label: make }));

  const selectedCarBrand = filterParams.carBrand
    ? filterParams.carBrand.value
    : null;
  const selectedPrice = filterParams.price ? filterParams.price.value : null;
  const priceRangeOptions = [];

  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handleInputChange = (field, value) => {
    setFilterParams({ ...filterParams, [field]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      fetchCatalog({
        carBrand: selectedCarBrand,
        price: selectedPrice,
        mileageFrom: filterParams.mileageFrom,
        mileageTo: filterParams.mileageTo,
        page: 1,
      })
    );
  };

  return (
    <FiltersContainer>
      <StyledForm>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <StyledLabel htmlFor="carBrand">Car brand</StyledLabel>
            <div>
              <Select
                id="carBrand"
                placeholder="Enter the text"
                options={makeOptions}
                isClearable
                styles={{ ...stylesCarBrand }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                onChange={selectedOption =>
                  handleInputChange('carBrand', selectedOption)
                }
              />
            </div>
          </div>
          <SelectContainer>
            <SelectWrap>
              <StyledLabel htmlFor="price">Price / 1 hour</StyledLabel>
              <Select
                id="price"
                placeholder="To $"
                options={priceRangeOptions}
                isClearable
                styles={{
                  ...stylesPriceRange,
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                onChange={selectedOption =>
                  handleInputChange('price', selectedOption)
                }
              />
            </SelectWrap>
            <SelectWrap>
              <StyledLabel htmlFor="mileage">Сar mileage / km</StyledLabel>
              <InputContainer>
                <InputLeft
                  type="text"
                  id="mileage"
                  value={filterParams.mileageFrom}
                  onChange={e =>
                    handleInputChange('mileageFrom', e.target.value)
                  }
                />
                <SpanLeft>From</SpanLeft>
                <InputRight
                  type="text"
                  id="mileage"
                  value={filterParams.mileageTo}
                  onChange={e => handleInputChange('mileageTo', e.target.value)}
                />
                <SpanRight>To</SpanRight>
              </InputContainer>
            </SelectWrap>
            <StyledButton type="submit" onClick={handleSubmit}>
              Search
            </StyledButton>
          </SelectContainer>
        </div>
      </StyledForm>
    </FiltersContainer>
  );
};

export default Filters;
