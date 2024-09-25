import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './events/eventsSlice';
import { usersReducer } from './users/usersSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    users: usersReducer,
  },
});
