import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './catalogOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCatalog.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchCatalog.rejected, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const catalogReducer = catalogSlice.reducer;
