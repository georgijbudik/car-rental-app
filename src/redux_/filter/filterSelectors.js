import { createSelector } from '@reduxjs/toolkit';
import { selectCatalog } from 'redux_/catalog/catalogSelectors';

export const selectFilter = state => state.filter;

export const selectFilteredCatalog = createSelector(
  [selectCatalog, selectFilter],
  (cars, { make, mileageFrom, mileageTo, rentalPrice }) => {
    let filteredArr = [];

    filteredArr = cars.filter(car =>
      car.make.toLowerCase().includes(make.toLowerCase())
    );
    if (rentalPrice > 0) {
      filteredArr = filteredArr.filter(car => {
        const normalizedRentalPrice = Number(car.rentalPrice.split('$')[1]);
        return rentalPrice === normalizedRentalPrice;
      });
    }

    if (mileageFrom > 0 && mileageTo === 0) {
      filteredArr = filteredArr.filter(car => car.mileage >= mileageFrom);
    }

    if (mileageFrom > 0 && mileageTo > 0) {
      filteredArr = filteredArr.filter(
        car => car.mileage >= mileageFrom && car.mileage <= mileageTo
      );
    }

    if (mileageFrom === 0 && mileageTo > 0) {
      filteredArr = filteredArr.filter(car => car.mileage <= mileageTo);
    }
    return filteredArr;
  }
);
