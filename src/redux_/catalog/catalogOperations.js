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
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
