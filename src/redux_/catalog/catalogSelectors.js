export const selectCatalog = state => state.catalog.items;
export const selectAmount = state => state.catalog.items.length;

export const selectMakes = state => state.catalog.makes;

export const selectIsLoading = state => state.catalog.isLoading;
