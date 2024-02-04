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
} from './Filters.styled';
import Select from 'react-select';
import { selectMakes } from 'redux_/catalog/catalogSelectors';
import { stylesCarBrand, stylesPriceRange } from './selectStyles/styles';
import { fetchCatalog } from 'redux_/catalog/catalogOperations';
import { clearCatalog } from 'redux_/catalog/catalogSlice';
import { setFilter } from 'redux_/filter/filterSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Filters = () => {
  const makes = useSelector(selectMakes);

  const dispatch = useDispatch();
  const makeOptions = makes.map(make => ({ value: make, label: make }));
  const priceRangeOptions = [];

  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handleSubmit = e => {
    e.preventDefault();

    const { make, rentalPrice, mileageFrom, mileageTo } = e.target.elements;

    if (
      !make.value &&
      !rentalPrice.value &&
      !mileageFrom.value &&
      !mileageTo.value
    ) {
      return toast.info('Select filters', { autoClose: 2000 });
    }
    const mileageFromNumber = Number(mileageFrom.value);
    const mileageToNumber = Number(mileageTo.value);

    if (mileageFromNumber < 0 || mileageToNumber < 0) {
      return toast.info('Number must be greater than 0', { autoClose: 2000 });
    }

    if (mileageFromNumber > mileageToNumber && mileageToNumber !== 0) {
      return toast.info(
        'Minimum mileage cannot be greater than maximum mileage'
      );
    }

    const carBrand = make.value === 'all' ? '' : make.value;

    const filters = {
      make: carBrand,
      rentalPrice: Number(rentalPrice.value),
      mileageFrom: mileageFromNumber,
      mileageTo: mileageToNumber,
    };
    dispatch(clearCatalog());
    dispatch(fetchCatalog({ page: 1, limit: 32 }));
    dispatch(setFilter(filters));
  };

  return (
    <FiltersContainer>
      <StyledForm onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <StyledLabel htmlFor="carBrand">Car brand</StyledLabel>
            <div>
              <Select
                id="carBrand"
                name="make"
                placeholder="Enter the text"
                options={[{ value: 'all', label: 'All' }, ...makeOptions]}
                isClearable
                styles={{ ...stylesCarBrand }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          </div>
          <SelectContainer>
            <SelectWrap>
              <StyledLabel htmlFor="price">Price / 1 hour</StyledLabel>
              <Select
                id="price"
                placeholder="To $"
                options={[{ value: 'all', label: 'All' }, ...priceRangeOptions]}
                isClearable
                styles={{
                  ...stylesPriceRange,
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                name="rentalPrice"
              />
            </SelectWrap>
            <SelectWrap>
              <StyledLabel htmlFor="mileage">Сar mileage / km</StyledLabel>
              <InputContainer>
                <InputLeft type="text" id="mileage" name="mileageFrom" />
                <SpanLeft>From</SpanLeft>
                <InputRight type="text" id="mileage" name="mileageTo" />
                <SpanRight>To</SpanRight>
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
