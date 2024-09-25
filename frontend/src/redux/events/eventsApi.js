import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://events-registration-app-backend-5ln1nvmdm-an-nettts-projects.vercel.app';

  // fetch(
  //   'https://events-registration-app-backend-5ln1nvmdm-an-nettts-projects.vercel.app/api/events'
  // )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then((data) => console.log(data))
  //   .catch((error) =>
  //     console.error('There was a problem with the fetch operation:', error)
  //   );

export const eventsAPI = createAsyncThunk(
  'events/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/events/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
