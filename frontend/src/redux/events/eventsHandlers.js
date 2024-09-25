export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.events = payload;
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
};
