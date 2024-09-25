import { createSlice } from '@reduxjs/toolkit';
import { usersInitialState } from './usersInitialState';
import { getAllUsersAPI, addUser } from './usersApi';
import {
  handlePending,
  handleFulfilled,
  AddHandleFulfilled,
  handleRejected,
} from './usersHandlers';

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState.users,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAPI.pending, handlePending)
      .addCase(getAllUsersAPI.fulfilled, handleFulfilled)
      .addCase(getAllUsersAPI.rejected, handleRejected)

      .addCase(addUser.pending, handlePending)
      .addCase(addUser.fulfilled, AddHandleFulfilled)
      .addCase(addUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
