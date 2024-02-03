import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65ba50d5b4d53c0665529613.mockapi.io/api';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/adverts', {
        headers: { 'content-type': 'application/json' },
        params: {
          search: '',
          page: 1,
          limit: 12,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMakes = createAsyncThunk(
  'catalog/fetchMakes',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/makes', {
        headers: { 'content-type': 'application/json' },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
