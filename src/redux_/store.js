import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/catalogSlice';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import { favoritesReducer } from './favorites/favoritesSlice';
import { filterReducer } from './filter/filterSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  version: 1,
  storage,
  whitelist: ['favorites'],
};

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
