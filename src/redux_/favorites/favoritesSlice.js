import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setAddFavorite(state, action) {
      state.favorites.push(action.payload);
    },

    setRemoveFavorite(state, action) {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { setAddFavorite, setRemoveFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
