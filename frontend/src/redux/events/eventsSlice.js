import { createSlice } from '@reduxjs/toolkit';
import { eventsInitialState } from './eventsInitialState';
import { eventsAPI } from './eventsApi';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
} from '../events/eventsHandlers';

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(eventsAPI.pending, handlePending)
      .addCase(eventsAPI.fulfilled, handleFulfilled)
      .addCase(eventsAPI.rejected, handleRejected);
  },
});

export const eventsReducer = eventsSlice.reducer;
